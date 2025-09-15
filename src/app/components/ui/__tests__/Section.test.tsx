import { render, screen } from '@testing-library/react'
import { Section } from '../Section'

describe('Section', () => {
  it('should render section with children', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('should apply id attribute when provided', () => {
    render(
      <Section id="test-section">
        <p>Content</p>
      </Section>
    )

    const section = document.querySelector('#test-section')
    expect(section).toBeInTheDocument()
    expect(section?.tagName).toBe('SECTION')
  })

  it('should apply aria-labelledby when provided', () => {
    render(
      <Section ariaLabelledby="section-heading">
        <p>Content</p>
      </Section>
    )

    const section = document.querySelector('section')
    expect(section).toHaveAttribute('aria-labelledby', 'section-heading')
  })

  it('should apply default background and padding classes', () => {
    render(
      <Section data-testid="section">
        <p>Content</p>
      </Section>
    )

    const section = screen.getByTestId('section')
    expect(section).toHaveClass('bg-background', 'py-32')
  })

  it('should apply different background variants', () => {
    const { rerender } = render(
      <Section background="gray" data-testid="section">
        <p>Content</p>
      </Section>
    )

    let section = screen.getByTestId('section')
    expect(section).toHaveClass('bg-muted')

    rerender(
      <Section background="blue" data-testid="section">
        <p>Content</p>
      </Section>
    )

    section = screen.getByTestId('section')
    expect(section).toHaveClass('bg-primary/5')

    rerender(
      <Section background="white" data-testid="section">
        <p>Content</p>
      </Section>
    )

    section = screen.getByTestId('section')
    expect(section).toHaveClass('bg-background')
  })

  it('should apply different padding variants', () => {
    const { rerender } = render(
      <Section padding="sm" data-testid="section">
        <p>Content</p>
      </Section>
    )

    let section = screen.getByTestId('section')
    expect(section).toHaveClass('py-16')

    rerender(
      <Section padding="md" data-testid="section">
        <p>Content</p>
      </Section>
    )

    section = screen.getByTestId('section')
    expect(section).toHaveClass('py-24')

    rerender(
      <Section padding="lg" data-testid="section">
        <p>Content</p>
      </Section>
    )

    section = screen.getByTestId('section')
    expect(section).toHaveClass('py-32')
  })

  it('should apply custom className', () => {
    render(
      <Section className="custom-section-class" data-testid="section">
        <p>Content</p>
      </Section>
    )

    const section = screen.getByTestId('section')
    expect(section).toHaveClass('custom-section-class')
  })

  it('should have proper container structure', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>
    )

    const container = document.querySelector('.mx-auto.max-w-7xl')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
    expect(container).toContainElement(screen.getByText('Test content'))
  })

  it('should combine all props correctly', () => {
    render(
      <Section
        id="complex-section"
        background="blue"
        padding="md"
        className="extra-class"
        ariaLabelledby="complex-heading"
        data-testid="section"
      >
        <div>Complex content</div>
      </Section>
    )

    const section = screen.getByTestId('section')
    expect(section).toHaveAttribute('id', 'complex-section')
    expect(section).toHaveAttribute('aria-labelledby', 'complex-heading')
    expect(section).toHaveClass('bg-primary/5', 'py-24', 'extra-class')
    expect(section.tagName).toBe('SECTION')
  })

  it('should render nested content correctly', () => {
    render(
      <Section>
        <div>
          <h2>Section Title</h2>
          <p>Section description</p>
          <button>Action Button</button>
        </div>
      </Section>
    )

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText('Section description')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})