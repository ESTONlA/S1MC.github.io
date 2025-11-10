import './index.css'
import { Hero } from '@/sections/Hero'
import { VisualDemo } from '@/sections/VisualDemo'
import { HowItWorks } from '@/sections/HowItWorks'
import { FeaturesGrid } from '@/sections/FeaturesGrid'
import { CredibilityStrip } from '@/sections/CredibilityStrip'
import { CallToAction } from '@/sections/CallToAction'
import { SiteFooter } from '@/sections/SiteFooter'

function App() {
  return (
    <div className="min-h-screen bg-s1-ink text-s1-sand">
      <Hero />
      <main>
        <VisualDemo />
        <HowItWorks />
        <FeaturesGrid />
        <CredibilityStrip />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
