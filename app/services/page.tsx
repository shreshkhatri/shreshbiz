
import { ServicesSection } from "@/components/sections/features-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Services page for Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz ","Shresh biz services", "shresh biz web dev","digital marketing"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <ServicesSection />
    </main>
  )
}
