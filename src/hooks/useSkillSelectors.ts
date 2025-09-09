import { useMemo } from 'react'
import { SkillCategory } from '@/lib/data-loader'

/**
 * Memoized selectors for skills data following documented patterns
 * Inspired by Redux selectors for performance optimization
 */

// Skill statistics interface
export interface SkillStats {
  totalSkills: number
  skillsByLevel: Record<string, number>
  averageYears: number
  topSkills: Array<{ name: string; years: number; category: string }>
  categories: string[]
}

// Skill selector hooks
export const useSkillSelectors = (skillCategories: SkillCategory[]) => {
  // Memoized flat skills array
  const allSkills = useMemo(() => {
    return skillCategories.flatMap(category =>
      category.skills.map(skill => ({
        ...skill,
        category: category.title
      }))
    )
  }, [skillCategories])

  // Memoized skills by level
  const skillsByLevel = useMemo(() => {
    return allSkills.reduce((acc, skill) => {
      acc[skill.level] ??= []
      acc[skill.level]?.push({
        name: skill.name,
        category: skill.category,
        years: skill.years,
        description: skill.description
      })
      return acc
    }, {} as Record<string, Array<{
      name: string
      category: string
      years: number
      description: string
    }>>)
  }, [allSkills])

  // Memoized skills by category
  const skillsByCategory = useMemo(() => {
    return skillCategories.reduce((acc, category) => {
      acc[category.title] = category.skills
      return acc
    }, {} as Record<string, SkillCategory['skills']>)
  }, [skillCategories])

  // Memoized top skills (by years of experience)
  const topSkills = useMemo(() => {
    return [...allSkills]
      .sort((a, b) => b.years - a.years)
      .slice(0, 10)
  }, [allSkills])

  // Memoized skill statistics
  const skillStats = useMemo((): SkillStats => {
    const totalSkills = allSkills.length

    const skillsByLevelCount = allSkills.reduce((acc, skill) => {
      acc[skill.level] = (acc[skill.level] ?? 0) + 1
      return acc
    }, {} as Record<string, number>)

    const averageYears = allSkills.reduce((sum, skill) => sum + skill.years, 0) / totalSkills

    const categories = skillCategories.map(cat => cat.title)

    return {
      totalSkills,
      skillsByLevel: skillsByLevelCount,
      averageYears: Math.round(averageYears * 10) / 10,
      topSkills: topSkills.slice(0, 5),
      categories
    }
  }, [allSkills, topSkills, skillCategories])

  // Search function with memoization
  const createSkillSearch = useMemo(() => {
    return (query: string) => {
      if (!query.trim()) return allSkills

      const searchTerm = query.toLowerCase()
      return allSkills.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm) ||
        skill.description.toLowerCase().includes(searchTerm) ||
        skill.category.toLowerCase().includes(searchTerm)
      )
    }
  }, [allSkills])

  // Filter function with memoization
  const createSkillFilter = useMemo(() => {
    return (filters: {
      levels?: string[]
      categories?: string[]
      minYears?: number
      maxYears?: number
    }) => {
      return allSkills.filter(skill => {
        if (filters.levels && !filters.levels.includes(skill.level)) {
          return false
        }

        if (filters.categories && !filters.categories.includes(skill.category)) {
          return false
        }

        if (filters.minYears && skill.years < filters.minYears) {
          return false
        }

        if (filters.maxYears && skill.years > filters.maxYears) {
          return false
        }

        return true
      })
    }
  }, [allSkills])

  return {
    allSkills,
    skillsByLevel,
    skillsByCategory,
    topSkills,
    skillStats,
    searchSkills: createSkillSearch,
    filterSkills: createSkillFilter
  }
}

// Individual selector hooks for specific use cases
export const useSkillStats = (skillCategories: SkillCategory[]): SkillStats => {
  const { skillStats } = useSkillSelectors(skillCategories)
  return skillStats
}

export const useTopSkills = (
  skillCategories: SkillCategory[],
  count = 5
) => {
  return useMemo(() => {
    const allSkills = skillCategories.flatMap(category =>
      category.skills.map(skill => ({
        ...skill,
        category: category.title
      }))
    )

    return allSkills
      .sort((a, b) => b.years - a.years)
      .slice(0, count)
  }, [skillCategories, count])
}

export const useSkillsByLevel = (
  skillCategories: SkillCategory[],
  level: string
) => {
  return useMemo(() => {
    const allSkills = skillCategories.flatMap(category =>
      category.skills.map(skill => ({
        ...skill,
        category: category.title
      }))
    )

    return allSkills.filter(skill => skill.level === level)
  }, [skillCategories, level])
}

export default useSkillSelectors