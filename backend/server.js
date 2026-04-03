import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { generateDataset } from './services/geminiService.js'
import { convertToCSV } from './utils/csvUtils.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(helmet())
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://datahub-1234.web.app',
    'https://datahub-1234.firebaseapp.com',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}))
app.use(bodyParser.json({ limit: '10mb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
})

app.use(limiter)

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'AI CSV Dataset Generator API',
    version: '1.0.0',
    docs: '/api/docs'
  })
})

app.post('/generate-dataset', async (req, res) => {
  try {
    const {
      projectTitle,
      description,
      datasetType,
      numRows,
      numColumns,
      customColumns
    } = req.body

    // Validation
    if (!projectTitle || projectTitle.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Project title is required'
      })
    }

    if (numRows < 10 || numRows > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Number of rows must be between 10 and 5000'
      })
    }

    if (numColumns < 2 || numColumns > 20) {
      return res.status(400).json({
        success: false,
        error: 'Number of columns must be between 2 and 20'
      })
    }

    // Generate dataset using Gemini
    const dataset = await generateDataset({
      projectTitle: projectTitle.trim(),
      description: description || '',
      datasetType,
      numRows,
      numColumns,
      customColumns: customColumns || ''
    })

    // Convert to CSV
    const csv = convertToCSV(dataset)

    res.json({
      success: true,
      dataset,
      csv,
      message: 'Dataset generated successfully'
    })
  } catch (error) {
    console.error('Error generating dataset:', error)
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate dataset'
    })
  }
})

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  })
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
  console.log(`📝 Frontend should connect to http://localhost:${PORT}`)
})
