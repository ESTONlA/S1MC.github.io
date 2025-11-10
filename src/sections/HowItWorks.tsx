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
    offset: ['start 0.8', 'end 0.4'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.25], [32, 0])

  return (
    <motion.section
      ref={sectionRef}
      id="workflow"
      className="bg-s1-deep/40 py-20 text-s1-sand"
    >
      <Container className="space-y-12">
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
            const stepStart = 0.15 + (index / totalSteps) * 0.35
            const stepEnd = stepStart + 0.18
            
            const stepProgress = useTransform(
              scrollYProgress,
              [stepStart, stepEnd],
              [0, 1]
            )
            
            const stepOpacity = useTransform(stepProgress, [0, 0.2, 1], [0, 0, 1])
            const stepX = useTransform(stepProgress, [0, 1], [-40, 0])
            const stepScale = useTransform(stepProgress, [0, 1], [0.96, 1])

            return (
              <motion.div
                key={step.title}
                className="rounded-[16px] border border-s1-forest/40 bg-s1-ink/40 p-6 shadow-card"
                style={{
                  opacity: prefersReducedMotion ? 1 : stepOpacity,
                  x: prefersReducedMotion ? 0 : stepX,
                  scale: prefersReducedMotion ? 1 : stepScale,
                }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-s1-forest/40 bg-s1-deep/70 text-s1-sand">
                  <step.icon size={20} />
                </div>
                <h3 className="font-display text-xl text-s1-sand">{step.title}</h3>
                <p className="mt-2 text-sm text-s1-sand/75">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </motion.section>
  )
}
