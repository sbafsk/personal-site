'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function FloatingSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', href: '/', icon: '◦' },
        { name: 'Work', href: '/work', icon: '◦' },
        { name: 'Studies', href: '/studies', icon: '◦' },
        { name: 'Skills', href: '/skills', icon: '◦' },
        { name: 'Contact', href: '/contact', icon: '◦' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname === href
    }

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 left-6 z-50 md:hidden w-11 h-11 bg-surface rounded-xl flex items-center justify-center hover:bg-surface-hover hover:shadow-dark-sm active:scale-95 transition-all duration-200 group shadow-dark-sm"
                aria-label="Toggle navigation menu"
            >
                <svg
                    className={`w-5 h-5 text-foreground-muted group-hover:text-foreground transition-all duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Floating Sidebar */}
            <nav
                className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out-expo ${isOpen ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-full md:translate-x-0 md:scale-100 md:opacity-100 scale-95 opacity-0'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="bg-surface/95 backdrop-blur-xl rounded-2xl p-3 shadow-float hover:shadow-float-lg transition-all duration-400 animate-fade-in-up">
                    <div className="flex flex-col space-y-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ease-out-back transform hover:scale-105 active:scale-95 ${isActive(item.href)
                                    ? 'bg-primary/15 text-primary shadow-glow-primary'
                                    : 'text-foreground-muted hover:text-foreground hover:bg-surface-hover hover:shadow-dark-sm'
                                    }`}
                                onClick={() => setIsOpen(false)}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className={`mr-3 text-sm transition-all duration-300 ${isActive(item.href)
                                    ? 'opacity-100 text-primary animate-pulse-subtle'
                                    : 'opacity-50 group-hover:opacity-100 group-hover:animate-float'
                                    }`}>
                                    {item.icon}
                                </span>
                                <span className="whitespace-nowrap font-medium">{item.name}</span>
                                {isActive(item.href) && (
                                    <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse-subtle shadow-glow-primary" />
                                )}

                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </Link>
                        ))}
                    </div>

                    {/* Floating indicator */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/30 rounded-full animate-pulse-subtle" />
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
