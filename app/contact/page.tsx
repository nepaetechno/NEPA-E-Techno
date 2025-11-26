import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectInquiryForm } from "@/components/project-inquiry-form"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">Contact Us</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Let's Start Your Project</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you within
            24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                <a
                  href="mailto:nepaetechno@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  nepaetechno@gmail.com
                </a>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                <a
                  href="tel:+9779762274710"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  +977 9762274710
                </a>
                <a
                  href="tel:+9779843100643"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  +977 9843100643
                </a>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/9779762274710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500 transition-colors"
                >
                  Chat with us instantly
                </a>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Kathmandu, Nepal</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground">Sunday - Friday</p>
                <p className="text-muted-foreground">10:00 AM - 6:00 PM (NPT)</p>
              </div>
            </div>

            {/* Project Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-card border border-border rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-2">Project Inquiry Form</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your project and we'll provide a free consultation and quote.
                </p>
                <ProjectInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
