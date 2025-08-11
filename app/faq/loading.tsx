export default function Loading() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 animate-pulse">
      <div className="container px-4 md:px-6">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="h-12 bg-muted rounded w-3/4 mx-auto"></div> {/* AnimatedText heading */}
            <div className="h-6 bg-muted rounded w-1/2 mx-auto mt-4"></div> {/* AnimatedText paragraph */}
          </div>
        </div>

        {/* Accordion Skeleton */}
        <div className="mx-auto max-w-3xl py-12 space-y-4">
          {[...Array(5)].map(
            (
              _,
              index, // Create 5 skeleton accordion items
            ) => (
              <div key={index} className="glassmorphic-accordion-item border-b border-border/50 pb-4">
                <div className="flex items-center justify-between py-4">
                  <div className="h-6 bg-muted rounded w-3/4"></div> {/* AccordionTrigger (Question) */}
                  <div className="h-6 w-6 bg-muted rounded-full"></div> {/* Icon placeholder */}
                </div>
                <div className="h-4 bg-muted rounded w-11/12 mt-2"></div> {/* AccordionContent (Answer line 1) */}
                <div className="h-4 bg-muted rounded w-full mt-2"></div> {/* AccordionContent (Answer line 2) */}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
