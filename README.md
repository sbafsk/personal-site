# 🚀 Sebastián Pereira Rivero - Personal Site

**Senior Full Stack Developer** with 7+ years of experience building and scaling modern web applications.

## 🌐 **Live Site**
**Status:** ✅ **MVP Successfully Deployed to Vercel**  
**URL:** https://personal-site-lpwaqlv2j-sbafsks-projects.vercel.app

## ✨ **Features**

### **Professional Showcase**
- **Complete Career Timeline** - From Asignet (2016) to Mimiquate (2024)
- **Skills & Expertise** - Frontend, Backend, AI & Automation, Cloud & DevOps
- **Education Journey** - IT Business Management Diploma (Completed 2025)
- **Interactive Contact Form** - Professional communication channel
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### **Technical Excellence**
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with design system
- **Accessibility First** - WCAG 2.1 AA compliant
- **Performance Optimized** - Core Web Vitals optimized

## 🎨 **Design System**

### **Accessibility Standards**
- **WCAG 2.1 AA Compliance** - Full accessibility implementation
- **ARIA Support** - Complete screen reader compatibility
- **Keyboard Navigation** - Enhanced focus management
- **Touch Targets** - Minimum 44px for mobile usability
- **Color Contrast** - WCAG AA compliant color combinations

### **UI/UX Features**
- **Visual Hierarchy** - Clear information architecture
- **Responsive Design** - Mobile-first responsive layouts
- **Interactive Elements** - Enhanced hover and focus states
- **Smooth Transitions** - CSS-based and Tailwind animations
- **Professional Typography** - Inter font with proper scaling
- **Minimalistic Dark Theme** - Default dark (not-too-dark) palette with high contrast
- **Floating Sidebar** - Borderless, lightweight, animated navigation
- **Glassmorphism** - Subtle `backdrop-blur` + translucent surfaces for cards and navbar
- **Mesh Gradients** - Animated, low-opacity background meshes for depth
- **Microinteractions** - Bounce, wiggle, lift and glow effects for feedback

## 🛠️ **Technology Stack**

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern state management

### **Development Tools**
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Git** - Version control
- **Yarn** - Package management

### **Deployment**
- **Vercel** - Recommended hosting platform
- **Static Generation** - Optimized for performance
- **CDN** - Global content delivery

### **Repository**
- **GitHub**: https://github.com/sbafsk/personal-site

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile**: `< 640px` - Single column layout
- **Tablet**: `640px - 1024px` - Two column layout
- **Desktop**: `> 1024px` - Multi-column layout

### **Mobile Features**
- **Touch-Friendly** - 44px minimum touch targets
- **Mobile Navigation** - Hamburger menu with accessibility
- **Optimized Typography** - Readable on all screen sizes
- **Performance** - Optimized for mobile networks

## ♿ **Accessibility Features**

### **Screen Reader Support**
- **Semantic HTML** - Proper document structure
- **ARIA Labels** - Enhanced screen reader experience
- **Skip Links** - Keyboard navigation shortcuts
- **Form Instructions** - Clear field descriptions

### **Keyboard Navigation**
- **Focus Management** - Visible focus indicators
- **Tab Order** - Logical navigation flow
- **Shortcuts** - Skip to main content
- **Interactive Elements** - All accessible via keyboard

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- Yarn
- Git

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd personal-site

# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

### **Development Commands**
```bash
yarn dev         # Start development server
yarn build       # Build for production
yarn start       # Start production server
yarn lint        # Run ESLint
yarn type-check  # Run TypeScript type checking
```

### **Deployment Commands**
```bash
vercel           # Deploy to preview
vercel --prod    # Deploy to production
vercel ls        # List deployments
```

## 📁 **Project Structure**

```
personal-site/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── components/      # Reusable components
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   └── ...
├── docs/                    # Documentation
│   ├── new_cv.md           # Current CV
│   ├── cover_letter.md      # Cover letter template
│   ├── content.md           # Content guidelines
│   └── style-guide.md       # Design system guide
├── standards/               # Development standards
│   └── ui.md               # UI/UX standards
├── public/                  # Static assets
├── package.json             # Dependencies
└── README.md               # This file
```

## 🎯 **Content Sections**

### **Hero Section**
- Professional introduction
- Call-to-action buttons
- Contact information

### **About Section**
- Professional summary
- Career highlights
- Current status

### **Skills Section**
- Frontend technologies
- Backend & APIs
- AI & Automation
- Cloud & DevOps
- Databases

### **Experience Section**
- Complete career timeline
- Role descriptions
- Key achievements
- Technologies used

