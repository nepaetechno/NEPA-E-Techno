import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaSection } from "@/components/cta-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FaqSection } from "@/components/faq-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TechStack } from "@/components/tech-stack"
import { PricingSection } from "@/components/pricing-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ServicesSection />
      </ScrollAnimation>
      <WhyChooseUs />
      <ScrollAnimation>
        <PortfolioSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CaseStudiesSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TestimonialsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TechStack />
      </ScrollAnimation>
      <ScrollAnimation>
        <PricingSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <FaqSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <CtaSection />
      </ScrollAnimation>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
