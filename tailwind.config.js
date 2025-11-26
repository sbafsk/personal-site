/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        background: {
          DEFAULT: '#ffffff',
          alt: '#f8f9fa',
          dark: '#0a0e13',
          'dark-alt': '#0f1419',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#f8f9fa',
          hover: '#e9ecef',
          dark: '#151b26',
          'dark-elevated': '#1a2332',
          'dark-hover': '#1f2937',
        },
        border: {
          DEFAULT: '#e9ecef',
          subtle: '#dee2e6',
          dark: '#1f2937',
          'dark-subtle': '#374151',
        },

        // Text colors
        foreground: {
          DEFAULT: '#212529',
          muted: '#495057',
          subtle: '#6c757d',
          dark: '#f1f5f9',
          'dark-muted': '#cbd5e1',
          'dark-subtle': '#94a3b8',
        },

        // Accent colors - unified across themes
        primary: {
          DEFAULT: '#0066ff',
          hover: '#0052cc',
          muted: '#004db3',
          dark: '#60a5fa',
          'dark-hover': '#3b82f6',
          'dark-muted': '#1e40af',
        },
        secondary: {
          DEFAULT: '#10b981',
          hover: '#059669',
          muted: '#047857',
          dark: '#34d399',
          'dark-hover': '#10b981',
          'dark-muted': '#047857',
        },
        warning: {
          DEFAULT: '#fbbf24',
          muted: '#d97706',
        },
        danger: {
          DEFAULT: '#f87171',
          muted: '#dc2626',
        },
        
        // Legacy colors for compatibility
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      backgroundImage: {
        // Light theme mesh gradients
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(220, 60%, 90%, 0.9) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(200, 50%, 88%, 0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240, 40%, 95%, 0.7) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(210, 55%, 90%, 0.9) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(190, 45%, 92%, 0.8) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(230, 50%, 90%, 0.7) 0px, transparent 50%)',
        'mesh-light-subtle': 'radial-gradient(circle at 25% 25%, rgba(0, 102, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(251, 191, 36, 0.04) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)',

        // Dark theme mesh gradients
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(228, 50%, 18%, 0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 50%, 22%, 0.7) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355, 30%, 12%, 0.9) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 40%, 15%, 0.8) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22, 35%, 10%, 1.0) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242, 45%, 15%, 0.9) 0px, transparent 50%)',
        'mesh-dark-subtle': 'radial-gradient(circle at 25% 25%, rgba(96, 165, 250, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(52, 211, 153, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(251, 191, 36, 0.05) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(248, 113, 113, 0.06) 0%, transparent 50%)',
        'mesh-custom-dark': 'radial-gradient(at 15% 25%, hsla(240,100%,8%,0.8) 0px, transparent 45%), radial-gradient(at 85% 15%, hsla(280,90%,12%,0.7) 0px, transparent 50%), radial-gradient(at 10% 75%, hsla(220,80%,10%,0.9) 0px, transparent 40%), radial-gradient(at 90% 85%, hsla(260,85%,9%,0.8) 0px, transparent 45%), radial-gradient(at 45% 45%, hsla(200,70%,7%,0.6) 0px, transparent 55%)',

        // Legacy gradients for backward compatibility
        'mesh-primary': 'radial-gradient(at 40% 20%, hsla(228,100%,70%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
        'mesh-secondary': 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 0%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 1) 0px, transparent 50%), radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%), radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%), radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Smaller, more refined typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.8125rem', { lineHeight: '1.25rem' }],
        'base': ['0.875rem', { lineHeight: '1.375rem' }],
        'lg': ['1rem', { lineHeight: '1.5rem' }],
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.375rem', { lineHeight: '2rem' }],
        '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      fontWeight: {
        // Refined font weights for minimalistic design
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        // Design system spacing tokens
        'xs': '0.5rem',    // 8px
        'sm': '0.75rem',   // 12px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px
        // Enhanced spacing scale for better whitespace management
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.1em',
      },
      boxShadow: {
        // Design system shadow tokens
        // Light theme shadows
        'light-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'light-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'light-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'light-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

        // Dark theme shadows
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'dark-md': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        'dark-xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        'dark-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',

        // Floating elements
        'float': '0 8px 30px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)',
        'float-lg': '0 15px 40px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.4)',

        // Glow effects for interactive elements
        'glow-primary': '0 0 20px rgba(96, 165, 250, 0.3)',
        'glow-secondary': '0 0 20px rgba(52, 211, 153, 0.3)',
        'glow-primary-light': '0 0 20px rgba(0, 102, 255, 0.2)',
        'glow-secondary-light': '0 0 20px rgba(16, 185, 129, 0.2)',

        // Glassmorphism shadows - theme agnostic
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.5), 0 0 40px rgba(96, 165, 250, 0.2)',
        'glass-hover-light': '0 12px 40px 0 rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 102, 255, 0.2)',
        'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',

        // Interactive hover shadows
        'hover-lift': '0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(96, 165, 250, 0.1)',
        'hover-glow': '0 0 30px rgba(96, 165, 250, 0.4), 0 0 60px rgba(52, 211, 153, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
      },
      animation: {
        // Enhanced subtle animations
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        
        // Enhanced microinteractions
        'bounce-subtle': 'bounceSubtle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'lift-hover': 'liftHover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'glass-shimmer': 'glassShimmer 3s ease-in-out infinite',
        'mesh-float': 'meshFloat 6s ease-in-out infinite',
        'mesh-ultra-slow': 'meshFloatUltraSlow 90s ease-in-out infinite',
        'list-hover': 'listHover 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'stagger-in': 'staggerIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
        // Enhanced microinteraction keyframes
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-1deg)' },
          '75%': { transform: 'rotate(1deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(96, 165, 250, 0.4)' },
        },
        liftHover: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '100%': { transform: 'translateY(-2px) scale(1.02)' },
        },
        glassShimmer: {
          '0%, 100%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '200% 0' },
        },
        meshFloat: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(2px, -2px) rotate(0.5deg)' },
          '66%': { transform: 'translate(-1px, 1px) rotate(-0.5deg)' },
        },
        listHover: {
          '0%': { transform: 'translateX(0px)', backgroundColor: 'transparent' },
          '100%': { transform: 'translateX(4px)', backgroundColor: 'rgba(96, 165, 250, 0.05)' },
        },
        meshFloatUltraSlow: {
          '0%, 100%': { transform: 'translate3d(0px, 0px, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate3d(1px, -1px, 0) rotate(0.2deg) scale(1.005)' },
          '50%': { transform: 'translate3d(-0.5px, 1px, 0) rotate(-0.2deg) scale(0.995)' },
          '75%': { transform: 'translate3d(0.5px, 0.5px, 0) rotate(0.1deg) scale(1.002)' },
        },
        staggerIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
