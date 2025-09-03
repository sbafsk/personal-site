import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
    id?: string
    children: ReactNode
    className?: string
    background?: "white" | "gray" | "blue"
    padding?: "sm" | "md" | "lg"
    ariaLabelledby?: string
}

export function Section({
    id,
    children,
    className,
    background = "white",
    padding = "lg",
    ariaLabelledby
}: SectionProps) {
    const backgroundClasses = {
        white: "bg-white",
        gray: "bg-gray-50",
        blue: "bg-blue-50"
    }

    const paddingClasses = {
        sm: "py-12",
        md: "py-16",
        lg: "py-24"
    }

    return (
        <section
            id={id}
            className={cn(
                paddingClasses[padding],
                backgroundClasses[background],
                className
            )}
            aria-labelledby={ariaLabelledby}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    )
}
