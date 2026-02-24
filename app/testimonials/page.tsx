import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear what our clients say about Shresh Biz services.",
  alternates: { canonical: "/testimonials" },
  keywords: ["Shresh Biz", "testimonials", "client reviews"],
}

export default function TestimonialsPage() {
  return (
    <main className="pt-8">
      <TestimonialsSection />
    </main>
  )
}
