import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/primitives'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const footerLinks = [
  { label: 'Docs', href: '#docs' },
  { label: 'GitHub', href: 'https://github.com/Schedule-One/s1mc' },
  { label: 'Support', href: 'mailto:hello@scheduleone.app' },
]

export function SiteFooter() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const footerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'start 0.8'],
  })

  const footerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const footerY = useTransform(scrollYProgress, [0, 0.5], [24, 0])

  const linkMotion = prefersReducedMotion
    ? {}
    : {
        whileHover: { translateY: -1, scale: 1.05 },
        transition: { type: 'spring' as const, stiffness: 260, damping: 24 },
      }

  return (
    <motion.footer
      ref={footerRef}
      className="border-t border-s1-forest/40 bg-s1-ink py-10 text-s1-sand/70"
      style={{
        opacity: prefersReducedMotion ? 1 : footerOpacity,
        y: prefersReducedMotion ? 0 : footerY,
      }}
    >
      <Container className="flex flex-col gap-4 text-sm text-s1-sand/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Schedule 1 Mod Creator</p>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link, index) => {
            const linkStart = 0.3 + index * 0.15
            const linkEnd = linkStart + 0.2
            
            const linkProgress = useTransform(
              scrollYProgress,
              [linkStart, linkEnd],
              [0, 1]
            )
            
            const linkOpacity = useTransform(linkProgress, [0, 0.5, 1], [0, 0, 1])
            const linkY = useTransform(linkProgress, [0, 1], [8, 0])

            return (
              <motion.a
                key={link.label}
                href={link.href}
                className="hover:text-s1-sand"
                aria-label={link.label}
                style={{
                  opacity: prefersReducedMotion ? 1 : linkOpacity,
                  y: prefersReducedMotion ? 0 : linkY,
                }}
                {...linkMotion}
              >
                {link.label}
              </motion.a>
            )
          })}
        </nav>
      </Container>
    </motion.footer>
  )
}
