import { useState, useEffect, useCallback, ReactNode } from 'react'

// Data fetcher state following documented patterns
interface DataFetcherState<T> {
  data: T | null
  loading: boolean
  error: Error | null
  refetch: () => void
}

interface DataFetcherProps<T> {
  url?: string
  fetcher?: () => Promise<T>
  children: (state: DataFetcherState<T>) => ReactNode
  onError?: (error: Error) => void
  onSuccess?: (data: T) => void
}

/**
 * Render props component for data fetching
 * Following documented render props patterns for maximum reusability
 */
export function DataFetcher<T>({ 
  url, 
  fetcher, 
  children, 
  onError, 
  onSuccess 
}: DataFetcherProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      let result: T

      if (fetcher) {
        result = await fetcher()
      } else if (url) {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        result = await response.json()
      } else {
        throw new Error('Either url or fetcher prop must be provided')
      }

      setData(result)
      onSuccess?.(result)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }, [url, fetcher, onError, onSuccess])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return <>{children({ data, loading, error, refetch: fetchData })}</>
}

// Loading skeleton component
export const DataFetcherSkeleton: React.FC<{ className?: string }> = ({ 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    <div className="h-4 bg-muted rounded mb-2"></div>
    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-muted rounded w-1/2"></div>
  </div>
)

// Error message component
export const DataFetcherError: React.FC<{ 
  error: Error
  onRetry: () => void
  className?: string
}> = ({ error, onRetry, className = '' }) => (
  <div className={`flex flex-col items-center p-4 bg-danger/10 border border-danger/20 rounded-xl ${className}`}>
    <p className="text-danger text-sm mb-2">{error.message}</p>
    <button
      onClick={onRetry}
      className="px-3 py-1 bg-primary text-background text-xs rounded hover:bg-primary-hover transition-colors"
    >
      Try Again
    </button>
  </div>
)

// Empty state component
export const DataFetcherEmpty: React.FC<{ 
  message?: string
  className?: string
}> = ({ message = 'No data available', className = '' }) => (
  <div className={`flex items-center justify-center p-8 text-foreground-muted ${className}`}>
    <p className="text-sm">{message}</p>
  </div>
)

export default DataFetcher