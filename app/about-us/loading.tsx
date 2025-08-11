export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 md:py-24 lg:py-32 section-spacing animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="container-padding max-w-6xl mx-auto text-center space-y-6 mb-16">
        <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div>
        <div className="h-6 bg-muted rounded w-1/2 mx-auto mt-4"></div>
      </section>

      {/* Our Story Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto"></div>
          <div className="glassmorphic-card p-6 md:p-8 space-y-4">
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-11/12"></div>
            <div className="h-6 bg-muted rounded w-full"></div>
            <div className="h-6 bg-muted rounded w-10/12"></div>
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-8 bg-muted rounded-full w-24"></div>
              <div className="h-8 bg-muted rounded-full w-28"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4 h-64">
                <div className="h-16 w-16 bg-muted rounded-full"></div> {/* Icon placeholder */}
                <div className="h-6 bg-muted rounded w-3/4"></div> {/* Title */}
                <div className="h-4 bg-muted rounded w-full"></div> {/* Description line 1 */}
                <div className="h-4 bg-muted rounded w-11/12"></div> {/* Description line 2 */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="h-8 bg-muted rounded w-2/3 mx-auto"></div>
          <div className="h-6 bg-muted rounded w-3/4 mx-auto mt-4"></div>
          <div className="h-12 bg-muted rounded-full w-48 mx-auto mt-8"></div> {/* Button */}
        </div>
      </section>
    </main>
  )
}
