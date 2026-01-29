import { Section } from "../ui/Section"
import { Button } from "../../../components/ui/button"
import { getProfile } from "../../../lib/data-loader"
import Link from "next/link"

const profile = getProfile()

export function CallToActionSection() {
    return (
        <Section background="blue" padding="md">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Collaborate?
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-200">
                    Let&apos;s discuss how we can bring your ideas to life with modern, scalable web solutions.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-6">
                    <Button asChild size="lg" variant="secondary" className="min-h-[44px] bg-white text-blue-900 hover:bg-gray-100">
                        <Link href="#contact">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="min-h-[44px] text-white border-white hover:bg-white hover:text-blue-900">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View my projects on GitHub (opens in new tab)"
                        >
                            View Projects
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    )
}
