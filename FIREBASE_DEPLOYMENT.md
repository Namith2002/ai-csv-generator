# Firebase Deployment Guide

## Prerequisites
- Node.js installed
- Firebase account (free tier available)
- Firebase CLI installed globally

## Step-by-Step Deployment Instructions

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Update configuration files
- Edit `.firebaserc` and replace `your-project-id` with your actual Firebase project ID
- Edit `backend/index.js` and update CORS origins with your Firebase URLs
- Edit `frontend/vite.config.js` to update API proxy for production

### 4. Install dependencies
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
```

### 5. Build frontend
```bash
cd frontend
npm run build
```

### 6. Update backend package.json
The `backend/package.json` needs to be updated with the main entry point:
```json
{
  "main": "index.js"
}
```

### 7. Update environment variables
- Create a `.env` file in the backend directory
- Add your Google Generative AI API key: `GOOGLE_API_KEY=your_api_key`
- Set up Firebase secrets: `firebase functions:secrets:set GOOGLE_API_KEY`

### 8. Deploy to Firebase
```bash
firebase deploy
```

This will:
- Deploy the frontend to Firebase Hosting
- Deploy the backend to Cloud Functions

### Important Notes

**CORS Configuration:**
After deployment, update the CORS origins in `backend/index.js` with your actual Firebase project URLs:
- `https://[PROJECT_ID].web.app`
- `https://[PROJECT_ID].firebaseapp.com`

**Environment Variables:**
- Store sensitive keys (API keys) in Firebase Secrets Manager
- Access them in Cloud Functions via `process.env.VARIABLE_NAME`

**Cost Considerations:**
- Firebase Hosting: Free tier includes 10 GB/month bandwidth
- Cloud Functions: Free tier includes 2 million invocations/month
- Always monitor your usage

## Troubleshooting

**Error: Functions exceeds maximum deployment size**
- Run `npm install` only (skip devDependencies with `--production`)

**CORS errors in production**
- Update the CORS origins array in `backend/index.js`
- Redeploy with `firebase deploy`

**API key not found**
- Set the secret: `firebase functions:secrets:set GOOGLE_API_KEY`
- Redeploy: `firebase deploy`
