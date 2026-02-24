import CareersPage from "@/components/careers"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers",
  description: "Career and job opportunities at Shresh Biz.",
  alternates: { canonical: "/careers" },
  keywords: ["Shresh Biz", "careers", "jobs", "IT jobs Nepal"],
}

export default function CareersRoute() {
  return (
    <main>
      <CareersPage />
    </main>
  )
}
