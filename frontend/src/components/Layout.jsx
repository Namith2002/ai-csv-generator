import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: '🏠 Home' },
    { path: '/generate', label: '⚡ Generate' },
    { path: '/about', label: '💡 About' },
    { path: '/docs', label: '📚 Docs' }
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header/Navigation */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">✨</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">DataHub</h1>
                <p className="text-xs text-blue-300">AI Dataset Generator</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                    isActive(link.path)
                      ? 'bg-blue-500/30 text-cyan-300 border border-blue-400/50 backdrop-blur-sm'
                      : 'text-slate-300 hover:bg-white/10 hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/generate"
              className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] text-white font-bold px-6 py-2 rounded-lg transition duration-300 transform hover:scale-105"
            >
              ✨ Generate
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-2 animate-slideInUp">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition duration-300 ${
                    isActive(link.path)
                      ? 'bg-blue-500/30 text-cyan-300 border border-blue-400/50'
                      : 'text-slate-300 hover:bg-white/10 hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/generate"
                className="block bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] text-white font-bold px-4 py-3 rounded-lg transition text-center transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✨ Start Generating
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
      <footer className="bg-slate-900/50 backdrop-blur-md border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">✨ DataHub</h3>
              <p className="text-slate-400 leading-relaxed">
                Generate high-quality synthetic datasets with AI. Fast, easy, and powerful.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-cyan-300 font-bold mb-4">🚀 Product</h4>
              <ul className="space-y-2">
                <li><Link to="/generate" className="text-slate-400 hover:text-cyan-300 transition duration-300">Generator</Link></li>
                <li><Link to="/docs" className="text-slate-400 hover:text-cyan-300 transition duration-300">Documentation</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-cyan-300 transition duration-300">About</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-cyan-300 font-bold mb-4">💬 Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">FAQ</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-cyan-300 font-bold mb-4">📋 Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-cyan-300 transition duration-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8 text-center text-slate-500">
            <p>© 2026 DataHub. Powered by Google Gemini AI. ✨</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
