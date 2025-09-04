import { Section } from "../ui/Section"
import { SectionHeader } from "../ui/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { getProfile } from "../../../lib/data-loader"
import { ContactForm } from "../ContactForm"

export function ContactSection() {
  const profile = getProfile()

  return (
    <Section id="contact">
      <SectionHeader
        title="Get In Touch"
        description="Ready to discuss your next project? Let's connect and explore how we can work together."
      />

      <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <Card className="bg-card border-border group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-primary hover:text-primary/80">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-primary hover:text-primary/80">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Location</p>
                  <p className="text-card-foreground">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Professional Links</p>
                  <div className="flex space-x-2">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      LinkedIn
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="bg-card border-border group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-card-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
