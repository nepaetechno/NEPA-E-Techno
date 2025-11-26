"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HorizontalScrollProps {
    children: React.ReactNode
    className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {children}
                </motion.div>
            </div>
        </section>
    )
}
