import SendMessagePage from "@/components/send-message";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Send Message',
  description:
    "Send Message to Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz","Shresh Biz Pricing ","Digital Marketing Shresh biz", "shresh biz web dev", "Shresh Biz send message","send message"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <SendMessagePage />
    </main>
  )
}
