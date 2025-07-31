import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SeiScout AI Wallet Radar - Advanced Sei Network Analytics",
  description:
    "AI-powered wallet analytics for Sei Network. Get insights in <3s, alerts in <1s. Advanced risk assessment, spending patterns, and investment strategies.",
  keywords: "Sei Network, wallet analytics, AI, blockchain, DeFi, cryptocurrency, trading",
  authors: [{ name: "SeiScout Team" }],
  openGraph: {
    title: "SeiScout AI Wallet Radar",
    description: "AI-powered wallet analytics for Sei Network",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
