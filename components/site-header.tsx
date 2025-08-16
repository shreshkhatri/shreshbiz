"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "@/components/icons";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-30 w-full transition-all duration-300 bg-background/90 border-b border-border/40"
      )}
    >
      <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 z-10">
          <Image
            src="/logo.svg" // logo path in public folder
            alt="Shresh Biz Company Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* Desktop CTA Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="neumorphic-button"
              asChild
            >
              <Link href="/auth/signin">Sign in</Link>
            </Button>
            <Button size="sm" className="neumorphic-button-primary" asChild>
              <Link href="https://web.shreshbiz.com/" target="_blank">
                Get Started
                <motion.div
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                    duration: 0.8,
                  }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md bg-background/90 border border-border/40 shadow-sm"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-foreground h-5 w-5" />
            ) : (
              <List className="text-foreground h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          >
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background shadow-xl border-l border-border"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={closeMobileMenu}
                >
                  <Image
                    src="/logo.svg" // logo path in public folder
                    alt="Shresh Biz Company Logo"
                    width={150}
                    height={50}
                    priority
                  />
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="text-foreground h-5 w-5" />
                </button>
              </div>

              <div className="py-4 px-2">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                      onClick={(e) => {
                        closeMobileMenu();
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-4 border-t border-border">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/auth/signin" onClick={closeMobileMenu}>
                      Sign in
                    </Link>
                  </Button>
                  <Button className="w-full neumorphic-button-primary" asChild>
                    <Link href="https://web.shreshbiz.com/" target="_blank" onClick={closeMobileMenu}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
