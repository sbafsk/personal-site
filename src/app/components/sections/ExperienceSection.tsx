import { Section } from "@/components/ui/Section"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface WorkExperience {
    id: string
    company: string
    role: string
    location: string
    period: string
    description: string[]
    technologies?: string[]
}

const workExperiences: WorkExperience[] = [
    {
        id: "mimiquate",
        company: "Mimiquate",
        role: "Software Engineer",
        location: "Montevideo, Uruguay",
        period: "January 2024 to April 2024",
        description: [
            "Led the development of a project management tool using Elixir and Phoenix, focusing on rapid prototyping and robust backend architecture",
            "Mentored junior developers and led internal code reviews and tech talks to improve team-wide technical skills and collaboration practices",
            "Enhanced collaboration practices within a fast-moving team"
        ],
        technologies: ["Elixir", "Phoenix", "PostgreSQL"]
    },
    {
        id: "occupier",
        company: "Occupier",
        role: "Frontend Engineer",
        location: "Remote",
        period: "October 2021 to August 2023",
        description: [
            "Key contributor to a lease accounting SaaS used by over 5,000 daily users, delivering features that significantly improved UX and client retention",
            "Spearheaded the migration of core data models from REST to GraphQL, boosting application performance and developer efficiency",
            "Partnered closely with product and design teams to prototype and validate new features, ensuring a user-centric approach from ideation to launch"
        ],
        technologies: ["React", "Next.js", "TypeScript", "GraphQL"]
    },
    {
        id: "basf",
        company: "BASF Services America",
        role: "RPA Developer",
        location: "Montevideo, Uruguay",
        period: "January 2020 to August 2020",
        description: [
            "Automated complex financial workflows, resulting in annual savings of over 500 hours of manual labor",
            "Built automation bots that reduced financial closing times from one week to just a few hours"
        ],
        technologies: ["UiPath", "Automation", "Financial Systems"]
    },
    {
        id: "intermedia",
        company: "Intermedia",
        role: "RPA Developer",
        location: "Montevideo, Uruguay",
        period: "November 2018 to December 2019",
        description: [
            "Developed over 30 automation bots across multiple departments, driving efficiency and reducing manual tasks",
            "Supported the company's transition to an agile methodology (Scrum), helping improve team-wide collaboration"
        ],
        technologies: ["UiPath", "Agile", "Scrum", "Automation"]
    },
    {
        id: "asignet",
        company: "Asignet",
        role: "Script Developer",
        location: "Montevideo, Uruguay",
        period: "September 2016 to November 2018",
        description: [
            "Created over 100 invoice scripts and 40 parsers for data extraction, significantly improving data processing capabilities"
        ],
        technologies: ["Scripting", "Data Processing", "Automation"]
    }
]

export function ExperienceSection() {
    return (
        <Section id="experience">
            <SectionHeader
                title="Professional Experience"
                description="A journey through my professional growth, from automation scripting to full-stack development"
            />

            <div className="mt-16 space-y-12">
                {workExperiences.map((experience, index) => (
                    <div key={experience.id} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                            <span className="text-sm font-semibold">{experience.period.split(' ')[0]}</span>
                        </div>

                        {/* Content */}
                        <div className="ml-16">
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-900">
                                                {experience.role}
                                            </CardTitle>
                                            <p className="text-lg font-medium text-blue-600 mt-1">
                                                {experience.company}
                                            </p>
                                            <p className="text-gray-600 mt-1">
                                                {experience.location} | {experience.period}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <div className="space-y-3">
                                        {experience.description.map((desc, descIndex) => (
                                            <p key={descIndex} className="text-gray-700 leading-relaxed">
                                                {desc}
                                            </p>
                                        ))}

                                        {experience.technologies && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {experience.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Timeline line (except for last item) */}
                        {index < workExperiences.length - 1 && (
                            <div className="absolute left-5 top-10 w-0.5 h-12 bg-gray-200"></div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    )
}
