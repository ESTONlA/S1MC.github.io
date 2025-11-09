import React from 'react'
import { Github, Twitter, Youtube, MessageCircle, Mail, Zap, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/ESTONlA/ModcreatorSchedule1' },
    { icon: MessageCircle, label: 'Discord', url: 'https://discord.gg/rdaJmNRpA3' },
  ]

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Download', href: '#download' },
      { name: 'GPL-3.0 license', href: 'https://github.com/ESTONlA/ModcreatorSchedule1/blob/main/LICENSE' },
    ],

    Support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Discord Server', href: 'https://discord.gg/rdaJmNRpA3' },
      { name: 'Report a Bug', href: 'https://github.com/ESTONlA/ModcreatorSchedule1/issues' },
      { name: 'Feature Request', href: 'https://discord.gg/rdaJmNRpA3' },
    ],
    About: [
      { name: 'About Us', href: '#about' },
      { name: 'Support Developers', href: '#support' },

    ],
  }

  return (
    <footer className="bg-bg-surface1 border-t border-border-default">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-primary-500" />
              <div>
                <h3 className="text-lg font-semibold">Schedule 1 Mod Creator</h3>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Create powerful Schedule 1 mods without writing code. Free, open source, and community-driven.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-bg-surface2 rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-500 hover:bg-primary-500/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-primary-500 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-secondary">
              © {currentYear} Schedule 1 Mod Creator. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-text-secondary">

              <a href="https://github.com/ESTONlA/ModcreatorSchedule1/blob/main/LICENSE" className="hover:text-primary-500 transition-colors">
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-text-secondary">
            <p>
              Made with <span className="text-semantic-error">♥</span> by the Schedule 1 modding community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
