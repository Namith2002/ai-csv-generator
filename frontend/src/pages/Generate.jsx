import React from 'react'
import { toast } from 'react-hot-toast'
import { Sparkles, Download, Loader, Check } from 'lucide-react'

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
  const [preview, setPreview] = React.useState([])

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
      const response = await fetch('https://ai-csv-generator.onrender.com/generate-dataset', {
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
      
      // Show preview of first 5 rows
      if (data.dataset && data.dataset.data) {
        setPreview(data.dataset.data.slice(0, 5))
      }
      
      toast.success('✨ Dataset generated successfully!')
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
    toast.success('📥 Dataset downloaded!')
  }

  const datasetTypes = [
    { value: 'classification', icon: '🎯', label: 'Classification', desc: 'Categorical targets' },
    { value: 'regression', icon: '📈', label: 'Regression', desc: 'Continuous values' },
    { value: 'nlp', icon: '📝', label: 'NLP/Text', desc: 'Text data' },
    { value: 'timeseries', icon: '⏱️', label: 'Time Series', desc: 'Temporal data' },
    { value: 'recommendation', icon: '⭐', label: 'Recommendation', desc: 'User preferences' },
    { value: 'anomaly', icon: '🚨', label: 'Anomaly', desc: 'Outlier detection' },
    { value: 'general', icon: '📊', label: 'General', desc: 'Mixed data' }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-12">
      <main className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center animate-fadeIn">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h1 className="text-5xl font-bold text-white">Dataset Generator</h1>
            <Sparkles className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Create realistic synthetic datasets with AI. Configure your parameters and generate high-quality data in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 animate-slideInLeft">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-blue-400">⚙️</span> Configuration
              </h2>

              <div className="space-y-6">
                {/* Project Title */}
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    📋 Project Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Customer Churn Analysis"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    📝 Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your dataset requirements..."
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Dataset Type */}
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-4">
                    🎯 Dataset Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {datasetTypes.map(type => (
                      <button
                        key={type.value}
                        onClick={() => setFormData(prev => ({ ...prev, datasetType: type.value }))}
                        className={`p-3 rounded-lg border transition transform hover:scale-105 ${
                          formData.datasetType === type.value
                            ? 'bg-blue-500 border-blue-400 ring-2 ring-blue-300'
                            : 'bg-white/5 border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-2xl mb-1">{type.icon}</div>
                        <div className="text-xs font-semibold text-white">{type.label}</div>
                        <div className="text-xs text-blue-200">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Rows */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-blue-200">📊 Rows</label>
                    <span className="text-2xl font-bold text-blue-400">{formData.numRows}</span>
                  </div>
                  <input
                    type="range"
                    name="numRows"
                    min="10"
                    max="5000"
                    value={formData.numRows}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>10</span>
                    <span>5000</span>
                  </div>
                </div>

                {/* Number of Columns */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-blue-200">📋 Columns</label>
                    <span className="text-2xl font-bold text-blue-400">{formData.numColumns}</span>
                  </div>
                  <input
                    type="range"
                    name="numColumns"
                    min="2"
                    max="20"
                    value={formData.numColumns}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>2</span>
                    <span>20</span>
                  </div>
                </div>

                {/* Custom Columns */}
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    🏷️ Custom Column Names (Optional)
                  </label>
                  <input
                    type="text"
                    name="customColumns"
                    value={formData.customColumns}
                    onChange={handleInputChange}
                    placeholder="e.g., age, salary, department (comma-separated)"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateDataset}
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-slate-500 disabled:to-slate-600 text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Dataset
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Preview & Download Panel */}
          <div className="animate-slideInRight">
            {generatedData ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 sticky top-8">
                <div className="mb-6 flex items-center gap-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Success! 🎉</h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">{generatedData.columns?.length}</div>
                    <div className="text-xs text-slate-300 mt-1">Columns</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">{generatedData.data?.length}</div>
                    <div className="text-xs text-slate-300 mt-1">Rows</div>
                  </div>
                </div>

                {/* Preview Table */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-200 mb-3">📋 Preview</h4>
                  <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-white/10">
                            {generatedData.columns?.slice(0, 4).map((col, i) => (
                              <th key={i} className="px-3 py-2 text-left font-semibold text-blue-300">
                                {col}
                              </th>
                            ))}
                            {generatedData.columns?.length > 4 && (
                              <th className="px-3 py-2 text-left font-semibold text-blue-300">...</th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {preview.map((row, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                              {row.slice(0, 4).map((cell, j) => (
                                <td key={j} className="px-3 py-2 text-slate-300 truncate">
                                  {String(cell).substring(0, 12)}...
                                </td>
                              ))}
                              {generatedData.columns?.length > 4 && (
                                <td className="px-3 py-2 text-slate-400">...</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download CSV
                </button>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-lg font-bold text-white mb-2">Ready to Generate?</h3>
                  <p className="text-slate-300 text-sm">
                    Configure your dataset parameters on the left and click "Generate Dataset" to create your synthetic data.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-white mb-2">Lightning Fast</h4>
            <p className="text-slate-300 text-sm">Generate high-quality datasets in seconds</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="font-bold text-white mb-2">AI-Powered</h4>
            <p className="text-slate-300 text-sm">Powered by Google Gemini for realistic data</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="font-bold text-white mb-2">Secure & Private</h4>
            <p className="text-slate-300 text-sm">Your data is never stored on our servers</p>
          </div>
        </div>
      </main>
    </div>
  )
}
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
