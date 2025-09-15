import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSection } from '../HeroSection'
import { getProfile } from '@/lib/data-loader'

// Mock the data loader
jest.mock('@/lib/data-loader')
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

const mockGetProfile = getProfile as jest.MockedFunction<typeof getProfile>

const mockProfile = {
  name: 'John Doe',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  email: 'john@example.com',
  phone: '+1-555-0123',
  linkedin: 'https://linkedin.com/in/johndoe',
  github: 'https://github.com/johndoe',
  summary: 'Experienced developer passionate about creating amazing user experiences',
  bio: 'I am a passionate developer with over 7 years of experience building scalable web applications.',
  tagline: 'Building exceptional digital experiences with modern technologies',
  subtitle: 'Specialized in React, TypeScript, and modern web development',
  highlights: ['React Expert', 'TypeScript', 'Node.js'],
}

describe('HeroSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockGetProfile.mockReturnValue(mockProfile)
  })

  it('should render hero section with profile data', () => {
    render(<HeroSection />)

    expect(screen.getByRole('heading', { level: 1, name: mockProfile.name })).toBeInTheDocument()
    expect(screen.getByText(`${mockProfile.title} with 7+ years of experience`)).toBeInTheDocument()
    expect(screen.getByText(mockProfile.tagline)).toBeInTheDocument()
    expect(screen.getByText(mockProfile.subtitle)).toBeInTheDocument()
  })

  it('should render with external profile when provided', () => {
    const customProfile = {
      ...mockProfile,
      name: 'Jane Smith',
      title: 'Full Stack Developer',
      tagline: 'Custom tagline for testing',
    }

    render(<HeroSection profile={customProfile} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Jane Smith' })).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer with 7+ years of experience')).toBeInTheDocument()
    expect(screen.getByText('Custom tagline for testing')).toBeInTheDocument()
  })

  it('should render action buttons', () => {
    render(<HeroSection />)

    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('View Projects')).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    render(<HeroSection />)

    const section = document.querySelector('section')
    expect(section).toBeInTheDocument()

    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveAttribute('id', 'main-heading')

    const subtitle = screen.getByRole('doc-subtitle')
    expect(subtitle).toBeInTheDocument()
  })

  it('should handle contact button click', async () => {
    const user = userEvent.setup()
    const mockOnContactClick = jest.fn()

    render(<HeroSection onContactClick={mockOnContactClick} />)

    const contactButton = screen.getByText('Get in Touch')
    await user.click(contactButton)

    expect(mockOnContactClick).toHaveBeenCalledTimes(1)
  })

  it('should handle projects button click', async () => {
    const user = userEvent.setup()
    const mockOnProjectsClick = jest.fn()

    render(<HeroSection onProjectsClick={mockOnProjectsClick} />)

    const projectsButton = screen.getByText('View Projects')
    await user.click(projectsButton)

    expect(mockOnProjectsClick).toHaveBeenCalledTimes(1)
  })

  it('should have proper accessibility attributes', () => {
    render(<HeroSection />)

    const projectsLink = screen.getByLabelText(/view my projects on github/i)
    expect(projectsLink).toHaveAttribute('target', '_blank')
    expect(projectsLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Check aria-hidden decorative arrow
    const arrow = screen.getByText('→')
    expect(arrow).toHaveAttribute('aria-hidden', 'true')
  })

  it('should have proper button styling and accessibility', () => {
    render(<HeroSection />)

    const contactButton = screen.getByText('Get in Touch').closest('button')
    const projectsButton = screen.getByText('View Projects').closest('button')

    expect(contactButton).toHaveClass('min-h-[56px]', 'px-8', 'text-lg')
    expect(projectsButton).toHaveClass('min-h-[56px]', 'px-8', 'text-lg')
  })

  it('should render background decorative elements', () => {
    render(<HeroSection />)

    const section = document.querySelector('section')
    expect(section).toHaveClass('relative', 'overflow-hidden')

    // Background elements should be aria-hidden
    const backgroundElements = document.querySelectorAll('[aria-hidden="true"]')
    expect(backgroundElements.length).toBeGreaterThan(0)
  })

  it('should have responsive layout classes', () => {
    render(<HeroSection />)

    const container = document.querySelector('.mx-auto.max-w-7xl')
    expect(container).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')

    const heroContent = document.querySelector('.py-32')
    expect(heroContent).toHaveClass('lg:py-40')

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-5xl', 'sm:text-7xl', 'lg:text-8xl')
  })

  it('should have proper button layout', () => {
    render(<HeroSection />)

    const buttonContainer = document.querySelector('.flex.flex-col.sm\\:flex-row')
    expect(buttonContainer).toHaveClass('items-center', 'justify-center', 'gap-6')
  })

  it('should render GitHub link correctly', () => {
    render(<HeroSection />)

    const githubLink = screen.getByRole('link', { name: /view my projects on github/i })
    expect(githubLink).toHaveAttribute('href', mockProfile.github)
  })

  it('should render contact link correctly', () => {
    render(<HeroSection />)

    const contactLink = screen.getByRole('link', { name: /get in touch/i })
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('should not call callbacks when not provided', async () => {
    const user = userEvent.setup()

    render(<HeroSection />)

    const contactButton = screen.getByText('Get in Touch')
    const projectsButton = screen.getByText('View Projects')

    // Should not throw errors when callbacks are not provided
    await user.click(contactButton)
    await user.click(projectsButton)

    // Test passes if no errors are thrown
    expect(contactButton).toBeInTheDocument()
    expect(projectsButton).toBeInTheDocument()
  })

  it('should have proper gradient and styling elements', () => {
    render(<HeroSection />)

    // Check for gradient line under name
    const gradientLine = document.querySelector('.bg-gradient-to-r.from-primary')
    expect(gradientLine).toHaveClass('h-1', 'w-32', 'rounded-full')
  })
})