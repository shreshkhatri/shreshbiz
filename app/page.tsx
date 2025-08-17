import  HeroSection  from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/features-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { BlogSection } from "@/components/sections/blog-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import WebServicesAd from "@/components/sections/hero-particle"


export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Enhanced global cursor effect with subtle red glow */}
      

      <HeroSection />
      <WebServicesAd />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
