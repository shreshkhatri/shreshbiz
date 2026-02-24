"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Digital Marketing for Your Business Growth",
    description:
      "Discover how digital marketing can bring more customers, boost your sales, and make your business stand out online.",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Marketing",
  },
  {
    title: "Why Your Business Needs a Website in 2025",
    description:
      "Your business is open, but is it open online? See why having a website is now more important than ever.",
    date: "April 28, 2025",
    readTime: "7 min read",
    category: "Web Dev",
  },
  {
    title: "E-Learning for Educational Institutes",
    description:
      "Find out how modern e-learning platforms are changing education and making learning easier for everyone.",
    date: "April 10, 2025",
    readTime: "6 min read",
    category: "EdTech",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="w-full section-spacing">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-balance">
              Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Stay updated with our latest insights, tutorials, and best practices.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="h-full group border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-3 w-3" />
                    </Link>
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
