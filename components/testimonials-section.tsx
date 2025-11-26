"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "CEO",
    company: "TechVentures Nepal",
    content:
      "NEPA-E Techno transformed our entire digital presence. Their team delivered a stunning website that increased our leads by 300%. Professional, creative, and results-driven!",
    rating: 5,
    image: "/professional-nepali-businessman-portrait.jpg",
  },
  {
    name: "Sunita Adhikari",
    role: "Founder",
    company: "Himalayan Crafts",
    content:
      "Outstanding work on our e-commerce platform. They understood our vision perfectly and delivered beyond expectations. Our online sales have tripled since launch!",
    rating: 5,
    image: "/professional-nepali-businesswoman-portrait.jpg",
  },
  {
    name: "Bikash Thapa",
    role: "Marketing Director",
    company: "Nepal Tourism Board",
    content:
      "Exceptional service and support throughout the project. The mobile app they built for us has received amazing feedback from users. Highly recommend!",
    rating: 5,
    image: "/professional-young-nepali-man-portrait.jpg",
  },
  {
    name: "Priya Gurung",
    role: "Operations Manager",
    company: "Everest Logistics",
    content:
      "The team at NEPA-E Techno is incredibly talented. They built a custom software solution that streamlined our operations and saved us countless hours every week.",
    rating: 5,
    image: "/professional-nepali-woman-corporate-portrait.jpg",
  },
  {
    name: "Anil Shrestha",
    role: "CTO",
    company: "FinTech Nepal",
    content:
      "Working with NEPA-E was a game-changer for our startup. Their technical expertise and attention to detail helped us launch a secure, scalable fintech platform.",
    rating: 5,
    image: "/professional-nepali-tech-executive-portrait.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Trusted by leading businesses across Nepal and beyond</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Quote icon background */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-primary/5" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <p className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5 bg-transparent"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-primary/50"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5 bg-transparent"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
