import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { DemoClip } from '@/data/content'

interface MediaFrameProps {
  clip: DemoClip
}

export function MediaFrame({ clip }: MediaFrameProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [paused, setPaused] = useState(prefersReducedMotion)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const hasVideo = Boolean(clip.media.mp4)
  const hasGif = Boolean(clip.media.gif)

  useEffect(() => {
    setPaused(prefersReducedMotion)
  }, [prefersReducedMotion])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (paused) {
      video.pause()
    } else {
      void video.play().catch(() => {
        setPaused(true)
      })
    }
  }, [paused])

  return (
    <motion.figure
      className="flex flex-col"
      {...(prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.35 },
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
          })}
      {...(prefersReducedMotion
        ? {}
        : {
            whileHover: {
              scale: 1.01,
              transition: { type: 'spring', stiffness: 180, damping: 24 },
            },
          })}
    >
      <div className="relative overflow-hidden rounded-[18px] border border-s1-forest/40 bg-s1-ink/40 shadow-card">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="aspect-[1920/1002] w-full object-cover"
            playsInline
            muted
            loop
            autoPlay={!paused && !prefersReducedMotion}
            poster={clip.media.poster}
            aria-label={clip.media.alt}
          >
            {clip.media.mp4 ? <source src={clip.media.mp4} type="video/mp4" /> : null}
          </video>
        ) : hasGif ? (
          <img
            src={clip.media.gif}
            alt={clip.media.alt}
            className="aspect-[1920/1002] w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[1920/1002] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-s1-ink to-s1-deep text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-s1-sand/70">Demo loop</p>
            <p className="max-w-[18ch] text-base text-s1-sand/90">Production media slot reserved – assets ship with editor capture.</p>
          </div>
        )}
        {clip.media.poster ? (
          <img
            src={clip.media.poster}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0"
            loading="lazy"
          />
        ) : null}
        {prefersReducedMotion && hasVideo ? (
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-s1-sand/30 bg-s1-ink/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-s1-sand shadow-card"
            onClick={() => setPaused((prev) => !prev)}
            aria-pressed={!paused}
            aria-label={paused ? 'Play demo animation' : 'Pause demo animation'}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            {paused ? 'Play' : 'Pause'}
          </button>
        ) : null}
      </div>
      <figcaption className="mt-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-s1-sand/70">{clip.label}</p>
        <div className="space-y-2">
          <h3 className="font-display text-2xl text-s1-sand">{clip.title}</h3>
          <p className="text-sm text-s1-sand/80">{clip.description}</p>
        </div>
        <p className="text-xs text-s1-sand/60">{clip.caption}</p>
      </figcaption>
    </motion.figure>
  )
}
