import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container, LogoLockup, SectionHeading } from '@/components/primitives'
import { credibilityLogos } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CredibilityStrip() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'start 0.1'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const headingX = useTransform(scrollYProgress, [0, 0.4], [-40, 0])
  
  const logosOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])
  const logosX = useTransform(scrollYProgress, [0.3, 0.7], [40, 0])

  return (
    <motion.section
      ref={sectionRef}
      className="bg-s1-deep py-14 text-s1-sand"
      aria-label="Credibility"
    >
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : headingOpacity,
            x: prefersReducedMotion ? 0 : headingX,
          }}
          className="lg:max-w-lg"
        >
          <SectionHeading
            eyebrow="Built for"
            title="S1API + MelonLoader"
            description="Tested against 0.7.0 MelonLoader builds, with Roslyn analyzers baked in."
          />
        </motion.div>
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : logosOpacity,
            x: prefersReducedMotion ? 0 : logosX,
          }}
        >
          <LogoLockup logos={credibilityLogos} />
        </motion.div>
      </Container>
    </motion.section>
  )
}
