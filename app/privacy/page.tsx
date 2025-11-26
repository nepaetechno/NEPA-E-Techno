import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
                        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground">Last Updated: {currentDate}</p>
                        <p className="mt-4 text-muted-foreground">
                            NEPA-E Techno (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains
                            how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>

                        <h3 className="text-xl font-medium text-foreground">1.1 Personal Information</h3>
                        <p className="text-muted-foreground mb-2">
                            We may collect the following personal information when you submit a form or contact us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name</li>
                            <li>Project details or inquiries</li>
                        </ul>

                        <h3 className="text-xl font-medium text-foreground mt-4">1.2 Automatically Collected Information</h3>
                        <p className="text-muted-foreground mb-2">
                            When you use our website, we may automatically collect:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>IP address</li>
                            <li>Browser type & device information</li>
                            <li>Pages visited</li>
                            <li>Time spent on site</li>
                            <li>Cookies & analytics data</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                        <p className="text-muted-foreground mb-2">We use your data to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Provide and improve our services</li>
                            <li>Respond to your inquiries and requests</li>
                            <li>Communicate regarding projects or support</li>
                            <li>Analyze website performance</li>
                            <li>Send updates, promotional messages, or offers (only with your consent)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">3. Cookies and Tracking</h2>
                        <p className="text-muted-foreground mb-2">
                            We may use cookies, analytics tools (like Google Analytics), and similar technologies to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Improve user experience</li>
                            <li>Analyze website traffic</li>
                            <li>Personalize content</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            You can disable cookies through your browser at any time.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">4. Sharing Your Information</h2>
                        <p className="text-muted-foreground mb-2">
                            We do not sell or trade your personal information. We may share it only with:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Trusted third-party tools (analytics, email services)</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            All third-party partners follow strict data protection standards.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">5. Data Security</h2>
                        <p className="text-muted-foreground mb-2">
                            We implement strong security measures to protect your data against:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Unauthorized access</li>
                            <li>Alteration</li>
                            <li>Disclosure</li>
                            <li>Destruction</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            However, no online platform is completely risk-free.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
                        <p className="text-muted-foreground mb-2">You may request to:</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                            <li>Access your personal information</li>
                            <li>Update or correct your information</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of promotional communication</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            Send requests at: <a href="mailto:nepaetechno@gmail.com" className="text-primary hover:underline">nepaetechno@gmail.com</a>
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">7. Third-Party Links</h2>
                        <p className="text-muted-foreground">
                            Our website may contain external links (e.g., Facebook, Instagram). We are not responsible for the privacy
                            practices of other websites.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">8. Changes to This Policy</h2>
                        <p className="text-muted-foreground">
                            We may update this Privacy Policy periodically. Updates will be posted on this page with a new “Last
                            Updated” date.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">9. Contact Us</h2>
                        <p className="text-muted-foreground mb-4">If you have questions regarding this Privacy Policy, contact us:</p>
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
