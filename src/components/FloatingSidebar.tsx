'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function FloatingSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Work', href: '/work' },
        { name: 'Studies', href: '/studies' },
        { name: 'Skills', href: '/skills' },
        { name: 'Contact', href: '/contact' },
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
                className="fixed top-6 right-6 z-50 md:hidden w-16 h-11 bg-surface/20 backdrop-blur-xl rounded-xl flex items-center justify-center hover:bg-surface-hover/30 hover:shadow-glass-hover active:scale-95 transition-all duration-300 group shadow-glass"
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
                className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-out-expo ${isOpen ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full md:translate-x-0 md:scale-100 md:opacity-100 scale-95 opacity-0'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="bg-surface/15 backdrop-blur-2xl rounded-2xl p-3 shadow-glass hover:shadow-glass-hover transition-all duration-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-mesh-subtle opacity-30 animate-mesh-float"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group relative flex items-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ease-out-back transform hover:animate-lift-hover hover:scale-120 hover:shadow-light-sm hover:animate-list-hover ${isActive(item.href)
                                        ? 'scale-120 shadow-light-sm italic'
                                        : 'text-foreground-muted hover:text-foreground hover:bg-white/5 '
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="whitespace-nowrap font-medium">{item.name}</span>


                                </Link>
                            ))}
                        </div>

                        {/* Floating indicator */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/50 rounded-full animate-glow-pulse shadow-glow-primary" />
                    </div>
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
