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
    features1: FeatureItem[]
    features2: FeatureItem[]
    className?: string
    maxScrollHeight?: number
}

const useFeatureAnimations = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    scrollContainerRef: React.RefObject<HTMLDivElement | null>,
    scrollContainerRef2: React.RefObject<HTMLDivElement | null>,
    progressBarRef: React.RefObject<HTMLDivElement | null>,
    cardRefs: React.MutableRefObject<HTMLDivElement[]>,
    cardRefs2: React.MutableRefObject<HTMLDivElement[]>,
    isDesktop: boolean,
    maxScrollHeight?: number
) => {
    useLayoutEffect(() => {
        if (!containerRef.current) return

        let ctx = gsap.context(() => {
            const scrollWidth1 = scrollContainerRef.current?.scrollWidth || 0
            const scrollWidth2 = scrollContainerRef2.current?.scrollWidth || 0
            const containerWidth = containerRef.current?.offsetWidth || 0
            const cardWidth = cardRefs.current[0]?.offsetWidth || 0
            const viewportOffset = (containerWidth - cardWidth) / 2

            const finalOffset1 = scrollWidth1 - containerWidth + viewportOffset
            const finalOffset2 = scrollWidth2 - containerWidth + viewportOffset

            // Use a shorter scroll distance for mobile to prevent excessive scrolling
            const defaultScrollDistance = isDesktop ? finalOffset1 : finalOffset1 * 0.8
            const scrollDistance = maxScrollHeight || defaultScrollDistance

            if (scrollContainerRef2.current) {
                gsap.set(scrollContainerRef2.current, {
                    x: -finalOffset2 + viewportOffset * 2,
                })
            }

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                        pin: true,
                        // Add pinSpacing to ensure content below is pushed down
                        pinSpacing: true,
                    },
                })
                .fromTo(
                    scrollContainerRef.current,
                    { x: viewportOffset },
                    { x: -finalOffset1 + viewportOffset, ease: "none" }
                )

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                    },
                })
                .to(scrollContainerRef2.current, { x: viewportOffset, ease: "none" })

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
        }, containerRef)

        return () => {
            ctx.revert()
        }
    }, [maxScrollHeight, isDesktop])
}

export const ScrollCarousel = forwardRef<HTMLDivElement, ScrollCarouselProps>(
    ({ features1, features2, className, maxScrollHeight }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null)
        const scrollContainerRef = useRef<HTMLDivElement>(null)
        const scrollContainerRef2 = useRef<HTMLDivElement>(null)
        const progressBarRef = useRef<HTMLDivElement>(null)
        const cardRefs = useRef<HTMLDivElement[]>([])
        const cardRefs2 = useRef<HTMLDivElement[]>([])
        const [isDesktop, setIsDesktop] = useState(false)

        useEffect(() => {
            const checkDesktop = () => {
                setIsDesktop(window.matchMedia("(min-width: 768px)").matches)
            }
            checkDesktop()
            window.addEventListener("resize", checkDesktop)

            // Force refresh ScrollTrigger after mount to ensure correct pinning positions
            const timer = setTimeout(() => {
                ScrollTrigger.refresh()
            }, 500)

            return () => {
                window.removeEventListener("resize", checkDesktop)
                clearTimeout(timer)
            }
        }, [])

        useFeatureAnimations(
            containerRef,
            scrollContainerRef,
            scrollContainerRef2,
            progressBarRef,
            cardRefs,
            cardRefs2,
            isDesktop,
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
                        className="flex flex-row gap-4 md:gap-8 items-center px-6 md:px-0 w-auto"
                    >
                        {renderFeatureCards(features1, cardRefs)}
                    </div>

                    <div
                        ref={scrollContainerRef2}
                        className="flex flex-row gap-4 md:gap-8 items-center px-6 md:px-0 w-auto"
                    >
                        {renderFeatureCards(features2, cardRefs2)}
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
