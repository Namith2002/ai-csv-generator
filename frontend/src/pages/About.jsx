import React from 'react'
import { Users, Target, Lightbulb, Zap } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'AI-Powered Technology',
      description: 'Built with state-of-the-art generative AI models for realistic data generation'
    },
    {
      name: 'User-Centric Design',
      description: 'Intuitive interface designed for data scientists and researchers'
    },
    {
      name: 'Production Ready',
      description: 'Generate datasets suitable for real-world machine learning projects'
    },
    {
      name: 'Scalable Infrastructure',
      description: 'Handle large-scale dataset generation with ease'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About DataHub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DataHub is revolutionizing how data scientists and ML engineers create high-quality synthetic datasets. 
            We combine cutting-edge AI with user-friendly design to make dataset generation fast, easy, and accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-4">
              We believe that every data scientist should have access to high-quality synthetic datasets. 
              By leveraging advanced AI models, we're making it possible to generate realistic, diverse, 
              and production-ready datasets in minutes instead of weeks.
            </p>
            <p className="text-lg text-slate-600">
              Our platform eliminates the need for manual data collection, cleaning, and annotation, 
              allowing teams to focus on what matters most: building and training better models.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-12 border border-slate-200">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Target className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Focus on Innovation</h3>
                  <p className="text-slate-600">We're dedicated to advancing AI-powered data generation</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Community Driven</h3>
                  <p className="text-slate-600">Built by data scientists, for data scientists</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Performance</h3>
                  <p className="text-slate-600">Lightning-fast generation with highest quality data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Choose DataHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-slate-200 hover:shadow-lg transition">
                <Users className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We envision a world where synthetic data generation is as simple as clicking a button, 
            and where every organization can access the highest quality datasets for their machine learning endeavors. 
            DataHub is just the beginning.
          </p>
        </div>
      </div>
    </div>
  )
}
