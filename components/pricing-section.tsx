"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic Website",
    description: "Perfect for small businesses and startups",
    price: "₨7,000 - ₨15,000",
    features: [
      "Up to 4 pages",
      "Responsive design",
      "Contact form",
      "Simple clean UI",
      "Basic SEO setup",
      "1 week delivery",
    ],
    popular: false,
  },
  {
    name: "Standard Website",
    description: "Ideal for growing businesses",
    price: "₨20,000 - ₨40,000",
    features: [
      "8-12 pages",
      "Custom UI/UX design",
      "Blog section",
      "Smooth animations",
      "Advanced SEO setup",
      "Social media integration",
      "2-3 weeks delivery",
    ],
    popular: true,
  },
  {
    name: "Premium / eCommerce",
    description: "Enterprise-grade solutions",
    price: "₨50,000 - ₨1,20,000",
    features: [
      "Full eCommerce system",
      "Admin dashboard",
      "Payment gateway integration",
      "Product management",
      "User authentication",
      "Inventory system",
      "Custom features",
      "4-8 weeks delivery",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Website Development Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${plan.popular
                ? "bg-gradient-to-b from-background via-background to-primary/5 border-primary/50 shadow-lg shadow-primary/10"
                : "bg-card/50 backdrop-blur-sm border-border hover:border-primary/30"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full shadow-lg shadow-primary/25">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-bold text-foreground">{plan.price.split(' - ')[0]}</span>
                  {plan.price.includes('-') && (
                    <span className="text-lg text-muted-foreground font-medium"> - {plan.price.split(' - ')[1]}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                        }`}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-muted-foreground leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button
                  className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-background border-2 border-primary/20 hover:border-primary text-foreground hover:bg-primary/5"
                    }`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 text-sm">
          Need a custom solution?{" "}
          <Link href="/contact" className="text-primary font-medium hover:underline underline-offset-4">
            Contact us
          </Link>{" "}
          for a personalized quote.
        </p>
      </div>
    </section>
  )
}
