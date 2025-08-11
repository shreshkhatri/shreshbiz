
import ContactPage from "@/components/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contact details page for Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz ","Shresh Biz Contact","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function CareerPage() {
  return (
    <main className="flex flex-col items-center relative">
      <ContactPage />
    </main>
  )
}
