import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { getSkills } from "../../../lib/data-loader"

export function SkillsSection() {
  const skillCategories = getSkills()
  
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
              <p className="text-sm text-gray-600 mt-1">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{skill.years}y</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                        skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
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
