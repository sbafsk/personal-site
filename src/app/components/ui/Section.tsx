import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
    id?: string
    children: ReactNode
    className?: string
    background?: "white" | "gray" | "blue"
    padding?: "sm" | "md" | "lg"
    ariaLabelledby?: string
    'data-testid'?: string
}

export function Section({
    id,
    children,
    className,
    background = "white",
    padding = "lg",
    ariaLabelledby,
    'data-testid': dataTestId,
    ...props
}: SectionProps) {
    const backgroundClasses = {
        white: "bg-background",
        gray: "bg-muted",
        blue: "bg-primary/5"
    }

    const paddingClasses = {
        sm: "py-16",
        md: "py-24",
        lg: "py-32"
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
            data-testid={dataTestId}
            {...props}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    )
}
