import { Metadata } from 'next'
import { getProfile } from '@/lib/data-loader'
import { MinimalLayout } from '@/components/layouts/MinimalLayout'
import { ContactForm } from '@/app/components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact - Sebastián Pereira Rivero',
    description: 'Get in touch for collaboration opportunities, questions, or just to connect.',
}

export default function ContactPage() {
    const profile = getProfile()

    return (
        <MinimalLayout>
            <div className="max-w-2xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight title-hover cursor-pointer">
                        Contact
                    </h1>
                    <p className="text-base text-foreground-muted leading-relaxed">
                        Let&apos;s discuss opportunities, projects, or just connect. I&apos;m always interested in meaningful conversations about technology and development.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Quick Contact Options */}
                    <section>
                        <h2 className="text-lg font-medium text-foreground mb-6">
                            Quick Connect
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-3 px-4 bg-surface/30 backdrop-blur-sm rounded-lg hover:bg-surface/50 hover:backdrop-blur-md transition-all duration-300 group">
                                <div>
                                    <p className="text-sm font-medium text-foreground group-hover:text-foreground/90 transition-colors">Email</p>
                                    <p className="text-xs text-foreground-muted group-hover:text-foreground-muted/80 transition-colors">Direct communication</p>
                                </div>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-sm text-primary hover:text-primary-hover font-medium transition-all duration-300 hover:scale-105"
                                >
                                    {profile.email}
                                </a>
                            </div>

                            <div className="flex items-center justify-between py-3 px-4 bg-surface/30 backdrop-blur-sm rounded-lg hover:bg-surface/50 hover:backdrop-blur-md transition-all duration-300 group">
                                <div>
                                    <p className="text-sm font-medium text-foreground group-hover:text-foreground/90 transition-colors">LinkedIn</p>
                                    <p className="text-xs text-foreground-muted group-hover:text-foreground-muted/80 transition-colors">Professional network</p>
                                </div>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:text-primary-hover font-medium transition-all duration-300 hover:scale-105"
                                >
                                    Connect
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section>
                        <h2 className="text-lg font-medium text-foreground mb-6 group-hover:text-foreground/90 transition-colors">
                            Send a Message
                        </h2>
                        <div className="bg-white/4 backdrop-blur-md rounded-lg p-6  hover:backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-500">
                            <ContactForm />
                        </div>
                    </section>

                    {/* Availability */}
                    <section>
                        <h2 className="text-lg font-medium text-foreground mb-6 group-hover:text-foreground/90 transition-colors">
                            Availability
                        </h2>
                        <div className="space-y-3 text-sm text-foreground-muted">
                            <div className="flex items-center group/availability hover:bg-surface/20 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 transition-all duration-300">
                                <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3 group-hover/availability:scale-110 transition-transform duration-300" />
                                <span className="group-hover/availability:text-foreground-muted/90 transition-colors">Open to new opportunities</span>
                            </div>
                            <div className="flex items-center group/availability hover:bg-surface/20 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 transition-all duration-300">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 group-hover/availability:scale-110 transition-transform duration-300" />
                                <span className="group-hover/availability:text-foreground-muted/90 transition-colors">Available for consulting projects</span>
                            </div>
                            <div className="flex items-center group/availability hover:bg-surface/20 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 transition-all duration-300">
                                <span className="inline-block w-2 h-2 rounded-full bg-warning mr-3 group-hover/availability:scale-110 transition-transform duration-300" />
                                <span className="group-hover/availability:text-foreground-muted/90 transition-colors">Timezone: UTC-3 (Montevideo, Uruguay)</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </MinimalLayout>
    )
}
