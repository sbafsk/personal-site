import { useState, useMemo, useCallback } from 'react'
import { getSkills, type SkillCategory } from '@/lib/data-loader'

export interface UseSkillsReturn {
  skillCategories: SkillCategory[]
  selectedCategory: string | null
  selectedSkill: string | null
  setSelectedCategory: (category: string | null) => void
  setSelectedSkill: (skill: string | null) => void
  getSkillsByCategory: (categoryTitle: string) => SkillCategory['skills']
  getTotalSkillsCount: () => number
  getSkillsByLevel: (level: string) => Array<{ name: string; category: string }>
  handleSkillClick: (skillName: string, category: string) => void
}

/**
 * Custom hook for skills management
 * Follows documented standards for reusable business logic
 */
export const useSkills = (externalSkills?: SkillCategory[]): UseSkillsReturn => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skillCategories = useMemo(() =>
    externalSkills ?? getSkills(),
    [externalSkills]
  )

  const getSkillsByCategory = useCallback((categoryTitle: string) => {
    const category = skillCategories.find(cat => cat.title === categoryTitle)
    return category?.skills ?? []
  }, [skillCategories])

  const getTotalSkillsCount = useCallback(() => {
    return skillCategories.reduce((count, category) =>
      count + category.skills.length, 0
    )
  }, [skillCategories])

  const getSkillsByLevel = useCallback((level: string) => {
    const skillsByLevel: Array<{ name: string; category: string }> = []

    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        if (skill.level === level) {
          skillsByLevel.push({
            name: skill.name,
            category: category.title
          })
        }
      })
    })

    return skillsByLevel
  }, [skillCategories])

  const handleSkillClick = useCallback((skillName: string, category: string) => {
    setSelectedSkill(skillName)
    setSelectedCategory(category)
  }, [])

  return {
    skillCategories,
    selectedCategory,
    selectedSkill,
    setSelectedCategory,
    setSelectedSkill,
    getSkillsByCategory,
    getTotalSkillsCount,
    getSkillsByLevel,
    handleSkillClick
  }
}

export default useSkills