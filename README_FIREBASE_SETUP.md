# 🚀 Firebase Deployment - Complete Setup Summary

## What's Been Done for You ✅

I've configured your project for Firebase deployment. Here's what was set up:

### 1. Configuration Files Created
- **`.firebaserc`** - Firebase project configuration
- **`firebase.json`** - Hosting and Cloud Functions setup
- **`backend/index.js`** - Express app wrapped for Cloud Functions
- **`DEPLOY_NOW.md`** - Step-by-step deployment guide
- **`setup-firebase.ps1`** - PowerShell setup script

### 2. Code Updates Made
- ✅ Updated `backend/package.json` to reference Cloud Functions entry point
- ✅ Enhanced `frontend/vite.config.js` for production builds
- ✅ Updated `backend/services/geminiService.js` for Firebase Secrets compatibility
- ✅ Configured CORS for Firebase hosted domain

### 3. What Happens During Deployment
- Frontend (React) → Deployed to **Firebase Hosting**
- Backend (Express) → Deployed as **Cloud Functions**
- API routes automatically connected
- Your app will be live at: `https://YOUR_PROJECT_ID.web.app`

---

## 🎯 Quick Start (Copy & Paste These Commands)

### Terminal 1: Create Firebase Project
```bash
# Go to Firebase Console
# https://console.firebase.google.com
# Click "Add project" and follow the setup
# Copy your Project ID when done
```

### Terminal 2: Set Up Locally

**From your project root directory:**

#### Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### Login
```bash
firebase login
```

#### Update Configuration
Edit `.firebaserc` and replace `your-project-id` with your **actual Firebase Project ID**:
```
https://console.firebase.google.com → Project Settings → Copy Project ID
```

#### Install Dependencies
```bash
# Frontend
cd frontend
npm install
npm run build
cd ..

# Backend (production mode)
cd backend
npm install --production
cd ..
```

#### Set Up API Key Secret
```bash
cd backend
firebase functions:secrets:set GEMINI_API_KEY
```
When prompted, paste your API key: `AIzaSyCrf-YiklfZW2sO14pbDpI74m9cONX0uBI`

#### Deploy Everything
```bash
firebase deploy
```

**⏳ Wait 2-5 minutes for deployment to finish**

---

## ✨ After Deployment

### Update CORS for Production
1. Open `backend/index.js`
2. Find the CORS configuration
3. Replace both occurrences of `YOUR_PROJECT_ID` with your actual Firebase Project ID
4. Run: `firebase deploy --only functions`

### Your Live URLs
- **Website:** `https://YOUR_PROJECT_ID.web.app`
- **API Endpoint:** `https://YOUR_PROJECT_ID.web.app/api/generate-dataset`

### Test Your API
```bash
curl -X POST https://YOUR_PROJECT_ID.web.app/api/generate-dataset \
  -H "Content-Type: application/json" \
  -d '{"projectTitle":"Test","description":"","datasetType":"classification","numRows":10,"numColumns":3}'
```

---

## 📊 Monitoring Your App

### Check Logs
```bash
# View all logs
firebase functions:log

# View specific function logs
firebase functions:log --limit 50
```

### Monitor in Firebase Console
- **Hosting:** [console.firebase.google.com/hosting](https://console.firebase.google.com/hosting)
- **Functions:** [console.firebase.google.com/functions](https://console.firebase.google.com/functions)
- **Statistics:** View traffic, errors, performance

---

## 🆘 Troubleshooting

### Error: "Cannot read property of undefined (reading 'api')"
**Fix:** Make sure you ran `firebase deploy` (not just `firebase deploy --only hosting`)

### Error: "GEMINI_API_KEY not found"
**Fix:** Run this command:
```bash
firebase functions:secrets:set GEMINI_API_KEY
```
Then redeploy:
```bash
firebase deploy --only functions
```

### CORS errors in browser console
**Fix:** Update `YOUR_PROJECT_ID` in `backend/index.js` with your actual Firebase Project ID, then:
```bash
firebase deploy --only functions
```

### Frontend shows "Cannot find module"
**Fix:** Rebuild frontend and check build output:
```bash
cd frontend
rm -r node_modules dist
npm install
npm run build
cd ..
firebase deploy --only hosting
```

### Deployment size too large
**Fix:** Remove dev dependencies:
```bash
cd backend
rm -r node_modules
npm install --production
cd ..
firebase deploy --only functions
```

---

## 💡 Pro Tips

1. **Local Testing First**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run dev
   
   # Terminal 2: Frontend
   cd frontend
   npm run dev
   
   # Then visit http://localhost:3000
   ```

2. **Version Control** - Add to `.gitignore`:
   ```
   .env
   .env.local
   .env.*.local
   ```

3. **Free Tier is Plenty**
   - 10 GB hosting storage
   - 360 MB/day bandwidth
   - 2 million function invocations/month
   - More than enough for most apps!

4. **Custom Domain** (Optional)
   - Firebase Hosting → Domain settings
   - Add your custom domain there

---

## 📝 Checklist Before Deployment

- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged in with Firebase (`firebase login`)
- [ ] Firebase project created in console
- [ ] `.firebaserc` updated with correct Project ID
- [ ] Gemini API key secret set (`firebase functions:secrets:set GEMINI_API_KEY`)
- [ ] Frontend built (`npm run build` in frontend folder)
- [ ] Backend using production dependencies (`npm install --production`)
- [ ] Ready to deploy (`firebase deploy`)

---

## 🎉 You're All Set!

Run `firebase deploy` and your app will be live in minutes!

Questions? Check:
- [Firebase Docs](https://firebase.google.com/docs)
- [Cloud Functions Guide](https://firebase.google.com/docs/functions)
- [Hosting Guide](https://firebase.google.com/docs/hosting)

Good luck! 🚀
