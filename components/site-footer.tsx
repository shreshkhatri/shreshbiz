import Link from "next/link";
import { Icons } from "@/components/icons";
import Image from "next/image";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="container flex flex-col gap-10 py-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg" // logo path in public folder
                alt="Shresh Biz Company Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.twitter className="h-5 w-5 text- foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.gitHub className="h-5 w-5 text- foreground transition-colors hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="glassmorphic-icon"
              >
                <Icons.discord className="h-5 w-5 text- foreground transition-colors hover:text-foreground" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Services</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/services/web-dev"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Web Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Domain purchase
                  </Link>
                </li>
                <li>
                  <Link
                    href="#components"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#changelog"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Maintenance Contract
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium tracking-tight">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#privacy"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#terms"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#licenses"
                    className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text- foreground opacity-95">
            &copy; {new Date().getFullYear()} Shresh Biz. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#terms"
              className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
            >
              Terms
            </Link>
            <Link
              href="#privacy"
              className="text-sm text- foreground transition-colors hover:text-foreground opacity-95"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
