"use client"

import { Button } from "@/components/ui/button"
import { Shield, Headphones, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "../scroll-reveal"

const features = [
  { icon: Shield, label: "99.9% Uptime" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: Globe, label: "Easy Domain Management" },
]

const metrics = [
  { value: "100+", label: "Active Domains" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
]

export default function WebServicesAd() {
  return (
    <section className="w-full bg-primary dark:bg-primary/10">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground dark:text-foreground">
              Web Services
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground dark:text-foreground text-balance">
              Looking for Web Services?
            </h2>

            <p className="text-lg text-primary-foreground/80 dark:text-muted-foreground leading-relaxed max-w-xl">
              Reliable domains, hosting, and email services tailored for web professionals.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-2">
              {features.map((item) => (
                <span key={item.label} className="flex items-center gap-2 text-sm text-primary-foreground/90 dark:text-muted-foreground">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
              ))}
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="mt-2"
              asChild
            >
              <Link href="https://web.shreshbiz.com/" target="_blank" className="flex items-center gap-2">
                Explore Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-12 pt-8 border-t border-primary-foreground/10">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-heading font-bold text-primary-foreground dark:text-foreground">{metric.value}</span>
                <span className="text-sm text-primary-foreground/70 dark:text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
