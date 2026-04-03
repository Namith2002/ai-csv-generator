#!/bin/bash
# Firebase Deployment Setup Script for Windows (PowerShell)

echo "=========================================="
echo "Firebase Deployment Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if (-Not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js is not installed. Please install it first." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Node.js is installed" -ForegroundColor Green

# Check if Firebase CLI is installed globally
if (-Not (Get-Command firebase -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Firebase CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g firebase-tools
}
Write-Host "✅ Firebase CLI is ready" -ForegroundColor Green

echo ""
echo "=========================================="
echo "Installation Steps"
echo "=========================================="
echo ""

# Frontend setup
Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Cyan
Set-Location frontend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend installation failed" -ForegroundColor Red
    exit 1
}

# Backend setup
Write-Host "📦 Installing backend dependencies..." -ForegroundColor Cyan
Set-Location ../backend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ Backend installation failed" -ForegroundColor Red
    exit 1
}

Set-Location ..
echo ""
echo "=========================================="
echo "Next Steps:"
echo "=========================================="
echo ""
echo "1. Open .firebaserc and update YOUR_PROJECT_ID"
echo ""
echo "2. Set up Gemini API key secret:"
echo "   firebase functions:secrets:set GEMINI_API_KEY"
echo ""
echo "3. Build frontend:"
echo "   cd frontend && npm run build && cd .."
echo ""
echo "4. Deploy to Firebase:"
echo "   firebase deploy"
echo ""
echo "=========================================="
