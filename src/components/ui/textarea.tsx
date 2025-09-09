'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          // Dark theme specific styles matching your design system
          'bg-white/5 backdrop-blur-sm border-white/10 text-foreground placeholder:text-foreground-subtle',
          'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30',
          'hover:border-white/20 hover:bg-white/10 transition-all duration-300',
          'shadow-glass focus:shadow-glass-hover hover:animate-lift-hover resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }