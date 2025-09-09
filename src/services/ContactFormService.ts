// Contact form service implementation following SOLID principles

import { ContactFormSchema } from '@/lib/validation-schemas'
import {
  ContactFormService,
  ContactFormSubmission,
  SubmissionResult,
  ContactMessageData,
  EmailService,
  ContactSubmissionError,
  ValidationError
} from './interfaces'

/**
 * Contact form service implementation following Single Responsibility Principle
 * Handles form submission logic and coordinates with email service
 */
export class DefaultContactFormService implements ContactFormService {
  constructor(private emailService: EmailService) { }

  async submitForm(data: ContactFormSubmission): Promise<SubmissionResult> {
    try {
      // Validate the submission
      const validatedData = this.validateSubmission(data)

      // Transform to email data
      const emailData: ContactMessageData = {
        ...validatedData,
        timestamp: new Date()
      }

      // Send email through email service
      const emailResult = await this.emailService.sendContactMessage(emailData)

      if (!emailResult.success) {
        throw new ContactSubmissionError(
          emailResult.error ?? 'Email delivery failed',
          validatedData
        )
      }

      return {
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.',
        data: emailData
      }

    } catch (error) {
      if (error instanceof ContactSubmissionError || error instanceof ValidationError) {
        throw error
      }

      throw new ContactSubmissionError(
        'Unexpected error during submission',
        data
      )
    }
  }

  validateSubmission(data: unknown): ContactFormSubmission {
    try {
      return ContactFormSchema.parse(data)
    } catch (_error) {
      throw new ValidationError(
        'form',
        'Invalid form data provided',
        data
      )
    }
  }
}

/**
 * Factory function for creating contact form service
 * Following Dependency Injection principles
 */
export const createContactFormService = (emailService: EmailService): ContactFormService => {
  return new DefaultContactFormService(emailService)
}