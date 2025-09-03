import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { getLanguages } from "../../../lib/data-loader"

export function LanguagesSection() {
  const languages = getLanguages()
  
  const proficiencyColors = {
    native: "bg-green-100 text-green-800",
    advanced: "bg-blue-100 text-blue-800",
    intermediate: "bg-yellow-100 text-yellow-800",
    basic: "bg-gray-100 text-gray-800"
  }
  
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
              <p className="text-sm text-gray-600 mb-3">
                {language.description}
              </p>
              <Badge 
                variant="secondary" 
                className={`text-xs ${proficiencyColors[language.proficiency as keyof typeof proficiencyColors]}`}
              >
                {language.proficiency.charAt(0).toUpperCase() + language.proficiency.slice(1)}
              </Badge>
              <div className="mt-3">
                <p className="text-xs text-gray-500 mb-2">Usage:</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {language.usage.map((usage, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {usage}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
