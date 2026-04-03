import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      emoji: '🤖',
      title: 'AI-Powered Generation',
      description: 'Advanced AI models create realistic synthetic datasets tailored to your needs'
    },
    {
      emoji: '📊',
      title: 'Multiple Dataset Types',
      description: '7 specialized types: Classification, Regression, NLP, Time Series, Recommendation, Anomaly, General'
    },
    {
      emoji: '⚡',
      title: 'Lightning Fast',
      description: 'Generate thousands of rows in seconds with our optimized AI pipeline'
    },
    {
      emoji: '🔒',
      title: 'Data Privacy',
      description: 'Your data is processed securely and never stored after generation'
    }
  ]

  const steps = [
    { number: '1️⃣', title: 'Configure', description: 'Set your dataset specifications and preferences' },
    { number: '2️⃣', title: 'Generate', description: 'AI creates your realistic synthetic data' },
    { number: '3️⃣', title: 'Download', description: 'Get CSV instantly and use anywhere' }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 animate-fadeIn">
            <div>
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
                Generate Perfect Datasets
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Create production-ready synthetic datasets powered by advanced AI. Perfect for machine learning, testing, and research—in seconds, not weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/generate"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transform hover:scale-105 transition duration-300 text-center"
                >
                  ✨ Start Generating
                </Link>
                <Link
                  to="/docs"
                  className="border-2 border-blue-400 text-blue-300 font-bold py-4 px-8 rounded-xl hover:bg-blue-400/10 backdrop-blur-sm transition duration-300 text-center"
                >
                  📚 Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-slideInRight">
              <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl">
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
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-16 animate-fadeIn">
            Why Choose DataHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold text-blue-300 mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-16 animate-fadeIn">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slideInUp">
                <div className="text-center">
                  <div className="text-5xl mb-4 animate-float">{step.number}</div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-3">{step.title}</h3>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2">
                    <div className="text-3xl text-cyan-400">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/50 via-slate-900 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 Ready to Generate Your First Dataset?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of data scientists and ML engineers using DataHub
          </p>
          <Link
            to="/generate"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-10 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:scale-105 transition duration-300 inline-block"
          >
            ✨ Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
