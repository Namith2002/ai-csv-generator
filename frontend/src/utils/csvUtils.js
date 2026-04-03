export const convertToCSV = (data) => {
  if (!data || !data.columns || !data.data) {
    return ''
  }

  const headers = data.columns
  const rows = data.data

  // Create header row
  const csv = [
    headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(','),
    ...rows.map(row =>
      row.map(cell => {
        const cellStr = String(cell).replace(/"/g, '""')
        return cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n')
          ? `"${cellStr}"`
          : cellStr
      }).join(',')
    )
  ].join('\n')

  return csv
}

export const downloadCSV = (csv, filename) => {
  const element = document.createElement('a')
  const file = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
