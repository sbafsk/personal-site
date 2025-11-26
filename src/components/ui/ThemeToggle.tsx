'use client'

import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-xl
                 bg-white/5 backdrop-blur-md
                 hover:bg-white/10
                 border border-white/10 hover:border-white/20
                 transition-all duration-300
                 hover:-translate-y-0.5 hover:shadow-glass-hover
                 focus-visible:outline-2 focus-visible:outline-primary
                 focus-visible:outline-offset-2"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon - visible in dark mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0 absolute inset-0 m-auto'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon Icon - visible in light mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 ${
          theme === 'light'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0 absolute inset-0 m-auto'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>

      {/* Tooltip */}
      <span
        className="absolute -bottom-10 left-1/2 -translate-x-1/2
                   px-3 py-1 rounded-lg
                   bg-surface dark:bg-surface-dark
                   text-foreground-muted dark:text-foreground-dark-muted
                   text-xs font-medium whitespace-nowrap
                   opacity-0 group-hover:opacity-100
                   pointer-events-none
                   transition-opacity duration-200
                   shadow-dark-md"
      >
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </span>
    </button>
  )
}