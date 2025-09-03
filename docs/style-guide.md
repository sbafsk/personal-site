# Personal Site Style Guide
**Sebastián Pereira Rivero - Senior Full Stack Developer**

**Last Updated:** September 2025  
**Framework:** Next.js 15 + TypeScript + TailwindCSS

---

## 🎨 **Design System Overview**

### **Brand Identity**
- **Primary Color**: Blue (#3B82F6) - Used for CTAs, links, and accents
- **Secondary Color**: Gray (#6B7280) - Used for text and borders
- **Background Colors**: White (#FFFFFF) and light gray (#F9FAFB)
- **Typography**: Inter font family for modern, professional appearance

### **Visual Hierarchy**
- **H1**: Hero section title (text-4xl to text-6xl)
- **H2**: Section headings (text-3xl to text-4xl)
- **H3**: Subsection headings (text-xl to text-2xl)
- **Body**: Regular text (text-lg to text-base)
- **Small**: Captions and metadata (text-sm)

---

## 🎯 **Color Palette**

### **Primary Colors**
```css
/* Blue - Primary brand color */
--blue-50: #EFF6FF
--blue-100: #DBEAFE
--blue-500: #3B82F6
--blue-600: #2563EB
--blue-700: #1D4ED8

/* Gray - Secondary and text colors */
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-600: #4B5563
--gray-700: #374151
--gray-900: #111827
```

### **Usage Guidelines**
- **Blue**: Primary actions, links, and important elements
- **Gray**: Text, borders, and secondary information
- **White**: Backgrounds and content areas
- **Green/Red**: Success and error states only

---

## 📝 **Typography System**

### **Font Family**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### **Font Sizes & Weights**
```css
/* Headings */
.text-6xl { font-size: 3.75rem; font-weight: 700; } /* Hero H1 */
.text-4xl { font-size: 2.25rem; font-weight: 700; } /* Section H2 */
.text-2xl { font-size: 1.5rem; font-weight: 600; } /* Subsection H3 */
.text-xl { font-size: 1.25rem; font-weight: 600; } /* Large text */

/* Body Text */
.text-lg { font-size: 1.125rem; font-weight: 400; } /* Large body */
.text-base { font-size: 1rem; font-weight: 400; } /* Regular body */
.text-sm { font-size: 0.875rem; font-weight: 400; } /* Small text */
```

### **Line Heights & Spacing**
```css
/* Line Heights */
.leading-8 { line-height: 2rem; } /* Section descriptions */
.leading-6 { line-height: 1.5rem; } /* Body text */
.leading-tight { line-height: 1.25; } /* Headings */

/* Letter Spacing */
.tracking-tight { letter-spacing: -0.025em; } /* Headings */
.tracking-normal { letter-spacing: 0; } /* Body text */
```

---

## 🧩 **Component Library**

### **Navigation Component**
```tsx
// Primary Navigation
<nav role="navigation" aria-label="Main navigation">
  <div role="menubar">
    <a role="menuitem" aria-label="Go to section">
      Section Name
    </a>
  </div>
</nav>

// Styling Classes
className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
```

### **Button Components**
```tsx
// Primary Button
<button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors min-h-[44px]">
  Button Text
</button>

// Secondary Button
<button className="text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1 min-h-[44px]">
  Button Text
</button>
```

### **Card Components**
```tsx
// Standard Card
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p className="text-gray-700">Card content description</p>
</div>

// Skill Card
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
  <div className="space-y-2">
    <div className="flex items-center">
      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
      <span className="text-gray-700">Skill name</span>
    </div>
  </div>
</div>
```

### **Form Components**
```tsx
// Input Field
<div>
  <label htmlFor="field" className="block text-sm font-medium text-gray-700 mb-2">
    Label <span className="text-red-500" aria-label="required">*</span>
  </label>
  <input
    type="text"
    id="field"
    name="field"
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px]"
    placeholder="Placeholder text"
    aria-describedby="field-required"
    aria-required="true"
  />
  <div id="field-required" className="sr-only">Field is required</div>
</div>
```

---

## 📱 **Responsive Design System**

### **Breakpoint System**
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### **Grid System**
```tsx
// Responsive Grid Layouts
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {/* Content adapts from 1 column (mobile) to 3 columns (desktop) */}
</div>

// Timeline Layout
<div className="space-y-12">
  <div className="relative">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
      <span className="text-sm font-semibold">2025</span>
    </div>
    <div className="ml-16">
      {/* Content with left margin for timeline */}
    </div>
  </div>
</div>
```

### **Spacing System**
```css
/* Consistent spacing using Tailwind's spacing scale */
.p-4 { padding: 1rem; }      /* 16px */
.p-6 { padding: 1.5rem; }    /* 24px */
.p-8 { padding: 2rem; }      /* 32px */
.py-24 { padding: 6rem 0; }  /* 96px top/bottom */
.px-4 { padding: 0 1rem; }   /* 16px left/right */
```

---

## ♿ **Accessibility Standards**

### **WCAG 2.1 AA Compliance**
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus Indicators**: Visible focus rings on all interactive elements
- **Touch Targets**: Minimum 44x44px for mobile usability
- **Screen Reader**: Full ARIA support and semantic HTML

### **ARIA Implementation**
```tsx
// Navigation
<nav role="navigation" aria-label="Main navigation">

// Menu Items
<div role="menubar">
  <a role="menuitem" aria-label="Go to section">Section</a>
</div>

// Forms
<form role="form" aria-labelledby="form-title" aria-describedby="form-instructions">

// Skip Links
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### **Keyboard Navigation**
```tsx
// Focus Management
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

// Skip Link
<a href="#main-heading" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
  Skip to main content
</a>
```

---

## 🚀 **Performance Guidelines**

### **CSS Best Practices**
```css
/* Use CSS transitions instead of JavaScript animations */
transition-colors: color 150ms ease-in-out
transition-transform: transform 200ms ease-out

/* Hardware acceleration for animations */
transform-gpu: transform: translateZ(0)

/* Optimize for mobile */
min-h-[44px]: min-height: 44px /* Touch target size */
```

### **Image Optimization**
```tsx
// Next.js Image component for optimization
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={400}
  height={300}
  priority={false} // Set to true for above-the-fold images
/>
```

---

## 📋 **Implementation Checklist**

### **Before Development**
- [ ] Review brand guidelines and color palette
- [ ] Set up design system tokens
- [ ] Plan responsive breakpoints
- [ ] Define accessibility requirements

### **During Development**
- [ ] Use consistent spacing and typography
- [ ] Implement proper ARIA attributes
- [ ] Test touch target sizes
- [ ] Ensure keyboard navigation
- [ ] Validate color contrast

### **Before Deployment**
- [ ] Test with screen readers
- [ ] Validate HTML semantics
- [ ] Check responsive behavior
- [ ] Verify accessibility compliance
- [ ] Optimize performance

---

## 🔄 **Maintenance & Updates**

### **Regular Reviews**
- **Monthly**: Check for accessibility updates
- **Quarterly**: Review performance metrics
- **Annually**: Update design system and components

### **Version Control**
- Document all design system changes
- Maintain changelog for components
- Update style guide with new patterns
- Archive deprecated components

---

## 📚 **Resources & References**

### **Accessibility Tools**
- **WAVE**: Web accessibility evaluation tool
- **axe**: Automated accessibility testing
- **Color Contrast Analyzer**: WCAG compliance checking

### **Design Tools**
- **Figma**: Design system management
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: React framework with built-in optimizations

### **Testing Tools**
- **Lighthouse**: Performance and accessibility auditing
- **Browser DevTools**: Responsive design testing
- **Screen Readers**: NVDA, JAWS, VoiceOver testing

---

*This style guide should be updated whenever new components are added or existing ones are modified to maintain consistency across the personal site.*
