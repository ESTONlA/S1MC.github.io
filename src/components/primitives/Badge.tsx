import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[10px] border border-s1-forest/60 bg-s1-forest/30 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-s1-sand/80',
        className,
      )}
      {...props}
    />
  )
}
