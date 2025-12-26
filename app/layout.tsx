import type React from "react"
import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "NEPA-E Techno | Digital Solutions & Web Development",
  description:
    "Premium digital agency offering web development, app development, UI/UX design, branding, and IT support services.",

  icons: {
    icon: [
      { url: "/NEPA-E-Techno/favicon-circle-v4.png", type: "image/png" },
    ],
    shortcut: "/NEPA-E-Techno/favicon-circle-v4.png",
    apple: "/NEPA-E-Techno/favicon-circle-v4.png",
  },
}

import LoadingScreen from "@/components/loading-screen"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${outfit.variable} font-body antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
