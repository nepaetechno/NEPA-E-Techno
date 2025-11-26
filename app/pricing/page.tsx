import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const appPricing = [
  {
    name: "Basic App",
    description: "Simple mobile application",
    price: "₨50,000 - ₨80,000",
    features: [
      "Single platform (Android/iOS)",
      "Up to 5 screens",
      "Basic UI design",
      "API integration",
      "4-6 weeks delivery",
    ],
  },
  {
    name: "Standard App",
    description: "Feature-rich application",
    price: "₨1,00,000 - ₨2,00,000",
    features: [
      "Cross-platform (Android & iOS)",
      "10-15 screens",
      "Custom UI/UX design",
      "User authentication",
      "Push notifications",
      "Admin panel",
      "8-12 weeks delivery",
    ],
  },
  {
    name: "Enterprise App",
    description: "Complex business solution",
    price: "₨2,50,000+",
    features: [
      "Cross-platform",
      "Unlimited screens",
      "Advanced features",
      "Real-time features",
      "Payment integration",
      "Analytics dashboard",
      "Dedicated support",
      "12+ weeks delivery",
    ],
  },
]

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Simple, Honest Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Website Pricing */}
      <PricingSection />

      {/* App Development Pricing */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mobile App Development</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build powerful mobile applications for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appPricing.map((plan, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border rounded-2xl hover:shadow-xl hover:border-primary/50 transition-all"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <p className="text-3xl font-bold text-foreground">{plan.price}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Quote</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
