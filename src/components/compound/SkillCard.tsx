import React, { createContext, useContext, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Context for compound component
interface SkillCardContextValue {
  skill: {
    name: string
    level: string
    description: string
    years: number
  }
  category: string
  isSelected: boolean
  onSkillClick: (skillName: string, category: string) => void
  showYears: boolean
}

const SkillCardContext = createContext<SkillCardContextValue | null>(null)

function useSkillCardContext() {
  const context = useContext(SkillCardContext)
  if (!context) {
    throw new Error('SkillCard components must be used within SkillCard')
  }
  return context
}

// Main compound component
interface SkillCardProps {
  skill: {
    name: string
    level: string
    description: string
    years: number
  }
  category: string
  isSelected?: boolean
  onSkillClick?: (skillName: string, category: string) => void
  showYears?: boolean
  children: React.ReactNode
  className?: string
}

/**
 * Compound component for skill cards following documented patterns
 * Provides flexible composition while maintaining consistency
 */
export function SkillCard({
  skill,
  category,
  isSelected = false,
  onSkillClick = () => { /* Default click handler */ },
  showYears = true,
  children,
  className = ''
}: SkillCardProps) {
  const contextValue = useMemo(() => ({
    skill,
    category,
    isSelected,
    onSkillClick,
    showYears
  }), [skill, category, isSelected, onSkillClick, showYears])

  return (
    <SkillCardContext.Provider value={contextValue}>
      <div
        className={cn(
          'cursor-pointer transition-all duration-300',
          isSelected && 'ring-2 ring-primary',
          className
        )}
        onClick={() => onSkillClick(skill.name, category)}
      >
        {children}
      </div>
    </SkillCardContext.Provider>
  )
}

// Sub-components
SkillCard.Container = function SkillCardContainer({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  const { isSelected } = useSkillCardContext()

  return (
    <Card className={cn(
      'h-full group bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:shadow-glass-hover',
      isSelected && 'ring-2 ring-primary shadow-glass',
      className
    )}>
      {children}
    </Card>
  )
}

SkillCard.Header = function SkillCardHeader({
  children,
  className = ''
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <CardHeader className={cn('pb-4', className)}>
      {children}
    </CardHeader>
  )
}

SkillCard.Title = function SkillCardTitle({
  className = ''
}: {
  className?: string
}) {
  const { skill, isSelected } = useSkillCardContext()

  return (
    <CardTitle className={cn(
      'text-lg font-semibold transition-all duration-300 group-hover:scale-105 group-hover:italic',
      isSelected ? 'text-primary' : 'text-card-foreground group-hover:text-primary',
      className
    )}>
      {skill.name}
    </CardTitle>
  )
}

SkillCard.Description = function SkillCardDescription({
  className = ''
}: {
  className?: string
}) {
  const { skill } = useSkillCardContext()

  return (
    <p className={cn('text-sm text-muted-foreground mt-2 leading-relaxed', className)}>
      {skill.description}
    </p>
  )
}

SkillCard.Content = function SkillCardContent({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <CardContent className={className}>
      {children}
    </CardContent>
  )
}

SkillCard.Level = function SkillCardLevel({
  className = ''
}: {
  className?: string
}) {
  const { skill, isSelected } = useSkillCardContext()

  const levelStyles = {
    Expert: 'bg-green-500/20 text-green-400 border-green-500/30',
    Advanced: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Basic: 'bg-muted text-muted-foreground border-border'
  }

  return (
    <span className={cn(
      'text-xs px-3 py-1 rounded-full font-medium border transition-all duration-200',
      levelStyles[skill.level as keyof typeof levelStyles] || levelStyles.Basic,
      isSelected && 'ring-1 ring-primary/50',
      className
    )}>
      {skill.level}
    </span>
  )
}

SkillCard.Years = function SkillCardYears({
  className = ''
}: {
  className?: string
}) {
  const { skill, showYears } = useSkillCardContext()

  if (!showYears) return null

  return (
    <span className={cn('text-xs text-muted-foreground', className)}>
      {skill.years}y
    </span>
  )
}

SkillCard.Badge = function SkillCardBadge({
  className = ''
}: {
  className?: string
}) {
  const { isSelected } = useSkillCardContext()

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <SkillCard.Years />
      <SkillCard.Level />
      {isSelected && (
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      )}
    </div>
  )
}

// Default composition for easy use
SkillCard.Default = function DefaultSkillCard({
  skill,
  category,
  isSelected,
  onSkillClick,
  showYears
}: Omit<SkillCardProps, 'children'>) {
  return (
    <SkillCard
      skill={skill}
      category={category}
      isSelected={isSelected ?? false}
      onSkillClick={onSkillClick ?? (() => { /* Default click handler */ })}
      showYears={showYears ?? true}
    >
      <SkillCard.Container>
        <SkillCard.Header>
          <SkillCard.Title />
          <SkillCard.Description />
        </SkillCard.Header>
        <SkillCard.Content>
          <div className="flex justify-between items-center">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <SkillCard.Badge />
          </div>
        </SkillCard.Content>
      </SkillCard.Container>
    </SkillCard>
  )
}

export default SkillCard