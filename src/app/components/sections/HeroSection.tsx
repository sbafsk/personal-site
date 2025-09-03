import { Button } from "../../../components/ui/button"
import { getProfile } from "../../../lib/data-loader"
import Link from "next/link"

export function HeroSection() {
  const profile = getProfile()
  
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" 
              id="main-heading"
            >
              {profile.name}
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600" role="doc-subtitle">
              {profile.title} with 7+ years of experience building and scaling modern web applications
            </p>
            
            <p className="mt-4 text-lg text-gray-500">
              {profile.tagline}
            </p>
            
            <p className="mt-4 text-lg text-gray-500">
              {profile.subtitle}
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="min-h-[44px]">
                <Link href="#contact">
                  Get in Touch
                </Link>
              </Button>
              
              <Button variant="ghost" size="lg" asChild className="min-h-[44px]">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View my projects on GitHub (opens in new tab)"
                >
                  View Projects <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  )
}
