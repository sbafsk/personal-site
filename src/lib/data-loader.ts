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
}

// Profile data
export const profileData: Profile = {
  name: "Sebastián Pereira Rivero",
  title: "Senior Full Stack Developer",
  location: "Montevideo, Uruguay",
  email: "spereirarivero93@gmail.com",
  phone: "+598 98 900 649",
  linkedin: "https://www.linkedin.com/in/sebastian-pereira-rivero/",
  github: "https://github.com/sbafsk/",
  summary: "Senior Full Stack Developer with over 7 years of experience. Specialized in React, Next.js, and TypeScript, with additional expertise in GraphQL integrations, rapid prototyping, and UX optimization. Adept at working in agile, distributed teams and mentoring peers.",
  bio: "My background began in automation and scripting, giving me a unique foundation in systems thinking and efficiency. I'm focused on product quality, performance, and innovation, with growing experience in AI/automation practices (Cursor AI, MCP, BMAD). Recently completed my IT Business Management Diploma while keeping my technical skills sharp through personal projects and exploring emerging AI development practices.",
  tagline: "Building modern web applications with a focus on performance, UX, and AI-assisted practices",
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

// Work experience data
export const workExperiencesData: WorkExperience[] = [
  {
    id: "mimiquate",
    company: "Mimiquate",
    role: "Software Engineer",
    location: "Montevideo, Uruguay",
    period: "January 2024 to April 2024",
    status: "completed",
    description: "Led the development of a project management tool using Elixir and Phoenix, focusing on rapid prototyping and robust backend architecture. Mentored junior developers and led internal code reviews and tech talks to improve team-wide technical skills and collaboration practices. Enhanced collaboration practices within a fast-moving team.",
    technologies: ["Elixir", "Phoenix", "PostgreSQL"],
    achievements: [
      "Led project management tool development",
      "Mentored junior developers",
      "Improved team collaboration practices"
    ],
    impact: "Enhanced team technical skills and collaboration"
  },
  {
    id: "occupier",
    company: "Occupier",
    role: "Frontend Engineer",
    location: "Remote",
    period: "October 2021 to August 2023",
    status: "completed",
    description: "Key contributor to a lease accounting SaaS used by over 5,000 daily users, delivering features that significantly improved UX and client retention. Spearheaded the migration of core data models from REST to GraphQL, boosting application performance and developer efficiency. Partnered closely with product and design teams to prototype and validate new features, ensuring a user-centric approach from ideation to launch.",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
    achievements: [
      "Scaled SaaS to 5k+ daily users",
      "Led REST to GraphQL migration",
      "Improved application performance"
    ],
    impact: "Enhanced UX and client retention"
  },
  {
    id: "basf",
    company: "BASF Services America",
    role: "RPA Developer",
    location: "Montevideo, Uruguay",
    period: "January 2020 to August 2020",
    status: "completed",
    description: "Automated complex financial workflows, resulting in annual savings of over 500 hours of manual labor. Built automation bots that reduced financial closing times from one week to just a few hours.",
    technologies: ["UiPath", "Automation", "Financial Systems"],
    achievements: [
      "Automated financial workflows",
      "Reduced closing times from 1 week to hours"
    ],
    impact: "Saved 500+ hours annually"
  },
  {
    id: "intermedia",
    company: "Intermedia",
    role: "RPA Developer",
    location: "Montevideo, Uruguay",
    period: "November 2018 to December 2019",
    status: "completed",
    description: "Developed over 30 automation bots across multiple departments, driving efficiency and reducing manual tasks. Supported the company's transition to an agile methodology (Scrum), helping improve team-wide collaboration.",
    technologies: ["UiPath", "Agile", "Scrum", "Automation"],
    achievements: [
      "Built 30+ automation bots",
      "Supported agile transition"
    ],
    impact: "Improved team collaboration"
  },
  {
    id: "asignet",
    company: "Asignet",
    role: "Script Developer",
    location: "Montevideo, Uruguay",
    period: "September 2016 to November 2018",
    status: "completed",
    description: "Created over 100 invoice scripts and 40 parsers for data extraction, significantly improving data processing capabilities.",
    technologies: ["Scripting", "Data Processing", "Automation"],
    achievements: [
      "Created 100+ invoice scripts",
      "Built 40+ data parsers"
    ],
    impact: "Improved data processing capabilities"
  }
]

// Skills data
export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern frontend development with React ecosystem",
    skills: [
      {
        name: "React & Next.js",
        level: "Advanced",
        description: "Advanced proficiency in React ecosystem",
        years: 5
      },
      {
        name: "TypeScript & JavaScript",
        level: "Expert",
        description: "Expert level TypeScript and modern JavaScript",
        years: 7
      },
      {
        name: "React Native",
        level: "Intermediate",
        description: "Mobile development experience",
        years: 3
      },
      {
        name: "HTML5 & CSS3",
        level: "Advanced",
        description: "Semantic markup and modern styling",
        years: 7
      }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Full-stack backend development and API design",
    skills: [
      {
        name: "GraphQL",
        level: "Advanced",
        description: "Schema design and implementation",
        years: 3
      },
      {
        name: "NestJS",
        level: "Intermediate",
        description: "Node.js framework experience",
        years: 2
      },
      {
        name: "Ruby on Rails",
        level: "Intermediate",
        description: "Full-stack development",
        years: 3
      },
      {
        name: "Phoenix (Elixir)",
        level: "Intermediate",
        description: "Functional programming experience",
        years: 1
      },
      {
        name: "REST APIs",
        level: "Advanced",
        description: "Design and integration",
        years: 5
      }
    ]
  },
  {
    title: "AI & Automation",
    description: "AI-assisted development and process automation",
    skills: [
      {
        name: "Prompt Engineering",
        level: "Advanced",
        description: "AI interaction optimization",
        years: 2
      },
      {
        name: "AI-assisted development",
        level: "Advanced",
        description: "MCP, BMAD integration",
        years: 2
      },
      {
        name: "RPA (Robotic Process Automation)",
        level: "Expert",
        description: "Workflow automation",
        years: 4
      }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and development operations",
    skills: [
      {
        name: "Jest",
        level: "Advanced",
        description: "Testing framework",
        years: 3
      },
      {
        name: "Git",
        level: "Advanced",
        description: "Version control",
        years: 7
      },
      {
        name: "CI/CD",
        level: "Intermediate",
        description: "Continuous integration/deployment",
        years: 3
      },
      {
        name: "Vercel",
        level: "Advanced",
        description: "Frontend deployment",
        years: 3
      },
      {
        name: "AWS basics",
        level: "Intermediate",
        description: "Cloud infrastructure",
        years: 2
      }
    ]
  },
  {
    title: "Databases",
    description: "Data management and query optimization",
    skills: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        description: "Relational database",
        years: 4
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Query optimization",
        years: 6
      }
    ]
  }
]

