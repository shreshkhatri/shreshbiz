"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Server, TrendingUp, Code, Zap, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

const marketingPackages = [
  {
    name: "Digital Starter",
    price: "NPR 2,000",
    period: "/month",
    description: "Essential digital marketing for small businesses",
    features: [
      "Social Media Management (2 platforms)",
      "Content Creation (8 posts/month)",
      "Basic SEO Optimization",
      "Monthly Analytics Report",
      "Email Marketing Setup",
      "Google My Business Optimization",
    ],
    popular: false,
  },
  {
    name: "Growth Package",
    price: "NPR 8,000",
    period: "/month",
    description: "Comprehensive marketing for growing businesses",
    features: [
      "Social Media Management (5 platforms)",
      "Content Creation (16 posts/month)",
      "Advanced SEO & Content Marketing",
      "Google Ads Management",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Bi-weekly Strategy Calls",
    ],
    popular: true,
  },
  {
    name: "Enterprise Marketing",
    price: "NPR 10,000",
    period: "/month",
    description: "Full-scale marketing for established businesses",
    features: [
      "Multi-platform Social Management",
      "Daily Content Creation",
      "Advanced SEO & Link Building",
      "Google & Facebook Ads",
      "Marketing Automation",
      "A/B Testing & Analytics",
      "Weekly Strategy Sessions",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
]

const developmentServices = [
  {
    name: "Landing Page",
    price: "NPR 1,000",
    period: "one-time",
    description: "Professional single-page website",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Contact Form Integration",
      "Basic SEO Setup",
      "30 Days Support",
      "2 Rounds of Revisions",
    ],
    popular: false,
  },
  {
    name: "Business Website",
    price: "NPR 8,000",
    period: "one-time",
    description: "Multi-page website for businesses",
    features: [
      "Up to 10 Pages",
      "Custom Design & Branding",
      "CMS Integration",
      "E-commerce Ready",
      "Advanced SEO",
      "90 Days Support",
      "Unlimited Revisions",
    ],
    popular: true,
  },
  {
    name: "Web Application",
    price: "Custom Quote",
    period: "",
    description: "Full-featured web applications",
    features: [
      "Custom Functionality",
      "User Authentication",
      "Database Integration",
      "API Development",
      "Admin Dashboard",
      "6 Months Support",
      "Ongoing Maintenance Available",
    ],
    popular: false,
  },
]

const tabs = [
  { id: "marketing", label: "Digital Marketing", icon: TrendingUp },
  { id: "development", label: "Web Development", icon: Code },
  { id: "hosting", label: "Web & Domain Hosting", icon: Server },
]

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("marketing")

  const getCurrentPlans = () => {
    switch (activeTab) {
      case "marketing":
        return marketingPackages
      case "development":
        return developmentServices
      default:
        return []
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            From web hosting to digital marketing and custom development -- we have the right solution for your business needs.
          </p>
        </div>
      </section>

      {/* Tabs + Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Plans */}
          {activeTab !== "hosting" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {getCurrentPlans().map((plan, index) => (
                <Card
                  key={index}
                  className={`relative border ${plan.popular ? "border-primary shadow-md" : "border-border"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8 pb-4">
                    <CardTitle className="text-xl font-heading">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-3xl font-heading font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-2"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.price === "Custom Quote" ? "Get Quote" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "hosting" && (
            <Card className="max-w-2xl mx-auto border border-border">
              <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-heading font-bold">Web & Domain Hosting</h3>
                <p className="text-muted-foreground max-w-md">
                  We provide a wide range of services related to web, domain, and email hosting. Follow the link below for more details about pricing and services.
                </p>
                <Button asChild className="mt-2">
                  <Link href="https://web.shreshbiz.com" target="_blank" className="flex items-center gap-2">
                    Find More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Bottom section */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold">Fast Setup</h3>
              <p className="text-sm text-muted-foreground">Get started immediately with our quick setup process.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-semibold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Our expert team is here to help you succeed.</p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center gap-4 max-w-xl mx-auto">
            <h3 className="text-xl font-heading font-bold">Need a Custom Solution?</h3>
            <p className="text-sm text-muted-foreground">
              Every business is unique. Contact us for a personalized quote that fits your specific requirements.
            </p>
            <Button asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us for Custom Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
