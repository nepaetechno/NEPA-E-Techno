"use client"

import { motion, Variants } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
    icon: LucideIcon
    className?: string
    animation?: "float" | "pulse" | "shake" | "scale" | "rotate" | "none"
    size?: number
    color?: string
}

export function AnimatedIcon({
    icon: Icon,
    className,
    animation = "none",
    size = 24,
    color
}: AnimatedIconProps) {

    const variants: Variants = {
        float: {
            y: [0, -5, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        pulse: {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        shake: {
            rotate: [0, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        },
        scale: {
            scale: 1.2,
            transition: {
                duration: 0.2
            }
        },
        rotate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }
        },
        none: {}
    }

    const isContinuous = ["float", "pulse", "rotate"].includes(animation)
    const isHover = ["shake", "scale"].includes(animation)

    return (
        <motion.div
            className={cn("flex items-center justify-center", className)}
            animate={isContinuous ? animation : undefined}
            whileHover={isHover ? animation : undefined}
            variants={variants}
        >
            <Icon size={size} color={color} />
        </motion.div>
    )
}
