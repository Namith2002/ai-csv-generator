import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Docs() {
  const [expandedFaq, setExpandedFaq] = React.useState(null)

  const faqs = [
    {
      question: '🎯 What types of datasets can I generate?',
      answer: 'DataHub supports 7 different dataset types: Classification, Regression, NLP/Text, Time Series, Recommendation Systems, Anomaly Detection, and General Purpose datasets. Each type is optimized for its specific use case.'
    },
    {
      question: '⚙️ How accurate are the generated datasets?',
      answer: 'Our AI models are trained to generate realistic, statistically valid data that mimics real-world patterns. The data maintains logical consistency across columns and can be used for training production ML models.'
    },
    {
      question: '📏 What is the maximum dataset size I can generate?',
      answer: 'You can generate datasets up to 5,000 rows with up to 20 columns per request. For larger requirements, you can make multiple requests and combine the results.'
    },
    {
      question: '⏱️ How long does dataset generation take?',
      answer: 'Most datasets are generated within 10-30 seconds depending on size and complexity. Larger datasets may take slightly longer, but the process is still considerably faster than manual data collection.'
    },
    {
      question: '💼 Can I use the generated data for commercial purposes?',
      answer: 'Yes! Your generated datasets are yours to use. You can use them for any purpose including commercial projects, research, training, and production systems.'
    },
    {
      question: '🔒 Is my data private and secure?',
      answer: 'Absolutely. All data is processed securely and is never stored on our servers after generation. Your datasets are only available to you during your session.'
    },
    {
      question: '🤖 What AI model powers DataHub?',
      answer: 'DataHub is powered by Google\'s Gemini AI model, which uses advanced generative AI technology to create realistic and diverse datasets.'
    },
    {
      question: '📝 Can I specify custom column names?',
      answer: 'Yes! You can provide custom column names separated by commas. This lets you tailor the dataset structure to match your specific needs.'
    },
    {
      question: '💾 What file formats are supported for download?',
      answer: 'Currently, datasets are downloaded in CSV format, which is compatible with all major data analysis and machine learning tools.'
    },
    {
      question: '🔌 Do you offer an API?',
      answer: 'The current version supports generation through our web interface. Future versions will include API access for programmatic dataset generation.'
    }
  ]

  const guides = [
    {
      emoji: '🚀',
      title: 'Getting Started Guide',
      sections: [
        'Sign up and create your account',
        'Navigate to the Generator page',
        'Fill in your dataset configuration',
        'Click Generate and wait for results',
        'Download your CSV file'
      ]
    },
    {
      emoji: '📊',
      title: 'Dataset Types Explained',
      sections: [
        'Classification: For supervised learning with categorical targets',
        'Regression: For predicting continuous numerical values',
        'NLP/Text: For natural language processing tasks',
        'Time Series: For temporal data analysis and forecasting',
        'Recommendation: For building recommendation systems',
        'Anomaly Detection: For identifying outliers and anomalies',
        'General Purpose: For mixed-type datasets'
      ]
    },
    {
      emoji: '⭐',
      title: 'Best Practices',
      sections: [
        'Start with smaller datasets to test your pipeline',
        'Review the preview to ensure quality before download',
        'Use descriptive column names for clarity',
        'Generate multiple datasets with variations for robustness',
        'Store generated datasets securely for your projects'
      ]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center animate-fadeIn">
          <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Documentation & FAQ
          </h1>
          <p className="text-xl text-slate-300">Everything you need to know about DataHub</p>
        </div>

        {/* Guides Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-300 animate-fadeIn">📚 Quick Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 hover:bg-white/20 transition duration-300 transform hover:scale-105 animate-slideInUp">
                <div className="text-5xl mb-4">{guide.emoji}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{guide.title}</h3>
                <ul className="space-y-3">
                  {guide.sections.map((section, sIdx) => (
                    <li key={sIdx} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400 font-bold flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-300 animate-fadeIn">❓ Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-blue-400/50 transition duration-300 overflow-hidden animate-slideInUp">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-5 flex items-center justify-between hover:bg-white/10 transition"
                >
                  <h3 className="text-lg font-semibold text-slate-300 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ml-4 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 pb-6 text-slate-300 border-t border-white/10 pt-4 animate-slideInUp">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 backdrop-blur-md rounded-2xl p-12 text-center animate-slideInUp">
          <h2 className="text-4xl font-bold text-white mb-4">💬 Need More Help?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@datahub.ai"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transform hover:scale-105 transition duration-300 inline-block"
            >
              ✉️ Email Support
            </a>
            <a
              href="#"
              className="border-2 border-blue-400 text-blue-300 font-bold px-8 py-4 rounded-xl hover:bg-blue-400/10 backdrop-blur-sm transition duration-300 inline-block"
            >
              📞 Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
