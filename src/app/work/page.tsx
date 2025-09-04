import { Metadata } from 'next'
import { getWorkExperiences } from '@/lib/data-loader'
import { MinimalLayout } from '@/components/layouts/MinimalLayout'

export const metadata: Metadata = {
    title: 'Work - Sebastián Pereira Rivero',
    description: 'Professional experience and career journey in software development.',
}

export default function WorkPage() {
    const experiences = getWorkExperiences()

    return (
        <MinimalLayout>
            <div className="max-w-2xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">
                        Work
                    </h1>
                    <p className="text-base text-foreground-muted leading-relaxed">
                        Professional experience spanning full-stack development, automation, and team leadership.
                    </p>
                </div>

                <div className="space-y-16">
                    {experiences.map((experience) => (
                        <article key={experience.id} className="relative">
                            <div className="space-y-4">
                                <header>
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h2 className="text-lg font-medium text-foreground">
                                                {experience.role}
                                            </h2>
                                            <p className="text-sm text-foreground-muted">
                                                {experience.company} · {experience.location}
                                            </p>
                                        </div>
                                        <time className="text-xs text-foreground-subtle font-mono tracking-wide">
                                            {experience.period}
                                        </time>
                                    </div>
                                </header>

                                <div className="space-y-4">
                                    <p className="text-sm text-foreground-muted leading-relaxed">
                                        {experience.description}
                                    </p>

                                    {experience.achievements.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-medium text-foreground mb-2">
                                                Key Achievements
                                            </h3>
                                            <ul className="space-y-1">
                                                {experience.achievements.map((achievement, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="inline-block w-1 h-1 rounded-full bg-foreground-subtle mt-2 mr-3 flex-shrink-0" />
                                                        <span className="text-xs text-foreground-muted leading-relaxed">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {experience.technologies.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-medium text-foreground mb-2">
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-1">
                                                {experience.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface text-foreground-muted border border-border"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-2 border-t border-border">
                                        <p className="text-xs text-foreground-subtle italic">
                                            Impact: {experience.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </MinimalLayout>
    )
}
