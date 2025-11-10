import { Container } from '@/components/primitives'

const footerLinks = [
  { label: 'Docs', href: '#docs' },
  { label: 'GitHub', href: 'https://github.com/Schedule-One/s1mc' },
  { label: 'Support', href: 'mailto:hello@scheduleone.app' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-s1-forest/40 bg-s1-ink py-10 text-s1-sand/70">
      <Container className="flex flex-col gap-4 text-sm text-s1-sand/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Schedule 1 Mod Creator</p>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-s1-sand" aria-label={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
