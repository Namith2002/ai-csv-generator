# 🤖 AI CSV Dataset Generator

An intelligent, AI-powered application for generating realistic synthetic datasets in CSV format. Perfect for machine learning projects, testing, and data analysis without compromising privacy.

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)

## ✨ Features

- **🤖 AI-Powered Generation** - Advanced AI models (Google Gemini) create realistic synthetic datasets tailored to your needs
- **📊 Multiple Dataset Types** - 7 specialized types:
  - Classification datasets
  - Regression datasets
  - NLP datasets
  - Time Series data
  - Recommendation datasets
  - Anomaly detection datasets
  - General-purpose datasets
- **⚡ Lightning Fast** - Generate thousands of rows in seconds with our optimized AI pipeline
- **🔒 Data Privacy** - Your data is processed securely and never stored after generation
- **🎨 Modern UI** - Clean, intuitive interface built with React and Tailwind CSS
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🚀 Cloud Ready** - Deployed on Firebase for scalability and reliability

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Google Generative AI SDK** - AI-powered dataset generation
- **Firebase Functions** - Serverless deployment
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Rate Limiting** - Request throttling

### Deployment
- **Firebase Hosting** - Frontend hosting
- **Firebase Cloud Functions** - Backend deployment
- **Firebase Realtime Database** - Optional data storage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Firebase CLI** - `npm install -g firebase-tools`
- **Google Cloud Account** - For Gemini API access
- **Git** - For version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-csv-dataset-generator.git
cd ai-csv-dataset-generator
```

### 2. Set Up Environment Variables

Create a `.env` file in the `backend` directory:

```env
GOOGLE_API_KEY=your_google_gemini_api_key
PORT=3001
NODE_ENV=development
```

### 3. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 4. Start Development Servers

**Terminal 1 - Frontend (from frontend directory):**
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`

**Terminal 2 - Backend (from backend directory):**
```bash
npm run dev
```
The backend API will be available at `http://localhost:3001`

### 5. Generate Your First Dataset

1. Open `http://localhost:5173` in your browser
2. Navigate to the **Generate** page
3. Select your dataset type (Classification, Regression, etc.)
4. Configure:
   - Number of rows
   - Column names and types
   - Domain/context for realistic data
5. Click **Generate** and download your CSV file

## 📂 Project Structure

```
ai-csv-dataset-generator/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   ├── pages/              # Page components (Home, Generate, About, Docs)
│   │   ├── config/             # Configuration files (Firebase)
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # React entry point
│   ├── public/                 # Static assets
│   ├── vite.config.js          # Vite configuration
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── package.json            # Frontend dependencies
│
├── backend/                     # Express.js backend
│   ├── services/
│   │   └── geminiService.js   # Google Gemini API integration
│   ├── utils/
│   │   └── csvUtils.js        # CSV generation utilities
│   ├── server.js              # Express server setup
│   ├── index.js               # Firebase Cloud Functions entry
│   └── package.json           # Backend dependencies
│
├── firebase.json              # Firebase configuration
├── .firebaserc                # Firebase project configuration
├── setup-firebase.ps1         # Firebase setup script
└── README.md                  # This file

```

## 🔌 API Endpoints

### Generate Dataset
**POST** `/api/generate`

Request body:
```json
{
  "datasetType": "classification",
  "rowCount": 100,
  "columns": ["feature1", "feature2", "target"],
  "columnTypes": ["numeric", "categorical", "categorical"],
  "context": "Customer classification dataset"
}
```

Response: CSV data or download link

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Update `.firebaserc` with your project ID:
   ```json
   {
     "projects": {
       "default": "your-firebase-project-id"
     }
   }
   ```
3. Enable Firebase Hosting and Cloud Functions in your project

### Google Gemini API

1. Get your API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your backend `.env` file as `GOOGLE_API_KEY`

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Deploy to Firebase

1. Ensure `.firebaserc` is configured correctly
2. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
3. Deploy:
   ```bash
   firebase deploy
   ```

This will deploy:
- Frontend to Firebase Hosting
- Backend to Firebase Cloud Functions

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm run lint
```

### Backend Testing
```bash
cd backend
npm run dev
```

## 🐛 Troubleshooting

### Common Issues

**Issue: API key error**
- Solution: Ensure `GOOGLE_API_KEY` is set in your `.env` file

**Issue: CORS errors**
- Solution: Check that CORS is properly configured in `backend/server.js`

**Issue: Firebase deployment fails**
- Solution: Run `firebase login` and ensure `.firebaserc` has correct project ID

**Issue: Frontend can't connect to backend**
- Solution: Check that backend API URL is correctly configured in frontend environment

## 📚 Documentation

- [Firebase Deployment Guide](./FIREBASE_DEPLOYMENT.md)
- [Render Deployment Guide](./RENDER_DEPLOYMENT.md)
- [Firebase Setup Instructions](./README_FIREBASE_SETUP.md)
- [Frontend API Updates](./FRONTEND_API_UPDATE.md)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate comments.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Google Gemini API](https://ai.google.dev/) for AI-powered dataset generation
- [Firebase](https://firebase.google.com/) for hosting and backend services
- [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/) for the UI framework
- All contributors and supporters of this project

## 📞 Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Check existing documentation files
- Review the [Docs page](./frontend/src/pages/Docs.jsx) in the application

## 🗺️ Roadmap

- [ ] User authentication and saved datasets
- [ ] Batch dataset generation
- [ ] Custom AI model support
- [ ] Advanced data validation
- [ ] Dataset preview before download
- [ ] API rate limit management UI
- [ ] More dataset types and templates
- [ ] Multi-language support

---

Made with ❤️ by the AI CSV Dataset Generator team
