import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import CareersPage from "@/components/careers"

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
