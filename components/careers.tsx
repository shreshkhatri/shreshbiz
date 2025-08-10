'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Laptop,BriefcaseBusiness } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Job {
  id: string
  title: string
  type: "Full-time" | "Part-time" | "Contract"
  location: "On-site" | "Remote" | "Hybrid"
  description: string // Added for detail page
}

const jobOpenings: Job[] = [
  {
    id: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "We are looking for a passionate Senior Frontend Developer to join our remote team. You will be responsible for developing and implementing user interface components using React.js workflows and ensuring the performance, quality, and responsiveness of applications. Key responsibilities include: developing new user-facing features, building reusable components and front-end libraries, optimizing applications for maximum speed and scalability, and collaborating with other team members and stakeholders.",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    type: "Full-time",
    location: "On-site",
    description:
      "Join our on-site team as a Backend Engineer. You will design, develop, and maintain robust and scalable backend services and APIs using Node.js and various database technologies. Experience with microservices architecture is a plus. Responsibilities include: designing and implementing RESTful APIs, writing clean, maintainable, and efficient code, troubleshooting and debugging applications, and participating in code reviews.",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    description:
      "We are seeking a talented UI/UX Designer to create intuitive and visually appealing user experiences. You will work closely with product managers and engineers to define and implement innovative solutions for the product direction, visuals, and experience. Your duties will involve: conducting user research and usability testing, creating wireframes, prototypes, and high-fidelity mockups, and ensuring design consistency across all platforms.",
  },
  {
    id: "devops-specialist",
    title: "DevOps Specialist",
    type: "Contract",
    location: "Remote",
    description:
      "A contract DevOps Specialist is needed to help us build and maintain our CI/CD pipelines, automate infrastructure, and ensure system reliability. Strong experience with AWS, Docker, and Kubernetes is required. Key tasks include: managing cloud infrastructure, implementing continuous integration and deployment, monitoring system performance, and ensuring security best practices.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    type: "Full-time",
    location: "On-site",
    description:
      "As a Product Manager, you will be responsible for the product strategy, roadmap, and feature definition for a product line. You will work with cross-functional teams to deliver products that meet customer needs and business goals. Your role will involve: defining product requirements, prioritizing features, collaborating with engineering and design teams, and analyzing market trends.",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    type: "Full-time",
    location: "Hybrid",
    description:
      "We are looking for a Data Scientist to analyze large datasets, develop predictive models, and provide actionable insights. Proficiency in Python/R, SQL, and machine learning frameworks is essential. Responsibilities include: collecting and cleaning data, building and validating statistical models, presenting findings to stakeholders, and developing data-driven solutions.",
  },
];

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 md:py-24 lg:py-32 section-spacing">
      <div className="container-padding max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">Join Our Team</h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Explore exciting career opportunities and become a part of our innovative team.
        </p>
      </div>

      <section className="w-full py-12 md:py-16 lg:py-20 container-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-8 md:mb-12">Current Openings</h2>
         {jobOpenings.length === 0 ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Card className="glassmorphic-card p-8 text-center max-w-md w-full">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <BriefcaseBusiness className="h-16 w-16 text-muted-foreground" />
                  <h3 className="text-2xl font-semibold tracking-tight">No Job Openings At The Moment</h3>
                  <p className="text-muted-foreground">
                    We're constantly growing and new opportunities arise frequently. Please check back later!
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {jobOpenings.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 0.1}>
                  <Link href={`/careers/${job.id}`} className="block h-full group">
                    <Card className="glassmorphic-card h-full flex flex-col justify-between cursor-pointer group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-muted-foreground">
                          {job.location === "On-site" ? <MapPin className="h-4 w-4" /> : <Laptop className="h-4 w-4" />}
                          {job.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="secondary">{job.type}</Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
