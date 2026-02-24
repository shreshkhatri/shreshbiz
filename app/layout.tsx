import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import "@/app/globals.css"
import { Suspense } from "react"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
})

const fontHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: {
    template: "%s | Shresh Biz",
    absolute: "Shresh Biz | IT Solutions & Digital Marketing",
    default: "Shresh Biz",
  },
  description:
    "Shresh Biz is an IT and software company providing web application development, digital marketing, web hosting, domain purchasing, and long-term support services.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Shresh Biz",
    "IT company Nepal",
    "Web application development",
    "Digital marketing",
    "IT service provider Kathmandu",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense>
              <div className="flex-1 pt-16">{children}<ScrollToTopButton /></div>
            </Suspense>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
