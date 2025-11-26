"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. Simple websites typically take 4-8 weeks, while complex applications may take 3-6 months. We provide detailed timelines after the discovery phase.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer various support packages including maintenance, updates, and enhancements. We can discuss the best support plan for your needs during our initial consultation.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, and various other tools depending on project requirements. We always recommend the best tech stack for your specific needs.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "We work with businesses of all sizes from startups to enterprises. We understand the unique challenges startups face and offer flexible engagement models to fit your budget.",
  },
  {
    question: "How do you handle project costs?",
    answer:
      "We offer various pricing models including fixed-price projects, time-and-materials, and retainer-based engagements. We provide transparent quotes with detailed breakdowns upfront.",
  },
  {
    question: "What makes your team different?",
    answer:
      "Our team combines technical expertise with creative thinking. We focus on understanding your business goals and delivering solutions that provide real value, not just code.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
