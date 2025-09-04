interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8'
    }

    return (
        <div className={`${sizeClasses[size]} ${className}`}>
            <div className="animate-spin rounded-full border-2 border-border border-t-primary"></div>
        </div>
    )
}

export function LoadingDots({ className = '' }: { className?: string }) {
    return (
        <div className={`flex space-x-1 ${className}`}>
            <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-foreground-muted rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
    )
}

export function LoadingBar({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full h-1 bg-surface rounded-full overflow-hidden ${className}`}>
            <div className="h-full bg-primary rounded-full animate-shimmer relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
        </div>
    )
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number, className?: string }) {
    return (
        <div className={`space-y-3 ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className={`h-4 bg-surface rounded animate-pulse ${i === lines - 1 ? 'w-3/4' : 'w-full'
                        }`}
                />
            ))}
        </div>
    )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
    return (
        <div className={`p-6 bg-surface border border-border rounded-lg ${className}`}>
            <div className="animate-pulse">
                <div className="h-6 bg-surface-hover rounded mb-4 w-3/4"></div>
                <div className="space-y-3">
                    <div className="h-4 bg-surface-hover rounded w-full"></div>
                    <div className="h-4 bg-surface-hover rounded w-5/6"></div>
                    <div className="h-4 bg-surface-hover rounded w-4/6"></div>
                </div>
            </div>
        </div>
    )
}
