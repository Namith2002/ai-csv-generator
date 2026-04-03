import React from 'react'
import { toast } from 'react-hot-toast'

export default function Generate() {
  const [formData, setFormData] = React.useState({
    projectTitle: '',
    description: '',
    datasetType: 'classification',
    numRows: 100,
    numColumns: 5,
    customColumns: ''
  })

  const [loading, setLoading] = React.useState(false)
  const [dataset, setDataset] = React.useState(null)
  const [generatedData, setGeneratedData] = React.useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name.includes('Num') ? parseInt(value) : value
    }))
  }

  const handleGenerateDataset = async () => {
    if (!formData.projectTitle.trim()) {
      toast.error('Please enter a project title')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/generate-dataset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectTitle: formData.projectTitle,
          description: formData.description,
          datasetType: formData.datasetType,
          numRows: formData.numRows,
          numColumns: formData.numColumns,
          customColumns: formData.customColumns
        })
      })

      if (!response.ok) throw new Error('Failed to generate dataset')

      const data = await response.json()
      setGeneratedData(data.dataset)
      setDataset(data.csv)
      toast.success('Dataset generated successfully!')
    } catch (error) {
      toast.error(`Error: ${error.message}`)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (!dataset) {
      toast.error('No dataset to download')
      return
    }

    const element = document.createElement('a')
    const file = new Blob([dataset], { type: 'text/csv' })
    element.href = URL.createObjectURL(file)
    element.download = `${formData.projectTitle.toLowerCase().replace(/\s+/g, '_')}_dataset.csv`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success('Dataset downloaded!')
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 min-h-screen">
      <main className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Generate Dataset</h1>
          <p className="text-lg text-slate-600">Configure your dataset parameters and let AI create realistic synthetic data for your project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="animate-slideIn">
            <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Dataset Configuration</h2>

              <div className="space-y-5">
                {/* Project Title */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Customer Churn Prediction"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description (Optional)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your dataset requirements..."
                    rows="3"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Dataset Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Dataset Type
                  </label>
                  <select
                    name="datasetType"
                    value={formData.datasetType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="classification">Classification</option>
                    <option value="regression">Regression</option>
                    <option value="nlp">NLP/Text</option>
                    <option value="timeseries">Time Series</option>
                    <option value="recommendation">Recommendation</option>
                    <option value="anomaly">Anomaly Detection</option>
                    <option value="general">General Purpose</option>
                  </select>
                </div>

                {/* Number of Rows */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Rows: <span className="text-blue-600 font-semibold">{formData.numRows}</span>
                  </label>
                  <input
                    type="range"
                    name="numRows"
                    min="10"
                    max="5000"
                    step="10"
                    value={formData.numRows}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>10</span>
                    <span>5000</span>
                  </div>
                </div>

                {/* Number of Columns */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Columns: <span className="text-blue-600 font-semibold">{formData.numColumns}</span>
                  </label>
                  <input
                    type="range"
                    name="numColumns"
                    min="2"
                    max="20"
                    step="1"
                    value={formData.numColumns}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>2</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Custom Columns */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Column Names (Optional)
                  </label>
                  <input
                    type="text"
                    name="customColumns"
                    value={formData.customColumns}
                    onChange={handleInputChange}
                    placeholder="Comma-separated: col1, col2, col3"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateDataset}
                  disabled={loading}
                  className="w-full mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Generating...
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      Generate Dataset
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="animate-slideIn">
            {generatedData ? (
              <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-slate-900">Dataset Preview</h2>
                  <button
                    onClick={handleDownload}
                    disabled={!dataset}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
                  >
                    ⬇️ Download CSV
                  </button>
                </div>

                {/* Table Preview */}
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        {generatedData.columns.map((col) => (
                          <th
                            key={col}
                            className="px-4 py-3 text-left font-semibold text-slate-700"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {generatedData.data.slice(0, 10).map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                          {row.map((cell, cellIdx) => (
                            <td
                              key={cellIdx}
                              className="px-4 py-3 text-slate-700"
                            >
                              {String(cell).substring(0, 30)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-slate-700">
                    <strong>Total Rows:</strong> {generatedData.data.length} | 
                    <strong className="ml-4">Columns:</strong> {generatedData.columns.length} |
                    <strong className="ml-4">Preview:</strong> First 10 rows shown
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 border border-slate-200 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📋</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    No Dataset Generated Yet
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Configure the options on the left and click<br/>
                    <strong>"Generate Dataset"</strong> to create your data
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
