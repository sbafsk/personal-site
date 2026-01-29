'use client'

import { ExternalLink, Globe, Github } from 'lucide-react'

interface ProjectPreview {
    title: string
    description: string
}

interface URLPreviewProps {
    url: string
    position: { x: number; y: number }
    project?: ProjectPreview
}

interface PreviewData {
    title: string
    description: string
    type: 'github' | 'website'
}

export function URLPreview({ url, position, project }: URLPreviewProps) {
    const isGitHub = url.includes('github.com')

    // Generate preview data
    const previewData: PreviewData = project
        ? {
            title: isGitHub ? url.split('github.com/')[1] ?? project.title : project.title,
            description: project.description,
            type: isGitHub ? 'github' : 'website'
        }
        : {
            title: isGitHub ? 'GitHub Repository' : 'External Link',
            description: isGitHub ? 'View source code and project details' : 'Click to visit this website',
            type: isGitHub ? 'github' : 'website'
        }

    // Calculate position to keep popup in viewport
    const popupWidth = 320
    const popupHeight = 120
    const margin = 16

    let adjustedX = position.x + 16
    let adjustedY = position.y - popupHeight - 16

    // Keep within viewport bounds
    if (typeof window !== 'undefined') {
        if (adjustedX + popupWidth > window.innerWidth - margin) {
            adjustedX = position.x - popupWidth - 16
        }
        if (adjustedY < margin) {
            adjustedY = position.y + 16
        }
    }

    const Icon = previewData.type === 'github' ? Github : Globe

    return (
        <div
            className="fixed z-[100] pointer-events-none animate-fade-in"
            style={{
                left: adjustedX,
                top: adjustedY,
            }}
        >
            <div className="bg-surface/90 backdrop-blur-xl rounded-xl p-4 shadow-glass border border-border/30 hover:border-border/40 max-w-[320px] animate-scale-in transition-colors duration-200">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground truncate">
                            {previewData.title}
                        </h4>
                        <p className="text-xs text-foreground-muted mt-0.5 line-clamp-2">
                            {previewData.description}
                        </p>
                    </div>
                </div>

                {/* URL */}
                <div className="flex items-center gap-2 text-xs text-foreground-muted">
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate font-mono">
                        {url.replace(/^https?:\/\//, '')}
                    </span>
                </div>

                {/* Subtle indicator dot */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2">
                    <div className="w-full h-full bg-primary/40 rounded-full animate-pulse-subtle shadow-glow-primary" />
                </div>
            </div>
        </div>
    )
}
