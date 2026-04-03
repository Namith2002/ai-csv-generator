import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Docs() {
  const [expandedFaq, setExpandedFaq] = React.useState(0)

  const faqs = [
    {
      question: 'What types of datasets can I generate?',
      answer: 'DataHub supports 7 different dataset types: Classification, Regression, NLP/Text, Time Series, Recommendation Systems, Anomaly Detection, and General Purpose datasets. Each type is optimized for its specific use case.'
    },
    {
      question: 'How accurate are the generated datasets?',
      answer: 'Our AI models are trained to generate realistic, statistically valid data that mimics real-world patterns. The data maintains logical consistency across columns and can be used for training production ML models.'
    },
    {
      question: 'What is the maximum dataset size I can generate?',
      answer: 'You can generate datasets up to 5,000 rows with up to 20 columns per request. For larger requirements, you can make multiple requests and combine the results.'
    },
    {
      question: 'How long does dataset generation take?',
      answer: 'Most datasets are generated within 10-30 seconds depending on size and complexity. Larger datasets may take slightly longer, but the process is still considerably faster than manual data collection.'
    },
    {
      question: 'Can I use the generated data for commercial purposes?',
      answer: 'Yes! Your generated datasets are yours to use. You can use them for any purpose including commercial projects, research, training, and production systems.'
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Absolutely. All data is processed securely and is never stored on our servers after generation. Your datasets are only available to you during your session.'
    },
    {
      question: 'What AI model powers DataHub?',
      answer: 'DataHub is powered by Google\'s Gemini AI model, which uses advanced generative AI technology to create realistic and diverse datasets.'
    },
    {
      question: 'Can I specify custom column names?',
      answer: 'Yes! You can provide custom column names separated by commas. This lets you tailor the dataset structure to match your specific needs.'
    },
    {
      question: 'What file formats are supported for download?',
      answer: 'Currently, datasets are downloaded in CSV format, which is compatible with all major data analysis and machine learning tools.'
    },
    {
      question: 'Do you offer an API?',
      answer: 'The current version supports generation through our web interface. Future versions will include API access for programmatic dataset generation.'
    }
  ]

  const guides = [
    {
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
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Documentation & FAQ</h1>
          <p className="text-xl text-slate-600">Everything you need to know about DataHub</p>
        </div>

        {/* Guides Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{guide.title}</h3>
                <ul className="space-y-3">
                  {guide.sections.map((section, sIdx) => (
                    <li key={sIdx} className="flex gap-3 text-slate-600">
                      <span className="text-blue-500 font-semibold">•</span>
                      <span>{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm border border-slate-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <h3 className="text-lg font-semibold text-slate-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-4 text-slate-600 border-t border-slate-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-blue-100 mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@datahub.ai"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
            >
              Email Support
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
