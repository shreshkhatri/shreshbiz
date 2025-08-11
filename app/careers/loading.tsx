export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 md:py-24 lg:py-32 section-spacing animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="container-padding max-w-6xl mx-auto text-center space-y-6 mb-16">
        <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
        <div className="h-6 bg-muted rounded w-1/2 mx-auto mt-4"></div>
      </div>

      {/* Current Openings Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-8 md:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skeleton Cards */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glassmorphic-card h-48 flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="h-6 bg-muted rounded w-3/4"></div> {/* Title */}
                  <div className="h-4 bg-muted rounded w-1/2"></div> {/* Description/Location */}
                </div>
                <div className="h-6 bg-muted rounded w-1/4 self-start"></div> {/* Badge */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
