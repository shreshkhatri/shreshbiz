"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function TestimonialsSection() {
  const testimonials = [
  {
    "name": "Priya Sharma",
    "role": "Startup Founder",
    "content": "They handled everything from designing our website to running Meta ads. Our online presence skyrocketed in just a month.",
    "avatar": "PS"
  },
  {
    "name": "Arjun Parajuli",
    "role": "Marketing Manager",
    "content": "The marketing content they created for us—posts, reels, and ads—was exactly what we needed to engage our audience. Professional and effective!",
    "avatar": "JC"
  },
  {
    "name": "Melina Rai",
    "role": "College Administrator",
    "content": "Their e-learning system transformed how we deliver courses. Our faculty and students found it easy to use and reliable.",
    "avatar": "AV"
  },
  {
    "name": "Subhadra Wagle",
    "role": "E-commerce Store Owner",
    "content": "From purchasing my domain to hosting and designing my store, they made the entire process hassle-free. My website is fast and looks amazing.",
    "avatar": "ML"
  },
  {
    "name": "Sabin Nepal",
    "role": "Freelance Consultant",
    "content": "They managed my ad campaigns and made purchases on my behalf, saving me so much time. The ROI on my marketing budget has never been better.",
    "avatar": "ST"
  }
]


  return (
    <section id="testimonials" className="relative w-full py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="waves" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedText
                text="What our clietns say ..."
                variant="heading"
               className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Hear from our happy cusotmers who received our services recently"
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div className="h-full" whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full glassmorphic-card group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar className="glassmorphic-avatar border-2 border-transparent group-hover:border-red-500 transition-colors">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-medium tracking-tight group-hover:text-red-500 transition-colors">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground opacity-70">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground opacity-100 group-hover:opacity-100 transition-opacity">
                      {testimonial.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
