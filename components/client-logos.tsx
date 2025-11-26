"use client"

import Image from "next/image"
import { getImagePath } from "@/lib/utils/get-image-path"

const clients = [
  { name: "TechVentures", logo: "/client-logo-2.png" },
  { name: "Himalayan Crafts", logo: "/crafts-brand-logo-minimal.jpg" },
  { name: "Nepal Tourism", logo: "/tourism-company-logo-minimal.jpg" },
  { name: "Everest Logistics", logo: "/minimal-logistics-logo.png" },
  { name: "FinTech Nepal", logo: "/fintech-company-logo-minimal.jpg" },
  { name: "Green Energy", logo: "/energy-company-logo-minimal.jpg" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-8 text-sm font-medium uppercase tracking-wider">
          Trusted by Leading Companies
        </p>

        <div className="relative">
          {/* Gradient overlays for smooth scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex gap-12 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <Image src={getImagePath(client.logo || "/placeholder.svg")} alt={client.name} width={150} height={48} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
