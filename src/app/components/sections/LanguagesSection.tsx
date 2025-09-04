import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { getLanguages } from "../../../lib/data-loader"

export function LanguagesSection() {
  const languagesData = getLanguages()

  return (
    <Section id="languages">
      <SectionHeader
        title="Languages"
        description="Communication skills for global collaboration"
      />

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {languagesData.map((language) => (
          <Card key={language.name} className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-card-foreground">
                {language.name}
              </CardTitle>
              <div className="flex items-center justify-between">
                <Badge
                  variant={language.proficiency === "native" ? "default" : "secondary"}
                  className={`text-xs ${language.proficiency === "native"
                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                    : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    }`}
                >
                  {language.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-card-foreground text-sm leading-relaxed">
                  {language.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
