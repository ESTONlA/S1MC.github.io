import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container, SectionHeading } from '@/components/primitives'
import { featureList } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function FeaturesGrid() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.4'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.2], [32, 0])

  const featureHover = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { type: 'spring' as const, stiffness: 200, damping: 24 },
      }

  return (
    <motion.section ref={sectionRef} id="features" className="bg-s1-ink py-20 text-s1-sand">
      <Container className="space-y-12">
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : headingOpacity,
            y: prefersReducedMotion ? 0 : headingY,
          }}
        >
          <SectionHeading
            eyebrow="Feature system"
            title="Cards with editorial whitespace and confident grids"
            description="Quest/NPC builder, triggers & conditions, scaffolding, Roslyn pipeline, and a single MelonMod entry point."
          />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((feature, index) => {
            const totalFeatures = featureList.length
            const featureStart = 0.15 + (index / totalFeatures) * 0.35
            const featureEnd = featureStart + 0.18
            
            const featureProgress = useTransform(
              scrollYProgress,
              [featureStart, featureEnd],
              [0, 1]
            )
            
            const featureOpacity = useTransform(featureProgress, [0, 0.2, 1], [0, 0, 1])
            const featureY = useTransform(featureProgress, [0, 1], [26, 0])
            const featureScale = useTransform(featureProgress, [0, 1], [0.96, 1])

            return (
              <motion.article
                key={feature.title}
                className="orbit-panel rounded-[18px] border border-s1-forest/40 bg-s1-deep/50 p-6 shadow-card"
                style={{
                  opacity: prefersReducedMotion ? 1 : featureOpacity,
                  y: prefersReducedMotion ? 0 : featureY,
                  scale: prefersReducedMotion ? 1 : featureScale,
                }}
                {...featureHover}
              >
                <div className="orbit-panel-inner flex h-full flex-col">
                  <div className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-s1-sand/80">
                    <feature.icon size={18} className="text-s1-sand" />
                    {feature.meta}
                  </div>
                  <h3 className="font-display text-2xl text-s1-sand">{feature.title}</h3>
                  <p className="mt-3 text-sm text-s1-sand/80">{feature.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </motion.section>
  )
}
