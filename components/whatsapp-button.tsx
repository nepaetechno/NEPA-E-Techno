"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779762274710?text=Hello!%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-transform hover:scale-110 transform-gpu"
      aria-label="Chat on WhatsApp"
      suppressHydrationWarning
    >
      <MessageCircle size={28} />
    </a>
  )
}
