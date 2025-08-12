"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Digital Marketing for your business growth",
      description: "Discover how digital marketing can bring more customers, boost your sales, and make your business stand out online.",
      content:"What is Digital Marketing and How It Helps Your Business Grow\n\nDigital marketing means promoting your business using the internet. Instead of only printing flyers or putting ads on the street, you can reach people through their phones, computers, and social media. It includes things like running Facebook (Meta) ads, posting on Instagram, making videos, sending emails, and even improving your website so more people can find it.\n\nHow it helps your business grow:\n\nReach more people – Your products or services can be seen by people all over Nepal, and even worldwide.\n\nLow cost, high impact – Online ads are often cheaper than traditional ads, and you can choose exactly who should see them.\n\nConnect with customers – Through posts, messages, and videos, you can talk directly to customers and build trust.\n\nMeasure results – You can see how many people clicked your ad or visited your website, so you know what works best.\n\nIn today’s world, most customers are online. Digital marketing helps you find them, talk to them, and grow your sales faster.",
      date: "May 15, 2025",
      readTime: "5 min read",

    },
    {
      title: "Why Your Business Needs a Website in 2025",
      description: "Your business is open, but is it open online? See why having a website is now more important than ever.",
      content:"Why Your Business Needs a Website in 2025\n\nA website is like your shop or office on the internet. It is open 24/7, and anyone can visit it anytime from anywhere. In today’s world, people search online before buying anything. If your business does not have a website, you are missing those customers.\n\nA good website shows your products, services, contact details, and builds trust. You can also sell online, take bookings, or share news about your business. Hosting your website on the cloud makes it fast and secure, so your visitors have a good experience.\n\nA website is not just for big companies—small businesses can benefit even more. It is an investment that brings you more customers and helps your business grow.",
      date: "April 28, 2025",
      readTime: "7 min read",
    },
    {
      title: "E-Learning for educational institutes",
      description: "Find out how modern e-learning platforms are changing education and making learning easier for everyone.",
      content:"How E-Learning Systems Can Help Colleges and Universities\n\nE-learning systems are online platforms where students can study from anywhere, anytime. They allow teachers to upload lessons, videos, quizzes, and assignments so students can access them easily.\n\nFor colleges and universities, e-learning systems save time, reduce paper use, and make learning more flexible. Teachers can track student progress, give feedback quickly, and even run live online classes.\n\nThese systems also make education accessible to students who live far away or have busy schedules. In today’s digital world, an e-learning system is a smart choice for any educational institution.",
      date: "April 10, 2025",
      readTime: "6 min read",
    },
  ]

  return (
    <section id="blog" className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">Latest Articles</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Stay updated with our latest insights, tutorials, and best practices.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card">
                <CardHeader>
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription className="opacity-70">
                    {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground opacity-90">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
