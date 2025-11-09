import React from 'react'
import { Palette, Code2, Zap, Package, Layers, Workflow } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Palette,
      title: 'Visual Editor',
      description: 'Design your mods with an intuitive drag-and-drop interface. No coding required.'
    },
    {
      icon: Code2,
      title: 'Code Export',
      description: 'Export clean, optimized code for your mods. Full control when you need it.'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our live preview system. Test as you build.'
    },
    {
      icon: Package,
      title: 'Asset Management',
      description: 'Organize textures, sounds, and scripts in one place. Built-in asset library included.'
    },
    {
      icon: Layers,
      title: 'Mod Templates',
      description: 'Start fast with pre-built templates for weapons, items, gameplay mechanics, and more.'
    },
    {
      icon: Workflow,
      title: 'S1API Integration',
      description: 'Full integration with Schedule 1 API and MelonLoader for seamless mod deployment.'
    }
  ]

  return (
    <section id="features" className="py-24 px-6 bg-bg-surface1/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to create professional Schedule 1 mods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-bg-surface2 p-8 rounded-lg border border-border-default hover:border-primary-500/50 hover:shadow-glow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
