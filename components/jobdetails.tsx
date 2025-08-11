"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Laptop, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ScrollReveal } from "./scroll-reveal";

interface Job {
  id: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: "On-site" | "Remote" | "Hybrid";
  description: string;
}

// In a real application, this data would be fetched from an API or database
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

export default function JobDetailPage({ jobid }: { jobid: string }) {
  const job = jobOpenings.find((j) => j.id == jobid);

  if (!job) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center py-12 md:py-24 lg:py-32 section-spacing">
        <div className="container-padding max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl gradient-text">
            Job Not Found
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            The job you are looking for does not exist or has been removed.
          </p>
          <Link href="/careers">
            <Button className="mt-8">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-24 lg:py-32 section-spacing">
      <ScrollReveal>
        <div className="container-padding max-w-4xl mx-auto space-y-8">
          <Link href="/careers">
            <Button
              variant="outline"
              className="mb-6 glassmorphic-button-outline bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
            </Button>
          </Link>

          <Card className="glassmorphic-card p-6 md:p-8">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold tracking-tight">
                {job.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 text-muted-foreground text-lg">
                {job.location === "On-site" ? (
                  <MapPin className="h-5 w-5" />
                ) : (
                  <Laptop className="h-5 w-5" />
                )}
                {job.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-base px-3 py-1">
                  {job.type}
                </Badge>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Job Description
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
              {/* Add more job details here if available */}
              <Button className="w-full mt-6 neumorphic-button-primary">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </main>
  );
}
