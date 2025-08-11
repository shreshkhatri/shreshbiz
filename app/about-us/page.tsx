import AboutUsPage from "@/components/aboutus"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "About the company Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["company details","Shresh Biz about","Shresh Biz company","Shresh Biz","Shresh Biz Career ","Shresh Biz jobs","Shresh Biz Contact","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function CareerPage() {
  return (
    <main className="flex flex-col items-center relative">
      <AboutUsPage />
    </main>
  )
}
