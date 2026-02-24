import Timeline from "@/components/timeline"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About the Founder - Suresh Khatri",
  description: "The proprietor of Shresh Biz, Suresh Khatri. Our journey and milestones.",
  alternates: { canonical: "/the-founder" },
  keywords: ["Shresh Biz", "founder", "Suresh Khatri", "company timeline"],
}

export default function FounderPage() {
  return (
    <main>
      <Timeline />
    </main>
  )
}
