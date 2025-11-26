"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"
import { CountUp } from "@/components/lightswind/count-up"
import { AnimatedIcon } from "@/components/ui/animated-icon"

const typingTexts = ["Web Development", "App Development", "UI/UX Design", "Branding", "SEO Optimization"]

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute top-32 left-[15%] w-16 h-16 border border-primary/20 rounded-lg rotate-12 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute top-48 right-[20%] w-12 h-12 bg-accent/10 rounded-full animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-[25%] w-20 h-20 border border-accent/20 rounded-full animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in lg:animate-slide-in-left text-center sm:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary text-sm font-semibold">Welcome to NEPA-E Techno</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              We Build Scalable
              <br />
              <span className="text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
              <br />
              That Clients Trust
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto sm:mx-0">
              Transform your vision into reality with our expert team of designers, developers, and strategists. We
              craft digital experiences that drive results and accelerate your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all w-full sm:w-auto justify-center"
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/5 bg-background/50 backdrop-blur-sm flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <Play size={18} />
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center sm:justify-start gap-8 md:gap-12">
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-background/50 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/5 transition-transform hover:scale-105 duration-300">
                  <AnimatedIcon icon={Trophy} className="text-yellow-500" size={24} animation="float" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center justify-center">
                  <CountUp to={50} separator="," />
                  <span>+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-background/50 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/5 transition-transform hover:scale-105 duration-300">
                  <AnimatedIcon icon={Users} className="text-blue-500" size={24} animation="float" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center justify-center">
                  <CountUp to={40} separator="," />
                  <span>+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-background/50 backdrop-blur-md border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-primary/5 transition-transform hover:scale-105 duration-300">
                  <AnimatedIcon icon={Zap} className="text-orange-500" size={24} animation="float" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 flex items-center justify-center">
                  <CountUp to={5} separator="," />
                  <span>+</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full h-[500px]">
              {/* Main glassmorphism card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-6">
                <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4" />
                <div className="space-y-3">
                  <div className="h-3 bg-muted rounded w-full" />
                  <div className="h-3 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="h-8 bg-primary/20 rounded-lg flex-1" />
                  <div className="h-8 bg-accent/20 rounded-lg flex-1" />
                </div>
              </div>

              {/* Floating smaller cards */}
              <div
                className="absolute top-8 left-4 w-48 h-32 bg-card/60 backdrop-blur-lg border border-border rounded-xl p-4 shadow-lg"
                style={{ animation: "bounce 3s infinite" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg" />
                  <div className="h-3 bg-muted rounded w-20" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-muted rounded w-full" />
                  <div className="h-2 bg-muted rounded w-3/4" />
                </div>
              </div>

              <div
                className="absolute bottom-8 right-4 w-44 h-28 bg-card/60 backdrop-blur-lg border border-border rounded-xl p-4 shadow-lg"
                style={{ animation: "bounce 3s infinite 0.5s" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-accent/20 rounded-full" />
                  <div className="h-2 bg-muted rounded w-16" />
                </div>
                <div className="h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg" />
              </div>

              <div
                className="absolute top-16 right-8 w-36 h-24 bg-card/60 backdrop-blur-lg border border-border rounded-xl p-3 shadow-lg"
                style={{ animation: "bounce 3s infinite 1s" }}
              >
                <div className="grid grid-cols-3 gap-2 h-full">
                  <div className="bg-primary/20 rounded" />
                  <div className="bg-accent/20 rounded" />
                  <div className="bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
