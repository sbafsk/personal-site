import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

// Custom render function that includes providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { ...options })

export * from '@testing-library/react'
export { customRender as render }

// Common test data
export const mockContactFormData = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Test Subject',
  message: 'This is a test message with sufficient length.',
}

export const mockInvalidContactFormData = {
  name: 'J',
  email: 'invalid-email',
  subject: 'Hi',
  message: 'Short',
}

// Mock handlers
export const createMockHandler = () => jest.fn()

// Utility to wait for async operations
export const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0))

// This prevents the "must contain at least one test" warning
describe('test-utils', () => {
  it('should export test utilities', () => {
    expect(typeof render).toBe('function')
    expect(typeof screen).toBe('object')
  })
})