import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { getEducation } from "../../../lib/data-loader"

export function EducationSection() {
  const educationHistory = getEducation()
  
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
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {education.description}
                    </p>
                    {education.achievements && education.achievements.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-gray-600 mb-2">Key Achievements:</p>
                        <ul className="space-y-1">
                          {education.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-3 italic">
                      {education.relevance}
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
