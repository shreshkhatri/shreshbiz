"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // In a real application, you would send this data to your backend
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" }) // Clear form
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-stretch py-24 lg:py-32 section-spacing">
      {/* Hero Section */}
      <section className=" container-padding max-w-6xl mx-auto text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">Get in Touch</h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          We'd love to hear from you! Reach out to us for inquiries, collaborations, or support.
        </p>
      </section>

      {/* Contact Information Section */}
      <ScrollReveal >
        <section className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 container-padding bg-background">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Our Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">Kathmandu, Nepal</CardContent>
              </Card>

              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Phone</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">+977 9763372175</CardContent>
              </Card>

              <Card className="glassmorphic-card p-6 flex flex-col items-center text-center space-y-4">
                <div className="glassmorphic-icon">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">Email</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-muted-foreground">info@shreshbiz.com</CardContent>
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form Section */}
      <ScrollReveal >
        <section className="max-w-6xl mx-auto py-12 container-padding">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Send Us a Message</h2>
            <Card className="w-full glassmorphic-card p-6 md:p-8">
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="w-full grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 text-left">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glassmorphic-inner-card"
                      />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 text-left">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glassmorphic-inner-card"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 text-left">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glassmorphic-inner-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 text-left">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="glassmorphic-inner-card"
                    />
                  </div>
                  <Button type="submit" className="neumorphic-button-primary max-w-6xl mx-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
