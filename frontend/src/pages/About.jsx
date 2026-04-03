import React from 'react'

export default function About() {
  const features = [
    {
      emoji: '🤖',
      name: 'AI-Powered Technology',
      description: 'Built with Google Gemini AI for realistic, diverse synthetic data generation'
    },
    {
      emoji: '✨',
      name: 'User-Centric Design',
      description: 'Intuitive, beautiful interface designed for data scientists and researchers'
    },
    {
      emoji: '🚀',
      name: 'Production Ready',
      description: 'Generate enterprise-grade datasets suitable for real-world ML projects'
    },
    {
      emoji: '⚡',
      name: 'Scalable Infrastructure',
      description: 'Handle large-scale dataset generation with lightning-fast performance'
    }
  ]

  const benefits = [
    { emoji: '🎯', title: 'Focus on Innovation', description: 'Dedicated to advancing AI-powered data generation' },
    { emoji: '👥', title: 'Community Driven', description: 'Built by data scientists, for data scientists' },
    { emoji: '🔥', title: 'Performance', description: 'Lightning-fast generation with highest quality data' },
    { emoji: '🔒', title: 'Data Privacy', description: 'Secure processing with zero permanent storage' }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Header */}
        <div className="mb-20 text-center animate-fadeIn">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About DataHub
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            DataHub is revolutionizing how data scientists and ML engineers create high-quality synthetic datasets. 
            We combine cutting-edge AI with user-friendly design to make dataset generation fast, easy, and accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center animate-slideInLeft">
          <div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              We believe that every data scientist should have access to high-quality synthetic datasets. 
              By leveraging advanced AI models, we're making it possible to generate realistic, diverse, 
              and production-ready datasets in minutes instead of weeks.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our platform eliminates the need for manual data collection, cleaning, and annotation, 
              allowing teams to focus on what matters most: building and training better models.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 animate-slideInRight">
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 hover:translate-x-2 transition duration-300">
                  <div className="text-3xl flex-shrink-0">{benefit.emoji}</div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-300">{benefit.title}</h3>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-16 animate-fadeIn">
            Why Choose DataHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">{item.name}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 backdrop-blur-md rounded-2xl p-12 text-center animate-slideInUp">
          <h2 className="text-5xl font-bold text-white mb-6">🌟 Our Vision for the Future</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We envision a world where synthetic data generation is as simple as clicking a button, 
            and where every organization can access the highest quality datasets for their machine learning endeavors. 
            DataHub is just the beginning of the revolution.
          </p>
        </div>
      </div>
    </div>
  )
}
