import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"

interface Language {
    name: string
    level: string
    proficiency: "native" | "advanced" | "intermediate" | "basic"
}

const languages: Language[] = [
    {
        name: "Spanish",
        level: "Native",
        proficiency: "native"
    },
    {
        name: "English",
        level: "C1 Advanced",
        proficiency: "advanced"
    }
]

const proficiencyColors = {
    native: "bg-green-100 text-green-800",
    advanced: "bg-blue-100 text-blue-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    basic: "bg-gray-100 text-gray-800"
}

export function LanguagesSection() {
    return (
        <Section id="languages">
            <SectionHeader
                title="Languages"
                description="Communication skills for global collaboration"
            />

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
                {languages.map((language) => (
                    <Card key={language.name} className="text-center">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900">
                                {language.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-gray-700 mb-3">
                                {language.level}
                            </p>
                            <Badge
                                variant="secondary"
                                className={`text-xs ${proficiencyColors[language.proficiency]}`}
                            >
                                {language.proficiency.charAt(0).toUpperCase() + language.proficiency.slice(1)}
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
