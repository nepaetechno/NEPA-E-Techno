"use client"

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils/get-image-path';


// --- Type Definitions ---
export interface Slide {
    id: number;
    src: string;
    href: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
}

interface ThreeDImageCarouselProps {
    /** The array of image data for the slider. */
    slides: Slide[];
    /** Number of visible items in the slider (3 or 5). Default is 5. */
    itemCount?: 3 | 5;
    /** Enables/Disables automatic sliding. Default is false. */
    autoplay?: boolean;
    /** Delay in seconds for autoplay. Default is 3. */
    delay?: number;
    /** Pauses autoplay when the mouse hovers over the slider. Default is true. */
    pauseOnHover?: boolean;
    /** Tailwind class for the main container (e.g., margins, padding). */
    className?: string;
}

// --- MINIMIZED CSS Styles (Adapted for Card Usage) ---
const EMBEDDED_CSS = `
/* --- Cascade Slider Styles --- */

.cascade-slider_container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 20; 
    user-select: none;
    -webkit-user-select: none; 
    touch-action: pan-y;
}

.cascade-slider_slides {
    position: relative;
    height: 100%; 
    width: 100%;
}

.cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3); 
    transition: all 1s ease; 
    opacity: 0;
    z-index: 1; 
    cursor: grab; 
}
.cascade-slider_item.now {
    cursor: default;
}
.cascade-slider_item:active {
    cursor: grabbing;
}

/* Slide Positioning Classes (Core 3D Logic) */
.cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-140%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(40%) scale(0.6);
    opacity: 1;
    z-index: 4; 
}
.cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5; 
}

/* Arrows */
.cascade-slider_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    cursor: pointer;
    z-index: 6; 
    transform: translate(0, -50%);
    width: 50px; 
    height: 50px; 
    transition: all 0.3s ease;
}

.cascade-slider_arrow-left { left: 10px; }
.cascade-slider_arrow-right { right: 10px; }

/* Images */
.cascade-slider_slides img {
    max-width: 250px; /* Increased base width */
    max-height: 400px;
    height: auto; 
    object-fit: cover;
    border-radius: 20px;
    display: block;
    transition: all 0.5s ease; /* Smoother transition for all properties */
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.cascade-slider_item:not(.now) img {
    filter: blur(3px) brightness(0.7); /* Blur instead of grayscale */
    cursor: pointer;
}

.cascade-slider_item:hover img {
    transform: scale(1.03); /* Slight zoom on hover */
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

/* Content Overlay */
.slide-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.6) 70%, transparent);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.cascade-slider_item.now .slide-content {
    opacity: 1;
    transition-delay: 0.3s;
}

/* Responsive adjustments */
@media screen and (min-width: 768px) {
    .cascade-slider_slides img { max-width: 350px; max-height: 550px; } /* Increased width */
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-130%) scale(0.65); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(30%) scale(0.65); }
}

@media screen and (min-width: 1100px) {
    .cascade-slider_slides img { max-width: 550px; max-height: 700px; } /* Increased width significantly */
    .cascade-slider_item.next { transform: translateY(-50%) translateX(-120%) scale(0.7); }
    .cascade-slider_item.prev { transform: translateY(-50%) translateX(20%) scale(0.7); }
}
`;


// --- Helper Function: Get Slide Classes ---
const getSlideClasses = (index: number, activeIndex: number, total: number, visibleCount: 3 | 5): string => {
    const diff = index - activeIndex;
    if (diff === 0) return 'now';
    if (diff === 1 || diff === -total + 1) return 'next';
    if (visibleCount === 5 && (diff === 2 || diff === -total + 2)) return 'next2';
    if (diff === -1 || diff === total - 1) return 'prev';
    if (visibleCount === 5 && (diff === -2 || diff === total - 2)) return 'prev2';
    return '';
};


