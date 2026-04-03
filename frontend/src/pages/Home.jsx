import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, BarChart3, Zap, Shield } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Generation',
      description: 'Generate high-quality synthetic datasets using advanced AI models'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Multiple Dataset Types',
      description: 'Support for classification, regression, NLP, time series, and more'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Lightning Fast',
      description: 'Generate thousands of rows in seconds with our optimized pipeline'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Data Privacy',
      description: 'Your data is processed securely and never stored permanently'
    }
  ]

  const steps = [
    { number: '1', title: 'Configure', description: 'Set your dataset specifications' },
    { number: '2', title: 'Generate', description: 'Let AI create your dataset' },
    { number: '3', title: 'Download', description: 'Get your CSV file instantly' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Generate Datasets in Seconds
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Create realistic synthetic datasets for your machine learning projects with the power of AI. No more manual data collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/generate"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block text-center"
                >
                  Start Generating
                </Link>
                <Link
                  to="/docs"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Background circle */}
                <circle cx="200" cy="200" r="180" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
                
                {/* Database/Spreadsheet illustration */}
                <g transform="translate(100, 80)">
                  {/* Spreadsheet table */}
                  <rect x="0" y="0" width="200" height="160" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  
                  {/* Header row */}
                  <rect x="0" y="0" width="200" height="30" rx="8" fill="rgba(255,255,255,0.25)" stroke="none"/>
                  <text x="20" y="20" fontSize="12" fontWeight="bold" fill="white">Column 1</text>
                  <text x="105" y="20" fontSize="12" fontWeight="bold" fill="white">Column 2</text>
                  
                  {/* Data rows */}
                  <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="0" y="30" width="200" height="26" fill="rgba(255,255,255,0.08)"/>
                  <text x="20" y="50" fontSize="11" fill="rgba(255,255,255,0.9)">Value</text>
                  <text x="105" y="50" fontSize="11" fill="rgba(255,255,255,0.9)">Data</text>
                  
                  <line x1="0" y1="56" x2="200" y2="56" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="0" y="56" width="200" height="26" fill="rgba(255,255,255,0.04)"/>
                  <text x="20" y="76" fontSize="11" fill="rgba(255,255,255,0.9)">Value</text>
                  <text x="105" y="76" fontSize="11" fill="rgba(255,255,255,0.9)">Data</text>
                  
                  <line x1="0" y1="82" x2="200" y2="82" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="0" y="82" width="200" height="26" fill="rgba(255,255,255,0.08)"/>
                  <text x="20" y="102" fontSize="11" fill="rgba(255,255,255,0.9)">Value</text>
                  <text x="105" y="102" fontSize="11" fill="rgba(255,255,255,0.9)">Data</text>
                  
                  <line x1="0" y1="108" x2="200" y2="108" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="0" y="108" width="200" height="26" fill="rgba(255,255,255,0.04)"/>
                  <text x="20" y="128" fontSize="11" fill="rgba(255,255,255,0.9)">Value</text>
                  <text x="105" y="128" fontSize="11" fill="rgba(255,255,255,0.9)">Data</text>
                  
                  <line x1="0" y1="134" x2="200" y2="134" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <line x1="100" y1="0" x2="100" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                </g>
                
                {/* Sparkles/Stars for magic effect */}
                <circle cx="80" cy="60" r="3" fill="rgba(255,255,255,0.8)">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="320" cy="100" r="2.5" fill="rgba(255,255,255,0.7)">
                  <animate attributeName="r" values="2.5;4;2.5" dur="2.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="320" r="2" fill="rgba(255,255,255,0.6)">
                  <animate attributeName="r" values="2;3.5;2" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="280" r="3" fill="rgba(255,255,255,0.75)">
                  <animate attributeName="r" values="3;4.5;3" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.75;1;0.75" dur="2.2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Why Choose DataHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Generate Your First Dataset?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of data scientists and ML engineers using DataHub
          </p>
          <Link
            to="/generate"
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
