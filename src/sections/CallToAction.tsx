import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container, SectionHeading, Button } from '@/components/primitives'
import { primaryCta, secondaryCta } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CallToAction() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'start 0.1'],
  })

  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const cardY = useTransform(scrollYProgress, [0, 0.5], [32, 0])
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1])

  return (
    <motion.section ref={sectionRef} id="download" className="bg-s1-ink py-24 text-s1-sand">
      <Container>
        <motion.div
          className="rounded-[24px] border border-s1-forest/40 bg-gradient-to-br from-s1-deep/70 to-s1-ink/80 px-8 py-12 shadow-card"
          style={{
            opacity: prefersReducedMotion ? 1 : cardOpacity,
            y: prefersReducedMotion ? 0 : cardY,
            scale: prefersReducedMotion ? 1 : cardScale,
          }}
        >
          <SectionHeading
            eyebrow="Ready to mod?"
            title="Download the editor or drop into the docs"
            description="S1MC is free to use and open source, so you can get started right away."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={secondaryCta.href} target="_blank" rel="noreferrer">
                {secondaryCta.label}
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  )
}
