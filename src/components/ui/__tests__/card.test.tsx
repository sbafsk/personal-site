import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../card'

describe('Card Components', () => {
  describe('Card', () => {
    it('should render card element', () => {
      render(<Card data-testid="card">Card content</Card>)

      const card = screen.getByTestId('card')
      expect(card).toBeInTheDocument()
      expect(card).toHaveTextContent('Card content')
    })

    it('should apply default styling classes', () => {
      render(<Card data-testid="card">Card content</Card>)

      const card = screen.getByTestId('card')
      expect(card).toHaveClass('rounded-lg', 'border', 'bg-card', 'text-card-foreground')
      expect(card).toHaveClass('shadow-sm', 'hover:shadow-md', 'transition-all')
    })

    it('should apply custom className', () => {
      render(<Card className="custom-card-class" data-testid="card">Card</Card>)

      const card = screen.getByTestId('card')
      expect(card).toHaveClass('custom-card-class')
    })

    it('should forward ref correctly', () => {
      const ref = jest.fn()
      render(<Card ref={ref}>Card content</Card>)

      expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
    })
  })

  describe('CardHeader', () => {
    it('should render card header element', () => {
      render(<CardHeader data-testid="card-header">Header content</CardHeader>)

      const header = screen.getByTestId('card-header')
      expect(header).toBeInTheDocument()
      expect(header).toHaveTextContent('Header content')
    })

    it('should apply default styling classes', () => {
      render(<CardHeader data-testid="card-header">Header</CardHeader>)

      const header = screen.getByTestId('card-header')
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6')
    })
  })

  describe('CardTitle', () => {
    it('should render as h3 element', () => {
      render(<CardTitle>Card Title</CardTitle>)

      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent('Card Title')
    })

    it('should apply default styling classes', () => {
      render(<CardTitle data-testid="card-title">Title</CardTitle>)

      const title = screen.getByTestId('card-title')
      expect(title).toHaveClass('text-2xl', 'font-semibold', 'leading-none', 'tracking-tight')
    })
  })

  describe('CardDescription', () => {
    it('should render description paragraph', () => {
      render(<CardDescription>Card description text</CardDescription>)

      const description = screen.getByText('Card description text')
      expect(description).toBeInTheDocument()
      expect(description.tagName).toBe('P')
    })

    it('should apply default styling classes', () => {
      render(<CardDescription data-testid="card-description">Description</CardDescription>)

      const description = screen.getByTestId('card-description')
      expect(description).toHaveClass('text-sm', 'text-muted-foreground')
    })
  })

  describe('CardContent', () => {
    it('should render content area', () => {
      render(<CardContent data-testid="card-content">Content area</CardContent>)

      const content = screen.getByTestId('card-content')
      expect(content).toBeInTheDocument()
      expect(content).toHaveTextContent('Content area')
    })

    it('should apply default styling classes', () => {
      render(<CardContent data-testid="card-content">Content</CardContent>)

      const content = screen.getByTestId('card-content')
      expect(content).toHaveClass('p-6', 'pt-0')
    })
  })

  describe('CardFooter', () => {
    it('should render footer area', () => {
      render(<CardFooter data-testid="card-footer">Footer content</CardFooter>)

      const footer = screen.getByTestId('card-footer')
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveTextContent('Footer content')
    })

    it('should apply default styling classes', () => {
      render(<CardFooter data-testid="card-footer">Footer</CardFooter>)

      const footer = screen.getByTestId('card-footer')
      expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0')
    })
  })

  describe('Complete Card Structure', () => {
    it('should render complete card with all components', () => {
      render(
        <Card data-testid="complete-card">
          <CardHeader>
            <CardTitle>Test Card Title</CardTitle>
            <CardDescription>Test card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Main card content goes here</p>
          </CardContent>
          <CardFooter>
            <button>Action Button</button>
          </CardFooter>
        </Card>
      )

      const card = screen.getByTestId('complete-card')
      expect(card).toBeInTheDocument()

      expect(screen.getByRole('heading', { name: /test card title/i })).toBeInTheDocument()
      expect(screen.getByText('Test card description')).toBeInTheDocument()
      expect(screen.getByText('Main card content goes here')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /action button/i })).toBeInTheDocument()
    })
  })
})