// Data loader utility for YAML content
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export interface Profile {
  name: string
  title: string
  location: string
  timezone: string
  email: string
  phone?: string
  linkedin: string
  github: string
  careerStartYear: number
  siteDescription: string
  keywords: string[]
  summary: string
  bio: string
  tagline: string
  subtitle: string
  highlights?: string[]
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  location: string
  period: string
  status: string
  description: string
  technologies?: string[]
  achievements?: string[]
  impact?: string
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
  status?: string
  description: string
  achievements?: string[]
  relevance?: string
}

export interface Language {
  name: string
  level: string
  proficiency: string
  description: string
  usage: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl: string
  status: string
  type: string
}

// Helper function to load YAML files
function loadYamlFile<T>(filename: string): T {
  const filePath = path.join(process.cwd(), 'data', filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return yaml.load(fileContents) as T
}

// Data loading functions
export const getProfile = (): Profile => {
  const data = loadYamlFile<Profile>('profile.yaml')
  return data
}

export const getWorkExperiences = (): WorkExperience[] => {
  const data = loadYamlFile<{ work_experiences: WorkExperience[] }>('experience.yaml')
  return data.work_experiences
}

export const getSkills = (): SkillCategory[] => {
  const data = loadYamlFile<{ skill_categories: SkillCategory[] }>('skills.yaml')
  return data.skill_categories
}

export const getEducation = (): Education[] => {
  const data = loadYamlFile<{ education_history: Education[] }>('education.yaml')
  return data.education_history
}

export const getLanguages = (): Language[] => {
  const data = loadYamlFile<{ languages: Language[] }>('languages.yaml')
  return data.languages
}

export const getProjects = (): Project[] => {
  const data = loadYamlFile<{ projects: Project[] }>('projects.yaml')
  return data.projects
}
