import WebDev from "@/components/web-dev"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development",
  description: "Web development services by Shresh Biz.",
  alternates: { canonical: "/services/web-dev" },
  keywords: ["Shresh Biz", "web development", "custom web apps"],
}

export default function WebDevPage() {
  return (
    <main>
      <WebDev />
    </main>
  )
}
