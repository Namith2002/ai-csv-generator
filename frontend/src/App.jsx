import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/Layout'
import Home from './pages/Home'
import Generate from './pages/Generate'
import About from './pages/About'
import Docs from './pages/Docs'

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
                <p className="text-xl text-slate-600 mb-8">Page not found</p>
                <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition inline-block">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
