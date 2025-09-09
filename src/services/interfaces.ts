// Service interfaces following SOLID principles from your documented standards

export interface EmailService {
  sendContactMessage(data: ContactMessageData): Promise<EmailResult>
}

export interface ContactFormService {
  submitForm(data: ContactFormSubmission): Promise<SubmissionResult>
  validateSubmission(data: unknown): ContactFormSubmission
}

export interface DataProvider<T> {
  fetch(id?: string): Promise<T>
  fetchAll(): Promise<T[]>
}

// Data transfer objects
export interface ContactMessageData {
  name: string
  email: string
  subject: string
  message: string
  timestamp: Date
}

export interface ContactFormSubmission {
  name: string
  email: string
  subject: string
  message: string
}

export interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
}

export interface SubmissionResult {
  success: boolean
  message: string
  data?: ContactMessageData
  error?: string
}

// Error types following documented error hierarchy
export abstract class ServiceError extends Error {
  abstract readonly code: string
  abstract readonly statusCode: number
  
  constructor(message: string, public readonly context?: Record<string, unknown>) {
    super(message)
    this.name = this.constructor.name
  }
}

export class ContactSubmissionError extends ServiceError {
  readonly code = 'CONTACT_SUBMISSION_FAILED'
  readonly statusCode = 400
  
  constructor(reason: string, formData?: Partial<ContactFormSubmission>) {
    super(`Contact form submission failed: ${reason}`, { formData })
  }
}

export class EmailDeliveryError extends ServiceError {
  readonly code = 'EMAIL_DELIVERY_FAILED' 
  readonly statusCode = 502
  
  constructor(reason: string, emailData?: ContactMessageData) {
    super(`Email delivery failed: ${reason}`, { emailData })
  }
}

export class ValidationError extends ServiceError {
  readonly code = 'VALIDATION_FAILED'
  readonly statusCode = 422
  
  constructor(field: string, reason: string, value?: unknown) {
    super(`Validation failed for ${field}: ${reason}`, { field, value })
  }
}