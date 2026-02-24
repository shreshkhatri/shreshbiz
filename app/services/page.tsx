import { ServicesSection } from "@/components/sections/features-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services offered by Shresh Biz including web development, digital marketing, and more.",
  alternates: { canonical: "/services" },
  keywords: ["Shresh Biz", "services", "web development", "digital marketing"],
}

export default function ServicesPage() {
  return (
    <main className="pt-8">
      <ServicesSection />
    </main>
  )
}
