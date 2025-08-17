"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Server,
  TrendingUp,
  Code,
  Mail,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("marketing");

  const hostingPlans = [];

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
        "Google Ads Management ($500 ad spend included)",
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
        "Google & Facebook Ads ($1000 ad spend)",
        "Marketing Automation",
        "A/B Testing & Analytics",
        "Weekly Strategy Sessions",
        "Dedicated Account Manager",
      ],
      popular: false,
    },
  ];

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
  ];

  const tabs = [
    { id: "marketing", label: "Digital Marketing", icon: TrendingUp },
    { id: "development", label: "Web Development", icon: Code },
    { id: "hosting", label: "Web & Domain Hosting", icon: Server },
  ];

  const getCurrentPlans = () => {
    switch (activeTab) {
      case "hosting":
        return hostingPlans;
      case "marketing":
        return marketingPackages;
      case "development":
        return developmentServices;
      default:
        return hostingPlans;
    }
  };

  return (
    <div className="flex w-full min-h-screen flex-col items-stretch py-24 lg:py-32 section-spacing">
      {/* Header */}
      <ScrollReveal>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-[#E4335A]">Perfect Plan</span>
            </h1>
            <p className="  max-w-3xl mx-auto">
              From web hosting to digital marketing and custom development - we
              have the right solution for your business needs.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#E4335A] text-white"
                      : "outline border-1 hover:underline"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activeTab !== "hosting" &&
              getCurrentPlans().map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular ? "ring-2 ring-[#E4335A]" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#E4335A] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-white">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#E4335A]">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-400">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check className="w-5 h-5 text-[#E4335A] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-[#E4335A] hover:bg-[#E4335A]/90"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {activeTab === "development" &&
                      plan.price === "Custom Quote"
                        ? "Get Quote"
                        : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}

            {activeTab === "hosting" && (
              <Card className="relative col-span-3">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    Web & Domain Hosting
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center">
                  <p className="p-6 py-6 text-center">
                    We can provide wide range of services related web / domain /
                    email hosting. Please follow the link below to find out more
                    details about the price and services.
                  </p>
                  <Link href={"https://web.shreshbiz.com"} target="_blank">
                    <Button className="mt-5 bg-[#E4335A] hover:bg-[#E4335A]/90">
                      Find More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex flex-col items-center">
                <Zap className="w-12 h-12 text-[#E4335A] mb-4" />
                <h3 className="  font-semibold mb-2">Fast Setup</h3>
                <p className="text-gray-400">
                  Get started immediately with our quick setup process.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-12 h-12 text-[#E4335A] mb-4" />
                <h3 className="  font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-400">
                  Our expert team is here to help you succeed.
                </p>
              </div>
            </div>

            <div className=" rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-6">
                Every business is unique. Contact us for a personalized quote
                that fits your specific requirements.
              </p>
              <Button className="bg-[#E4335A] hover:bg-[#E4335A]/90">
                Contact Us for Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
