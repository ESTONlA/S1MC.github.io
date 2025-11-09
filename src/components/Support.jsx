import React from 'react'
import { Heart, Coffee, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Support() {
  const developers = [
    {
      name: 'Estonia',
      role: 'Developer',
      description: 'Updating and Coding ModCreator',
      kofi: 'estonla',
      avatar: '❤️'
    },
    {
      name: 'Bars',
      role: 'Developer',
      description: 'Updating and Coding ModCreator (donation soon tm)',
      kofi: '',
      avatar: '❤️'
    }
  ]

  return (
    <section id="support" className="py-24 px-6 bg-bg-surface1/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-semantic-error/10 border border-semantic-error/20 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-semantic-error fill-current" />
            <span className="text-sm text-semantic-error">Support the Developers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Support Our Work</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            This project is free and open source. If you find it useful, consider supporting the developers who make it possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-bg-surface2 p-8 rounded-lg border border-border-default hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center text-3xl">
                  {dev.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{dev.name}</h3>
                  <p className="text-sm text-primary-500">{dev.role}</p>
                </div>
              </div>

              <p className="text-text-secondary mb-6">
                {dev.description}
              </p>

              <a
                href={`https://ko-fi.com/${dev.kofi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="default" className="w-full bg-[#FF5E5B] hover:bg-[#FF4542] text-white">
                  <Coffee className="w-4 h-4 mr-2" />
                  Support on Ko-fi
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>

              <div className="mt-4 pt-4 border-t border-border-default">
                <p className="text-xs text-text-secondary text-center">
                  Your support helps us continue developing and maintaining this project
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alternative Support Methods */}
        <div className="mt-16 max-w-2xl mx-auto bg-bg-surface2 p-8 rounded-lg border border-border-default text-center">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Support</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-bg-surface1 rounded-md">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-text-secondary">Star us on GitHub</p>
            </div>
            <div className="p-4 bg-bg-surface1 rounded-md">
              <div className="text-2xl mb-2">📢</div>
              <p className="text-text-secondary">Share with friends</p>
            </div>
            <div className="p-4 bg-bg-surface1 rounded-md">
              <div className="text-2xl mb-2">🐛</div>
              <p className="text-text-secondary">Report bugs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
