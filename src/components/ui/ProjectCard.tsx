'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Globe } from 'lucide-react'
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
                className="group relative bg-surface/30 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-500 hover:shadow-lg hover:bg-surface/40 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseMove={handleMouseMove}
            >
                {/* Project Header */}
                <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 break-words">
                                    {project.title}
                                </h3>
                                <span className="px-3 py-1 text-xs font-medium bg-primary/15 text-primary rounded-full flex-shrink-0 w-fit">
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 flex-shrink-0 ml-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-primary/15 text-primary hover:bg-primary/25 transition-all duration-200 hover:scale-110 active:scale-95"
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
                                className="p-2 rounded-lg bg-surface/25 text-foreground hover:bg-surface/35 transition-all duration-200 hover:scale-110 active:scale-95"
                                onMouseEnter={(e) => handleLinkHover(project.githubUrl, e)}
                                onMouseLeave={handleLinkLeave}
                                onMouseMove={handleMouseMove}
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <Image
                                    src="/github-mark-white.png"
                                    alt="GitHub"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
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
                                className="px-3 py-1 text-xs font-medium bg-surface/25 text-foreground-muted rounded-full hover:bg-surface/40 hover:text-foreground transition-all duration-200 animate-fade-in"
                                style={{ animationDelay: `${(index * 150) + (tagIndex * 50)}ms` }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
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
