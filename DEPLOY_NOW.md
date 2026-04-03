# ✅ FIREBASE DEPLOYMENT QUICK START

## What's Been Set Up

Your project is configured for Firebase deployment with:
- ✅ Firebase Hosting for React frontend
- ✅ Cloud Functions for Express.js backend
- ✅ Automatic API routing from frontend to backend

---

## Step 1: Create Firebase Project (if you haven't already)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Enter project name (e.g., "ai-csv-generator")
4. Follow the setup wizard
5. Copy your **Project ID** (you'll need it in Step 3)

---

## Step 2: Install Firebase CLI

```bash
npm install -g firebase-tools
```

Login to Firebase:
```bash
firebase login
```

---

## Step 3: Update `.firebaserc`

Open `.firebaserc` and replace the project ID:

```json
{
  "projects": {
    "default": "YOUR_ACTUAL_PROJECT_ID"
  }
}
```

**To find your Project ID:**
- Firebase Console → Project Settings → Project ID

---

## Step 4: Handle Sensitive Environment Variables

Your Gemini API key needs to be stored securely in Firebase Secrets.

### Set up the secret:
```bash
cd backend
firebase functions:secrets:set GEMINI_API_KEY
```

When prompted, paste your API key: `AIzaSyCrf-YiklfZW2sO14pbDpI74m9cONX0uBI`

### Update backend/index.js to use the secret

In `backend/index.js`, at the top of the file, after imports, add:

```javascript
import functions from 'firebase-functions';
import { defineSecret } from 'firebase-functions/params';

const geminiApiKey = defineSecret('GEMINI_API_KEY');
```

Then update the generateDataset call to use the secret.

---

## Step 5: Build Frontend

```bash
cd frontend
npm install
npm run build
```

This creates a `frontend/dist` folder that Firebase Hosting will serve.

---

## Step 6: Install Backend Dependencies for Production

```bash
cd backend
npm install --production
```

This installs only production dependencies (smaller deployment size).

---

## Step 7: Deploy to Firebase

```bash
firebase deploy
```

This command:
- Deploys frontend to Firebase Hosting
- Deploys backend as Cloud Functions
- Sets up API routing

**Deployment takes 2-5 minutes.** Watch for the success message!

---

## Step 8: Update CORS in Production

After deployment, update `backend/index.js` with your actual Firebase URLs:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',  // Keep for local testing
    'https://YOUR_PROJECT_ID.web.app',
    'https://YOUR_PROJECT_ID.firebaseapp.com'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));
```

Then redeploy:
```bash
firebase deploy
```

---

## Your Live URLs

After successful deployment:

- **Frontend:** `https://YOUR_PROJECT_ID.web.app`
- **Backend API:** `https://YOUR_PROJECT_ID.web.app/api/generate-dataset`

---

## Troubleshooting

### Error: "Cannot find module 'firebase-functions'"
```bash
cd backend
npm install firebase-functions --save
```

### Error: "Deployment size exceeds limit"
- Delete `node_modules` in backend
- Run `npm install --production` again
- Redeploy

### CORS errors in production
- Update the CORS array in `backend/index.js` with your Firebase URLs
- Redeploy with `firebase deploy`

### API key not working
```bash
firebase functions:secrets:set GEMINI_API_KEY
firebase deploy --only functions
```

---

## Next Steps

1. ✅ Replace `YOUR_PROJECT_ID` with your actual Firebase project ID
2. ✅ Run the deployment commands above
3. ✅ Test the live app
4. ✅ Monitor usage in Firebase Console

## Monitor Your Usage

- **Firebase Console** → [Hosting](https://console.firebase.google.com/hosting)
- **Cloud Functions** logs and usage
- **Firestore** (if you add a database later)

---

## Free Tier Limits

- **Hosting:** 10 GB storage, 360 MB/day download
- **Cloud Functions:** 2M invocations/month, 400,000 GB-seconds
- **Secrets:** Free

These should be plenty for most uses!
