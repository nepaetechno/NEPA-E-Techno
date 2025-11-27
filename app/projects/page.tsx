import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioSection } from "@/components/portfolio-section"
import { Button } from "@/components/ui/button"
import { BlueCta } from "@/components/blue-cta"

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the projects we're proud of and the results we've delivered for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioSection />

      {/* CTA */}
      <BlueCta
        title="Interested in What You See?"
        description="Let's start a conversation about your next project and how we can bring it to life."
        buttonText="Start Your Project"
      />

      <Footer />
    </main>
  )
}
