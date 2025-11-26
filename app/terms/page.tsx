import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
    const currentDate = "November 26, 2025"

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="space-y-8">
                    <div className="border-b border-border pb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Terms and Conditions</h1>
                        <p className="text-muted-foreground">Last Updated: {currentDate}</p>
                        <p className="mt-4 text-muted-foreground">
                            By accessing or using the NEPA-E Techno website, you agree to the following terms.
                        </p>
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Using this website means you agree to these Terms and Conditions. If you do not agree, please do not use
                            our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. Services Provided</h2>
                        <p className="text-muted-foreground mb-2">NEPA-E Techno provides:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Website development</li>
                            <li>Mobile app development</li>
                            <li>UI/UX design</li>
                            <li>Digital strategy & branding</li>
                            <li>IT support services</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            Service details, pricing, and deliverables may vary per client/project.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. Use of Website</h2>
                        <p className="text-muted-foreground mb-2">You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Use the website for illegal activities</li>
                            <li>Attempt unauthorized access to the server</li>
                            <li>Copy or steal website content, design, or code</li>
                            <li>Upload harmful files, viruses, or malicious scripts</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
                        <p className="text-muted-foreground mb-2">All content on this website, including:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Logos</li>
                            <li>Designs</li>
                            <li>Text</li>
                            <li>Images</li>
                            <li>Code</li>
                            <li>Graphics</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            …is the property of NEPA-E Techno. You cannot reproduce, copy, or distribute without written permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Project Agreements</h2>
                        <p className="text-muted-foreground mb-2">For each project:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Scope, timeline, and cost are finalized before work begins</li>
                            <li>Changes requested by the client may result in additional charges</li>
                            <li>Payments are made as per the agreed milestones</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                        <p className="text-muted-foreground mb-2">NEPA-E Techno is not responsible for:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Losses caused by improper use of delivered products</li>
                            <li>Downtime caused by hosting providers</li>
                            <li>Issues arising from third-party tools or APIs</li>
                            <li>Client-side misuse, editing, or changes after project handover</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">7. Payments & Refund Policy</h2>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Payments must be made as per the agreed terms</li>
                            <li>Refunds are not guaranteed once work has begun</li>
                            <li>Any partial refunds depend on the project stage</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
                        <p className="text-muted-foreground mb-2">
                            We may use third-party services (e.g., hosting, analytics, APIs). We are not responsible for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Their performance</li>
                            <li>Their terms</li>
                            <li>Their security policies</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">9. Termination</h2>
                        <p className="text-muted-foreground mb-2">
                            We may terminate access to the website or services if a user violates:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>These terms</li>
                            <li>Legal or ethical guidelines</li>
                            <li>Intellectual property rules</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">10. Changes to Terms</h2>
                        <p className="text-muted-foreground">
                            We may update these Terms at any time. Changes become effective once posted on the website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">11. Contact Information</h2>
                        <p className="text-muted-foreground mb-4">For questions about these Terms:</p>
                        <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                            <p className="text-muted-foreground">
                                <span className="font-semibold text-foreground">Email:</span> nepaetechno@gmail.com
                            </p>
                            <p className="text-muted-foreground">
                                <span className="font-semibold text-foreground">Phone:</span> +977 9843100643, +977 9762274710
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
