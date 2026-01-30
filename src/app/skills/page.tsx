import { Metadata } from 'next'
import { getSkills, getProfile } from '@/lib/data-loader'
import { MinimalLayout } from '@/components/layouts/MinimalLayout'

const profile = getProfile()

export const metadata: Metadata = {
    title: `Skills - ${profile.name}`,
    description: 'Technical skills and expertise across frontend, backend, and modern development practices.',
}

export default function SkillsPage() {
    const skillCategories = getSkills()
    const yearsOfExperience = new Date().getFullYear() - profile.careerStartYear


    return (
        <MinimalLayout>
            <div className="max-w-2xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">
                        Skills
                    </h1>
                    <p className="text-base text-foreground-muted leading-relaxed">
                        Technical expertise developed over {yearsOfExperience}+ years in software development and automation.
                    </p>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category) => (
                        <section key={category.title}>
                            <div className="mb-8">
                                <h2 className="text-lg font-medium text-foreground mb-2">
                                    {category.title}
                                </h2>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="group hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-3 -mx-3 hover:shadow-light-sm cursor-default"
                                        style={{ animationDelay: `${index * 80}ms` }}
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex-1">
                                                <div className="mb-1">
                                                    <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                                        {skill.name}
                                                    </h3>
                                                </div>
                                                <p className="text-xs text-foreground-muted leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                                    {skill.description}
                                                </p>
                                            </div>
                                            <div className="text-right ml-4">
                                                <span className="text-xs text-foreground-subtle font-mono group-hover:text-secondary group-hover:animate-bounce-subtle transition-all duration-300">
                                                    {skill.years} year{skill.years !== 1 ? 's' : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-xs text-foreground-subtle italic">
                        Continuously learning and adapting to new technologies and methodologies in the evolving landscape of software development.
                    </p>
                </div>
            </div>
        </MinimalLayout>
    )
}
