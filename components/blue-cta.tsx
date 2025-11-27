import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlueCtaProps {
    title: string
    description: string
    buttonText: string
    buttonLink?: string
    className?: string
}

export function BlueCta({
    title,
    description,
    buttonText,
    buttonLink = "/contact",
    className,
}: BlueCtaProps) {
    return (
        <section className={cn("py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950", className)}>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-lg text-white/90 mb-8">
                    {description}
                </p>
                <Link href={buttonLink}>
                    <Button
                        size="lg"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-950 font-semibold transition-colors"
                    >
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </section>
    )
}
