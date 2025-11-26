"use client"

import React, {
    useEffect,
    useRef,
    useState,
    useLayoutEffect,
    forwardRef,
} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedIcon } from "@/components/ui/animated-icon"

gsap.registerPlugin(ScrollTrigger)

export interface FeatureItem {
    icon: LucideIcon
    title: string
    description: string
    color: string
}

export interface ScrollCarouselProps {
    features: FeatureItem[]
    className?: string
    maxScrollHeight?: number
}

const useFeatureAnimations = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    scrollContainerRef: React.RefObject<HTMLDivElement | null>,
    progressBarRef: React.RefObject<HTMLDivElement | null>,
    cardRefs: React.MutableRefObject<HTMLDivElement[]>,
    maxScrollHeight?: number
) => {
    useLayoutEffect(() => {
        if (!containerRef.current || !scrollContainerRef.current) return

        let ctx = gsap.context(() => {
            const scrollWidth = scrollContainerRef.current?.scrollWidth || 0
            const containerWidth = containerRef.current?.offsetWidth || 0
            const cardWidth = cardRefs.current[0]?.offsetWidth || 0
            const viewportOffset = (containerWidth - cardWidth) / 2

            const finalOffset = scrollWidth - containerWidth + viewportOffset

            // Use the provided maxScrollHeight or the calculated offset as the scroll distance
            const scrollDistance = maxScrollHeight || finalOffset

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                    },
                })
                .fromTo(
                    scrollContainerRef.current,
                    { x: viewportOffset },
                    { x: -finalOffset + viewportOffset, ease: "none" }
                )

            if (progressBarRef.current) {
                gsap.to(progressBarRef.current, {
                    width: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: true,
                    },
                })
            }
        }, containerRef)

        return () => {
            ctx.revert()
        }
    }, [maxScrollHeight])
}

export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
    ({ features, className, maxScrollHeight }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null)
        const scrollContainerRef = useRef<HTMLDivElement>(null)
        const progressBarRef = useRef<HTMLDivElement>(null)
        const cardRefs = useRef<HTMLDivElement[]>([])

        useEffect(() => {
            // Force refresh ScrollTrigger after mount to ensure correct pinning positions
            const timer = setTimeout(() => {
                ScrollTrigger.refresh()
            }, 500)

            return () => {
                clearTimeout(timer)
            }
        }, [])

        useFeatureAnimations(
            containerRef,
            scrollContainerRef,
            progressBarRef,
            cardRefs,
            maxScrollHeight
        )

        const renderFeatureCards = (
            featureSet: FeatureItem[],
            refs: React.MutableRefObject<HTMLDivElement[]>
        ) =>
            featureSet.map((feature, index) => (
                <div
                    key={index}
                    ref={(el: HTMLDivElement | null) => {
                        if (el) refs.current[index] = el
                    }}
                    className="feature-card flex-shrink-0 w-[85vw] md:w-[400px] h-full z-10 gap-4 group relative transition-all duration-300 ease-in-out"
                >
                    <div
                        className={cn(
                            `relative h-full p-8 rounded-3xl backdrop-blur-sm 
              flex flex-col items-center justify-center z-10 
              transition-all duration-300 my-4 bg-background/50 border border-border`,
                            "group-hover:scale-105 hover:shadow-xl hover:border-primary/30"
                        )}
                        suppressHydrationWarning
                    >
                        <div
                            className="w-16 h-16 bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
                            suppressHydrationWarning
                        >
                            <AnimatedIcon
                                icon={feature.icon}
                                className={feature.color}
                                size={32}
                                animation="scale"
                            />
                        </div>

                        <div className="text-center" suppressHydrationWarning>
                            <h3 className="text-2xl mb-3 font-bold text-foreground transition-all duration-300 group-hover:text-primary">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))

        return (
            <section
                className={cn(
                    "bg-transparent text-foreground relative overflow-hidden",
                    className
                )}
                ref={ref}
            >
                <div
                    ref={containerRef}
                    className="relative overflow-hidden h-screen py-20 
          flex flex-col justify-center gap-8 z-10 
          lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_5%,_black_95%,transparent_100%)]"
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex flex-row gap-8 items-center px-6 md:px-0 w-auto"
                    >
                        {renderFeatureCards(features, cardRefs)}
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-2 bg-primary/10 z-50 overflow-hidden rounded-full">
                        <div
                            ref={progressBarRef}
                            className="h-full rounded-full relative overflow-hidden transition-all duration-100 bg-primary"
                            style={{ width: "0%" }}
                        />
                    </div>
                </div>
            </section>
        )
    }
)

ScrollCarousel.displayName = "ScrollCarousel"
