"use client"

import { Globe, Server, Briefcase, GraduationCap, Cctv, LifeBuoy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Development of all types of web applications with full-stack backend functionalities tailored to your business needs.",
  },
  {
    icon: Server,
    title: "Domain Purchase & Web Hosting",
    description:
      "Need a web domain name for your business and secured web hosting service? We handle everything for you.",
  },
  {
    icon: Briefcase,
    title: "Digital Marketing",
    description:
      "Building social presence for businesses, marketing media content creation, and managing Meta business assets.",
  },
  {
    icon: GraduationCap,
    title: "eLearning Systems",
    description:
      "Completely bespoke eLearning solutions tailored to the needs of schools, universities, and learning institutes.",
  },
  {
    icon: Cctv,
    title: "CCTV Service Setup",
    description:
      "Need to secure your premises with CCTV cameras? Our experts provide professional CCTV installation and setup.",
  },
  {
    icon: LifeBuoy,
    title: "Long Term Support",
    description:
      "Continuous support for maintaining your application systems with affordable and convenient service plans.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full section-spacing">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-balance">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Our team at Shresh Biz is ready to provide services to support you with the following business needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="h-full group border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <CardHeader className="gap-4">
                  <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
