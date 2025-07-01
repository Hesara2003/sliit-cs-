import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink, Filter } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "🤖 AI Workshop Series - Deep Learning Fundamentals",
      date: "January 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "SLIIT Auditorium A",
      type: "🎓 Workshop",
      category: "🧠 Artificial Intelligence",
      description:
        "Join us for an intensive hands-on workshop on deep learning fundamentals. Master neural networks, backpropagation, and practical implementation using TensorFlow with real SLIIT projects.",
      instructor: "Dr. Pradeep Kalansooriya",
      capacity: 50,
      registered: 35,
      price: "Free for SLIIT Students",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "🏆 Hackathon 2024: Innovation Challenge",
      date: "January 20-21, 2024",
      time: "48 Hours of Pure Innovation",
      location: "SLIIT Innovation Lab",
      type: "⚡ Competition",
      category: "💻 Development",
      description:
        "Epic 48-hour hackathon focused on solving real-world problems using cutting-edge technology. Form your dream team, build groundbreaking solutions, and compete for amazing prizes!",
      instructor: "Multiple Industry Mentors",
      capacity: 120,
      registered: 89,
      price: "LKR 500 (Includes meals)",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "🛡️ Cybersecurity Awareness Seminar",
      date: "January 25, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Virtual Event (Zoom)",
      type: "🎯 Seminar",
      category: "🔐 Cybersecurity",
      description:
        "Learn about the latest cybersecurity threats and cutting-edge protection strategies. Discover how to secure your applications and personal data from malicious attacks.",
      instructor: "Industry Security Experts",
      capacity: 200,
      registered: 156,
      price: "Free for All Students",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "📱 Mobile App Development Bootcamp",
      date: "February 1-3, 2024",
      time: "9:00 AM - 5:00 PM (3 Days)",
      location: "SLIIT Computer Lab 1",
      type: "🚀 Bootcamp",
      category: "📱 Mobile Development",
      description:
        "Intensive 3-day bootcamp covering React Native development from zero to hero. Build and deploy your first professional mobile app with industry best practices.",
      instructor: "Mobile Development Team",
      capacity: 30,
      registered: 28,
      price: "LKR 2000 (Materials included)",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const pastEvents = [
    {
      title: "🌐 Web Development Workshop",
      date: "December 15, 2023",
      type: "🎓 Workshop",
      attendees: 45,
      rating: 4.8,
    },
    {
      title: "☁️ Tech Talk: Future of Cloud Computing",
      date: "December 10, 2023",
      type: "🎯 Seminar",
      attendees: 120,
      rating: 4.6,
    },
    {
      title: "🏆 Competitive Programming Contest",
      date: "December 5, 2023",
      type: "⚡ Competition",
      attendees: 80,
      rating: 4.9,
    },
  ]

  const eventTypes = [
    "All Events",
    "🎓 Workshop",
    "🎯 Seminar",
    "⚡ Competition",
    "🚀 Bootcamp",
    "🤝 Networking",
  ]
  const categories = [
    "All Categories",
    "🧠 AI/ML",
    "💻 Web Dev",
    "📱 Mobile",
    "🔐 Security",
    "📊 Data Science",
  ]

  return (
    <div className="min-h-screen relative">
      {/* Global Grid Background */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none"
        style={{}}
      />

      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-10 max-w-4xl mx-auto animate-slide-up">
            <Badge
              variant="secondary"
              className="glass-effect hover:scale-105 transition-transform duration-300 animate-bounce-slow"
            >
              <Calendar className="h-3 w-3 mr-1 animate-pulse" />
              📅 SLIIT CS Events Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Amazing Events &
              <span className="tech-gradient-text animate-pulse-slow">
                {" "}
                Learning Adventures
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Join our exciting workshops, hackathons, and seminars to enhance your
              skills,
              <br className="hidden sm:inline" /> network with fellow SLIIT CS
              enthusiasts, and unlock new opportunities in tech
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="py-8 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-4 mb-6 animate-slide-up">
            <Filter className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-medium">🎯 Filter Events:</span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Event Type:</p>
              <div className="flex flex-wrap gap-3">
                {eventTypes.map((type, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="rounded-full glass-effect hover:scale-105 transition-all"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-3">Category:</p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className="rounded-full glass-effect hover:scale-105 transition-all"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-32 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-slide-up">
            🔥 Upcoming Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`h-3 bg-gradient-to-r ${event.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="glass-effect">
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="glass-effect">
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-base group-hover:text-foreground/80 transition-colors">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>📅 {event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>⏰ {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>📍 {event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Users className="h-4 w-4 text-primary" />
                      <span>
                        👥 {event.registered}/{event.capacity} registered
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <div>
                      <p className="text-sm text-muted-foreground">👨‍🏫 Instructor</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {event.instructor}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">💰 Price</p>
                      <p className="font-bold text-primary">{event.price}</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 btn-glow hover:scale-105 transition-all group/btn">
                      <span>Register Now</span>
                      <Users className="ml-2 h-4 w-4 group-hover/btn:animate-bounce" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="glass-effect hover:scale-110 transition-all"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">🎯 Registration Progress</span>
                      <span className="font-bold text-primary">
                        {Math.round((event.registered / event.capacity) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${event.gradient} h-3 rounded-full transition-all duration-500 animate-pulse-slow`}
                        style={{
                          width: `${(event.registered / event.capacity) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Event Calendar */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-slide-up">
            📅 Event Calendar
          </h2>

          <Card className="max-w-4xl mx-auto glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-center text-2xl gradient-text">
                🗓️ January 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {/* Enhanced Calendar Header */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="p-3 font-bold text-primary">
                    {day}
                  </div>
                ))}

                {/* Enhanced Calendar Days */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const hasEvent = [15, 20, 21, 25].includes(day)
                  return (
                    <div
                      key={day}
                      className={`p-3 rounded-lg cursor-pointer transition-all hover:scale-110 ${
                        hasEvent
                          ? "bg-gradient-to-br from-primary to-blue-600 text-white hover:from-primary/80 hover:to-blue-600/80 animate-pulse-slow font-bold"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      {day}
                      {hasEvent && (
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-1 animate-bounce" />
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  ✨ Highlighted dates have scheduled events
                </p>
                <Badge variant="outline" className="glass-effect">
                  🎯 Click on event dates for details
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Past Events */}
      <section className="py-32 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-slide-up">
            🏆 Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="glass-effect">
                      {event.type}
                    </Badge>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <span className="text-lg">⭐</span>
                        <span className="text-sm font-bold">{event.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors">
                    📅 {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">👥 {event.attendees} attendees</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="btn-glow hover:scale-105 transition-all"
                    >
                      View Summary
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600" />
        <div className="absolute inset-0 particles-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-10 text-white animate-slide-up">
            <Badge
              variant="secondary"
              className="glass-effect hover:scale-105 transition-transform"
            >
              <Calendar className="h-3 w-3 mr-1 animate-pulse" />
              🎯 Event Organization
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Got an Amazing Event Idea?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Have a brilliant idea for a workshop, seminar, hackathon, or
              competition?
              <br className="hidden sm:inline" /> We'd love to help you bring your
              vision to life and impact the SLIIT CS community!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-10 py-7 btn-glow hover:scale-110 transition-all duration-300 group"
              >
                <Users className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                Propose Your Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent glass-effect text-lg px-10 py-7 hover:scale-110 transition-all duration-300 group"
              >
                <ExternalLink className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Contact Event Team
              </Button>
            </div>
            <div className="flex justify-center space-x-8 pt-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>📝 Easy Proposal Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>🤝 Full Support Provided</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>🎯 Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
