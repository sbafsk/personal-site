import { MinimalLayout } from '@/components/layouts/MinimalLayout'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { getProjects } from '@/lib/data-loader'

const projects = getProjects()

export default function ProjectsPage() {
    return (
        <MinimalLayout>
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">
                        Projects
                    </h1>
                    <p className="text-base text-foreground-muted leading-relaxed">
                        A collection of projects I&apos;ve built, ranging from full-stack platforms to developer tools.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-20 pt-8 border-t border-border/50">
                    <p className="text-sm text-foreground-muted text-center">
                        More projects coming soon. Check out my{' '}
                        <a
                            href="https://github.com/sbafsk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>{' '}
                        for additional work.
                    </p>
                </div>
            </div>
        </MinimalLayout>
    )
}
