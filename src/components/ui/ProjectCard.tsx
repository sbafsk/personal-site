'use client'

import { useState } from 'react'
import { ExternalLink, Github, Globe } from 'lucide-react'
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
                className="group relative glass-card rounded-2xl p-8 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={handleMouseMove}
            >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="title-enhanced text-2xl font-semibold text-foreground cursor-pointer">
                                {project.title}
                            </h3>
                            <span className="px-3 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full border border-primary/20">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-sm text-foreground-muted font-medium transition-all duration-300 group-hover:scale-102 group-hover:italic group-hover:text-foreground/90">
                            {project.type}
                        </p>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="magnetic-button focus-glow p-2 rounded-lg bg-primary/15 text-primary hover:bg-primary/25 border border-primary/20 hover:border-primary/30"
                                onMouseEnter={(e) => handleLinkHover(project.liveUrl!, e)}
                                onMouseLeave={handleLinkLeave}
                                onMouseMove={handleMouseMove}
                                aria-label={`Visit ${project.title} live site`}
                            >
                                <Globe className="w-4 h-4" />
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="magnetic-button focus-glow p-2 rounded-lg bg-surface/25 text-foreground hover:bg-surface/35 border border-border/30 hover:border-border/50"
                            onMouseEnter={(e) => handleLinkHover(project.githubUrl, e)}
                            onMouseLeave={handleLinkLeave}
                            onMouseMove={handleMouseMove}
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <Github className="w-4 h-4" />
                        </a>
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
                            className="tag-hover px-3 py-1 text-xs font-medium bg-surface/25 text-foreground-muted rounded-full hover:bg-surface/40 hover:text-foreground border border-border/20 hover:border-border/30 cursor-pointer stagger-item"
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
                            className="link-underline flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-200 group/link focus-glow"
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
                        className="link-underline flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors duration-200 group/link focus-glow"
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
                />
            )}
        </>
    )
}
