'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          // Dark theme specific styles matching your design system
          'bg-white/5 backdrop-blur-sm border-white/10 text-foreground placeholder:text-foreground-subtle',
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30',
          'hover:border-white/20 hover:bg-white/10 transition-all duration-300',
          'shadow-glass focus:shadow-glass-hover hover:animate-lift-hover',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }