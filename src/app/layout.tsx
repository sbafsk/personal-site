import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { FloatingSidebar } from '@/components/FloatingSidebar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sebastián Pereira Rivero - Senior Full Stack Developer',
  description: 'Senior Full Stack Developer specializing in React, Next.js, TypeScript, and modern web development practices.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'GraphQL', 'Uruguay', 'Software Engineer'],
  authors: [{ name: 'Sebastián Pereira Rivero' }],
  openGraph: {
    title: 'Sebastián Pereira Rivero - Senior Full Stack Developer',
    description: 'Senior Full Stack Developer specializing in React, Next.js, TypeScript, and modern web development practices.',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased min-h-screen relative">
        <ThemeProvider>
          {/* Theme-aware mesh background */}
          <div className="fixed inset-0 bg-mesh-light dark:bg-mesh-custom-dark opacity-80 animate-mesh-ultra-slow pointer-events-none transition-opacity duration-300" style={{ transform: 'translate3d(0,0,0)' }}></div>

          <div className="relative z-10 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark min-h-screen transition-colors duration-300">
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
        </ThemeProvider>
      </body>
    </html>
  )
}
