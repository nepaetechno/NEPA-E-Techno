"use client"

import { useState } from "react"
import { ProjectCard } from "./project-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "e-pasal-ecommerce.png",
    link: "https://rojal604.github.io/project-5/",
  },
  {
    title: "luxe-dining",
    description: "Analytics and management dashboard with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "luxe-dining.png",
    link: "https://rojal604.github.io/project-3/",
  },
  {
    title: "cooperative business website",
    description: "Cross-platform fitness tracking app with workout plans and social features.",
    tags: ["React Native", "Firebase", "Node.js", "AWS"],
    image: "coophub-cooperative.png",
    link: "https://rojal604.github.io/project-4/",
  },
  {
    title: "Basic Website",
    description: "Complete branding package including logo, guidelines, and marketing materials.",
    tags: ["Design", "Branding", "UI/UX", "Logo"],
    image: "bassic-postfolio.png",
    link: "https://rojal604.github.io/project-2/",
  },
]

export function PortfolioSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  const currentProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Optional: Scroll to top of section
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our latest work and see how we help businesses succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