// --- ThreeDImageCarousel Component Logic ---
export const ThreeDImageCarousel: React.FC<ThreeDImageCarouselProps> = ({
    slides,
    itemCount = 3, // Default to 3 for smaller cards
    autoplay = true,
    delay = 3,
    pauseOnHover = true,
    className = '',
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const autoplayIntervalRef = useRef<number | null>(null);
    const total = slides.length;

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const swipeThreshold = 50;

    const navigate = useCallback((direction: 'next' | 'prev') => {
        setActiveIndex(current => {
            if (direction === 'next') {
                return (current + 1) % total;
            } else {
                return (current - 1 + total) % total;
            }
        });
    }, [total]);

    const startAutoplay = useCallback(() => {
        if (autoplay && total > 1) {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
            autoplayIntervalRef.current = window.setInterval(() => {
                navigate('next');
            }, delay * 1000);
        }
    }, [autoplay, delay, navigate, total]);

    const stopAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current) {
            clearInterval(autoplayIntervalRef.current);
            autoplayIntervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        startAutoplay();
        return () => { stopAutoplay(); };
    }, [startAutoplay, stopAutoplay]);

    // Handler to stop autoplay on hover
    const handleMouseEnter = () => {
        if (autoplay && pauseOnHover) {
            stopAutoplay();
        }
    };

    // Handler to start autoplay on mouse exit AND handle drag cancellation
    const handleExit = (e: React.MouseEvent) => {
        // 1. Autoplay resume logic
        if (autoplay && pauseOnHover) {
            startAutoplay();
        }

        // 2. Drag cancellation logic
        if (isDragging) {
            handleEnd(e.clientX);
        }
    };

    // --- Touch/Mouse Drag Logic ---
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        stopAutoplay();
    };

    const handleEnd = (clientX: number) => {
        if (!isDragging) return;

        const distance = clientX - startX;

        if (Math.abs(distance) > swipeThreshold) {
            if (distance < 0) {
                navigate('next'); // Swipe left (negative distance) -> show next slide
            } else {
                navigate('prev'); // Swipe right (positive distance) -> show previous slide
            }
        }

        setIsDragging(false);
        setStartX(0);
    };

    const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
    const onMouseUp = (e: React.MouseEvent) => {
        handleEnd(e.clientX);
        startAutoplay(); // Resume autoplay when mouse button is released
    };

    const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) => {
        handleEnd(e.changedTouches[0].clientX);
        startAutoplay(); // Resume autoplay after touch interaction
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />

            <div
                className={`cascade-slider_container ${className}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleExit}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <div className="cascade-slider_slides">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`cascade-slider_item ${getSlideClasses(index, activeIndex, total, itemCount)}`}
                            data-slide-number={index}
                        >
                            <a href={slide.href} className="relative block cursor-pointer" onClick={(e) => {
                                // Prevent navigation if dragging
                                if (isDragging) e.preventDefault();
                            }}>
                                <Image
                                    src={getImagePath(slide.src)}
                                    alt={`Slide ${index + 1}`}
                                    width={550}
                                    height={700}
                                    className="max-w-full h-auto"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://placehold.co/350x200/4F46E5/ffffff?text=Slide%20${index + 1}`;
                                    }}
                                    unoptimized
                                />
                                {(slide.title || slide.description || slide.icon) && (
                                    <div className="slide-content">
                                        {slide.icon && (
                                            <div className="mb-2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
                                                {slide.icon}
                                            </div>
                                        )}
                                        {slide.title && <h3 className="text-2xl font-bold mb-1">{slide.title}</h3>}
                                        {slide.description && <p className="text-base text-gray-200">{slide.description}</p>}
                                    </div>
                                )}
                            </a>
                        </div>
                    ))}
                </div>

                {total > 1 && (
                    <>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-left rounded-full bg-black/30 text-white p-1 hover:bg-black/60 transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                            data-action="prev"
                        >
                            <ArrowLeftCircle size={24} />
                        </span>
                        <span
                            className="cascade-slider_arrow cascade-slider_arrow-right rounded-full bg-black/30 text-white p-1 hover:bg-black/60 transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                            data-action="next"
                        >
                            <ArrowRightCircle size={24} />
                        </span>
                    </>
                )}
            </div>
        </>
    );
};

export default ThreeDImageCarousel;
