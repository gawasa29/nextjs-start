import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js Starter",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-background">
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
