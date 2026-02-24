"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Laptop, BriefcaseBusiness, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Job {
  id: string
  title: string
  type: "Full-time" | "Part-time" | "Contract"
  location: "On-site" | "Remote" | "Hybrid"
  description: string
}

const jobOpenings: Job[] = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "We are looking for a passionate Senior Frontend Developer to join our remote team.",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    type: "Full-time",
    location: "On-site",
    description:
      "Join our on-site team as a Backend Engineer designing robust and scalable backend services.",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    description:
      "We are seeking a talented UI/UX Designer to create intuitive and visually appealing user experiences.",
  },
  {
    id: "devops-specialist",
    title: "DevOps Specialist",
    type: "Contract",
    location: "Remote",
    description:
      "A contract DevOps Specialist is needed to help build and maintain our CI/CD pipelines.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    type: "Full-time",
    location: "On-site",
    description:
      "As a Product Manager, you will be responsible for product strategy, roadmap, and feature definition.",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    type: "Full-time",
    location: "Hybrid",
    description:
      "We are looking for a Data Scientist to analyze large datasets and develop predictive models.",
  },
]

export default function CareersPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Careers</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore exciting career opportunities and become a part of our innovative team.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Current Openings</h2>

          {jobOpenings.length === 0 ? (
            <div className="flex justify-center">
              <Card className="border border-border max-w-md w-full">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <BriefcaseBusiness className="h-12 w-12 text-muted-foreground" />
                  <h3 className="text-xl font-heading font-semibold">No Openings Right Now</h3>
                  <p className="text-sm text-muted-foreground">
                    We are constantly growing and new opportunities arise frequently. Please check back later!
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {jobOpenings.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 0.06}>
                  <Link href={`/careers/${job.id}`} className="block h-full group">
                    <Card className="h-full border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {job.location === "On-site" ? (
                            <MapPin className="h-3.5 w-3.5" />
                          ) : (
                            <Laptop className="h-3.5 w-3.5" />
                          )}
                          {job.location}
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-3">
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">{job.type}</Badge>
                          <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            View Details <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
