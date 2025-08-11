import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import CareersPage from "@/components/careers"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Careers',
  description:
    "Career and Job opportunities page for Shresh Biz",
  alternates: {
    canonical: "/"
  },
  keywords:["Shresh Biz ","Shresh Biz Career ","Shresh Biz jobs","Shresh Biz Contact","Digital Marketing Shresh biz", "shresh biz web dev"]
};

export default function CareerPage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Enhanced global cursor effect with subtle red glow */}
      <MouseGlow
        color="rgba(220, 38, 38, 0.12)"
        size={600}
        blur={150}
        opacity={0.6}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <CareersPage />
    </main>
  )
}
