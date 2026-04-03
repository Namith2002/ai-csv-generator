# Update Frontend for Backend Integration

After you deploy your backend (to Render or Firebase), you need to update your frontend API URL.

## Step 1: Get Your Backend URL

- **If using Render:** Check your Render dashboard for the service URL (looks like `https://ai-csv-backend-something.onrender.com`)
- **If using Firebase:** Use `https://datahub-1234.web.app/api`

## Step 2: Update frontend/src/pages/Generate.jsx

Find this line (around line 36):
```javascript
const response = await fetch('/api/generate-dataset', {
```

Replace with your backend URL:

**For Render:**
```javascript
const response = await fetch('https://YOUR_RENDER_URL/generate-dataset', {
```

**For Firebase:**
```javascript
const response = await fetch('https://datahub-1234.web.app/api/generate-dataset', {
```

## Step 3: Update frontend/vite.config.js (if needed)

For local development with Render backend, you might want to disable the proxy.

If you need it for development, you can add the Render URL:
```javascript
proxy: {
  '/api': {
    target: 'https://YOUR_RENDER_URL',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
```

## Step 4: Rebuild and Redeploy Frontend

```bash
cd frontend
npm run build
cd ..
firebase deploy --only hosting
```

Done! Your app should now work end-to-end. 🎉

---

## Testing the API

After backend is deployed, test it:

**For Render:**
```bash
curl -X POST https://YOUR_RENDER_URL/generate-dataset \
  -H "Content-Type: application/json" \
  -d '{"projectTitle":"Test","description":"","datasetType":"classification","numRows":10,"numColumns":3}'
```

**For Firebase:**
```bash
curl -X POST https://datahub-1234.web.app/api/generate-dataset \
  -H "Content-Type: application/json" \
  -d '{"projectTitle":"Test","description":"","datasetType":"classification","numRows":10,"numColumns":3}'
```

You should get a JSON response with generated data.
