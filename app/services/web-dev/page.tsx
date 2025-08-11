import WebDev from "@/components/web-dev"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Web Dev',
  description:
    "Wev Dev page for Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz services","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <WebDev />
    </main>
  )
}
