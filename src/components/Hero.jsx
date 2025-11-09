import React from 'react'
import { Download, Github, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2E474A 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm text-primary-100">Beta</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-text-primary via-primary-100 to-text-primary bg-clip-text text-transparent">
          Create Mods Without Code
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          The most powerful and easy-to-use mod creator for Schedule 1. 
          Build gameplay mods, visual enhancements, and custom content with our intuitive interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToDownload}>
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-8 py-6" onClick={scrollToDownload}>
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
                        <div className="text-3xl font-bold text-primary-500 mb-2"></div>
            <div className="text-sm text-text-secondary"></div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">100%</div>
            <div className="text-sm text-text-secondary">Free & Open</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2"></div>
            <div className="text-sm text-text-secondary"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <ArrowRight className="w-6 h-6 text-text-secondary mx-auto rotate-90" />
        </div>
      </div>
    </section>
  )
}
