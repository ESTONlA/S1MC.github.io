import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container, MediaFrame, SectionHeading } from '@/components/primitives'
import { demoClips } from '@/data/content'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function VisualDemo() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'start 0.1'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.3], [30, 0])

  return (
    <motion.section
      ref={sectionRef}
      id="demo"
      className="bg-s1-ink py-20 text-s1-sand"
    >
      <Container className="space-y-12">
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : headingOpacity,
            y: prefersReducedMotion ? 0 : headingY,
          }}
        >
          <SectionHeading
            eyebrow="Visual demo"
            title="See S1MC in action"
          />
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-2">
          {demoClips.map((clip, index) => {
            const clipStart = 0.2 + index * 0.3
            const clipEnd = clipStart + 0.3
            
            const clipProgress = useTransform(
              scrollYProgress,
              [clipStart, clipEnd],
              [0, 1]
            )
            
            const clipOpacity = useTransform(clipProgress, [0, 0.2, 1], [0, 0, 1])
            const clipY = useTransform(clipProgress, [0, 1], [40, 0])
            const clipScale = useTransform(clipProgress, [0, 1], [0.95, 1])

            return (
              <motion.div
                key={clip.id}
                style={{
                  opacity: prefersReducedMotion ? 1 : clipOpacity,
                  y: prefersReducedMotion ? 0 : clipY,
                  scale: prefersReducedMotion ? 1 : clipScale,
                }}
              >
                <MediaFrame clip={clip} />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </motion.section>
  )
}
