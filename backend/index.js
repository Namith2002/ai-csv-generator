import functions from 'firebase-functions';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import express from 'express';
import { generateDataset } from './services/geminiService.js';
import { convertToCSV } from './utils/csvUtils.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://datahub-1234.web.app',
    'https://datahub-1234.firebaseapp.com'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
app.use(bodyParser.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.'
});

app.use(limiter);

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'AI CSV Dataset Generator API',
    version: '1.0.0',
    docs: '/api/docs'
  });
});

app.post('/generate-dataset', async (req, res) => {
  try {
    const {
      projectTitle,
      description,
      datasetType,
      numRows,
      numColumns,
      customColumns
    } = req.body;

    const dataset = await generateDataset({
      projectTitle,
      description,
      datasetType,
      numRows,
      numColumns,
      customColumns
    });

    const csv = convertToCSV(dataset);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${projectTitle}.csv"`);
    res.send(csv);
  } catch (error) {
    console.error('Error generating dataset:', error);
    res.status(500).json({
      error: 'Failed to generate dataset',
      message: error.message
    });
  }
});

// Export the Express API as a Cloud Function
export const api = functions
  .region('us-central1')
  .https.onRequest(app);
