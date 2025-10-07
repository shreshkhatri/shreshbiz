import { TestimonialsSection } from "@/components/sections/testimonials-section"
import Timeline from "@/components/timeline";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About the founder - Suresh Khatri',
  description:
    "The proprietor of Shresh Biz, Suresh Khatri",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz ","Digital Marketing Shresh biz", "shresh biz web dev", "shresh biz testimonials"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Timeline />
    </main>
  )
}
