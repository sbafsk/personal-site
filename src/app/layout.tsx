import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { FloatingSidebar } from '@/components/FloatingSidebar'
import { getProfile } from '@/lib/data-loader'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const profile = getProfile()

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: profile.siteDescription,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description: profile.siteDescription,
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth bg-background`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-background text-foreground min-h-screen relative">
        <div className="fixed inset-0 bg-mesh-dark opacity-40 animate-mesh-float pointer-events-none"></div>
        <div className="relative z-10">
          {/* Skip to Main Content Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 bg-primary text-background px-4 py-2 rounded-md z-50 text-sm"
          >
            Skip to main content
          </a>

          {/* Floating Sidebar Navigation */}
          <FloatingSidebar />

          {/* Main Content */}
          <div id="main-content" className="min-h-screen">
            {children}
          </div>

          {/* Vercel Analytics */}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
