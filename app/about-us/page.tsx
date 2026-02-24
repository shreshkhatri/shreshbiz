import AboutUsPage from "@/components/aboutus"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shresh Biz, an IT and digital solutions company based in Kathmandu, Nepal.",
  alternates: { canonical: "/about-us" },
  keywords: ["Shresh Biz", "about", "IT company Nepal", "digital solutions Kathmandu"],
}

export default function AboutPage() {
  return (
    <main>
      <AboutUsPage />
    </main>
  )
}
