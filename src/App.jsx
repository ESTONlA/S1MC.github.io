import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Download } from './components/Download'
import { Support } from './components/Support'
import { About } from './components/About'
import { Help } from './components/Help'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-bg-page text-text-primary">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Support />
      <About />
      <Help />
      <Footer />
    </div>
  )
}

export default App
