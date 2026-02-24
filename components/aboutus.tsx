import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Megaphone, LifeBuoy, MapPin, CalendarDays, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    description:
      "From custom web applications to robust e-Learning management systems and seamless e-commerce platforms, we build scalable and user-friendly digital experiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Boost your online presence with comprehensive digital marketing services. We specialize in Meta ad campaign management, strategic ad running, and efficient balance top-ups.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "We offer reliable contract-based maintenance and support for your websites and applications, ensuring they run smoothly, securely, and efficiently.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            About <span className="gradient-text">Shresh Biz</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Innovating Digital Solutions from Kathmandu, Nepal
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Our Story</h2>
          <Card className="border border-border">
            <CardContent className="p-6 md:p-8 flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                Established in <span className="font-medium text-foreground">January 2024</span>, Shresh Biz is a dynamic digital solutions provider based in <span className="font-medium text-foreground">Kathmandu, Nepal</span>. We were founded with a clear vision: to empower businesses with cutting-edge technology and strategic digital marketing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a commitment to excellence and a passion for innovation. Since then, we have grown into a trusted partner for businesses seeking to enhance their online presence, streamline operations, and achieve their digital goals.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Badge variant="outline" className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> Est. Jan 2024
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Kathmandu, Nepal
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="h-full border border-border">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-balance">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-muted-foreground">
            Let us discuss how Shresh Biz can help your business achieve its digital aspirations.
          </p>
          <Button size="lg" asChild className="mt-2">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
