import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { getProfile } from "../../../lib/data-loader"

export function AboutSection() {
    const profile = getProfile()

    return (
        <Section id="about" ariaLabelledby="about-heading">
            <SectionHeader
                title="About Me"
                description={profile.summary}
            />

            <div className="mt-8 mx-auto max-w-3xl">
                <p className="text-lg leading-8 text-foreground">
                    {profile.bio}
                </p>
            </div>
        </Section>
    )
}
