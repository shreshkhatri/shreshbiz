import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "The Founder", href: "/the-founder" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services/web-dev" },
    { name: "Digital Marketing", href: "/services" },
    { name: "Domain & Hosting", href: "https://web.shreshbiz.com/" },
    { name: "LTS Plans", href: "/pricing" },
  ],
  resources: [
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Send Message", href: "/send-message" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Shresh Biz"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empowering businesses with cutting-edge web development, digital marketing, and IT solutions from Kathmandu, Nepal.
            </p>
            <div className="flex gap-3 mt-2">
              <Link
                href="https://www.facebook.com/shreshbiz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                </svg>
              </Link>
              <Link
                href="mailto:info@shreshbiz.com"
                className="flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shresh Biz. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
