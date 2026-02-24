import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code, Globe, ShoppingCart, GraduationCap, Settings, Cloud, Server, LayoutDashboard, ArrowRight } from "lucide-react"

const websiteTypes = [
  {
    icon: Globe,
    title: "Static Websites",
    description: "Fast, secure, and cost-effective for showcasing information with minimal updates.",
  },
  {
    icon: LayoutDashboard,
    title: "Dynamic Web Apps",
    description: "Interactive platforms with real-time data, user accounts, and complex functionalities.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Robust online stores designed for seamless shopping experiences and secure transactions.",
  },
  {
    icon: GraduationCap,
    title: "E-Learning Platforms",
    description: "Engaging educational portals with course management, user tracking, and interactive content.",
  },
]

const expertise = [
  {
    icon: Code,
    title: "Custom Web Application Development",
    description: "Tailored solutions built from the ground up to meet your unique business processes and goals.",
  },
  {
    icon: GraduationCap,
    title: "E-Learning Management Systems",
    description: "Comprehensive platforms for online education, training, and knowledge sharing.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Implementation",
    description: "From storefront design to payment gateway integration, we create powerful online shops.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust and scalable server-side logic, APIs, and database management.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration & Deployment",
    description: "Harnessing the power of cloud platforms for reliable hosting, scalability, and continuous deployment.",
  },
  {
    icon: Settings,
    title: "API Development & Integration",
    description: "Building custom APIs and integrating third-party services to extend your application.",
  },
]

export default function WebDev() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Web Development</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Crafting <span className="gradient-text">Digital Futures</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Transforming ideas into powerful web experiences with Shresh Biz.
          </p>
          <Button size="lg" asChild className="mt-2">
            <Link href="/contact" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What is Web Dev */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">
            The Digital Canvas: What is Web Development?
          </h2>
          <Card className="border border-border">
            <CardContent className="p-6 md:p-8 flex flex-col gap-4">
              <p className="text-muted-foreground leading-relaxed">
                Web development is the art and science of building and maintaining websites and web applications. It is about creating the digital spaces where businesses connect with their audience, deliver services, and innovate. At Shresh Biz, we go beyond just coding; we engineer robust, scalable, and intuitive solutions that drive growth and enhance user engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the foundational code to the interactive user interface, our team meticulously crafts every element to ensure performance, security, and a seamless experience across all devices.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold">Architecting Your Online Presence</h2>
              <p className="text-muted-foreground mt-2">Explore the diverse types of digital platforms we specialize in building.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {websiteTypes.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <Card className="h-full border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-bold">Our Toolkit & Expertise</h2>
              <p className="text-muted-foreground mt-2">Leveraging modern technologies to build your next digital masterpiece.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <Card className="h-full border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-balance">Ready to Build Your Vision?</h2>
          <p className="text-muted-foreground">
            Let us collaborate to bring your next groundbreaking web project to life.
          </p>
          <Button size="lg" asChild className="mt-2">
            <Link href="/contact" className="flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
