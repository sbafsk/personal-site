import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { getWorkExperiences } from "../../../lib/data-loader"

export function ExperienceSection() {
  const workExperiences = getWorkExperiences()

  return (
    <Section id="experience">
      <SectionHeader
        title="Professional Experience"
        description="A journey through my professional growth, from automation scripting to full-stack development"
      />

      <div className="mt-20 space-y-16">
        {workExperiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Enhanced timeline bullet point */}
            <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary border-2 border-background shadow-lg"></div>
            </div>

            {/* Content */}
            <div className="ml-10">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold text-card-foreground">
                        {experience.role}
                      </CardTitle>
                      <p className="text-lg font-medium text-primary mt-1">
                        {experience.company}
                      </p>
                      <p className="text-muted-foreground mt-1">
                        {experience.location} | {experience.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <p className="text-card-foreground leading-relaxed">
                      {experience.description}
                    </p>

                    {experience.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-muted text-muted-foreground border-border">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced timeline line (except for last item) */}
            {index < workExperiences.length - 1 && (
              <div className="absolute left-2 top-4 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-border"></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
