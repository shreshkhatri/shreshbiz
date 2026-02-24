"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Shresh Biz"
            width={120}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="https://web.shreshbiz.com/" target="_blank" className="flex items-center gap-1">
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-md border border-border hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-b border-border bg-background"
          >
            <nav className="container px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-2.5 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="flex gap-2 mt-3 pt-3 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href="/auth/signin">Sign in</Link>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <Link href="https://web.shreshbiz.com/" target="_blank">
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
