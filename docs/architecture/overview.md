# System Architecture Overview

> **AI Context**: This is the single source of truth for system architecture.
> For current status: see `../status/progress.yaml`
> For implementation details: see specific architecture files

## Architecture Overview

Sebastián's Personal Site follows a modern static landing page architecture with dynamic contact form functionality using Next.js 15 and shadcn/ui components. The site is currently in **Phase 3: Enhanced Features** with **90% completion** and ready for **Phase 4: Deployment & Scaling**.

## Current Implementation Status

### ✅ **Completed (Phase 1 & 2)**
- **Core Site Structure**: All major sections implemented
- **Component Architecture**: Modular, reusable components with shadcn/ui
- **Accessibility**: WCAG 2.1 AA compliant
- **Responsive Design**: Mobile-first with Tailwind CSS v4
- **Build System**: Optimized production builds
- **Contact Form**: Interactive form with validation
- **Content Layer**: Data-driven content management with YAML files
- **Data Validation**: Zod schemas for data integrity
- **AI Integration**: MCP-friendly content structure

### 🔄 **In Progress (Phase 3)**
- **Enhanced Features**: Interactive CV, analytics, anti-spam protection
- **Performance Monitoring**: Core Web Vitals tracking
- **Security**: Rate limiting and CAPTCHA implementation

### ⏳ **Planned (Phase 4)**
- **Deployment**: Vercel preview deployments, monitoring
- **CI/CD**: Automated testing and deployment pipeline
- **Performance**: Core Web Vitals optimization

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Layer     │    │   External      │
│   (Next.js)     │◄──►│   (Next.js)     │◄──►│   (Email)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   UI Components │    │   Form Handler  │    │   Email Service │
│   (shadcn/ui)   │    │   (API Route)   │    │   (Nodemailer)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│   Data Layer    │    │   Validation    │
│   (YAML + TS)   │    │   (Zod)         │
└─────────────────┘    └─────────────────┘
```

## Technology Stack

### Frontend ✅
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State Management**: React Context + Hooks
- **UI Components**: shadcn/ui + Radix UI primitives

### Backend ✅
- **Platform**: Next.js API Routes
- **API**: Next.js built-in API routes
- **Database**: None (static site)
- **Authentication**: None (public site)

### Data Management ✅
- **Content Structure**: YAML data files
- **Data Loader**: TypeScript interfaces and utilities
- **Validation**: Zod runtime validation
- **AI Integration**: MCP-friendly structure

### Infrastructure 🔄
- **Deployment**: Vercel (ready for setup)
- **Monitoring**: Vercel Analytics ✅
- **CI/CD**: GitHub Actions (planned)

## Key Architectural Decisions

1. **Static Site Generation**: Use Next.js static generation for optimal performance
2. **API Routes for Contact**: Single API route for contact form submission
3. **Component-Based Architecture**: Modular components using shadcn/ui patterns
4. **Responsive Design**: Mobile-first approach with TailwindCSS
5. **Accessibility First**: Built-in accessibility with Radix UI primitives
6. **Data-Driven Content**: YAML-based content management ✅
7. **Content Validation**: Runtime validation with Zod ✅
8. **Performance Tracking**: Vercel Analytics integration ✅

## Site Structure

### Page Components ✅
```
app/
├── page.tsx              # Home page (all sections)
├── layout.tsx            # Root layout with navigation + analytics
├── globals.css           # Global styles and TailwindCSS
└── api/
    └── contact/
        └── route.ts      # Contact form API endpoint
```

### Section Components ✅
```
components/
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   ├── LanguagesSection.tsx
│   ├── PhotosSection.tsx
│   ├── ContactSection.tsx
│   ├── CVDownloadSection.tsx
│   └── CallToActionSection.tsx
├── ui/                   # shadcn/ui components
├── forms/
│   └── ContactForm.tsx   # Contact form with validation
└── layout/
    └── Footer.tsx        # Site footer
```

### Data Structure ✅
```
data/
├── profile.yaml          # Main profile information
├── experience.yaml       # Work experience data
├── skills.yaml          # Technical skills by category
├── education.yaml       # Education and learning
└── languages.yaml       # Language proficiency

src/lib/
├── data-loader.ts       # Data access utilities
└── validation-schemas.ts # Zod validation schemas
```

## Data Flow

### Static Content ✅
- **Current**: YAML data files with validation
- **Target**: AI-friendly content management ✅
- **Profile Data**: Structured data files for easy updates ✅
- **Project Data**: Organized data with validation ✅
- **Skills Data**: Categorized with proficiency levels ✅

### Dynamic Content ✅
- **Contact Form**: Form submission → API route → Email service
- **Form Validation**: Client-side with Zod, server-side validation
- **Error Handling**: User-friendly error messages and success feedback

## Performance Considerations

### Optimization Strategies ✅
- **Static Generation**: Pre-render all static content
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Lazy load non-critical components
- **Bundle Analysis**: Monitor bundle size with Next.js analytics

### Core Web Vitals Targets 🔄
- **LCP**: < 2.5s (target: < 2.0s)
- **FID**: < 100ms (target: < 50ms)
- **CLS**: < 0.1 (target: < 0.05)

## Security Considerations

### Form Security 🔄
- **Input Validation**: Client and server-side validation ✅
- **Rate Limiting**: Basic protection (enhancement planned)
- **CSRF Protection**: Built-in Next.js protection
- **Email Sanitization**: Clean user inputs before sending

### Deployment Security 🔄
- **HTTPS Only**: Enforce secure connections
- **Environment Variables**: Secure API keys and secrets
- **Content Security Policy**: Prevent XSS attacks

## Upcoming Enhancements

### Phase 3: Enhanced Features (Week 3) - 90% Complete
1. **✅ Anti-Spam Protection**: Rate limiting + CAPTCHA (in progress)
2. **✅ Analytics Integration**: Vercel Analytics setup
3. **✅ Interactive CV**: PDF download + export features
4. **🔄 Performance Monitoring**: Core Web Vitals tracking (in progress)

### Phase 4: Deployment & Scaling (Week 4)
1. **Vercel Preview Deployments**: Auto-deploy on branches
2. **Performance Dashboard**: Real-time monitoring
3. **CI/CD Pipeline**: Automated testing and deployment
4. **Scalability Planning**: MDX + Contentlayer for future growth

## Quality Gates

### ✅ **Passed**
- Build Success: 100%
- Linting Clean: No errors
- Accessibility: WCAG 2.1 AA
- Component Architecture: Modular design
- Data Layer Structure: YAML + validation
- Content Validation: Zod schemas
- Interactive Features: CV download, exports
- Analytics Integration: Vercel Analytics

### ⏳ **Pending**
- Testing Coverage: Target 80%
- Performance Score: Target 90+
- E2E Testing: Playwright implementation
- Anti-Spam Protection: Rate limiting + CAPTCHA

## Related Documentation

- [Design System](../design-system/components.md)
- [Contact Form API](api.md)
- [Component Architecture](components.md)
- [Current Status](../status/progress.yaml)
- [Context Engineering](../context_engineering.md)
