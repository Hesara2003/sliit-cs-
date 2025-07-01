import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, Filter } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "AI Workshop Series - Deep Learning Fundamentals",
      date: "January 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "SLIIT Auditorium A",
      type: "Workshop",
      category: "Artificial Intelligence",
      description:
        "Join us for an intensive workshop on deep learning fundamentals. Learn about neural networks, backpropagation, and practical implementation using TensorFlow.",
      instructor: "Dr. Rajesh Gupta",
      capacity: 50,
      registered: 35,
      price: "Free",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Hackathon 2024: Innovation Challenge",
      date: "January 20-21, 2024",
      time: "48 Hours",
      location: "SLIIT Innovation Lab",
      type: "Competition",
      category: "Development",
      description:
        "48-hour hackathon focused on solving real-world problems using technology. Form teams, build solutions, and compete for exciting prizes.",
      instructor: "Multiple Mentors",
      capacity: 120,
      registered: 89,
      price: "LKR 500",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Cybersecurity Awareness Seminar",
      date: "January 25, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual Event",
      type: "Seminar",
      category: "Cybersecurity",
      description:
        "Learn about the latest cybersecurity threats and how to protect yourself and your applications from malicious attacks.",
      instructor: "Maya Patel & Industry Experts",
      capacity: 200,
      registered: 156,
      price: "Free",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Mobile App Development Bootcamp",
      date: "February 1-3, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "SLIIT Computer Lab 1",
      type: "Bootcamp",
      category: "Mobile Development",
      description:
        "3-day intensive bootcamp covering React Native development. Build your first mobile app from scratch.",
      instructor: "Sarah Chen",
      capacity: 30,
      registered: 28,
      price: "LKR 2000",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const pastEvents = [
    {
      title: "Web Development Workshop",
      date: "December 15, 2023",
      type: "Workshop",
      attendees: 45,
      rating: 4.8,
    },
    {
      title: "Tech Talk: Future of Cloud Computing",
      date: "December 10, 2023",
      type: "Seminar",
      attendees: 120,
      rating: 4.6,
    },
    {
      title: "Competitive Programming Contest",
      date: "December 5, 2023",
      type: "Competition",
      attendees: 80,
      rating: 4.9,
    },
  ]

  const eventTypes = ["All", "Workshop", "Seminar", "Competition", "Bootcamp", "Networking"]
  const categories = ["All", "AI/ML", "Web Development", "Mobile", "Cybersecurity", "Data Science"]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-50/50 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Events & Workshops</h1>
            <p className="text-xl text-muted-foreground">
              Join our exciting events, workshops, and seminars to enhance your skills and network with fellow CS
              enthusiasts
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter Events:</span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Event Type:</p>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type, index) => (
                  <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Category:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:scale-105">
                <div className="aspect-video bg-muted">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{event.type}</Badge>
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>
                        {event.registered}/{event.capacity} registered
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-medium">{event.instructor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-bold text-primary">{event.price}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">Register Now</Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Registration Progress</span>
                      <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Event Calendar</h2>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">January 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {/* Calendar Header */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-2 font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}

                {/* Calendar Days */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = [15, 20, 21, 25].includes(day)
                  return (
                    <div
                      key={day}
                      className={`p-2 rounded-lg cursor-pointer transition-colors ${
                        hasEvent ? "bg-primary text-primary-foreground hover:bg-primary/80" : "hover:bg-muted"
                      }`}
                    >
                      {day}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">Highlighted dates have scheduled events</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Past Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{event.type}</Badge>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">★</span>
                        <span className="text-sm font-medium">{event.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      View Summary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Want to Organize an Event?</h2>
            <p className="text-xl opacity-90">
              Have an idea for a workshop, seminar, or competition? We'd love to help you bring it to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Propose an Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
