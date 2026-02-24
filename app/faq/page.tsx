import { FaqSection } from "@/components/sections/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Shresh Biz services.",
  alternates: { canonical: "/faq" },
  keywords: ["Shresh Biz", "FAQ", "questions", "digital marketing", "web development"],
}

export default function FaqPage() {
  return (
    <main className="pt-8">
      <FaqSection />
    </main>
  )
}
