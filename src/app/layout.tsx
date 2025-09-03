import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sebastián Pereira Rivero - Senior Full Stack Developer',
  description: 'Professional landing page showcasing Sebastián\'s experience as a Senior Full Stack Developer with project portfolio and contact form',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'GraphQL', 'Uruguay'],
  authors: [{ name: 'Sebastián Pereira Rivero' }],
  openGraph: {
    title: 'Sebastián Pereira Rivero - Senior Full Stack Developer',
    description: 'Professional landing page showcasing Sebastián\'s experience as a Senior Full Stack Developer',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Skip to Main Content Link */}
        <a href="#main-heading" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>
        
        {/* Navigation Header */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200" role="navigation" aria-label="Main navigation">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900" role="banner">SPR</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8" role="menubar">
                  <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to About section">
                    About
                  </a>
                  <a href="#skills" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Skills section">
                    Skills
                  </a>
                  <a href="#experience" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Experience section">
                    Experience
                  </a>
                  <a href="#education" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Education section">
                    Education
                  </a>
                  <a href="#languages" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Languages section">
                    Languages
                  </a>
                  <a href="#photos" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Photos section">
                    Photos
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" role="menuitem" aria-label="Go to Contact section">
                    Contact
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button 
                  className="text-gray-700 hover:text-blue-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                  aria-label="Toggle mobile menu"
                  aria-expanded="false"
                  aria-controls="mobile-menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content with top padding for fixed nav */}
        <div className="pt-16">
          {children}
        </div>
        
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
