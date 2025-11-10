import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[20px] bg-s1-deep/60 px-6 py-8 text-s1-sand shadow-card backdrop-blur-[2px] transition duration-200 hover:-translate-y-0.5 hover:shadow-card-strong motion-reduce:transform-none',
        className,
      )}
      {...props}
    />
  )
}
