import { cn } from "@/lib/utils"
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
        sm: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
        md: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
        lg: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
    }

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }

    return (
        <div className={cn(
            "mx-auto max-w-3xl",
            alignmentClasses[alignment],
            className
        )}>
            <h2 className={titleSizeClasses[titleSize]}>
                {title}
            </h2>
            {description && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
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
