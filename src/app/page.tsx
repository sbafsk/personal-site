import { getProfile } from '@/lib/data-loader'
import { MinimalLayout } from '@/components/layouts/MinimalLayout'

export default function Home() {
  const profile = getProfile()

  return (
    <MinimalLayout>
      <div className="max-w-2xl mx-auto">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-6 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-6">
            {profile.title} based in {profile.location}
          </p>
          <p className="text-base text-foreground-muted leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* About Section */}
        <div className="mb-16 space-y-12">
          <section>
            <h2 className="text-lg font-medium text-foreground mb-6">
              Background
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                {profile.bio}
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {profile.summary}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-6">
              Key Highlights
            </h2>
            <ul className="space-y-3">
              {profile.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start group cursor-default hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 hover:shadow-light-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0 group-hover:animate-bounce-subtle group-hover:shadow-glow-primary" />
                  <span className="text-sm text-foreground-muted leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium text-foreground mb-6">
              Location & Contact
            </h2>
            <div className="space-y-3 text-sm text-foreground-muted">
              <div className="flex items-center group hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 hover:shadow-light-sm">
                <span className="w-16 text-foreground-subtle group-hover:text-primary transition-colors duration-300">Location</span>
                <span className="group-hover:text-foreground transition-colors duration-300">{profile.location}</span>
              </div>
              <div className="flex items-center group hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 hover:shadow-light-sm">
                <span className="w-16 text-foreground-subtle group-hover:text-primary transition-colors duration-300">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:text-primary-hover transition-all duration-300 hover:animate-wiggle hover:shadow-glow-primary"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center group hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 hover:shadow-light-sm">
                <span className="w-16 text-foreground-subtle group-hover:text-primary transition-colors duration-300">LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-all duration-300 hover:animate-wiggle hover:shadow-glow-primary"
                >
                  View Profile
                </a>
              </div>
              <div className="flex items-center group hover:animate-list-hover transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm rounded-lg p-2 -mx-2 hover:shadow-light-sm">
                <span className="w-16 text-foreground-subtle group-hover:text-primary transition-colors duration-300">GitHub</span>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover transition-all duration-300 hover:animate-wiggle hover:shadow-glow-primary"
                >
                  View Repositories
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Current Status */}
        <div className="border-t border-border pt-8">
          <div className="flex items-center mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-3" />
            <span className="text-sm text-foreground-muted">Currently open to new opportunities</span>
          </div>
          <div className="space-y-2 text-sm text-foreground-subtle">
            <p>Based in Montevideo, Uruguay (UTC-3)</p>
            <p>Specialized in React, Next.js, TypeScript, and GraphQL</p>
          </div>
        </div>
      </div>
    </MinimalLayout>
  )
}
