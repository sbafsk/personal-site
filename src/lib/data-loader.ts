// Data loader utility for YAML content
// This will be enhanced with proper YAML parsing in the next step

export interface Profile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  summary: string
  bio: string
  tagline: string
  subtitle: string
  highlights: string[]
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  location: string
  period: string
  status: string
  description: string
  technologies: string[]
  achievements: string[]
  impact: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: {
    name: string
    level: string
    description: string
    years: number
  }[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  status: string
  description: string
  achievements: string[]
  relevance: string
}

export interface Language {
  name: string
  level: string
  proficiency: string
  description: string
  usage: string[]
}

// Temporary data until we implement YAML parsing
export const profileData: Profile = {
  name: "Sebastián Pereira Rivero",
  title: "Senior Full Stack Developer",
  location: "Montevideo, Uruguay",
  email: "spereirarivero93@gmail.com",
  phone: "+598 98 900 649",
  linkedin: "https://www.linkedin.com/in/sebastian-pereira-rivero/",
  github: "https://github.com",
  summary: "Senior Full Stack Developer with over 7 years of experience building and scaling modern web applications. Specialized in React, Next.js, and TypeScript, with additional expertise in GraphQL integrations, rapid prototyping, and UX optimization. Adept at working in agile, distributed teams and mentoring peers.",
  bio: "My background began in automation and scripting, giving me a unique foundation in systems thinking and efficiency. I'm focused on product quality, performance, and innovation, with growing experience in AI/automation practices (Cursor AI, MCP, BMAD). Recently completed my IT Business Management Diploma while keeping my technical skills sharp through personal projects and exploring emerging AI development practices.",
  tagline: "Building and scaling modern web applications with a focus on performance, UX, and AI-assisted practices",
  subtitle: "From automation & scripting to modern web development - bringing systems thinking to every project",
  highlights: [
    "7+ years of experience in web development",
    "Scaled SaaS applications serving 5k+ daily users",
    "Led technical migrations (REST → GraphQL) improving performance",
    "Mentored junior developers and conducted technical training",
    "Automated workflows saving 500+ hours annually",
    "Built 30+ automation bots across multiple departments"
  ]
}

// Export functions for data access
export const getProfile = (): Profile => profileData

// Placeholder functions for other data types
export const getWorkExperiences = (): WorkExperience[] => []
export const getSkills = (): SkillCategory[] => []
export const getEducation = (): Education[] => []
export const getLanguages = (): Language[] => []

// This will be replaced with actual YAML parsing in the next step
