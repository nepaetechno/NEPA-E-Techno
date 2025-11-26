import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Code, Smartphone, Palette, Shield, Headphones, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allServices = [
  {
    icon: Code,
    title: "Web Development",
    image: "/web-development.png",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance, SEO, and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: "/app-development.png",
    description:
      "Native and cross-platform mobile applications using Flutter and React Native that engage users and drive business growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "/ui-ux-design.png",
    description:
      "Intuitive and beautiful user interfaces with research-backed designs that provide exceptional user experiences and increase conversions.",
  },
  {
    icon: Headphones,
    title: "Branding & Identity",
    image: "/branding.png",
    description:
      "Complete branding solutions from logo design to brand identity guidelines that make your business stand out.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    image: "/digital-strategy.png",
    description:
      "Improve your search engine rankings with our comprehensive SEO services including on-page, off-page, and technical optimization.",
  },
  {
    icon: Shield,
    title: "IT Support & Maintenance",
    image: "/it-support.png",
    description:
      "Comprehensive IT infrastructure support, website maintenance, and security solutions to keep your business running smoothly.",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and requirements through in-depth consultation.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Create a detailed project plan and roadmap tailored to your specific needs and timeline.",
  },
  {
    step: 3,
    title: "Design",
    description: "Craft beautiful and intuitive designs with wireframes and prototypes for your approval.",
  },
  {
    step: 4,
    title: "Development",
    description: "Build robust and scalable solutions using the latest technologies and best practices.",
  },
  {
    step: 5,
    title: "Testing",
    description: "Rigorous testing to ensure quality, performance, security, and cross-browser compatibility.",
  },
  {
    step: 6,
    title: "Launch & Support",
    description: "Deploy your solution and provide ongoing support to ensure long-term success.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">What We Offer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive in the modern digital landscape.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                image={service.image}
                icon={<service.icon size={32} strokeWidth={1.5} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary text-sm font-semibold">How We Work</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven 6-step process that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today to discuss your project and get a free consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
