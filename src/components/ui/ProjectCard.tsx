'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { URLPreview } from '@/components/ui/URLPreview'

interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    liveUrl?: string
    githubUrl: string
    status: string
    type: string
}

interface ProjectCardProps {
    project: Project
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [hoveredUrl, setHoveredUrl] = useState<string | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleLinkHover = (url: string, e: React.MouseEvent) => {
        setHoveredUrl(url)
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleLinkLeave = () => {
        setHoveredUrl(null)
    }

    return (
        <>
            <article
                className="group relative bg-surface/8 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-border/50 transition-all duration-500 hover:shadow-glass hover:bg-surface/15 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={handleMouseMove}
            >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {project.title}
                            </h3>
                            <span className="px-3 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/20">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-sm text-foreground-muted font-medium">
                            {project.type}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-surface/25 text-foreground-muted rounded-full hover:bg-surface/40 hover:text-foreground border border-border/20 hover:border-border/30 transition-all duration-200 animate-fade-in"
                            style={{ animationDelay: `${(index * 150) + (tagIndex * 50)}ms` }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Links */}
                <div className="flex items-center gap-6 text-sm">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-200 group/link"
                            onMouseEnter={(e) => handleLinkHover(project.liveUrl!, e)}
                            onMouseLeave={handleLinkLeave}
                            onMouseMove={handleMouseMove}
                        >
                            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                            <span>Live Demo</span>
                        </a>
                    )}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors duration-200 group/link"
                        onMouseEnter={(e) => handleLinkHover(project.githubUrl, e)}
                        onMouseLeave={handleLinkLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-200" />
                        <span>Source Code</span>
                    </a>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </article>

            {/* URL Preview Popup */}
            {hoveredUrl && (
                <URLPreview
                    url={hoveredUrl}
                    position={mousePosition}
                    project={{ title: project.title, description: project.description }}
                />
            )}
        </>
    )
}
