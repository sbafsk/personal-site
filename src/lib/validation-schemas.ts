import { z } from 'zod'

// Profile validation schema
export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Title is required"),
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  linkedin: z.string().url("Valid LinkedIn URL is required"),
  github: z.string().url("Valid GitHub URL is required"),
  summary: z.string().min(10, "Summary must be at least 10 characters"),
  bio: z.string().min(20, "Bio must be at least 20 characters"),
  tagline: z.string().min(5, "Tagline must be at least 5 characters"),
  subtitle: z.string().min(5, "Subtitle must be at least 5 characters"),
  highlights: z.array(z.string()).min(1, "At least one highlight is required")
})

// Work experience validation schema
export const WorkExperienceSchema = z.object({
  id: z.string().min(1, "ID is required"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  location: z.string().min(1, "Location is required"),
  period: z.string().min(1, "Period is required"),
  status: z.enum(["completed", "in-progress", "planned"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  technologies: z.array(z.string()).optional(),
  achievements: z.array(z.string()).min(1, "At least one achievement is required"),
  impact: z.string().min(5, "Impact description is required")
})

// Skills validation schema
export const SkillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  level: z.enum(["Expert", "Advanced", "Intermediate", "Basic"]),
  description: z.string().min(5, "Skill description is required"),
  years: z.number().min(0, "Years must be non-negative")
})

export const SkillCategorySchema = z.object({
  title: z.string().min(1, "Category title is required"),
  description: z.string().min(5, "Category description is required"),
  skills: z.array(SkillSchema).min(1, "At least one skill is required")
})

// Education validation schema
export const EducationSchema = z.object({
  id: z.string().min(1, "ID is required"),
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  period: z.string().min(1, "Period is required"),
  status: z.enum(["completed", "in-progress", "planned"]),
  description: z.string().min(10, "Description is required"),
  achievements: z.array(z.string()).min(1, "At least one achievement is required"),
  relevance: z.string().min(5, "Relevance description is required")
})

// Languages validation schema
export const LanguageSchema = z.object({
  name: z.string().min(1, "Language name is required"),
  level: z.string().min(1, "Proficiency level is required"),
  proficiency: z.enum(["native", "advanced", "intermediate", "basic"]),
  description: z.string().min(5, "Description is required"),
  usage: z.array(z.string()).min(1, "At least one usage context is required")
})

// Main data schemas
export const SkillsDataSchema = z.array(SkillCategorySchema)
export const WorkExperiencesDataSchema = z.array(WorkExperienceSchema)
export const EducationDataSchema = z.array(EducationSchema)
export const LanguagesDataSchema = z.array(LanguageSchema)

// Validation functions
export const validateProfile = (data: unknown) => ProfileSchema.parse(data)
export const validateWorkExperiences = (data: unknown) => WorkExperiencesDataSchema.parse(data)
export const validateSkills = (data: unknown) => SkillsDataSchema.parse(data)
export const validateEducation = (data: unknown) => EducationDataSchema.parse(data)
export const validateLanguages = (data: unknown) => LanguagesDataSchema.parse(data)

// Contact form validation schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Contact form validation function
export const validateContactForm = (data: unknown) => ContactFormSchema.parse(data)

// Type exports for use in components
export type ValidatedProfile = z.infer<typeof ProfileSchema>
export type ValidatedWorkExperience = z.infer<typeof WorkExperienceSchema>
export type ValidatedSkillCategory = z.infer<typeof SkillCategorySchema>
export type ValidatedEducation = z.infer<typeof EducationSchema>
export type ValidatedLanguage = z.infer<typeof LanguageSchema>
export type ContactFormData = z.infer<typeof ContactFormSchema>
