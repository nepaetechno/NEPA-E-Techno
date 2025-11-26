"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Sass", icon: "https://cdn.simpleicons.org/sass" },
  { name: "Angular", icon: "https://cdn.simpleicons.org/angular" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
]

export function TechStack() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Our Tech Stack</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Technologies We Use</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest technologies to build fast, scalable, and modern applications
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <motion.div
              className="flex gap-8 min-w-max py-4"
              animate={{ x: "-50%" }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-[0_6px_0_0_#4ade80] hover:shadow-[0_3px_0_0_#4ade80] hover:translate-y-1 transition-all duration-300 cursor-default border border-gray-100"
                >
                  <div className="w-8 h-8 relative flex items-center justify-center">
                    <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={32} height={32} className="object-contain" unoptimized />

                  </div>
                  <span className="text-lg font-bold text-black">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
