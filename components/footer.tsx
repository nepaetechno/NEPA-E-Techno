"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { getImagePath } from "@/lib/utils/get-image-path"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={getImagePath("/logo.png")}
                alt="NEPA-E Techno"
                width={150}
                height={40}
                className="h-10 w-auto dark:invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions. We build the future of technology, today.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/nepaetechno"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-all"
              >
                <AnimatedIcon icon={Facebook} size={18} animation="shake" className="text-blue-600 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/nepaetechno"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-all"
              >
                <AnimatedIcon icon={Instagram} size={18} animation="shake" className="text-pink-600 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/company/nepaetechno"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-all"
              >
                <AnimatedIcon icon={Linkedin} size={18} animation="shake" className="text-blue-700 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com/nepaetechno"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-all"
              >
                <AnimatedIcon icon={Twitter} size={18} animation="shake" className="text-sky-500 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {["Web Development", "App Development", "UI/UX Design", "Digital Marketing", "SEO Optimization"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <AnimatedIcon icon={MapPin} className="text-primary mt-1 group-hover:scale-110 transition-transform" size={18} />
                <span className="text-muted-foreground text-sm">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start gap-3 group">
                <AnimatedIcon icon={Phone} className="text-primary mt-1 group-hover:scale-110 transition-transform" size={18} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+9779843100643" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +977 9843100643
                  </a>
                  <a href="tel:+9779762274710" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    +977 9762274710
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <AnimatedIcon icon={Mail} className="text-primary group-hover:scale-110 transition-transform" size={18} />
                <a href="mailto:nepaetechno@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  nepaetechno@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <a
                  href="https://wa.me/9779762274710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors text-sm"
                >
                  <AnimatedIcon icon={MessageCircle} size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 NEPA-E Techno. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
