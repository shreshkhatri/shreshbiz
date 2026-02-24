import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, Rocket, Building } from "lucide-react"

interface TimelineEvent {
  id: string
  year: string
  month: string
  title: string
  description: string
  category: "milestone" | "achievement" | "launch" | "expansion"
  location?: string
  participants?: number
}

const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    year: "2024",
    month: "January",
    title: "Company Founded",
    description:
      "Started our journey to revolutionize web hosting and digital services with a vision to empower businesses worldwide.",
    category: "milestone",
    location: "Kathmandu, Nepal",
    participants: 3,
  },
  {
    id: "2",
    year: "2024",
    month: "March",
    title: "First 100 Customers",
    description:
      "Reached our first major milestone by serving 100 satisfied customers with reliable web hosting solutions.",
    category: "achievement",
    participants: 100,
  },
  {
    id: "3",
    year: "2024",
    month: "June",
    title: "Digital Marketing Services Launch",
    description:
      "Expanded our offerings to include comprehensive digital marketing services, helping businesses grow their online presence.",
    category: "launch",
  },
  {
    id: "4",
    year: "2024",
    month: "September",
    title: "Web Development Team Expansion",
    description:
      "Grew our development team to offer custom web application development services for enterprise clients.",
    category: "expansion",
    participants: 15,
  },
  {
    id: "5",
    year: "2024",
    month: "November",
    title: "Industry Recognition Award",
    description:
      "Received the \"Best Emerging Web Services Provider\" award from the Digital Innovation Council.",
    category: "achievement",
  },
  {
    id: "6",
    year: "2024",
    month: "December",
    title: "1000+ Active Clients",
    description:
      "Celebrated reaching over 1000 active clients across web hosting, digital marketing, and development services.",
    category: "milestone",
    participants: 1000,
  },
]

const getCategoryIcon = (category: TimelineEvent["category"]) => {
  const icons = {
    milestone: Rocket,
    achievement: Award,
    launch: Building,
    expansion: Users,
  }
  const Icon = icons[category] || Calendar
  return <Icon className="h-4 w-4" />
}

const getCategoryLabel = (category: TimelineEvent["category"]) => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

export default function Timeline() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="section-spacing">
        <div className="container px-4 md:px-6 text-center flex flex-col items-center gap-4">
          <Badge variant="secondary" className="text-xs">Our Journey</Badge>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-balance">
            Our <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Follow our timeline of growth, achievements, and milestones as we continue to innovate in web hosting, digital marketing, and development services.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-8">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className={`relative flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-background border-2 border-primary z-10">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="border border-border">
                      <CardContent className="p-5 flex flex-col gap-3">
                        <div className={`flex items-center gap-2 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <Badge variant="outline" className="text-xs">
                            {event.month} {event.year}
                          </Badge>
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            {getCategoryIcon(event.category)}
                            {getCategoryLabel(event.category)}
                          </Badge>
                        </div>
                        <h3 className="font-heading font-semibold text-foreground">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                        <div className={`flex items-center gap-4 text-xs text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {event.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </span>
                          )}
                          {event.participants && (
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {event.participants.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
