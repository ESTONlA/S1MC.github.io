import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10',
        className,
      )}
      {...props}
    />
  )
}
