import Pricing from "@/components/pricing"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "View pricing for Shresh Biz services including digital marketing, web development, and hosting.",
  alternates: { canonical: "/pricing" },
  keywords: ["Shresh Biz", "pricing", "web development cost", "digital marketing plans"],
}

export default function PricingPage() {
  return (
    <main>
      <Pricing />
    </main>
  )
}
