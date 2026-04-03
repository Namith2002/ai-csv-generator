import { GoogleGenerativeAI } from '@google/generative-ai'

const getDatasetPrompt = ({
  projectTitle,
  description,
  datasetType,
  numRows,
  numColumns,
  customColumns
}) => {
  const columnNamesPart = customColumns
    ? `Use these column names: ${customColumns}`
    : `Generate ${numColumns} realistic and descriptive column names appropriate for a ${datasetType} dataset`

  const typeGuidance = {
    classification: 'This is a classification dataset. Include a target/label column with discrete categories.',
    regression: 'This is a regression dataset. Include a continuous numeric target variable.',
    nlp: 'This is an NLP/Text dataset. Include text columns with natural language content.',
    timeseries: 'This is a time series dataset. Include a timestamp column and numeric values across time.',
    recommendation: 'This is a recommendation system dataset. Include user IDs, item IDs, and ratings/preferences.',
    anomaly: 'This is an anomaly detection dataset. Include features with occasional unusual patterns.',
    general: 'This is a general-purpose dataset with mixed data types.'
  }

  return `Generate a high-quality synthetic dataset for a project titled: "${projectTitle}"

Project Description: ${description || 'Not provided'}

Dataset Specifications:
- Dataset Type: ${datasetType}
- Number of Rows: ${numRows}
- Number of Columns: ${numColumns}
${columnNamesPart}

Dataset Requirements:
${typeGuidance[datasetType] || typeGuidance.general}

Rules for Data Generation:
1. Output ONLY valid JSON format
2. Never include null values unless absolutely necessary (< 1%)
3. Ensure all values are realistic and meaningful
4. No duplicate rows - each row should be unique
5. Maintain logical consistency between columns (e.g., if age is in one column, related features should make sense)
6. Use appropriate data types (numbers, strings, booleans)
7. For numeric columns, use realistic ranges
8. For categorical columns, keep 2-10 distinct categories
9. If this is a classification dataset, ensure balanced or realistic class distribution
10. If this is a regression dataset, ensure continuous numeric values with logical patterns
11. Format dates consistently (YYYY-MM-DD if dates are used)
12. Ensure proper data quality - no formatting errors or typos

JSON Response Format (STRICTLY FOLLOW THIS):
{
  "columns": ["column1", "column2", "column3", ...],
  "data": [
    ["value1", "value2", "value3", ...],
    ["value1", "value2", "value3", ...],
    ... (${numRows} rows total)
  ]
}

Generate the dataset now. Ensure the JSON is valid and properly formatted. Return ONLY the JSON object, no explanations.`
}

export const generateDataset = async (config) => {
  try {
    // Get API key from environment or Firebase Secrets
    const apiKey = process.env.GEMINI_API_KEY
    
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured. Set it using: firebase functions:secrets:set GEMINI_API_KEY')
    }
    
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = getDatasetPrompt(config)

    const response = await model.generateContent(prompt)

    const text = response.response.text()

    // Parse JSON from response
    let dataset
    try {
      // Try to extract JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) {
        throw new Error('No JSON found in response')
      }
      dataset = JSON.parse(jsonMatch[0])
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', text)
      throw new Error('Invalid dataset format from AI. Please try again.')
    }

    // Validate dataset structure
    if (!dataset.columns || !Array.isArray(dataset.columns)) {
      throw new Error('Invalid dataset: missing or invalid columns')
    }

    if (!dataset.data || !Array.isArray(dataset.data)) {
      throw new Error('Invalid dataset: missing or invalid data')
    }

    // Ensure correct dimensions
    const actualRows = Math.min(dataset.data.length, config.numRows)
    const actualColumns = Math.min(dataset.columns.length, config.numColumns)

    return {
      columns: dataset.columns.slice(0, actualColumns),
      data: dataset.data.slice(0, actualRows).map(row => 
        row.slice(0, actualColumns)
      )
    }
  } catch (error) {
    console.error('Gemini API Error:', error)
    throw error
  }
}
