"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CtaSection() {
  return (
    <section id="cta" className="w-full section-spacing">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="relative rounded-2xl bg-primary dark:bg-primary/10 px-6 py-16 md:px-16 md:py-20 text-center overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary-foreground)/0.05),transparent_60%)]" />

            <div className="relative flex flex-col items-center gap-6 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground dark:text-foreground text-balance">
                Ready to Build Partnership With Us?
              </h2>
              <p className="text-lg text-primary-foreground/80 dark:text-muted-foreground leading-relaxed">
                Drop us a message today and we will get back to you at the earliest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/send-message" className="flex items-center gap-2">
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 dark:border-border dark:text-foreground dark:hover:bg-accent" asChild>
                  <Link href="/contact">Contact Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
