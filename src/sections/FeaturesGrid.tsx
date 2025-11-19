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
    offset: ['start start', 'end end'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.1], [40, 0])

  return (
    <section ref={sectionRef} id="features" className="relative h-[350vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="relative z-10 w-full space-y-12">
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
              const stepSize = 0.8 / totalFeatures
              const start = 0.1 + (index * stepSize)
              const end = start + (stepSize * 0.8)

              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
              const y = useTransform(scrollYProgress, [start, end], [40, 0])
              const scale = useTransform(scrollYProgress, [start, end], [0.9, 1])

              return (
                <motion.article
                  key={feature.title}
                  className="orbit-panel rounded-[18px] border border-s1-forest/40 bg-layer-1 p-6 shadow-elevation hover:shadow-glow/20 transition-shadow duration-300"
                  style={{
                    opacity: prefersReducedMotion ? 1 : opacity,
                    y: prefersReducedMotion ? 0 : y,
                    scale: prefersReducedMotion ? 1 : scale,
                  }}
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
      </div>
    </section>
  )
}
