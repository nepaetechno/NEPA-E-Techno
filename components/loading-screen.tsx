"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { getImagePath } from "@/lib/utils/get-image-path"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [shouldAnimate, setShouldAnimate] = useState(true)

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden"

        const timer = setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = "auto"
        }, 3000)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center">
                    {/* Left Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={shouldAnimate ? { x: "-100%" } : { opacity: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute left-0 top-0 h-full w-1/2 bg-zinc-950"
                    />

                    {/* Right Curtain */}
                    <motion.div
                        initial={{ x: 0 }}
                        exit={shouldAnimate ? { x: "100%" } : { opacity: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute right-0 top-0 h-full w-1/2 bg-zinc-950"
                    />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        exit={shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 flex flex-col items-center gap-6"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src={getImagePath("/logo.png")}
                                    alt="NEPA-E Techno"
                                    width={200}
                                    height={200}
                                    className="object-contain brightness-0 invert"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                        <div className="h-1 w-32 overflow-hidden rounded-full bg-zinc-800">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1,
                                    ease: "linear",
                                }}
                                className="h-full w-full bg-blue-500"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
