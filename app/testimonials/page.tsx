import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    "Testimonials page for Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz ","Digital Marketing Shresh biz", "shresh biz web dev", "shresh biz testimonials"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <TestimonialsSection />
    </main>
  )
}
