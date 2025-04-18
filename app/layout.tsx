import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DevPortfolio | Senior Full Stack Engineer",
  description:
    "Portfolio of a creative developer and designer specializing in building engaging digital experiences with modern web technologies.",
  keywords: ["developer", "designer", "portfolio", "web development", "frontend", "UI/UX", "React", "Next.js"],
  authors: [{ name: "Developer Name" }],
  creator: "Developer Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.example.com/",
    title: "DevPortfolio | Senior Full Stack Engineer",
    description:
      "Portfolio of a creative developer and designer specializing in building engaging digital experiences with modern web technologies.",
    siteName: "DevPortfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevPortfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPortfolio | Senior Full Stack Engineer",
    description:
      "Portfolio of a creative developer and designer specializing in building engaging digital experiences with modern web technologies.",
    creator: "@username",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'