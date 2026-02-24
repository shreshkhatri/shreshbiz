"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    value: "Kathmandu, Nepal",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+977 9763372175",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@shreshbiz.com",
  },
]

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
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We would love to hear from you! Reach out to us for inquiries, collaborations, or support.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-8 md:pb-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item) => (
              <Card key={item.title} className="border border-border">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">Send Us a Message</h2>
            <Card className="border border-border">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
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
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
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
                    />
                  </div>
                  <Button type="submit" className="w-full flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
