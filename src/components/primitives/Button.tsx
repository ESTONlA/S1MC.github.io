import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-s1-sand text-s1-ink shadow-glow hover:bg-s1-sand-dark hover:shadow-glow/80 focus-visible:outline-s1-sand/80 active:translate-y-[1px] transition-all duration-200',
  secondary:
    'border border-s1-forest/50 bg-layer-1/50 text-s1-sand shadow-highlight hover:border-s1-sand hover:bg-layer-1 focus-visible:outline-s1-sand/60 active:translate-y-[1px] transition-all duration-200',
  ghost:
    'text-s1-sand/80 hover:text-s1-sand hover:bg-layer-1/30 focus-visible:outline-s1-sand/50 active:translate-y-[1px] transition-all duration-200',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  asChild?: boolean
  href?: string
  target?: string
  rel?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, type, ...props }, ref) => {
    const Component = asChild ? Slot : 'button'
    const resolvedProps =
      !type && !asChild ? { type: 'button' as const, ...props } : { type, ...props }

    return (
      <Component
        ref={asChild ? undefined : ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-transparent px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] transition motion-reduce:transition-none',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          variantStyles[variant],
          className,
        )}
        {...resolvedProps}
      />
    )
  },
)

Button.displayName = 'Button'
