import React from 'react'
import { Users, Target, Lightbulb, Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Learn more about our mission and the team behind Schedule 1 Mod Creator
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-bg-surface2 p-12 rounded-lg border border-border-default">
            <h3 className="text-3xl font-semibold mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-text-secondary text-center leading-relaxed">
              We believe that mod creation should be accessible to everyone, regardless of their coding experience. 
              Schedule 1 Mod Creator empowers players to bring their creative visions to life through an intuitive, 
              powerful toolset built specifically for the Schedule 1 modding community.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: 'Community First',
              description: 'Built by modders, for modders. We listen to community feedback.'
            },
            {
              icon: Target,
              title: 'Accessibility',
              description: 'Making mod creation easy for beginners and powerful for experts.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              description: 'Constantly improving with new features and capabilities.'
            },
            {
              icon: Heart,
              title: 'Open Source',
              description: 'Free forever. Transparent development and community-driven.'
            }
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
              <p className="text-sm text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center"></h3>
          <div className="space-y-8">
            {[

            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-sm text-primary-500 font-medium pt-1">
                  {milestone.date}
                </div>
                <div className="flex-grow">
                  <div className="relative pl-8 pb-8 border-l-2 border-border-default last:border-l-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-bg-page" />
                    <p className="text-text-secondary">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
