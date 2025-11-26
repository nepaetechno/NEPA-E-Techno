"use client"

import { ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import Image from "next/image"
import { getImagePath } from "@/lib/utils/get-image-path"

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
      className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-800 dark:border-white/10 bg-slate-950 dark:bg-black/40 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 shadow-xl dark:shadow-none"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath(image)}
          alt={title}
          fill
          className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-6">
        {/* Top Row: Icon and Arrow */}
        <div className="mb-auto flex w-full items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
            {icon}
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-auto transform transition-all duration-300 group-hover:translate-x-2">
          <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary/50 transition-all duration-300 group-hover:w-full group-hover:bg-primary" />
        </div>
      </div>
    </div>
  )
}
