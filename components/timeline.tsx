import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award, Rocket, Building } from "lucide-react"

interface TimelineEvent {
  id: string
  date: string
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
    date: "2024-01-15",
    year: "2024",
    month: "January",
    title: "Company Founded",
    description:
      "Started our journey to revolutionize web hosting and digital services with a vision to empower businesses worldwide.",
    category: "milestone",
    location: "San Francisco, CA",
    participants: 3,
  },
  {
    id: "2",
    date: "2024-03-22",
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
    date: "2024-06-10",
    year: "2024",
    month: "June",
    title: "Digital Marketing Services Launch",
    description:
      "Expanded our offerings to include comprehensive digital marketing services, helping businesses grow their online presence.",
    category: "launch",
    location: "Remote",
  },
  {
    id: "4",
    date: "2024-09-05",
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
    date: "2024-11-18",
    year: "2024",
    month: "November",
    title: "Industry Recognition Award",
    description: 'Received the "Best Emerging Web Services Provider" award from the Digital Innovation Council.',
    category: "achievement",
    location: "New York, NY",
  },
  {
    id: "6",
    date: "2024-12-30",
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
  switch (category) {
    case "milestone":
      return <Rocket className="w-5 h-5" />
    case "achievement":
      return <Award className="w-5 h-5" />
    case "launch":
      return <Building className="w-5 h-5" />
    case "expansion":
      return <Users className="w-5 h-5" />
    default:
      return <Calendar className="w-5 h-5" />
  }
}

const getCategoryColor = (category: TimelineEvent["category"]) => {
  switch (category) {
    case "milestone":
      return "bg-primary text-primary-foreground"
    case "achievement":
      return "bg-secondary text-secondary-foreground"
    case "launch":
      return "bg-accent text-accent-foreground"
    case "expansion":
      return "bg-chart-4 text-white"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function Timeline() {
  return (
    <div className="flex w-full min-h-screen flex-col items-stretch py-32 lg:py-32 section-spacing">
      <div className="text-center mb-24">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Journey</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Follow our timeline of growth, achievements, and milestones as we continue to innovate in web hosting, digital
          marketing, and development services.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 z-20">
          <div className="relative">
            <div className="w-6 h-6 bg-[#E4335A] rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute inset-0 w-6 h-6 bg-[#E4335A] rounded-full animate-ping opacity-75"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-sm font-semibold text-[#E4335A] bg-white px-2 py-1 rounded-md shadow-sm border">
                Timeline Start
              </span>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

        <div className="space-y-12 xs:mx-1 mx-60">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative flex items-center group">
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                {/* Outermost ring */}
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#E4335A]/10 -translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-300"></div>
                {/* Middle ring */}
                <div className="absolute inset-0 w-18 h-18 rounded-full bg-[#E4335A]/20 -translate-x-1 -translate-y-1 group-hover:scale-105 transition-transform duration-300"></div>
                {/* Inner circle */}
                <div
                  className={`relative flex items-center justify-center w-16 h-16 rounded-full ${getCategoryColor(event.category)} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {getCategoryIcon(event.category)}
                </div>
              </div>

              <div
                className={`absolute left-1/2 z-5 ${
                  index % 2 === 0 ? "translate-x-8 sm:translate-x-8" : "-translate-x-8 sm:-translate-x-8 rotate-180"
                }`}
              >
                <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-border"></div>
              </div>

              <Card
                className={`w-60 sm:w-[calc(50%-2rem)] transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
                  index % 2 === 0 ? "sm:ml-auto sm:text-left" : "sm:mr-auto sm:text-left"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-sm font-medium">
                        {event.month} {event.year}
                      </Badge>
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.participants.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
