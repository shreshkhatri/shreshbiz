import Pricing from "@/components/pricing";
import { FaqSection } from "@/components/sections/faq-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    "Pricing for services at Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz","Shresh Biz Pricing ","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <Pricing />
    </main>
  )
}
