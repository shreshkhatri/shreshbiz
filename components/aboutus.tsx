import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Megaphone, LifeBuoy, MapPin, CalendarDays } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal" // Import ScrollReveal

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center section-spacing">
      {/* Hero Section - No ScrollReveal needed here as it's usually visible on load */}
      <section className="container-padding max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">About Shresh Biz</h1>
        <p className="text-lg text-muted-foreground md:text-xl">Innovating Digital Solutions from Kathmandu, Nepal</p>
      </section>

      {/* Our Story Section */}
      <ScrollReveal >
        <section className="w-full py-12 md:py-16 lg:py-20 container-padding bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <Card className="glassmorphic-card p-6 md:p-8">
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Established in <span className="font-semibold text-foreground">January 2024</span>, Shresh Biz is a
                  dynamic digital solutions provider based in the vibrant city of{" "}
                  <span className="font-semibold text-foreground">Kathmandu, Nepal</span>. We were founded with a clear
                  vision: to empower businesses with cutting-edge technology and strategic digital marketing, helping
                  them thrive in the ever-evolving digital landscape.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our journey began with a commitment to excellence and a passion for innovation. Since then, we've
                  grown into a trusted partner for businesses seeking to enhance their online presence, streamline
                  operations, and achieve their digital goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <Badge variant="secondary" className="flex items-center gap-2 text-base px-3 py-1">
                    <CalendarDays className="h-4 w-4" /> Est. Jan 2024
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 text-base px-3 py-1">
                    <MapPin className="h-4 w-4" /> Kathmandu, Nepal
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Services Section */}
      <ScrollReveal >
        <section className="w-full py-12 md:py-16 lg:py-20 container-padding">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Web Application Development</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">
                  From custom web applications to robust e-Learning management systems and seamless e-commerce
                  platforms, we build scalable and user-friendly digital experiences tailored to your needs.
                </CardContent>
              </Card>

              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">
                  Boost your online presence with our comprehensive digital marketing services. We specialize in Meta ad
                  campaign management, including strategic ad running and efficient balance top-ups.
                </CardContent>
              </Card>

              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <LifeBuoy className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Maintenance & Support</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">
                  Beyond development, we offer reliable contract-based maintenance and support for your websites and
                  applications, ensuring they run smoothly, securely, and efficiently around the clock.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Call to Action Section */}
      <ScrollReveal>
        <section className="w-full py-12 md:py-16 lg:py-20 container-padding bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-muted-foreground md:text-xl pb-4">
              Let's discuss how Shresh Biz can help your business achieve its digital aspirations.
            </p>
            <Link href="/contact">
              {" "}
              {/* Assuming you have a contact page */}
              <Button className="neumorphic-button-primary px-8 py-3 text-lg">Contact Us Today</Button>
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
