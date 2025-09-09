import React, { Component, ErrorInfo } from 'react'
import { ServiceError } from '@/services/interfaces'

// Error boundary state
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

// Props for error boundary HOC
interface WithErrorBoundaryOptions {
  fallbackComponent?: React.ComponentType<{ error: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

/**
 * Error boundary component following documented patterns
 * Implements proper error hierarchy handling
 */
class ErrorBoundaryComponent extends Component<
  { children: React.ReactNode; options: WithErrorBoundaryOptions },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; options: WithErrorBoundaryOptions }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props.options

    if (error instanceof ServiceError) {
      // Log business errors differently
      // eslint-disable-next-line no-console
      console.error('Service Error:', {
        code: error.code,
        message: error.message,
        context: error.context,
        componentStack: errorInfo.componentStack
      })
    } else {
      // Log technical errors
      // eslint-disable-next-line no-console
      console.error('Technical Error:', error, errorInfo)
    }

    onError?.(error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  override render() {
    if (this.state.hasError && this.state.error) {
      const { fallbackComponent: FallbackComponent } = this.props.options

      if (FallbackComponent) {
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ 
  error, 
  resetError 
}) => (
  <div className="flex flex-col items-center justify-center p-8 bg-danger/10 border border-danger/20 rounded-xl">
    <div className="text-center">
      <h2 className="text-lg font-semibold text-danger mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-foreground-muted mb-4">
        {error.message || 'An unexpected error occurred'}
      </p>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-hover transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
)

/**
 * HOC for adding error boundary to components
 * Following documented HOC patterns
 */
export function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithErrorBoundaryOptions = {}
) {
  const ComponentWithErrorBoundary = (props: P) => (
    <ErrorBoundaryComponent options={options}>
      <WrappedComponent {...props} />
    </ErrorBoundaryComponent>
  )

  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`

  return ComponentWithErrorBoundary
}

export default withErrorBoundary