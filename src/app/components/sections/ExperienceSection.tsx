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
                    <p className="text-gray-700 leading-relaxed">
                      {experience.description}
                    </p>
                    
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
