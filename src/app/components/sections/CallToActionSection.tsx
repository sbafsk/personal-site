import { Section } from "../ui/Section"
import { Button } from "../../../components/ui/button"
import Link from "next/link"

export function CallToActionSection() {
    return (
        <Section background="blue" padding="md">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to Start Your Next Project?
                </h2>
                <p className="mt-4 text-lg leading-8 text-blue-100">
                    Let&apos;s discuss how we can bring your ideas to life with modern, scalable web solutions.
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-6">
                    <Button asChild size="lg" variant="secondary" className="min-h-[44px]">
                        <Link href="#contact">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="min-h-[44px] text-white border-white hover:bg-white hover:text-blue-600">
                        <a
                            href="https://github.com"
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
