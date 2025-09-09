// Email service implementations following Strategy Pattern

import {
  EmailService,
  ContactMessageData,
  EmailResult,
  EmailDeliveryError
} from './interfaces'

/**
 * Mock email service for development
 * Implements EmailService interface for testing
 */
export class MockEmailService implements EmailService {
  async sendContactMessage(data: ContactMessageData): Promise<EmailResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate occasional failures for testing
    if (Math.random() < 0.1) {
      return {
        success: false,
        error: 'Simulated email delivery failure'
      }
    }

    // Mock email sent - in development mode
    // In a real implementation, this would be logged to a proper logging service
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Mock email sent:', {
        to: 'spereirarivero93@gmail.com',
        from: data.email,
        subject: `Contact Form: ${data.subject}`,
        message: data.message,
        timestamp: data.timestamp
      })
    }

    return {
      success: true,
      messageId: `mock-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    }
  }
}

/**
 * Production email service (placeholder for real implementation)
 * Would integrate with actual email service (SendGrid, Nodemailer, etc.)
 */
export class ProductionEmailService implements EmailService {
  constructor(
    private apiKey: string,
    private toEmail = 'spereirarivero93@gmail.com'
  ) { }

  async sendContactMessage(data: ContactMessageData): Promise<EmailResult> {
    try {
      // In a real implementation, this would use an actual email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          to: this.toEmail,
          from: data.email,
          subject: `Contact Form: ${data.subject}`,
          html: this.generateEmailTemplate(data),
          text: this.generateTextEmail(data)
        })
      })

      if (!response.ok) {
        throw new EmailDeliveryError(
          `HTTP ${response.status}: ${response.statusText}`,
          data
        )
      }

      const result = await response.json()

      return {
        success: true,
        messageId: result.messageId
      }

    } catch (error) {
      if (error instanceof EmailDeliveryError) {
        throw error
      }

      throw new EmailDeliveryError(
        error instanceof Error ? error.message : 'Unknown email error',
        data
      )
    }
  }

  private generateEmailTemplate(data: ContactMessageData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Submitted:</strong> ${data.timestamp.toLocaleString()}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        </body>
      </html>
    `
  }

  private generateTextEmail(data: ContactMessageData): string {
    return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Submitted: ${data.timestamp.toLocaleString()}

Message:
${data.message}
    `.trim()
  }
}

/**
 * Factory function for creating email service based on environment
 * Following Factory Pattern from documented standards
 */
export const createEmailService = (
  environment: 'development' | 'production' = 'development',
  apiKey?: string
): EmailService => {
  if (environment === 'production' && apiKey) {
    return new ProductionEmailService(apiKey)
  }

  return new MockEmailService()
}