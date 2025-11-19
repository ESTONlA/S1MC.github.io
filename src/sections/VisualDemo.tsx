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
    offset: ['start start', 'end end'],
  })

  const { scrollYProgress: entryProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  })

  const headingOpacity = useTransform(entryProgress, [0.5, 0.8], [0, 1])
  const headingY = useTransform(entryProgress, [0.5, 0.8], [40, 0])

  return (
    <section ref={sectionRef} id="demo" className="relative h-[300vh] bg-layer-1">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-s1-forest/30 to-transparent" />

        <Container className="relative z-10 w-full h-full flex flex-col justify-center">
          <motion.div
            className="mb-8 text-center"
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

          <div className="relative mx-auto w-full max-w-2xl aspect-[16/13]">
            {demoClips.map((clip, index) => {
              // Logic for 2 clips:
              // Clip 1: 0 -> 0.5 (Visible -> Fade Out)
              // Clip 2: 0.5 -> 1.0 (Fade In -> Visible)

              const isFirst = index === 0

              // Opacity logic
              // If first: starts visible, fades out at end of its range
              // If last: starts invisible, fades in at start of its range
              // (Simplified for 2 clips)

              let opacity
              let scale
              let y

              if (isFirst) {
                opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
                scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95])
                y = useTransform(scrollYProgress, [0, 0.4], [0, -20])
              } else {
                opacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1])
                scale = useTransform(scrollYProgress, [0.4, 0.8], [1.05, 1])
                y = useTransform(scrollYProgress, [0.4, 0.8], [20, 0])
              }

              return (
                <motion.div
                  key={clip.id}
                  style={{
                    opacity: prefersReducedMotion ? (isFirst ? 1 : 0) : opacity,
                    scale: prefersReducedMotion ? 1 : scale,
                    y: prefersReducedMotion ? 0 : y,
                    zIndex: index,
                  }}
                  className="absolute inset-0 w-full"
                >
                  <MediaFrame clip={clip} />
                </motion.div>
              )
            })}
          </div>
        </Container>
      </div>
    </section>
  )
}
