import React from 'react'
import { Zap, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-surface1/95 backdrop-blur-sm border-b border-border-default">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-primary-500" />
            <div>
              <h1 className="text-xl font-semibold">Schedule 1 Mod Creator</h1>
              <p className="text-xs text-text-secondary">Free & Open Source</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm text-text-secondary hover:text-primary-500 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-sm text-text-secondary hover:text-primary-500 transition-colors"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-sm text-text-secondary hover:text-primary-500 transition-colors"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-text-secondary hover:text-primary-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('help')}
              className="text-sm text-text-secondary hover:text-primary-500 transition-colors"
            >
              Help
            </button>
            <Button size="sm" onClick={() => scrollToSection('download')}>
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-left text-sm text-text-secondary hover:text-primary-500 transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="text-left text-sm text-text-secondary hover:text-primary-500 transition-colors py-2"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-left text-sm text-text-secondary hover:text-primary-500 transition-colors py-2"
            >
              Support
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-sm text-text-secondary hover:text-primary-500 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('help')}
              className="text-left text-sm text-text-secondary hover:text-primary-500 transition-colors py-2"
            >
              Help
            </button>
            <Button size="sm" onClick={() => scrollToSection('download')} className="mt-2">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
