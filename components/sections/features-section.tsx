"use client"
import { Code, Globe, Briefcase, GraduationCap, Server } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"

const services = [
    {
      icon: <Globe className="h-10 w-10 text-red-500" />,
      title: "Web Application Development",
      description: "Development of all types of web applications with all sort of backend functionalities.",
      progress: 100,
      borderClass: "border-glow-red",
    },
    {
      icon: <Server className="h-10 w-10 text-red-500" />,
      title: "Domain Purchase & Web hosting",
      description: "Need a web domain name for your business and secured web hosting service ? We are here to do it for you on your behalf.",
      progress: 100,
      borderClass: "border-glow-red",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-500" />,
      title: "Digital Marketing",
      description: "Building social presence for businesses or startups, marketing media content creation and managing Meta business assets",
      progress: 90,
      borderClass: "border-glow-blue",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-yellow-500" />,
      title: "eLearning System",
      description: "Development of completely bespoke eLearning solutions development tailored to the need of school, universities and learning institutes",
      progress: 95,
      borderClass: "border-glow-yellow",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-yellow-500" />,
      title: "Long Term Support (LTS)",
      description: "Looking forward to receive continuous support from us for maintaneing your application system or any of your business needs ? We are ready to provide you the necessary support with the affordable and convient service plans.",
      progress: 95,
      borderClass: "border-glow-yellow",
    }
  ]

export function ServicesSection() {


  return (
    <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Our Services"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Our team at Shresh Biz are ready to provide the services to support you with the following business needs."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard className="h-full">
                  <Card
                    className={` glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                  >
                    <CardHeader>
                      <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="mt-4 tracking-tight relative">
                        {feature.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
