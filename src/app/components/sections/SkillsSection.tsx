import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

interface SkillCategory {
    title: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["React & Next.js", "TypeScript & JavaScript", "React Native", "HTML5 & CSS3"]
    },
    {
        title: "Backend & APIs",
        skills: ["GraphQL", "NestJS", "Ruby on Rails", "Phoenix (Elixir)", "REST APIs"]
    },
    {
        title: "AI & Automation",
        skills: ["Prompt Engineering", "AI-assisted development", "RPA (Robotic Process Automation)"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["Jest", "Git", "CI/CD", "Vercel", "AWS basics"]
    },
    {
        title: "Databases",
        skills: ["PostgreSQL", "SQL"]
    }
]

export function SkillsSection() {
    return (
        <Section id="skills" background="gray">
            <SectionHeader
                title="Full Stack Expertise"
                description="A comprehensive full-stack toolkit for building modern, scalable web applications"
            />

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => (
                    <Card key={category.title} className="h-full">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                                {category.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {category.skills.map((skill) => (
                                    <div key={skill} className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        <span className="text-gray-700">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
