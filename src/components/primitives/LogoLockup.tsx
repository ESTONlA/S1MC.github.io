import { motion } from 'framer-motion'
import type { Logo } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface LogoLockupProps {
  logos: Logo[]
}

const logoContainerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const logoVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const } },
}

export function LogoLockup({ logos }: LogoLockupProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerReveal = prefersReducedMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.3 },
        variants: logoContainerVariant,
      }
  const logoHover = prefersReducedMotion
    ? {}
    : {
        whileHover: { translateY: -2, scale: 1.03 },
        transition: { type: 'spring', stiffness: 210, damping: 24 },
      }
  const logoMotion = prefersReducedMotion ? {} : { variants: logoVariant }

  return (
    <motion.div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10" {...containerReveal}>
      {logos.map((logo) => (
        <motion.a
          key={logo.name}
          href={logo.href}
          className="group flex h-16 w-24 items-center justify-center rounded-md border border-s1-forest/40 bg-s1-ink/30 text-center text-sm font-semibold tracking-[0.3em] text-s1-sand/70 transition hover:text-s1-sand"
          aria-label={`Learn more about ${logo.name}`}
          target="_blank"
          rel="noreferrer"
          {...logoMotion}
          {...logoHover}
        >
          <span>{logo.abbr}</span>
        </motion.a>
      ))}
    </motion.div>
  )
}
