import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { getSkills, type SkillCategory } from "../../../lib/data-loader"
import React, { useMemo } from 'react'

// Props interface following documented standards
interface SkillsSectionProps {
  skillCategories?: SkillCategory[]
  showYearsOfExperience?: boolean
  onSkillClick?: (skillName: string, category: string) => void
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ 
  skillCategories: externalSkills,
  showYearsOfExperience = true,
  onSkillClick 
}) => {
  const skillCategories = useMemo(() => externalSkills ?? getSkills(), [externalSkills])

  return (
    <Section id="skills" background="gray">
      <SectionHeader
        title="Full Stack Expertise"
        description="A comprehensive full-stack toolkit for building modern, scalable web applications"
      />

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title} className="h-full bg-card border-border group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-200">
                {category.title}
              </CardTitle>
              <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between cursor-pointer hover:bg-muted/20 p-2 rounded-lg transition-colors"
                    onClick={() => onSkillClick?.(skill.name, category.title)}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-card-foreground">{skill.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {showYearsOfExperience && (
                        <span className="text-xs text-muted-foreground">{skill.years}y</span>
                      )}
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${skill.level === 'Expert' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                            'bg-muted text-muted-foreground border border-border'
                        }`}>
                        {skill.level}
                      </span>
                    </div>
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

// Memoized component for performance
export default React.memo(SkillsSection, (prevProps, nextProps) => {
  return (
    prevProps.skillCategories === nextProps.skillCategories &&
    prevProps.showYearsOfExperience === nextProps.showYearsOfExperience &&
    prevProps.onSkillClick === nextProps.onSkillClick
  )
})
