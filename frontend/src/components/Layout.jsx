import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/generate', label: 'Generate' },
    { path: '/about', label: 'About' },
    { path: '/docs', label: 'Documentation' }
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-slate-900">DataHub</h1>
                <p className="text-xs text-slate-500">Dataset Generator</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isActive(link.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-600" />
              ) : (
                <Menu className="w-6 h-6 text-slate-600" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/generate"
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Start Generating
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-200 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition ${
                    isActive(link.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/generate"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Generating
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">DataHub</h3>
              <p className="text-slate-400">
                Generate high-quality synthetic datasets with AI in seconds.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/generate" className="hover:text-white transition">Generator</Link></li>
                <li><Link to="/docs" className="hover:text-white transition">Documentation</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2026 DataHub.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
