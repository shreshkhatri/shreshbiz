import SendMessagePage from "@/components/send-message"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Send Message",
  description: "Send a message to Shresh Biz.",
  alternates: { canonical: "/send-message" },
  keywords: ["Shresh Biz", "message", "contact"],
}

export default function SendMessageRoute() {
  return (
    <main>
      <SendMessagePage />
    </main>
  )
}
