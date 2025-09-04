'use client'

import { useState } from 'react'

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
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

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000))

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (_error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-xl shadow-dark-sm animate-scale-in">
                    <p className="text-sm text-secondary font-medium">
                        Thank you! Your message has been sent. I&apos;ll get back to you soon.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 bg-danger/10 border border-danger/20 rounded-xl shadow-dark-sm animate-scale-in">
                    <p className="text-sm text-danger font-medium">
                        Sorry, there was an error. Please try again or contact me directly.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background-alt border border-border rounded-xl text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 hover:border-border-subtle transition-all duration-200 shadow-dark-inner focus:shadow-glow-primary"
                        placeholder="Your name"
                        aria-required="true"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-background-alt border border-border rounded-xl text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 hover:border-border-subtle transition-all duration-200 shadow-dark-inner focus:shadow-glow-primary"
                        placeholder="your@email.com"
                        aria-required="true"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background-alt border border-border rounded-xl text-sm text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 hover:border-border-subtle transition-all duration-200 shadow-dark-inner focus:shadow-glow-primary"
                    placeholder="What's this about?"
                    aria-required="true"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Tell me about your project or opportunity..."
                    aria-required="true"
                />
            </div>

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group px-8 py-3 bg-primary text-background text-sm font-semibold rounded-xl hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-dark-sm hover:shadow-glow-primary"
                >
                    <span className={`transition-all duration-200 ${isSubmitting ? 'animate-pulse' : ''}`}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                </button>
            </div>
        </form>
    )
}
