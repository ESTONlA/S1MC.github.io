import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container, SectionHeading } from '@/components/primitives'
import { howItWorksSteps } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function HowItWorks() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.1], [40, 0])

  return (
    <section
      ref={sectionRef}
      id="workflow"
      className="relative h-[300vh] bg-s1-deep/40"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="relative z-10 w-full space-y-12">
          <motion.div
            style={{
              opacity: prefersReducedMotion ? 1 : headingOpacity,
              y: prefersReducedMotion ? 0 : headingY,
            }}
          >
            <SectionHeading
              eyebrow="How it works"
              title="Design → Configure → Generate C# → Install"
              description="Four deliberate beats that move from ideation to a MelonLoader-ready mod without ever breaking flow."
            />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((step, index) => {
              const totalSteps = howItWorksSteps.length
              const stepSize = 0.8 / totalSteps
              const start = 0.1 + (index * stepSize)
              const end = start + (stepSize * 0.8)

              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
              const y = useTransform(scrollYProgress, [start, end], [40, 0])
              const scale = useTransform(scrollYProgress, [start, end], [0.9, 1])

              return (
                <motion.div
                  key={step.title}
                  className="orbit-panel rounded-[16px] border border-s1-forest/40 bg-layer-1 p-6 shadow-elevation"
                  style={{
                    opacity: prefersReducedMotion ? 1 : opacity,
                    y: prefersReducedMotion ? 0 : y,
                    scale: prefersReducedMotion ? 1 : scale,
                  }}
                >
                  <div className="orbit-panel-inner space-y-3">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-s1-forest/40 bg-s1-deep/70 text-s1-sand">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-display text-xl text-s1-sand">{step.title}</h3>
                    <p className="mt-2 text-sm text-s1-sand/75">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}