### **Education Section**
- IT Business Management Diploma
- Programmer Analyst degree
- IT High School background

### **Languages Section**
- Spanish (Native)
- English (C1 Advanced)

### **Photos Section**
- Professional life showcase
- Technology focus
- Personal interests

### **Contact Section**
- Interactive contact form
- Contact information
- Professional links

### **CV Download Section**
- Professional CV access
- Download functionality
- Professional presentation

### **Call to Action Section**
- Engagement optimization
- Professional networking
- Contact encouragement

## 🔧 **Customization**

### **Content Updates**
- Edit `src/app/page.tsx` for main content
- Update `docs/new_cv.md` for CV changes
- Modify `docs/cover_letter.md` for letter updates

### **Styling Changes**
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Refer to `docs/style-guide.md` for design system

### **Component Modifications**
- Edit components in `src/app/components/`
- Follow accessibility guidelines in `standards/ui.md`
- Maintain consistency with design system

## 📊 **Performance Metrics**

### **Production Build**
- **Build Time**: ~9.8 seconds
- **First Load JS**: 198 kB (shared vendor chunk + app)
- **Route Sizes**: Home/Skills/Studies/Work ~115 B; Contact ~1.41 kB
- **Static Generation**: All app routes prerendered (9/9)
- **Code Splitting**: Next.js automatic + vendor chunk separation

### **Core Web Vitals**
- **LCP** (Largest Contentful Paint): Optimized for fast loading
- **FID** (First Input Delay): Responsive interactions
- **CLS** (Cumulative Layout Shift): Stable layouts

### **Optimization Features**
- **Code Splitting** - Automatic Next.js optimization
- **Image Optimization** - WebP/AVIF formats; responsive sizes
- **CSS Purging** - Tailwind CSS optimization
- **Static Generation** - Pre-rendered pages
- **Package Optimization** - `optimizePackageImports` for icon/UI libs
 - **Console Stripping** - Remove console logs in production

## 🧪 **Testing**

### **Accessibility Testing**
- **Screen Readers** - NVDA, JAWS, VoiceOver
- **Keyboard Navigation** - Tab order and focus management
- **Color Contrast** - WCAG AA compliance
- **Touch Targets** - Mobile usability

### **Performance Testing**
- **Lighthouse** - Performance and accessibility auditing
- **Browser DevTools** - Responsive design testing
- **Mobile Testing** - Device and orientation testing
- **Cross-Browser** - Chrome, Firefox, Safari, Edge

## 📈 **Analytics & Monitoring**

### **Recommended Tools**
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking
- **Hotjar** - User experience insights
- **Lighthouse CI** - Automated performance monitoring

## 🚀 **Deployment**

### **Vercel (Production Deployed)**
✅ **Status:** Successfully deployed to production  
🌐 **Live URL:** https://personal-site-lpwaqlv2j-sbafsks-projects.vercel.app  
📊 **Dashboard:** https://vercel.com/sbafsks-projects/personal-site

```bash
# Install Vercel CLI
yarn global add vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

### **Other Platforms**
- **Netlify** - Static site hosting
- **AWS S3** - Cloud hosting
- **GitHub Pages** - Free hosting for open source

## 🤝 **Contributing**

### **Development Standards**
- Follow accessibility guidelines in `standards/ui.md`
- Maintain design system consistency
- Test across devices and browsers
- Ensure WCAG 2.1 AA compliance

### **Code Quality**
- Use TypeScript for type safety
- Follow ESLint configuration
- Maintain component documentation
- Update style guide for new patterns

## 📚 **Documentation**

### **Key Documents**
- **`docs/style-guide.md`** - Complete design system
- **`standards/ui.md`** - UI/UX standards and compliance (Updated with deployment status)
- **`docs/new_cv.md`** - Current professional CV
- **`docs/cover_letter.md`** - Cover letter template

### **Standards Reference**
- **WCAG 2.1 AA** - Accessibility compliance
- **Tailwind CSS** - Utility-first styling
- **Next.js 15** - React framework features
- **TypeScript** - Type-safe development

## 📞 **Contact**

- **Email**: spereirarivero93@gmail.com
- **Phone**: +598 98 900 649
- **LinkedIn**: [Sebastián Pereira Rivero](https://www.linkedin.com/in/sebastian-pereira-rivero/)
- **Location**: Montevideo, Uruguay
- **Live Site**: https://personal-site-lpwaqlv2j-sbafsks-projects.vercel.app

## 📄 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**

*Last updated: September 2025*  
*Status: ✅ MVP Deployed to Vercel*
