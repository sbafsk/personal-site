'use client'

import React from 'react'
import { useContactForm } from '@/hooks/useContactForm'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Props interface following documented standards
interface ContactFormProps {
  onSubmitSuccess?: () => void
  onSubmitError?: (error: string) => void
  className?: string
}

/**
 * Contact form component with React Hook Form + Zod validation
 * Following documented form handling standards
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmitSuccess,
  onSubmitError,
  className = ''
}) => {
  const {
    formState,
    handleSubmit,
    register,
    handleFormSubmit,
    errors,
    isSubmitting,
  } = useContactForm()

  // Handle form submission with proper error handling
  const onSubmit = handleFormSubmit(async (data) => {
    try {
      await handleSubmit(data)
      if (formState.status === 'success') {
        onSubmitSuccess?.()
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      onSubmitError?.(errorMessage)
    }
  })

  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      {/* Success Message */}
      {formState.status === 'success' && (
        <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl shadow-dark-sm animate-scale-in">
          <p className="text-sm text-secondary font-medium">
            {formState.message}
          </p>
        </div>
      )}

      {/* Error Message */}
      {formState.status === 'error' && (
        <div className="p-4 bg-danger/10 border border-danger/20 rounded-xl shadow-dark-sm animate-scale-in">
          <p className="text-sm text-danger font-medium">
            {formState.error}
          </p>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full ${errors.name ? 'border-danger focus:ring-danger/50' : ''}`}
            placeholder="Your name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-danger mt-1" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full ${errors.email ? 'border-danger focus:ring-danger/50' : ''}`}
            placeholder="your@email.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-danger mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Subject *
        </Label>
        <Input
          id="subject"
          type="text"
          {...register('subject')}
          className={`w-full ${errors.subject ? 'border-danger focus:ring-danger/50' : ''}`}
          placeholder="What's this about?"
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-sm text-danger mt-1" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </Label>
        <Textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full resize-none ${errors.message ? 'border-danger focus:ring-danger/50' : ''}`}
          placeholder="Tell me about your project or opportunity..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-danger mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[44px] px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
        >
          <span className={`flex items-center gap-2 transition-all duration-200 ${isSubmitting ? 'animate-pulse' : ''}`}>
            {isSubmitting && (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
        </Button>
      </div>
    </form>
  )
}

// Memoized component for performance
export default React.memo(ContactForm, (prevProps, nextProps) => {
  return (
    prevProps.onSubmitSuccess === nextProps.onSubmitSuccess &&
    prevProps.onSubmitError === nextProps.onSubmitError &&
    prevProps.className === nextProps.className
  )
})