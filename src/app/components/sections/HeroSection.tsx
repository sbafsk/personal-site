import { Button } from "../../../components/ui/button"
import { getProfile, type Profile } from "../../../lib/data-loader"
import Link from "next/link"
import React, { useCallback, useMemo } from 'react'

// Props interface following documented standards
interface HeroSectionProps {
  profile?: Profile
  onContactClick?: () => void
  onProjectsClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  profile: externalProfile,
  onContactClick,
  onProjectsClick 
}) => {
  const profile = useMemo(() => externalProfile ?? getProfile(), [externalProfile])
  
  // Event handlers with useCallback for performance
  const handleContactClick = useCallback(() => {
    onContactClick?.()
  }, [onContactClick])

  const handleProjectsClick = useCallback(() => {
    onProjectsClick?.()
  }, [onProjectsClick])

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-32 lg:py-40">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-12">
              <h1
                className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
                id="main-heading"
              >
                {profile.name}
              </h1>
              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-primary via-primary/80 to-primary/60 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-2xl leading-9 text-foreground font-semibold" role="doc-subtitle">
                {profile.title}
              </p>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {profile.tagline}
              </p>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {profile.subtitle}
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={handleContactClick}
                size="lg" 
                className="min-h-[56px] px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleProjectsClick}
                className="min-h-[56px] px-8 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-200"
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my projects on GitHub (opens in new tab)"
                >
                  View Projects <span aria-hidden="true" className="ml-2">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sophisticated background patterns */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient blob */}
        <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary/5 opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-primary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  )
}

// Memoized component for performance
export default React.memo(HeroSection, (prevProps, nextProps) => {
  return (
    prevProps.profile?.name === nextProps.profile?.name &&
    prevProps.profile?.title === nextProps.profile?.title &&
    prevProps.profile?.tagline === nextProps.profile?.tagline &&
    prevProps.onContactClick === nextProps.onContactClick &&
    prevProps.onProjectsClick === nextProps.onProjectsClick
  )
})
