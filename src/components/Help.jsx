import React from 'react'
import { Book, Video, MessageCircle, FileText, HelpCircle, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

  export function Help() {
  const resources = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'S1API documentation if u want to use straight api and not this software',
      link: 'https://ifbars.github.io/S1API',
      color: 'text-blue-400'
    },
   {
      icon: Book,
      title: 'RoadMap & Updates',
      description: 'Trello board with planned features and updates',
      link: 'https://trello.com/b/D8wEoJsh/s1-mod-creator',
      color: 'text-indigo-400'
    },
    {
      icon: MessageCircle,
      title: 'Discord Community',
      description: 'Join 3,000+ modders on our Discord server',
      link: 'https://discord.gg/rdaJmNRpA3',
      color: 'text-indigo-400'
    },

   ]

  const faqs = [
    {
      question: 'Is Schedule 1 Mod Creator really free?',
      answer: 'Yes! It\'s completely free and open source under the GPL-3.0 license . No hidden costs, no premium tiers.'
    },
    {
      question: 'Do I need coding experience?',
      answer: 'Not at all! Our visual editor lets you create mods without writing code. However, advanced users can edit and customize code if they want.'
    },
    {
      question: 'Is this compatible with existing Schedule 1 mods?',
      answer: 'Yes! We use the standard S1API framework and MelonLoader, so mods created with our tool are fully compatible.'
    },
    {
      question: 'How do I install mods I create?',
      answer: 'Mods are exported in a format ready for MelonLoader. Simply copy the dll to your Schedule 1 Mods folder.'
    },
    {
      question: 'Can I contribute to the project?',
      answer: 'Absolutely! We welcome contributions on GitHub. Check our contributing guidelines for more info.'
    },
    {
      question: 'What if I encounter a bug?',
      answer: 'Please report bugs on our GitHub Issues page or Discord. Include detailed steps to reproduce the issue.'
    }
  ]

  return (
    <section id="help" className="py-24 px-6 bg-bg-surface1/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Help & Resources</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to get started and master mod creation
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-bg-surface2 p-6 rounded-lg border border-border-default hover:border-primary-500/50 hover:shadow-glow-hover transition-all duration-300 group block"
            >
              <resource.icon className={`w-10 h-10 ${resource.color} mb-4`} />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-100 transition-colors flex items-center gap-2">
                {resource.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-text-secondary">
                {resource.description}
              </p>
            </a>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary-500" />
            <h3 className="text-3xl font-semibold">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-bg-surface2 p-6 rounded-lg border border-border-default hover:border-border-interactive transition-all duration-200 group"
              >
                <summary className="cursor-pointer font-medium text-lg flex items-center justify-between group-hover:text-primary-100 transition-colors">
                  {faq.question}
                  <span className="text-primary-500 text-2xl">+</span>
                </summary>
                <p className="mt-4 text-text-secondary pl-4 border-l-2 border-primary-500/30">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-primary-500/10 to-primary-500/5 p-8 rounded-lg border border-primary-500/20 text-center">
          <h3 className="text-2xl font-semibold mb-3">Still need help?</h3>
          <p className="text-text-secondary mb-6">
            Our community is here to help you. Join our Discord or check out the documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button>
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord
              
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
