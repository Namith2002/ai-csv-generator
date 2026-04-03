export const convertToCSV = (data) => {
  if (!data || !data.columns || !data.data) {
    throw new Error('Invalid data structure')
  }

  const headers = data.columns
  const rows = data.data

  // Escape and quote CSV fields
  const escapeCSVField = (field) => {
    const fieldStr = String(field) || ''
    // If field contains comma, newline, or quotes, wrap in quotes and escape quotes
    if (fieldStr.includes(',') || fieldStr.includes('\n') || fieldStr.includes('"')) {
      return `"${fieldStr.replace(/"/g, '""')}"`
    }
    return fieldStr
  }

  // Create header row
  const headerRow = headers.map(escapeCSVField).join(',')

  // Create data rows
  const dataRows = rows.map(row =>
    row.map(cell => escapeCSVField(cell)).join(',')
  )

  // Combine with line breaks
  const csv = [headerRow, ...dataRows].join('\n')

  return csv
}

export const validateCSV = (csv) => {
  if (!csv || typeof csv !== 'string') {
    return false
  }
  
  const lines = csv.split('\n')
  return lines.length > 1 && lines[0].length > 0
}
