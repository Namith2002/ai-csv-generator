# Deploy Backend to Render (Free)

Your frontend is now live on Firebase Hosting! Now let's deploy your backend to Render.com (completely free).

## Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub (recommended) or email
3. Verify your account

## Step 2: Push Backend to GitHub

Create a GitHub repo and push your code:

```bash
# Initialize git in your project
cd c:\Users\namit\Desktop\Dataset_project
git init
git add .
git commit -m "Initial commit"

# Create a GitHub repo at https://github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/ai-csv-generator.git
git branch -M main
git push -u origin main
```

## Step 3: Create render.yaml

Create a file `render.yaml` in your project root:

```yaml
services:
  - type: web
    name: ai-csv-backend
    runtime: node
    plan: free
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
    envVars:
      - key: GEMINI_API_KEY
        value: AIzaSyCrf-YiklfZW2sO14pbDpI74m9cONX0uBI
      - key: FRONTEND_URL
        value: https://datahub-1234.web.app
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

## Step 4: Update Backend for Render

Update your `backend/server.js` to work with Render:

```javascript
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
    'https://datahub-1234.web.app',
    'https://datahub-1234.firebaseapp.com'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}))
app.use(bodyParser.json({ limit: '10mb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
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

    const dataset = await generateDataset({
      projectTitle,
      description,
      datasetType,
      numRows,
      numColumns,
      customColumns
    })

    const csv = convertToCSV(dataset)

    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', `attachment; filename="${projectTitle}.csv"`)
    res.send(csv)
  } catch (error) {
    console.error('Error generating dataset:', error)
    res.status(500).json({
      error: 'Failed to generate dataset',
      message: error.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

## Step 5: Deploy on Render

1. Go to https://render.com/dashboard
2. Click "New +" → "Web Service"
3. Select your GitHub repo
4. Pick the branch (main)
5. Fill in settings:
   - **Name:** ai-csv-backend
   - **Runtime:** Node
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** Free
6. Click "Create Web Service"

Render will deploy automatically!

## Step 6: Update Frontend API URL

Update your frontend to use the Render backend:

In `frontend/src/pages/Generate.jsx`, change:
```javascript
const response = await fetch('/api/generate-dataset', {
```

To:
```javascript
const response = await fetch('https://YOUR_RENDER_URL/generate-dataset', {
```

Replace `YOUR_RENDER_URL` with your Render service URL (shown in Render dashboard).

## Step 7: Redeploy Frontend

```bash
cd frontend
npm run build
cd ..
firebase deploy --only hosting
```

## Your Live URLs
- **Frontend:** https://datahub-1234.web.app
- **Backend API:** https://YOUR_RENDER_URL/generate-dataset

## Free Tier Limits
- Render free tier: 750 hours/month (always on)
- Auto-pauses after 15 minutes of inactivity
- Wakes up when you visit (5-30 second cold start)

**Total Cost: $0** 🎉

---

## Alternative: Upgrade to Firebase Blaze

If you want everything on Firebase:
1. Visit: https://console.firebase.google.com/project/datahub-1234/usage/details
2. Click "Upgrade to Blaze"
3. Add payment method (you only pay for what you use)
4. Run: `firebase deploy`

Free tier estimates: ~$0-5/month under normal usage.
