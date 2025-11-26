"use client"

import ThreeDImageCarousel from "@/components/ui/three-d-image-carousel"
import { Code, Smartphone, Palette, Rocket, Shield, Headphones } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    image: "/web-development.png",
    color: "text-blue-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    image: "/app-development.png",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "/ui-ux-design.png",
    color: "text-purple-500",
  },
  {
    icon: Rocket,
    title: "Digital Strategy",
    image: "/digital-strategy.png",
    color: "text-red-500",
  },
  {
    icon: Shield,
    title: "IT Support",
    image: "/it-support.png",
    color: "text-indigo-500",
  },
  {
    icon: Headphones,
    title: "Branding",
    image: "/branding.png",
    color: "text-pink-500",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="pt-32 pb-20 mb-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 pointer-events-none">
        <div className="text-center mb-8 relative z-50 pointer-events-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="w-full flex justify-center pointer-events-auto">
          <div className="relative w-full max-w-5xl h-[500px]">
            <ThreeDImageCarousel
              slides={services.map((service, index) => ({
                id: index,
                src: service.image,
                href: "/contact",
                title: service.title,
                description: "Learn more about our " + service.title + " services",
                icon: <service.icon className="w-8 h-8" />
              }))}
              itemCount={3}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
