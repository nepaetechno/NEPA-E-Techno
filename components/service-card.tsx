"use client"

import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import ThreeDImageCarousel from "@/components/ui/three-d-image-carousel"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  image: string
}

export function ServiceCard({ icon, title, image }: ServiceCardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push("/contact")}
      className="group relative h-[300px] bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Top Row: Icon and Arrow */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-background/80 backdrop-blur-md border border-primary/20 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
          <div className="w-10 h-10 bg-background/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
            <ArrowUpRight className="text-foreground group-hover:text-primary-foreground transition-colors" size={20} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-auto group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Bottom Image Carousel */}
        <div className="relative h-32 w-full mt-4 rounded-lg overflow-hidden flex items-center justify-center">
          <ThreeDImageCarousel
            slides={[
              { id: 1, src: image, href: '#' },
              { id: 2, src: image, href: '#' },
              { id: 3, src: image, href: '#' },
              { id: 4, src: image, href: '#' },
              { id: 5, src: image, href: '#' }
            ]}
            itemCount={3}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
