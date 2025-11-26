"use client"

import { Zap, Shield, Users, TrendingUp, Clock, Palette, Headphones } from "lucide-react"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ScrollCarousel } from "@/components/ui/scroll-carousel"

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient workflows and proven processes ensure your project launches on time, every time.",
    color: "text-yellow-500",
  },
  {
    icon: Palette,
    title: "Modern Designs",
    description: "Cutting-edge, visually stunning designs that make your brand stand out from the competition.",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Professional Communication",
    description: "Clear, responsive communication throughout your project. You'll always know the status.",
    color: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Affordable Pricing",
    description: "Premium quality at competitive prices. Get the best value for your investment.",
    color: "text-green-500",
  },
  {
    icon: Shield,
    title: "Expert Developers",
    description: "Skilled professionals with years of experience in latest technologies and best practices.",
    color: "text-indigo-500",
  },
  {
    icon: Clock,
    title: "Clean UI/UX Process",
    description: "User-centered design approach ensuring intuitive, engaging experiences for your users.",
    color: "text-orange-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries. We're here when you need us.",
    color: "text-pink-500",
  },
]

const topReasons = reasons.slice(0, 3)
const bottomReasons = reasons.slice(3)

export function WhyChooseUs() {
  return (
    <section className="bg-card border-y border-border relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="pt-20 pb-10 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
          <span className="text-primary text-sm font-semibold">Why Choose Us</span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose NEPA-E Techno?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Here's what sets us apart and makes us the preferred choice for businesses worldwide
        </p>
      </div>

      <div className="w-full">
        <ScrollCarousel features={reasons} />
      </div>
    </section>
  )
}
