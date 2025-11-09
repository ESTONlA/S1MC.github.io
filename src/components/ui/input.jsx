import * as React from "react"
import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, label, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-label text-text-secondary mb-2 block">
          {label}
        </label>
      )}
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md bg-bg-page border border-border-default px-md py-2 text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary-500 focus:shadow-glow-interactive disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
Input.displayName = "Input"

export { Input }
