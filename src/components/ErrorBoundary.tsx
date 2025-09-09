import React, { Component, ErrorInfo } from 'react'
import { ServiceError, ContactSubmissionError, EmailDeliveryError, ValidationError } from '@/services/interfaces'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * Main error boundary component following documented error hierarchy
 * Handles different error types appropriately
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props

    // Log errors according to their type
    if (error instanceof ServiceError) {
      // eslint-disable-next-line no-console
      console.error('Service Error:', {
        code: error.code,
        message: error.message,
        context: error.context,
        componentStack: errorInfo.componentStack
      })
    } else {
      // eslint-disable-next-line no-console
      console.error('Unexpected Error:', error, errorInfo)
    }

    onError?.(error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  override render() {
    if (this.state.hasError && this.state.error) {
      const { fallback: FallbackComponent } = this.props
      
      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      // Render appropriate error UI based on error type
      if (this.state.error instanceof ContactSubmissionError) {
        return <ContactFormError error={this.state.error} resetError={this.resetError} />
      }

      if (this.state.error instanceof EmailDeliveryError) {
        return <EmailError resetError={this.resetError} />
      }

      if (this.state.error instanceof ValidationError) {
        return <ValidationErrorUI error={this.state.error} resetError={this.resetError} />
      }

      return <GenericError error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

// Specific error UI components
const ContactFormError: React.FC<{ 
  error: ContactSubmissionError
  resetError: () => void 
}> = ({ error, resetError }) => (
  <div className="p-6 bg-danger/10 border border-danger/20 rounded-xl max-w-md mx-auto">
    <div className="text-center">
      <div className="w-12 h-12 bg-danger/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-danger mb-2">
        Message Not Sent
      </h3>
      <p className="text-sm text-foreground-muted mb-4">
        {error.message}
      </p>
      <p className="text-xs text-foreground-subtle mb-4">
        Please try again or contact me directly at spereirarivero93@gmail.com
      </p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-hover transition-colors text-sm"
      >
        Try Again
      </button>
    </div>
  </div>
)

const EmailError: React.FC<{ 
  resetError: () => void 
}> = ({ resetError }) => (
  <div className="p-6 bg-warning/10 border border-warning/20 rounded-xl max-w-md mx-auto">
    <div className="text-center">
      <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-warning mb-2">
        Email Service Issue
      </h3>
      <p className="text-sm text-foreground-muted mb-4">
        There was a problem with our email service. Your message couldn&apos;t be delivered.
      </p>
      <div className="flex gap-2 justify-center">
        <button
          onClick={resetError}
          className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-hover transition-colors text-sm"
        >
          Try Again
        </button>
        <a
          href="mailto:spereirarivero93@gmail.com"
          className="px-4 py-2 bg-secondary text-background rounded-lg hover:bg-secondary-hover transition-colors text-sm"
        >
          Email Directly
        </a>
      </div>
    </div>
  </div>
)

const ValidationErrorUI: React.FC<{ 
  error: ValidationError
  resetError: () => void 
}> = ({ error, resetError }) => (
  <div className="p-6 bg-warning/10 border border-warning/20 rounded-xl max-w-md mx-auto">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-warning mb-2">
        Invalid Information
      </h3>
      <p className="text-sm text-foreground-muted mb-4">
        {error.message}
      </p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-hover transition-colors text-sm"
      >
        Fix Form
      </button>
    </div>
  </div>
)

const GenericError: React.FC<{ 
  error: Error
  resetError: () => void 
}> = ({ error, resetError }) => (
  <div className="p-6 bg-danger/10 border border-danger/20 rounded-xl max-w-md mx-auto">
    <div className="text-center">
      <h3 className="text-lg font-semibold text-danger mb-2">
        Something went wrong
      </h3>
      <p className="text-sm text-foreground-muted mb-4">
        {error.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-hover transition-colors text-sm"
      >
        Try Again
      </button>
    </div>
  </div>
)

export default ErrorBoundary