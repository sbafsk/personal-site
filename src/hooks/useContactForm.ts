import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, type ContactFormData } from '@/lib/validation-schemas'
import { getContactFormService } from '@/services/ServiceContainer'
import { ServiceError } from '@/services/interfaces'

// Form state following documented patterns
type ContactFormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; error: string }

export interface UseContactFormReturn {
  formData: ContactFormData
  formState: ContactFormState
  handleSubmit: (data: ContactFormData) => Promise<void>
  resetForm: () => void
  register: ReturnType<typeof useForm<ContactFormData>>['register']
  handleFormSubmit: ReturnType<typeof useForm<ContactFormData>>['handleSubmit']
  errors: ReturnType<typeof useForm<ContactFormData>>['formState']['errors']
  isSubmitting: boolean
  isValid: boolean
}

/**
 * Custom hook for contact form management
 * Following documented React Hook Form + Zod patterns
 */
export const useContactForm = (): UseContactFormReturn => {
  const [formState, setFormState] = useState<ContactFormState>({ status: 'idle' })

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    getValues
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onChange'
  })

  const handleSubmit = useCallback(async (data: ContactFormData) => {
    setFormState({ status: 'submitting' })

    try {
      // Use service layer for business logic separation
      const contactFormService = getContactFormService()
      const result = await contactFormService.submitForm(data)

      if (result.success) {
        setFormState({
          status: 'success',
          message: result.message
        })

        // Reset form after successful submission
        reset()
      } else {
        throw new Error(result.error ?? 'Submission failed')
      }

    } catch (error) {
      let errorMessage = 'Unknown error occurred'

      if (error instanceof ServiceError) {
        // Handle service-specific errors
        errorMessage = error.message
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      setFormState({
        status: 'error',
        error: errorMessage
      })
    }
  }, [reset])

  const resetForm = useCallback(() => {
    reset()
    setFormState({ status: 'idle' })
  }, [reset])

  return {
    formData: getValues(),
    formState,
    handleSubmit,
    resetForm,
    register,
    handleFormSubmit,
    errors,
    isSubmitting,
    isValid
  }
}

export default useContactForm