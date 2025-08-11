import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code, Globe, ShoppingCart, GraduationCap, Settings, Cloud, Server, LayoutDashboard } from "lucide-react"

export default function WebDev() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 lg:py-32 section-spacing relative overflow-hidden">
      {/* Background Grid/Pattern (Conceptual - adjust with actual CSS if needed) */}
      

      {/* Hero Section */}
      <section className="container-padding max-w-6xl mx-auto text-center space-y-6 mb-16 relative z-10">
        <ScrollReveal >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
            Crafting Digital Futures
          </h1>
        </ScrollReveal>
        <ScrollReveal >
          <p className="text-lg text-muted-foreground md:text-xl">
            Transforming Ideas into Powerful Web Experiences with Shresh Biz
          </p>
        </ScrollReveal>
        <ScrollReveal >
          <Link href="/contact">
            <Button className="neumorphic-button-primary px-8 py-3 text-lg mt-8">Start Your Project</Button>
          </Link>
        </ScrollReveal>
      </section>

      {/* The Digital Canvas Section */}
      <ScrollReveal >
        <section className="w-full py-12 container-padding bg-background relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">The Digital Canvas: What is Web Development?</h2>
            <Card className="glassmorphic-card p-6 md:p-8">
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Web development is the art and science of building and maintaining websites and web applications. It's
                  about creating the digital spaces where businesses connect with their audience, deliver services, and
                  innovate. At Shresh Biz, we go beyond just coding; we engineer robust, scalable, and intuitive
                  solutions that drive growth and enhance user engagement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the foundational code to the interactive user interface, our team meticulously crafts every
                  element to ensure performance, security, and a seamless experience across all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      {/* Architecting Your Online Presence: Types of Websites */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight">Architecting Your Online Presence</h2>
            <p className="text-lg text-muted-foreground md:text-xl mt-4">
              Explore the diverse types of digital platforms we specialize in building.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
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
                description:
                  "Engaging educational portals with course management, user tracking, and interactive content.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4 h-full group hover:scale-[1.03] transition-transform duration-300 ease-in-out">
                  <div className="glassmorphic-icon group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground">{item.description}</CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Toolkit & Expertise: Shresh Biz Web Services */}
      <section className="w-full py-12 md:py-16 lg:py-20 container-padding bg-background relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <ScrollReveal >
            <h2 className="text-3xl font-bold tracking-tight">Our Toolkit & Expertise</h2>
            <p className="text-lg text-muted-foreground md:text-xl mt-4">
              Leveraging modern technologies to build your next digital masterpiece.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: Code,
                title: "Custom Web Application Development",
                description:
                  "Tailored solutions built from the ground up to meet your unique business processes and goals.",
              },
              {
                icon: GraduationCap,
                title: "E-Learning Management Systems (LMS)",
                description:
                  "Comprehensive platforms for online education, training, and knowledge sharing with advanced features.",
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Implementation",
                description:
                  "From storefront design to payment gateway integration, we create powerful and secure online shops.",
              },
              {
                icon: Server,
                title: "Backend Development",
                description:
                  "Robust and scalable server-side logic, APIs, and database management for seamless functionality.",
              },
              {
                icon: Cloud,
                title: "Cloud Integration & Deployment",
                description:
                  "Harnessing the power of cloud platforms for reliable hosting, scalability, and continuous deployment.",
              },
              {
                icon: Settings,
                title: "API Development & Integration",
                description:
                  "Building custom APIs and integrating third-party services to extend your application's capabilities.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={ index * 0.1}>
                <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4 h-full group hover:scale-[1.03] transition-transform duration-300 ease-in-out">
                  <div className="glassmorphic-icon group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 text-muted-foreground">{item.description}</CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ScrollReveal >
        <section className="w-full py-12 md:py-16 lg:py-20 container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Build Your Vision?</h2>
            <p className="text-lg text-muted-foreground md:text-xl ">
              Let's collaborate to bring your next groundbreaking web project to life.
            </p>
            <Link href="/contact">
              <Button className="mt-6 neumorphic-button-primary px-8 py-3 text-lg">Get a Free Consultation</Button>
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
