"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Code, TrendingUp } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Active Clients", value: "1,000+" },
  { label: "Uptime Guarantee", value: "99.9%" },
]

const highlights = [
  { icon: Code, text: "Web Development" },
  { icon: TrendingUp, text: "Digital Marketing" },
  { icon: Globe, text: "Domain & Hosting" },
]

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]" />

      <div className="container relative px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                IT Solutions from Kathmandu
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-balance">
              Your Partner for{" "}
              <span className="gradient-text">Digital Progress</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Reach more people, grow your brand, and let our expert team drive your digital success with web development, marketing, and hosting solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item.text} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Button size="lg" asChild>
                <Link href="https://web.shreshbiz.com/" target="_blank" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 text-center"
              >
                <span className="text-3xl font-heading font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
