import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from './Badge'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  kicker?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  kicker,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-5', align === 'center' && 'text-center', className)}>
      {eyebrow ? (
        <div className={cn('inline-flex items-center gap-3', align === 'center' && 'justify-center')}>
          <Badge className="bg-transparent text-s1-sand/70">{eyebrow}</Badge>
          {kicker}
        </div>
      ) : null}
      <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-prose')}>
        <h2 className="font-display text-4xl leading-tight tracking-tight text-s1-sand sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-s1-sand/80 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
