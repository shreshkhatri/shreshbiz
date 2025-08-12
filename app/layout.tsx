import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageTransition } from "@/components/page-transition"

import "@/app/globals.css"
import { Suspense } from "react"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

// Use only Google Fonts to avoid any local font references
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const fontHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
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
    template: " %s | Shresh Biz",
    absolute: "Home | Shresh Biz",
    default: "Shresh Biz "
  },
  description: "Shresh Biz is an IT and software company. The company provides services such as all types of web application development, digital marking, media managemnet, web hosting and domain purchasing and support service for the existing web application and resources.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Shresh Biz",
    "Shresh Biz IT company",
    "Web application development",
    "digital marketing",
    "IT service provider"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased font-light",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense>
              <PageTransition>
                <div className="flex-1">{children}<ScrollToTopButton /></div>
              </PageTransition>
            </Suspense>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
