import ContactPage from "@/components/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shresh Biz for inquiries, collaborations, or support.",
  alternates: { canonical: "/contact" },
  keywords: ["Shresh Biz", "contact", "Kathmandu IT", "digital marketing"],
}

export default function ContactRoute() {
  return (
    <main>
      <ContactPage />
    </main>
  )
}
