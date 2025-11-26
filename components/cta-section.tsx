"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background/40 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative icon */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Sparkles size={150} />
          </div>

          <div className="inline-block mb-6 p-4 bg-primary/10 rounded-2xl">
            <AnimatedIcon icon={Sparkles} size={32} className="text-primary" animation="rotate" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Transform <br /> <span className="text-primary">Your Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's work together to bring your vision to life and drive real results with our expert digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1">
                Schedule a Consultation
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground flex items-center gap-2 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
