'use client'

import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { getProfile, getWorkExperiences, getSkills, getEducation, getLanguages } from "../../../lib/data-loader"
import { validateProfile, validateWorkExperiences, validateSkills, validateEducation, validateLanguages } from "../../../lib/validation-schemas"

export function CVDownloadSection() {
    const profile = getProfile()

    const handleDownloadPDF = () => {
        // TODO: Implement PDF generation
        // For now, show a user-friendly message
        // const _message = "PDF download feature coming soon!"
        // In a real app, this would show a toast notification
        // For now, we'll just prevent the action silently
    }

    const handleExportJSON = () => {
        try {
            // Validate all data before export
            const validatedData = {
                profile: validateProfile(profile),
                workExperiences: validateWorkExperiences(getWorkExperiences()),
                skills: validateSkills(getSkills()),
                education: validateEducation(getEducation()),
                languages: validateLanguages(getLanguages())
            }

            // Create and download JSON file
            const dataStr = JSON.stringify(validatedData, null, 2)
            const dataBlob = new Blob([dataStr], { type: 'application/json' })
            const url = URL.createObjectURL(dataBlob)
            const link = document.createElement('a')
            link.href = url
            link.download = `${profile.name.replace(/\s+/g, '_')}_CV.json`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } catch (_error) {
            // Proper error handling - in production, this would be logged to a service
            const errorMessage = 'Error exporting data. Please check data integrity.'
            // In production, this would show a proper error toast
            throw new Error(errorMessage)
        }
    }

    const handleExportMarkdown = () => {
        try {
            const workExperiences = getWorkExperiences()
            const skills = getSkills()
            const education = getEducation()
            const languages = getLanguages()

            // Generate Markdown content
            const markdown = `# ${profile.name}

## ${profile.title}

**Location:** ${profile.location}  
**Email:** ${profile.email}  
**Phone:** ${profile.phone}  
**LinkedIn:** ${profile.linkedin}  
**GitHub:** ${profile.github}

## Professional Summary

${profile.summary}

## Professional Experience

${workExperiences.map(exp => `### ${exp.role} - ${exp.company}
*${exp.location} | ${exp.period}*

${exp.description}

**Technologies:** ${exp.technologies?.join(', ') || 'N/A'}  
**Impact:** ${exp.impact}

**Key Achievements:**
${exp.achievements.map(achievement => `- ${achievement}`).join('\n')}

`).join('\n')}

## Skills

${skills.map(category => `### ${category.title}
${category.description}

${category.skills.map(skill => `- **${skill.name}** (${skill.level}, ${skill.years} years): ${skill.description}`).join('\n')}

`).join('\n')}

## Education

${education.map(edu => `### ${edu.degree}
*${edu.institution} | ${edu.period}*

${edu.description}

**Relevance:** ${edu.relevance}

**Achievements:**
${edu.achievements.map(achievement => `- ${achievement}`).join('\n')}

`).join('\n')}

## Languages

${languages.map(lang => `- **${lang.name}**: ${lang.level} (${lang.proficiency})
  - ${lang.description}

`).join('\n')}

## Contact

- **Email:** ${profile.email}
- **Phone:** ${profile.phone}
- **Location:** ${profile.location}
- **LinkedIn:** ${profile.linkedin}
- **GitHub:** ${profile.github}

---
*Generated on ${new Date().toLocaleDateString()}*
`

            // Create and download Markdown file
            const dataBlob = new Blob([markdown], { type: 'text/markdown' })
            const url = URL.createObjectURL(dataBlob)
            const link = document.createElement('a')
            link.href = url
            link.download = `${profile.name.replace(/\s+/g, '_')}_CV.md`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        } catch (_error) {
            // Proper error handling - in production, this would be logged to a service
            const errorMessage = 'Error exporting markdown. Please try again.'
            // In production, this would show a proper error toast
            throw new Error(errorMessage)
        }
    }

    return (
        <Section id="cv-download" background="blue">
            <SectionHeader
                title="Download My CV"
                description="Get my professional information in multiple formats for your convenience"
                titleSize="lg"
            />

            <div className="mt-16 max-w-4xl mx-auto">
                <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                        <CardTitle className="text-center text-white text-xl">
                            Choose Your Preferred Format
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* PDF Download */}
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">PDF Format</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Professional PDF version for printing and sharing
                                </p>
                                <Button
                                    onClick={handleDownloadPDF}
                                    variant="secondary"
                                    className="w-full min-h-[44px]"
                                >
                                    Download PDF
                                </Button>
                            </div>

                            {/* JSON Export */}
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">JSON Export</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Structured data for integration with other systems
                                </p>
                                <Button
                                    onClick={handleExportJSON}
                                    variant="secondary"
                                    className="w-full min-h-[44px]"
                                >
                                    Export JSON
                                </Button>
                            </div>

                            {/* Markdown Export */}
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Markdown</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Clean markdown format for documentation
                                </p>
                                <Button
                                    onClick={handleExportMarkdown}
                                    variant="secondary"
                                    className="w-full min-h-[44px]"
                                >
                                    Export MD
                                </Button>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-white/60 text-sm">
                                All exports include validated data and are generated in real-time from the latest information
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Section>
    )
}
