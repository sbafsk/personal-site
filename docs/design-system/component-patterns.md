# Component Pattern Library

> **Design System Documentation**
> A comprehensive guide to reusable component patterns using TailwindCSS utilities

---

## Table of Contents
1. [Glass Card Components](#glass-card-components)
2. [Button Components](#button-components)
3. [Navigation Components](#navigation-components)
4. [Form Components](#form-components)
5. [Animation Patterns](#animation-patterns)
6. [Theme Usage](#theme-usage)

---

## Glass Card Components

### Ultra-Light Glass Card (Primary Pattern)
The signature glass card style using crystal-clear glassmorphism.

**Pattern:**
```html
<div class="bg-white/5 backdrop-blur-xl rounded-xl p-6
            hover:bg-white/10 hover:shadow-glass-hover
            transition-all duration-300">
  <!-- Content -->
</div>
```

**Tailwind Classes:**
- `bg-white/5` - Ultra-light glass background (5% opacity)
- `backdrop-blur-xl` - Strong blur effect (24px)
- `hover:bg-white/10` - Enhanced glass on hover
- `hover:shadow-glass-hover` - Glow effect on interaction
- `transition-all duration-300` - Smooth transitions

**Variants:**

#### Light Theme Glass Card
```html
<div class="bg-black/12 backdrop-blur-xl rounded-xl p-6
            hover:bg-black/18 hover:shadow-glass-hover-light
            border border-black/20">
  <!-- Content -->
</div>
```

#### Glass Card with Border
```html
<div class="bg-white/5 backdrop-blur-xl rounded-xl p-6
            border border-white/10
            hover:border-white/20 hover:shadow-glass-hover">
  <!-- Content -->
</div>
```

#### Elevated Glass Card
```html
<div class="bg-white/12 backdrop-blur-xl rounded-xl p-8
            shadow-glass-lg
            hover:-translate-y-1 hover:shadow-hover-lift
            transition-all duration-300">
  <!-- Content -->
</div>
```

---

## Button Components

### Primary Button
**Pattern:**
```html
<button class="bg-primary hover:bg-primary-hover
               text-white font-semibold
               px-6 py-3 rounded-lg
               transition-all duration-200
               hover:-translate-y-0.5 hover:shadow-hover-lift
               focus-visible:outline-2 focus-visible:outline-primary">
  Click Me
</button>
```

**Dark Mode Variant:**
```html
<button class="bg-primary dark:bg-primary-dark
               hover:bg-primary-hover dark:hover:bg-primary-dark-hover
               text-white font-semibold
               px-6 py-3 rounded-lg
               transition-all duration-200
               hover:-translate-y-0.5 hover:shadow-glow-primary">
  Click Me
</button>
```

### Glass Button
```html
<button class="bg-white/10 backdrop-blur-md
               hover:bg-white/20
               text-foreground dark:text-foreground-dark
               px-6 py-3 rounded-lg
               border border-white/20
               hover:border-white/30
               transition-all duration-200">
  Glass Button
</button>
```

---

## Navigation Components

### Floating Glass Sidebar
**Pattern:**
```html
<nav class="fixed left-6 top-1/2 -translate-y-1/2
            bg-white/5 backdrop-blur-xl
            rounded-2xl p-4
            border border-white/10
            shadow-float">
  <ul class="space-y-2">
    <li>
      <a href="#" class="block px-4 py-2 rounded-lg
                         text-foreground-muted dark:text-foreground-dark-muted
                         hover:bg-white/10
                         hover:text-primary dark:hover:text-primary-dark
                         transition-all duration-200">
        Home
      </a>
    </li>
  </ul>
</nav>
```

### Nav Item with Active State
```html
<!-- Active -->
<a href="#" class="block px-4 py-2 rounded-lg
                   bg-white/15 backdrop-blur-lg
                   text-primary dark:text-primary-dark
                   font-semibold italic
                   border-l-2 border-primary dark:border-primary-dark">
  Active Page
</a>

<!-- Inactive -->
<a href="#" class="block px-4 py-2 rounded-lg
                   text-foreground-muted dark:text-foreground-dark-muted
                   hover:bg-white/10
                   hover:text-primary dark:hover:text-primary-dark
                   transition-all duration-200">
  Other Page
</a>
```

---

## Form Components

### Glass Input Field
**Pattern:**
```html
<input type="text"
       class="w-full px-4 py-3 rounded-lg
              bg-surface dark:bg-surface-dark
              border border-border dark:border-border-dark
              text-foreground dark:text-foreground-dark
              placeholder:text-foreground-subtle dark:placeholder:text-foreground-dark-subtle
              focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark
              transition-all duration-200"
       placeholder="Enter text">
```

### Glass Textarea
```html
<textarea class="w-full px-4 py-3 rounded-lg
                 bg-surface dark:bg-surface-dark
                 border border-border dark:border-border-dark
                 text-foreground dark:text-foreground-dark
                 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark
                 min-h-[120px]
                 transition-all duration-200"
          placeholder="Your message">
</textarea>
```

---

## Animation Patterns

### Hover Animations

#### Lift on Hover
```html
<div class="hover:-translate-y-2 hover:shadow-hover-lift
            transition-all duration-300">
  <!-- Content lifts up on hover -->
</div>
```

#### Scale on Hover
```html
<div class="hover:scale-102 transition-transform duration-200">
  <!-- Content scales slightly -->
</div>
```

#### Glow on Hover
```html
<div class="hover:shadow-glow-primary
            transition-shadow duration-300">
  <!-- Content glows on hover -->
</div>
```

### Entrance Animations

#### Fade In Up
```html
<div class="animate-fade-in-up">
  <!-- Fades in from bottom -->
</div>
```

#### Stagger In
```html
<ul>
  <li class="animate-stagger-in" style="animation-delay: 0ms">Item 1</li>
  <li class="animate-stagger-in" style="animation-delay: 100ms">Item 2</li>
  <li class="animate-stagger-in" style="animation-delay: 200ms">Item 3</li>
</ul>
```

### Continuous Animations

#### Floating Effect
```html
<div class="animate-float">
  <!-- Floats gently up and down -->
</div>
```

#### Mesh Background Animation
```html
<div class="fixed inset-0 -z-10
            bg-mesh-dark dark:bg-mesh-custom-dark
            animate-mesh-ultra-slow">
  <!-- Animated background mesh -->
</div>
```

---

## Theme Usage

### Accessing Theme Colors

#### Light/Dark Mode Colors
```html
<!-- Background -->
<div class="bg-background dark:bg-background-dark">

<!-- Surface -->
<div class="bg-surface dark:bg-surface-dark">

<!-- Text -->
<p class="text-foreground dark:text-foreground-dark">

<!-- Primary Accent -->
<button class="bg-primary dark:bg-primary-dark
               hover:bg-primary-hover dark:hover:bg-primary-dark-hover">
```

### Spacing Tokens
```html
<!-- Using semantic spacing -->
<div class="p-md">        <!-- 16px padding -->
<div class="m-lg">        <!-- 24px margin -->
<div class="gap-sm">      <!-- 12px gap -->
<div class="space-y-xl">  <!-- 32px vertical spacing -->
```

### Shadow Tokens
```html
<!-- Light theme shadows -->
<div class="shadow-light-md">
<div class="shadow-light-lg">

<!-- Dark theme shadows -->
<div class="shadow-dark-md dark:shadow-dark-lg">

<!-- Glass shadows -->
<div class="shadow-glass hover:shadow-glass-hover">
```

---

## Accessibility Notes

### Focus States
All interactive components should include visible focus states:
```html
<button class="focus-visible:outline-2
               focus-visible:outline-primary
               focus-visible:outline-offset-2">
```

### Color Contrast
- Light theme maintains WCAG AA compliance with dark text on light backgrounds
- Dark theme uses `#f1f5f9` foreground on `#0a0e13` background
- Glass overlays maintain sufficient contrast through backdrop-blur

### Screen Reader Support
```html
<button aria-label="Close menu" class="...">
  <span aria-hidden="true">×</span>
</button>
```

---

## Performance Optimization

### Hardware Acceleration
Glass cards and animated elements use GPU acceleration:
```html
<div class="transform translate-z-0 backface-hidden">
  <!-- GPU-accelerated rendering -->
</div>
```

### Reduced Motion Support
All animations respect `prefers-reduced-motion`:
- Defined in `globals.css`
- Animations are disabled automatically for users who prefer reduced motion

---

## Usage Examples

### Complete Card Component
```html
<article class="bg-white/5 backdrop-blur-xl rounded-xl p-6
                hover:bg-white/10 hover:-translate-y-1 hover:shadow-glass-hover
                transition-all duration-300
                border border-white/10 hover:border-white/20">
  <h3 class="text-xl font-semibold
             text-foreground dark:text-foreground-dark
             mb-2">
    Card Title
  </h3>
  <p class="text-foreground-muted dark:text-foreground-dark-muted
            text-sm leading-relaxed">
    Card description with automatic theme support.
  </p>
  <button class="mt-4 px-4 py-2 rounded-lg
                 bg-primary dark:bg-primary-dark
                 hover:bg-primary-hover dark:hover:bg-primary-dark-hover
                 text-white font-medium
                 transition-all duration-200
                 hover:-translate-y-0.5">
    Learn More
  </button>
</article>
```

---

**Last Updated:** September 2025
**Design System Version:** 2.0
**Framework:** Next.js 15 + TailwindCSS 4