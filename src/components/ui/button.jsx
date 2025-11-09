import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary-500 text-bg-page hover:bg-primary-100 active:bg-primary-700 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-bg-surface2 text-text-primary hover:bg-border-interactive",
    ghost: "hover:bg-bg-surface2 text-text-primary",
  }
  
  const sizes = {
    default: "h-11 px-md py-md",
    sm: "h-9 px-sm py-sm text-sm",
    lg: "h-12 px-lg py-lg",
  }
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
