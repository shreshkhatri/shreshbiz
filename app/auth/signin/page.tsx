import SignIn from "@/components/signin"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    "Sign In page for users at Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz login","Shresh Biz signin","Shresh Biz ","Shresh Biz Career ","Shresh Biz jobs","Shresh Biz Contact","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center relative">
      <SignIn />
    </main>
  )
}
