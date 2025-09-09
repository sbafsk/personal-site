// Service container for dependency injection following SOLID principles

import { ContactFormService, EmailService } from './interfaces'
import { createContactFormService } from './ContactFormService'
import { createEmailService } from './EmailService'

/**
 * Service container implementing Dependency Injection pattern
 * Following Dependency Inversion Principle from documented standards
 */
export class ServiceContainer {
  private static instance: ServiceContainer
  private services: Map<string, unknown> = new Map()
  
  private constructor() {
    this.initializeServices()
  }
  
  static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer()
    }
    return ServiceContainer.instance
  }
  
  private initializeServices(): void {
    // Initialize email service based on environment
    const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'
    const emailApiKey = process.env['EMAIL_API_KEY']
    
    const emailService = createEmailService(environment, emailApiKey)
    this.services.set('EmailService', emailService)
    
    // Initialize contact form service with email service dependency
    const contactFormService = createContactFormService(emailService)
    this.services.set('ContactFormService', contactFormService)
  }
  
  getEmailService(): EmailService {
    const service = this.services.get('EmailService')
    if (!service) {
      throw new Error('EmailService not found in container')
    }
    return service as EmailService
  }
  
  getContactFormService(): ContactFormService {
    const service = this.services.get('ContactFormService')
    if (!service) {
      throw new Error('ContactFormService not found in container')
    }
    return service as ContactFormService
  }
  
  // Method to register custom services for testing
  registerService<T>(name: string, service: T): void {
    this.services.set(name, service)
  }
  
  // Method to clear services for testing
  clearServices(): void {
    this.services.clear()
    this.initializeServices()
  }
}

// Convenience functions for accessing services
export const getEmailService = (): EmailService => {
  return ServiceContainer.getInstance().getEmailService()
}

export const getContactFormService = (): ContactFormService => {
  return ServiceContainer.getInstance().getContactFormService()
}

// For testing purposes
export const registerTestServices = (services: Record<string, unknown>): void => {
  const container = ServiceContainer.getInstance()
  Object.entries(services).forEach(([name, service]) => {
    container.registerService(name, service)
  })
}