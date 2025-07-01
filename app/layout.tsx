import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { MouseTracker } from "@/components/ui/mouse-tracker"
import { LoadingScreen } from "@/components/ui/loading-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SLIIT CS Hub - Computer Science Student Community",
  description:
    "Official website of SLIIT Computer Science student community. Join us for events, resources, and collaborative learning.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <MouseTracker />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
