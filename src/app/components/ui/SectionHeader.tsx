import { cn } from "../../../lib/utils"
import { ReactNode } from "react"

interface SectionHeaderProps {
    title: string
    description?: string
    children?: ReactNode
    className?: string
    titleSize?: "sm" | "md" | "lg"
    alignment?: "left" | "center" | "right"
}

export function SectionHeader({
    title,
    description,
    children,
    className,
    titleSize = "lg",
    alignment = "center"
}: SectionHeaderProps) {
    const titleSizeClasses = {
        sm: "text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
        md: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
        lg: "text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
    }

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }

    return (
        <div className={cn(
            "mx-auto max-w-4xl",
            alignmentClasses[alignment],
            className
        )}>
            <div className="relative">
                <h2 className={titleSizeClasses[titleSize]}>
                    {title}
                </h2>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full mx-auto"></div>
            </div>
            {description && (
                <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                    {description}
                </p>
            )}
            {children && (
                <div className="mt-6">
                    {children}
                </div>
            )}
        </div>
    )
}
