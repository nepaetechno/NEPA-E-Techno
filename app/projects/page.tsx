import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioSection } from "@/components/portfolio-section"
import { Button } from "@/components/ui/button"

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
      <section className="py-20 bg-gradient-to-r from-primary via-primary/80 to-accent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Interested in What You See?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let's start a conversation about your next project and how we can bring it to life.
          </p>
          <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
