import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils/get-image-path"

const caseStudies = [
  {
    title: "E-Commerce Platform",
    client: "E-pasal NP",
    problem: "Limited online presence for authentic Nepali products and poor user experience",
    solution: "Developed a comprehensive e-commerce platform connecting Nepali artisans with global customers",
    results: ["300% increase in sales", "Global market reach", "Seamless payment integration"],
    tools: ["React.js", "Tailwind CSS"],
    image: "/e-pasal-ecommerce.png",
    link: "https://rojal604.github.io/project-5/",
  },
  {
    title: "Luxe Dining",
    client: "Luxe Dining",
    problem: "Manual reservation management leading to booking conflicts and inefficient table turnover",
    solution: "Modern food table registering website with real-time booking management and instant confirmation",
    results: ["40% increase in reservations", "Zero booking conflicts", "Enhanced customer experience"],
    tools: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "/luxe-dining.png",
    link: "https://rojal604.github.io/project-3/",
  },
  {
    title: "Corporate Website & Branding",
    client: "coopHub",
    problem: "No digital presence and inconsistent brand identity across materials",
    solution: "Complete brand identity design and modern corporate website with booking system",
    results: ["200% lead increase", "Brand consistency", "Online booking system"],
    tools: ["React", "Node.js", "Figma", "Adobe CC"],
    image: "/coophub-cooperative.png",
    link: "https://rojal604.github.io/project-4/",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Results for <span className="text-primary">Real Business</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed look at how we've helped businesses achieve their digital goals through innovative solutions.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-8 hover:bg-white/[0.07] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
                {/* Image Side */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} relative`}>
                  <div className="relative h-56 sm:h-72 md:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={getImagePath(study.image || "/placeholder.svg")}
                      alt={study.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Decorative blob behind image */}
                  <div className={`absolute -inset-4 bg-primary/20 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index % 2 === 1 ? "right-0" : "left-0"}`} />
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                      {study.client}
                    </span>
                    <div className="h-px flex-grow bg-border" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {study.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                      <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> The Challenge
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                      <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Our Solution
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Results</p>
                    <div className="flex flex-wrap gap-3">
                      {study.results.map((result, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm font-medium rounded-lg border border-primary/20 flex items-center gap-2">
                          <span className="text-xs">📈</span> {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool, i) => (
                        <span key={i} className="px-2.5 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-white/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-20">
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
              View All Success Stories
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
