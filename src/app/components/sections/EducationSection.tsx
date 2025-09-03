import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"

interface Education {
    id: string
    degree: string
    institution: string
    period: string
    status: "completed" | "in-progress"
    description?: string
}

const educationHistory: Education[] = [
    {
        id: "diploma",
        degree: "IT Business Management Diploma",
        institution: "European Open Business School",
        period: "Completed September 2025",
        status: "completed",
        description: "Comprehensive program covering business management principles in the IT sector"
    },
    {
        id: "programmer",
        degree: "Programmer Analyst",
        institution: "Universidad ORT Uruguay",
        period: "2018 – 2020",
        status: "completed",
        description: "Technical degree in software development and programming"
    },
    {
        id: "highschool",
        degree: "IT High School (Bachillerato)",
        institution: "ESI Buceo",
        period: "2010 – 2014",
        status: "completed",
        description: "High school education with focus on information technology"
    }
]

export function EducationSection() {
    return (
        <Section id="education" background="gray">
            <SectionHeader
                title="Education & Continuous Learning"
                description="My educational journey and commitment to continuous professional development"
            />

            <div className="mt-16 space-y-8">
                {educationHistory.map((education, index) => (
                    <div key={education.id} className="relative">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                            <span className="text-sm font-semibold">
                                {education.status === "completed" ? "✓" : "●"}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="ml-16">
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-900">
                                                {education.degree}
                                            </CardTitle>
                                            <p className="text-lg font-medium text-green-600 mt-1">
                                                {education.institution}
                                            </p>
                                            <p className="text-gray-600 mt-1">
                                                {education.period}
                                            </p>
                                        </div>
                                        <Badge
                                            variant={education.status === "completed" ? "default" : "secondary"}
                                            className="text-xs"
                                        >
                                            {education.status === "completed" ? "Completed" : "In Progress"}
                                        </Badge>
                                    </div>
                                </CardHeader>

                                {education.description && (
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">
                                            {education.description}
                                        </p>
                                    </CardContent>
                                )}
                            </Card>
                        </div>

                        {/* Timeline line (except for last item) */}
                        {index < educationHistory.length - 1 && (
                            <div className="absolute left-5 top-10 w-0.5 h-12 bg-gray-200"></div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    )
}
