'use client'

import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { getEducation } from "../../../lib/data-loader"
import { Download } from "lucide-react"

export function EducationSection() {
  const educationData = getEducation()

  return (
    <Section id="education" background="gray">
      <SectionHeader
        title="Education & Continuous Learning"
        description="Academic background and ongoing professional development"
      />

      <div className="mt-16 space-y-8">
        {educationData.map((education) => (
          <Card key={education.id} className="bg-card border-border">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {education.degree}
                  </CardTitle>
                  <p className="text-lg font-medium text-primary mt-1">
                    {education.institution}
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {education.period}
                  </p>
                </div>
                {education.id === "diploma" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      // TODO: Add actual diploma file download
                      // For now, show a user-friendly message
                      // In a real app, this would show a toast notification
                      // For now, we'll just prevent the action silently
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Diploma
                  </Button>
                )}
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <p className="text-card-foreground leading-relaxed">
                  {education.description}
                </p>

                {education.achievements && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-card-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-sm text-muted-foreground mt-3">
                  <strong>Relevance:</strong> {education.relevance}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
