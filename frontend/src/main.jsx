import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster 
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#000',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '16px',
        }
      }}
    />
  </React.StrictMode>,
)