// Education data
export const educationData: Education[] = [
  {
    id: "diploma",
    degree: "IT Business Management Diploma",
    institution: "European Open Business School",
    period: "Completed September 2025",
    status: "completed",
    description: "Comprehensive program covering business management principles in the IT sector",
    achievements: [
      "Business management fundamentals",
      "IT sector applications",
      "Strategic planning skills"
    ],
    relevance: "Enhances business acumen for technical leadership roles"
  },
  {
    id: "programmer",
    degree: "Programmer Analyst",
    institution: "Universidad ORT Uruguay",
    period: "2018 – 2020",
    status: "completed",
    description: "Technical degree in software development and programming",
    achievements: [
      "Software development fundamentals",
      "Programming best practices",
      "System analysis skills"
    ],
    relevance: "Core technical foundation for development career"
  },
  {
    id: "highschool",
    degree: "IT High School (Bachillerato)",
    institution: "ESI Buceo",
    period: "2010 – 2014",
    status: "completed",
    description: "High school education with focus on information technology",
    achievements: [
      "IT fundamentals",
      "Problem-solving skills",
      "Technical mindset development"
    ],
    relevance: "Early exposure to technology and systems thinking"
  }
]

// Languages data
export const languagesData: Language[] = [
  {
    name: "Spanish",
    level: "Native",
    proficiency: "native",
    description: "Native language, used for daily communication and professional work"
  },
  {
    name: "English",
    level: "C1 Advanced",
    proficiency: "advanced",
    description: "Advanced professional proficiency, used for international collaboration"
  }
]

// Export functions for data access
export const getProfile = (): Profile => profileData
export const getWorkExperiences = (): WorkExperience[] => workExperiencesData
export const getSkills = (): SkillCategory[] => skillsData
export const getEducation = (): Education[] => educationData
export const getLanguages = (): Language[] => languagesData
