import { Metadata } from 'next'
import { getEducation } from '@/lib/data-loader'
import { MinimalLayout } from '@/components/layouts/MinimalLayout'

export const metadata: Metadata = {
    title: 'Studies - Sebastián Pereira Rivero',
    description: 'Academic background and educational journey in technology and business management.',
}

export default function StudiesPage() {
    const education = getEducation()

    return (
        <MinimalLayout>
            <div className="max-w-2xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight title-hover cursor-pointer">
                        Studies
                    </h1>
                    <p className="text-base text-foreground-muted leading-relaxed">
                        Academic foundation combining technical expertise with business management principles.
                    </p>
                </div>

                <div className="space-y-16">
                    {education.map((study) => (
                        <article key={study.id} className="relative">
                            <div className="space-y-4">
                                <header>
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h2 className="text-lg font-medium text-foreground">
                                                {study.degree}
                                            </h2>
                                            <p className="text-sm text-foreground-muted">
                                                {study.institution}
                                            </p>
                                        </div>
                                        <time className="text-xs text-foreground-subtle font-mono tracking-wide">
                                            {study.period}
                                        </time>
                                    </div>
                                </header>

                                <div className="space-y-4">
                                    <p className="text-sm text-foreground-muted leading-relaxed">
                                        {study.description}
                                    </p>

                                    {study.achievements.length > 0 && (
                                        <div>
                                            <h3 className="text-sm font-medium text-foreground mb-2">
                                                Key Learning Areas
                                            </h3>
                                            <ul className="space-y-1">
                                                {study.achievements.map((achievement, index) => (
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

                                    <div className="pt-2 border-t border-border">
                                        <p className="text-xs text-foreground-subtle italic">
                                            Relevance: {study.relevance}
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
