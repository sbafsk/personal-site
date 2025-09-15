import { render, screen } from '@testing-library/react'
import { SectionHeader } from '../SectionHeader'

describe('SectionHeader', () => {
  it('should render title correctly', () => {
    render(<SectionHeader title="Test Section Title" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Test Section Title' })).toBeInTheDocument()
  })

  it('should render description when provided', () => {
    render(
      <SectionHeader
        title="Test Title"
        description="This is a test description for the section"
      />
    )

    expect(screen.getByText('This is a test description for the section')).toBeInTheDocument()
  })

  it('should not render description paragraph when not provided', () => {
    render(<SectionHeader title="Test Title" />)

    const description = document.querySelector('p')
    expect(description).not.toBeInTheDocument()
  })

  it('should render children when provided', () => {
    render(
      <SectionHeader title="Test Title">
        <div data-testid="custom-content">Custom content goes here</div>
      </SectionHeader>
    )

    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
    expect(screen.getByText('Custom content goes here')).toBeInTheDocument()
  })

  it('should apply default title size and alignment', () => {
    render(<SectionHeader title="Default Title" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'tracking-tight', 'sm:text-6xl')

    const container = heading.closest('div')
    expect(container?.parentElement).toHaveClass('text-center')
  })

  it('should apply different title sizes', () => {
    const { rerender } = render(<SectionHeader title="Small Title" titleSize="sm" />)

    let heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-3xl', 'sm:text-4xl')

    rerender(<SectionHeader title="Medium Title" titleSize="md" />)
    heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-4xl', 'sm:text-5xl')

    rerender(<SectionHeader title="Large Title" titleSize="lg" />)
    heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-4xl', 'sm:text-6xl')
  })

  it('should apply different alignments', () => {
    const { rerender } = render(<SectionHeader title="Left Title" alignment="left" />)

    let container = screen.getByRole('heading', { level: 2 }).closest('div')?.parentElement
    expect(container).toHaveClass('text-left')

    rerender(<SectionHeader title="Center Title" alignment="center" />)
    container = screen.getByRole('heading', { level: 2 }).closest('div')?.parentElement
    expect(container).toHaveClass('text-center')

    rerender(<SectionHeader title="Right Title" alignment="right" />)
    container = screen.getByRole('heading', { level: 2 }).closest('div')?.parentElement
    expect(container).toHaveClass('text-right')
  })

  it('should apply custom className', () => {
    render(<SectionHeader title="Custom Title" className="custom-header-class" />)

    const container = screen.getByRole('heading', { level: 2 }).closest('div')?.parentElement
    expect(container).toHaveClass('custom-header-class')
  })

  it('should have proper structure with gradient line', () => {
    render(<SectionHeader title="Title with Gradient" />)

    const gradientLine = document.querySelector('.bg-gradient-to-r.from-primary')
    expect(gradientLine).toBeInTheDocument()
    expect(gradientLine).toHaveClass('h-1', 'w-20', 'rounded-full', 'mx-auto')
  })

  it('should have proper spacing and layout classes', () => {
    render(
      <SectionHeader
        title="Spaced Title"
        description="Description with spacing"
      >
        <div>Additional content</div>
      </SectionHeader>
    )

    const container = screen.getByRole('heading', { level: 2 }).closest('div')?.parentElement
    expect(container).toHaveClass('mx-auto', 'max-w-4xl')

    const description = screen.getByText('Description with spacing')
    expect(description).toHaveClass('mt-8', 'text-xl', 'leading-8')

    const childrenContainer = screen.getByText('Additional content').parentElement
    expect(childrenContainer).toHaveClass('mt-6')
  })

  it('should render description with proper styling', () => {
    render(
      <SectionHeader
        title="Title"
        description="Styled description text"
      />
    )

    const description = screen.getByText('Styled description text')
    expect(description).toHaveClass(
      'mt-8',
      'text-xl',
      'leading-8',
      'text-muted-foreground',
      'max-w-3xl',
      'mx-auto'
    )
    expect(description.tagName).toBe('P')
  })

  it('should combine all props correctly', () => {
    render(
      <SectionHeader
        title="Complex Title"
        description="Complex description"
        titleSize="md"
        alignment="left"
        className="complex-class"
      >
        <span data-testid="child">Child element</span>
      </SectionHeader>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('text-4xl', 'sm:text-5xl')

    const container = heading.closest('div')?.parentElement
    expect(container).toHaveClass('text-left', 'complex-class', 'mx-auto', 'max-w-4xl')

    expect(screen.getByText('Complex description')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('should maintain heading hierarchy', () => {
    render(<SectionHeader title="H2 Heading" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.tagName).toBe('H2')
    expect(heading).toHaveTextContent('H2 Heading')
  })
})