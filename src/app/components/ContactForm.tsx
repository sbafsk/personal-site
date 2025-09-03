'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000))

        // For now, just show success message
        setSubmitStatus('success')
        setIsSubmitting(false)

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitStatus('idle')
            setFormData({ name: '', email: '', subject: '', message: '' })
        }, 3000)
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>

            {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-labelledby="contact-form-title" aria-describedby="form-instructions">
                <div id="form-instructions" className="sr-only">
                    Contact form with required fields. All fields marked with an asterisk are required.
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px]"
                            placeholder="Your name"
                            aria-describedby="name-required"
                            aria-required="true"
                        />
                        <div id="name-required" className="sr-only">Name is required</div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email <span className="text-red-500" aria-label="required">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px]"
                            placeholder="your.email@example.com"
                            aria-describedby="email-required"
                            aria-required="true"
                        />
                        <div id="email-required" className="sr-only">Email is required</div>
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px]"
                        placeholder="What's this about?"
                        aria-describedby="subject-required"
                        aria-required="true"
                    />
                    <div id="subject-required" className="sr-only">Subject is required</div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500" aria-label="required">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none min-h-[44px]"
                        placeholder="Tell me about your project or how I can help..."
                        aria-describedby="message-required"
                        aria-required="true"
                    />
                    <div id="message-required" className="sr-only">Message is required</div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px]"
                    aria-describedby={isSubmitting ? "submitting-status" : undefined}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isSubmitting && (
                    <div id="submitting-status" className="sr-only" aria-live="polite">
                        Form is being submitted, please wait
                    </div>
                )}
            </form>
        </div>
    )
}
