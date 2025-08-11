export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden shadow-2xl border border-border/50 animate-pulse">
        {/* Left Column Skeleton: Visual & Marketing */}
        <div className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
          <div className="absolute inset-0 bg-gray-800 opacity-50 z-0"></div> {/* Placeholder for image */}
          <div className="relative z-10 text-center space-y-6 w-full">
            <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto"></div> {/* Placeholder for H2 */}
            <div className="h-6 bg-gray-700 rounded w-full"></div> {/* Placeholder for P1 */}
            <div className="h-6 bg-gray-700 rounded w-5/6 mx-auto"></div> {/* Placeholder for P2 */}
            <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div> {/* Placeholder for P3 */}
          </div>
        </div>

        {/* Right Column Skeleton: Sign-in Form */}
        <div className="flex items-center justify-center p-6 md:p-10 bg-background">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-1 text-center">
              <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div> {/* Placeholder for CardTitle */}
              <div className="h-4 bg-muted rounded w-3/4 mx-auto mt-2"></div> {/* Placeholder for CardDescription */}
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-1/4"></div> {/* Placeholder for Label */}
                <div className="h-10 bg-muted rounded"></div> {/* Placeholder for Input */}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-muted rounded w-1/4"></div> {/* Placeholder for Label */}
                  <div className="h-4 bg-muted rounded w-1/4"></div> {/* Placeholder for Forgot Password link */}
                </div>
                <div className="h-10 bg-muted rounded"></div> {/* Placeholder for Input */}
              </div>
              <div className="h-10 bg-muted rounded"></div> {/* Placeholder for Button */}
            </div>
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>{" "}
              {/* Placeholder for "Don't have an account?" */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
