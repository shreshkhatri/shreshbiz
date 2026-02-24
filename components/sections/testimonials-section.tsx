"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    content:
      "They handled everything from designing our website to running Meta ads. Our online presence skyrocketed in just a month.",
    initials: "PS",
  },
  {
    name: "Arjun Parajuli",
    role: "Marketing Manager",
    content:
      "The marketing content they created for us -- posts, reels, and ads -- was exactly what we needed to engage our audience. Professional and effective!",
    initials: "AP",
  },
  {
    name: "Melina Rai",
    role: "College Administrator",
    content:
      "Their e-learning system transformed how we deliver courses. Our faculty and students found it easy to use and reliable.",
    initials: "MR",
  },
  {
    name: "Subhadra Wagle",
    role: "E-commerce Store Owner",
    content:
      "From purchasing my domain to hosting and designing my store, they made the entire process hassle-free. My website is fast and looks amazing.",
    initials: "SW",
  },
  {
    name: "Sabin Nepal",
    role: "Freelance Consultant",
    content:
      "They managed my ad campaigns and made purchases on my behalf, saving me so much time. The ROI on my marketing budget has never been better.",
    initials: "SN",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full section-spacing bg-muted/40">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-balance">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Hear from our happy customers who received our services recently.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="h-full border border-border">
                <CardContent className="p-6 flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {`"${testimonial.content}"`}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
