import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle Radial Gradient Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow opacity-70"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 p-8 rounded-xl glassmorphic-card">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="text-xl font-semibold text-foreground">Loading your experience...</p>
        <p className="text-sm text-muted-foreground">Please wait a moment.</p>
      </div>
    </div>
  )
}
