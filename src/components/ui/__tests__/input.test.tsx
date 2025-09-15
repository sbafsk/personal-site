import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../input'

describe('Input', () => {
  it('should render input element', () => {
    render(<Input placeholder="Enter text" />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('should handle value changes', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test value' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue('test value')
  })

  it('should apply default styling classes', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('flex', 'h-10', 'w-full', 'rounded-md', 'border')
    expect(input).toHaveClass('px-3', 'py-2', 'text-sm')
  })

  it('should apply custom className', () => {
    render(<Input className="custom-input-class" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('custom-input-class')
  })

  it('should render with different input types', () => {
    render(<Input type="email" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('should render password input type', () => {
    render(<Input type="password" data-testid="password-input" />)

    const input = screen.getByTestId('password-input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('should forward ref correctly', () => {
    const ref = jest.fn()
    render(<Input ref={ref} />)

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })

  it('should have proper accessibility attributes for focus', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('focus-visible:outline-none', 'focus-visible:ring-2')
  })

  it('should display placeholder text', () => {
    render(<Input placeholder="Enter your email" />)

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('should accept and display initial value', () => {
    render(<Input defaultValue="initial value" />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('initial value')
  })
})