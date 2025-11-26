'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function FloatingSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { theme, toggleTheme } = useTheme()

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
                className="fixed top-6 right-6 z-50 md:hidden w-16 h-11 glass-nav rounded-xl flex items-center justify-center active:scale-95 transition-all duration-300 group"
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
                <div className="glass-nav rounded-2xl p-3 transition-all duration-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-mesh-subtle opacity-30 animate-mesh-ultra-slow"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`nav-item group relative flex items-left px-4 py-3 text-sm font-medium rounded-xl focus-glow transition-all duration-200 ${isActive(item.href)
                                        ? 'bg-white/15 text-primary dark:text-primary-dark shadow-light-sm dark:shadow-dark-sm font-semibold'
                                        : 'text-foreground-muted dark:text-foreground-dark-muted hover:text-foreground dark:hover:text-foreground-dark hover:bg-white/10'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="whitespace-nowrap font-medium">{item.name}</span>


                                </Link>
                            ))}

                            {/* Separator */}
                            <div className="my-2 h-px bg-white/10"></div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="nav-item group relative flex items-center px-4 py-3 text-sm font-medium rounded-xl focus-glow text-foreground-muted dark:text-foreground-dark-muted hover:text-foreground dark:hover:text-foreground-dark hover:bg-white/10 transition-all duration-200"
                                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                            >
                                <div className="relative w-5 h-5 overflow-hidden mr-3">
                                    <Sun
                                        className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-300 ${theme === 'light'
                                                ? 'rotate-0 scale-100 opacity-100'
                                                : 'rotate-180 scale-75 opacity-0'
                                            }`}
                                    />
                                    <Moon
                                        className={`absolute inset-0 w-5 h-5 text-blue-300 transition-all duration-300 ${theme === 'dark'
                                                ? 'rotate-0 scale-100 opacity-100'
                                                : '-rotate-180 scale-75 opacity-0'
                                            }`}
                                    />
                                </div>
                                <span className="whitespace-nowrap font-medium">
                                    {theme === 'light' ? 'Dark' : 'Light'} Mode
                                </span>
                            </button>
                        </div>

                        {/* Floating indicator */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/50 rounded-full animate-glow-pulse shadow-glow-primary" />
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/80 dark:bg-background-dark/80 backdrop-blur-sm z-30 md:hidden transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
