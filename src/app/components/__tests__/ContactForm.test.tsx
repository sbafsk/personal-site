import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../ContactForm'
import { useContactForm } from '@/hooks/useContactForm'
import { mockContactFormData } from '@/__tests__/utils/test-utils'
import { FormEvent } from 'react'

// Mock the useContactForm hook
jest.mock('@/hooks/useContactForm')

const mockUseContactForm = useContactForm as jest.MockedFunction<typeof useContactForm>

describe('ContactForm', () => {
  const mockHandleSubmit = jest.fn()
  const mockRegister = jest.fn()
  const mockHandleFormSubmit = jest.fn()
  const mockOnSubmitSuccess = jest.fn()
  const mockOnSubmitError = jest.fn()

  const defaultMockReturn = {
    formState: { status: 'idle' as const },
    handleSubmit: mockHandleSubmit,
    register: mockRegister,
    handleFormSubmit: mockHandleFormSubmit,
    errors: {},
    isSubmitting: false,
    formData: { name: '', email: '', subject: '', message: '' },
    resetForm: jest.fn(),
    isValid: false,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseContactForm.mockReturnValue(defaultMockReturn)
    mockRegister.mockReturnValue({
      name: 'test',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      ref: jest.fn(),
    })
    mockHandleFormSubmit.mockImplementation((callback) => (e: FormEvent) => {
      e.preventDefault()
      callback(mockContactFormData)
    })
  })

  it('should render all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const subjectInput = screen.getByLabelText(/subject/i)
    const messageInput = screen.getByLabelText(/message/i)

    expect(nameInput).toHaveAttribute('aria-required', 'true')
    expect(emailInput).toHaveAttribute('aria-required', 'true')
    expect(subjectInput).toHaveAttribute('aria-required', 'true')
    expect(messageInput).toHaveAttribute('aria-required', 'true')

    expect(nameInput).toHaveAttribute('id', 'name')
    expect(emailInput).toHaveAttribute('id', 'email')
    expect(subjectInput).toHaveAttribute('id', 'subject')
    expect(messageInput).toHaveAttribute('id', 'message')
  })

  it('should display validation errors when provided', () => {
    const mockReturnWithErrors = {
      ...defaultMockReturn,
      errors: {
        name: { message: 'Name must be at least 2 characters', type: 'required' },
        email: { message: 'Invalid email address', type: 'pattern' },
        subject: { message: 'Subject must be at least 5 characters', type: 'minLength' },
        message: { message: 'Message must be at least 10 characters', type: 'minLength' },
      },
    }

    mockUseContactForm.mockReturnValue(mockReturnWithErrors)

    render(<ContactForm />)

    expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument()
    expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    expect(screen.getByText('Subject must be at least 5 characters')).toBeInTheDocument()
    expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument()

    // Check aria attributes for errors
    expect(screen.getByLabelText(/name/i)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/subject/i)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/message/i)).toHaveAttribute('aria-invalid', 'true')
  })

  it('should display success message when form submission succeeds', () => {
    const mockReturnWithSuccess = {
      ...defaultMockReturn,
      formState: { status: 'success' as const, message: 'Message sent successfully!' },
    }

    mockUseContactForm.mockReturnValue(mockReturnWithSuccess)

    render(<ContactForm />)

    expect(screen.getByText('Message sent successfully!')).toBeInTheDocument()
  })

  it('should display error message when form submission fails', () => {
    const mockReturnWithError = {
      ...defaultMockReturn,
      formState: { status: 'error' as const, error: 'Failed to send message' },
    }

    mockUseContactForm.mockReturnValue(mockReturnWithError)

    render(<ContactForm />)

    expect(screen.getByText('Failed to send message')).toBeInTheDocument()
  })

  it('should disable submit button and show loading state when submitting', () => {
    const mockReturnSubmitting = {
      ...defaultMockReturn,
      isSubmitting: true,
      formState: { status: 'submitting' as const },
    }

    mockUseContactForm.mockReturnValue(mockReturnSubmitting)

    render(<ContactForm />)

    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeDisabled()
    expect(screen.getByText('Sending...')).toBeInTheDocument()

    // Check for loading spinner
    expect(screen.getByRole('button')).toContainHTML('svg')
  })

  it('should call onSubmitSuccess callback on successful form submission', async () => {
    const user = userEvent.setup()

    const mockReturnWithSuccess = {
      ...defaultMockReturn,
      formState: { status: 'success' as const, message: 'Message sent successfully!' },
    }

    mockUseContactForm.mockReturnValue(mockReturnWithSuccess)

    render(<ContactForm onSubmitSuccess={mockOnSubmitSuccess} />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    expect(mockOnSubmitSuccess).toHaveBeenCalledTimes(1)
  })

  it('should call onSubmitError callback on form submission error', async () => {
    const user = userEvent.setup()
    const errorMessage = 'Network error occurred'

    mockHandleSubmit.mockRejectedValueOnce(new Error(errorMessage))

    render(<ContactForm onSubmitError={mockOnSubmitError} />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockOnSubmitError).toHaveBeenCalledWith(errorMessage)
    })
  })

  it('should apply custom className', () => {
    const customClass = 'custom-form-class'
    render(<ContactForm className={customClass} />)

    const form = document.querySelector('form')!
    expect(form).toHaveClass(customClass)
  })

  it('should have proper form structure and layout', () => {
    render(<ContactForm />)

    // Check grid layout for name and email fields
    const nameField = screen.getByLabelText(/name/i).closest('div')
    const emailField = screen.getByLabelText(/email/i).closest('div')

    expect(nameField?.parentElement).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2')
    expect(emailField?.parentElement).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2')

    // Check form spacing
    const form = document.querySelector('form')
    expect(form).toHaveClass('space-y-6')
  })

  it('should handle form submission with preventDefault', async () => {
    const user = userEvent.setup()
    const mockPreventDefault = jest.fn()

    mockHandleFormSubmit.mockImplementation((callback) => (e: FormEvent) => {
      mockPreventDefault()
      e.preventDefault()
      callback(mockContactFormData)
    })

    render(<ContactForm />)

    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()

    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    expect(mockHandleFormSubmit).toHaveBeenCalled()
  })

  it('should register form fields with useContactForm hook', () => {
    render(<ContactForm />)

    expect(mockRegister).toHaveBeenCalledWith('name')
    expect(mockRegister).toHaveBeenCalledWith('email')
    expect(mockRegister).toHaveBeenCalledWith('subject')
    expect(mockRegister).toHaveBeenCalledWith('message')
  })

  it('should have minimum height for submit button for accessibility', () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /send message/i })
    expect(submitButton).toHaveClass('min-h-[44px]')
  })

  it('should show error messages with proper ARIA roles', () => {
    const mockReturnWithErrors = {
      ...defaultMockReturn,
      errors: {
        name: { message: 'Name is required', type: 'required' },
      },
    }

    mockUseContactForm.mockReturnValue(mockReturnWithErrors)

    render(<ContactForm />)

    const errorMessage = screen.getByText('Name is required')
    expect(errorMessage).toHaveAttribute('role', 'alert')
    expect(errorMessage).toHaveAttribute('id', 'name-error')

    const nameInput = screen.getByLabelText(/name/i)
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
  })
})