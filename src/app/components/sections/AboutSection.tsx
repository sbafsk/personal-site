import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"

export function AboutSection() {
    return (
        <Section id="about" ariaLabelledby="about-heading">
            <SectionHeader
                title="About Me"
                description="Full Stack Developer with 7+ years of experience building and scaling modern web applications. Specialized in React, Next.js, and TypeScript, with additional expertise in GraphQL integrations, rapid prototyping, and UX optimization. Adept at working in agile, distributed teams and mentoring peers."
            />

            <div className="mt-8 mx-auto max-w-3xl">
                <p className="text-lg leading-8 text-gray-600">
                    My background began in automation and scripting, giving me a unique foundation in systems thinking and efficiency.
                    I&apos;m focused on product quality, performance, and innovation, with growing experience in AI/automation practices
                    (Cursor AI, MCP, BMAD).
                </p>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                    Recently completed my IT Business Management Diploma while keeping my technical skills sharp through personal projects
                    and exploring emerging AI development practices.
                </p>
            </div>
        </Section>
    )
}
