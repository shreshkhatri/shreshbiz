"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Send, MessageSquare, User, Mail, FileText } from "lucide-react"

const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

type MessageFormData = z.infer<typeof messageSchema>

export default function SendMessagePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = async (data: MessageFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    form.reset()
  }

  if (isSubmitted) {
    return (
      <div className="w-full section-spacing">
        <div className="container px-4 md:px-6 flex justify-center">
          <Card className="max-w-md w-full border border-border">
            <CardContent className="p-8 text-center flex flex-col items-center gap-4">
              <CheckCircle className="h-12 w-12 text-primary" />
              <h2 className="text-2xl font-heading font-bold">Message Sent!</h2>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out. We will get back to you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full mt-2">
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Message</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Have questions about our web hosting, digital marketing, or development services? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <Card className="border border-border">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5 text-sm">
                          <User className="h-3.5 w-3.5 text-primary" />
                          Full Name
                        </FormLabel>
                        <Input placeholder="Enter your full name" className="h-11" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5 text-sm">
                          <Mail className="h-3.5 w-3.5 text-primary" />
                          Email Address
                        </FormLabel>
                        <Input type="email" placeholder="Enter your email address" className="h-11" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5 text-sm">
                          <FileText className="h-3.5 w-3.5 text-primary" />
                          Subject
                        </FormLabel>
                        <Input placeholder="What is this about?" className="h-11" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5 text-sm">
                          <MessageSquare className="h-3.5 w-3.5 text-primary" />
                          Message
                        </FormLabel>
                        <Textarea placeholder="Tell us more about your project or question..." className="min-h-32 resize-none" {...field} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-11 flex items-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Prefer to email directly? Reach us at{" "}
            <a href="mailto:info@shreshbiz.com" className="text-primary hover:underline font-medium">
              info@shreshbiz.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
