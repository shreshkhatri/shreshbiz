import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-64 mx-auto mb-4 bg-gray-700" />
          <Skeleton className="h-6 w-96 mx-auto bg-gray-700" />
        </div>

        {/* Tabs skeleton */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <Skeleton className="h-10 w-32 bg-gray-700" />
            <Skeleton className="h-10 w-32 bg-gray-700" />
            <Skeleton className="h-10 w-32 bg-gray-700" />
          </div>
        </div>

        {/* Pricing cards skeleton */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              {/* Card header */}
              <div className="text-center mb-6">
                <Skeleton className="h-6 w-24 mx-auto mb-2 bg-gray-700" />
                <div className="flex items-baseline justify-center mb-2">
                  <Skeleton className="h-12 w-16 bg-gray-700" />
                  <Skeleton className="h-6 w-12 ml-1 bg-gray-700" />
                </div>
                <Skeleton className="h-4 w-32 mx-auto bg-gray-700" />
              </div>

              {/* Features list skeleton */}
              <div className="space-y-3 mb-8">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div key={j} className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-3 bg-gray-700" />
                    <Skeleton className="h-4 flex-1 bg-gray-700" />
                  </div>
                ))}
              </div>

              {/* Button skeleton */}
              <Skeleton className="h-12 w-full bg-gray-700" />
            </div>
          ))}
        </div>

        {/* Bottom section skeleton */}
        <div className="text-center mt-16">
          <Skeleton className="h-8 w-48 mx-auto mb-4 bg-gray-700" />
          <Skeleton className="h-5 w-80 mx-auto mb-6 bg-gray-700" />
          <Skeleton className="h-12 w-40 mx-auto bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
