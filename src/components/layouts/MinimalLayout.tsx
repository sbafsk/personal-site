interface MinimalLayoutProps {
    children: React.ReactNode
}

export function MinimalLayout({ children }: MinimalLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-16 pb-16 px-6 md:px-8 md:pr-32">
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>
        </div>
    )
}
