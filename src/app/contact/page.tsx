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
                    <h1 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">
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
                            <div className="flex items-center justify-between py-3 px-4 bg-surface rounded-lg hover:bg-surface-hover border border-border transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-foreground">Email</p>
                                    <p className="text-xs text-foreground-muted">Direct communication</p>
                                </div>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                                >
                                    {profile.email}
                                </a>
                            </div>

                            <div className="flex items-center justify-between py-3 px-4 bg-surface rounded-lg hover:bg-surface-hover border border-border transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                                    <p className="text-xs text-foreground-muted">Professional network</p>
                                </div>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                                >
                                    Connect
                                </a>
                            </div>

                            <div className="flex items-center justify-between py-3 px-4 bg-surface rounded-lg hover:bg-surface-hover border border-border transition-colors">
                                <div>
                                    <p className="text-sm font-medium text-foreground">Phone</p>
                                    <p className="text-xs text-foreground-muted">Direct call</p>
                                </div>
                                <a
                                    href={`tel:${profile.phone}`}
                                    className="text-sm text-primary hover:text-primary-hover font-medium transition-colors"
                                >
                                    {profile.phone}
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section>
                        <h2 className="text-lg font-medium text-foreground mb-6">
                            Send a Message
                        </h2>
                        <div className="bg-surface border border-border rounded-lg p-6">
                            <ContactForm />
                        </div>
                    </section>

                    {/* Availability */}
                    <section>
                        <h2 className="text-lg font-medium text-foreground mb-6">
                            Availability
                        </h2>
                        <div className="space-y-3 text-sm text-foreground-muted">
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3" />
                                <span>Open to new opportunities</span>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3" />
                                <span>Available for consulting projects</span>
                            </div>
                            <div className="flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-warning mr-3" />
                                <span>Timezone: UTC-3 (Montevideo, Uruguay)</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </MinimalLayout>
    )
}
