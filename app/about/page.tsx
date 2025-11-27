import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { BlueCta } from "@/components/blue-cta"

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We stay ahead of technology trends and deliver cutting-edge solutions that give you a competitive edge.",
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "Excellence in every project with attention to detail. We don't compromise on quality, ever.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our success. We build lasting partnerships based on trust and mutual growth.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest feedback throughout the process. No surprises, ever.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">About Us</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Who We Are</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of passionate digital professionals dedicated to transforming businesses through innovative
            technology solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To empower businesses of all sizes by providing innovative digital solutions that drive growth, enhance
                efficiency, and create meaningful customer experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of technology to transform businesses and are committed to being your trusted
                partner on that journey.
              </p>
            </div>

            <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be the leading digital agency in Nepal, known for innovation, quality, and exceptional client
                relationships.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We strive to build lasting partnerships that result in measurable success and continued growth for our
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">How It All Started</h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              NEPA-E Techno was founded with a simple mission: to help businesses in Nepal and beyond leverage the power
              of modern technology to grow and succeed. What started as a small team of passionate developers has grown
              into a full-service digital agency.
            </p>
            <p className="mb-4">
              Over the years, we've had the privilege of working with startups, SMEs, and established enterprises across
              various industries. Each project has taught us something new and reinforced our commitment to delivering
              exceptional results.
            </p>
            <p>
              Today, we continue to push boundaries, explore new technologies, and find innovative solutions to complex
              problems. Our team combines technical expertise with creative thinking to help our clients stand out in
              the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BlueCta
        title="Let's Build Something Great Together"
        description="Partner with us and experience the difference a dedicated team can make."
        buttonText="Start a Conversation"
      />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
