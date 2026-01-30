import { render, screen } from '@testing-library/react'
import { AboutSection } from '../AboutSection'
import { getProfile } from '@/lib/data-loader'

// Mock the data loader
jest.mock('@/lib/data-loader')

const mockGetProfile = getProfile as jest.MockedFunction<typeof getProfile>

const mockProfile = {
  name: 'John Doe',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  timezone: 'UTC-8',
  email: 'john@example.com',
  phone: '+1-555-0123',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
  careerStartYear: 2018,
  siteDescription: 'Senior Frontend Developer specializing in React and TypeScript.',
  keywords: ['Frontend Developer', 'React', 'TypeScript'],
  summary: 'Experienced developer passionate about creating amazing user experiences',
  bio: 'I am a passionate developer with over 7 years of experience building scalable web applications and mentoring teams.',
  tagline: 'Building exceptional digital experiences with modern technologies',
  subtitle: 'Specialized in React, TypeScript, and modern web development',
  highlights: ['React Expert', 'TypeScript', 'Node.js'],
}

describe('AboutSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockGetProfile.mockReturnValue(mockProfile)
  })

  it('should render about section with profile data', () => {
    render(<AboutSection />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(mockProfile.summary)).toBeInTheDocument()
    expect(screen.getByText(mockProfile.bio)).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(<AboutSection />)

    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'about')
    expect(section).toHaveAttribute('aria-labelledby', 'about-heading')

    const heading = screen.getByRole('heading', { level: 2, name: 'About Me' })
    expect(heading).toBeInTheDocument()
  })

  it('should have proper layout and styling', () => {
    render(<AboutSection />)

    // Check section container
    const section = document.querySelector('section')
    expect(section).toHaveClass('py-32', 'bg-background')

    // Check content container
    const contentContainer = document.querySelector('.mx-auto.max-w-7xl')
    expect(contentContainer).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')

    // Check bio content container
    const bioContainer = document.querySelector('.max-w-3xl')
    expect(bioContainer).toHaveClass('mt-8', 'mx-auto')

    // Check bio text styling
    const bioText = screen.getByText(mockProfile.bio)
    expect(bioText).toHaveClass('text-lg', 'leading-8', 'text-foreground')
  })

  it('should render section header with proper styling', () => {
    render(<AboutSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'tracking-tight')

    // Check for gradient line
    const gradientLine = document.querySelector('.bg-gradient-to-r.from-primary')
    expect(gradientLine).toHaveClass('h-1', 'w-20', 'rounded-full')

    // Check description text
    const description = screen.getByText(mockProfile.summary)
    expect(description).toHaveClass('text-xl', 'leading-8', 'text-muted-foreground')
  })

  it('should have centered alignment', () => {
    render(<AboutSection />)

    const headerContainer = document.querySelector('.text-center')
    expect(headerContainer).toBeInTheDocument()

    const maxWidthContainer = document.querySelector('.max-w-4xl')
    expect(maxWidthContainer).toHaveClass('mx-auto')
  })

  it('should call getProfile to fetch data', () => {
    render(<AboutSection />)

    expect(mockGetProfile).toHaveBeenCalledTimes(1)
    expect(screen.getByText(mockProfile.summary)).toBeInTheDocument()
    expect(screen.getByText(mockProfile.bio)).toBeInTheDocument()
  })

  it('should handle empty or missing profile data gracefully', () => {
    const emptyProfile = {
      ...mockProfile,
      summary: '',
      bio: '',
    }

    mockGetProfile.mockReturnValue(emptyProfile)

    render(<AboutSection />)

    // Should still render the section structure
    expect(screen.getByText('About Me')).toBeInTheDocument()

    // Even with empty content, the structure should be present
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'about')
  })

  it('should maintain responsive design', () => {
    render(<AboutSection />)

    // Check responsive padding classes
    const container = document.querySelector('.px-4.sm\\:px-6.lg\\:px-8')
    expect(container).toBeInTheDocument()

    // Check responsive text sizing
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('sm:text-6xl')

    // Check content max-width for readability
    const bioContainer = document.querySelector('.max-w-3xl')
    expect(bioContainer).toBeInTheDocument()
  })
})