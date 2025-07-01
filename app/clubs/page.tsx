import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Shield,
  Code,
  Trophy,
  Smartphone,
  Database,
  Globe,
  Gamepad2,
  Users,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function ClubsPage() {
  const featuredClubs = [
    {
      id: "ai-club",
      name: "AI & Machine Learning Club",
      icon: Brain,
      description:
        "Explore the frontiers of artificial intelligence and machine learning through hands-on projects, research, and industry collaborations.",
      members: 145,
      founded: "2022",
      category: "Research & Development",
      rating: 4.9,
      projects: 12,
      events: 8,
      image: "/placeholder.svg?height=300&width=400",
      highlights: [
        "Weekly ML study sessions",
        "Industry guest speakers",
        "Research paper discussions",
        "Kaggle competitions",
      ],
      upcomingEvents: [
        { name: "Deep Learning Workshop", date: "Jan 20" },
        { name: "AI Ethics Seminar", date: "Jan 25" },
      ],
      leaders: [
        { name: "Alex Chen", role: "President", image: "/placeholder.svg?height=40&width=40" },
        { name: "Priya Sharma", role: "Vice President", image: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Club",
      icon: Shield,
      description:
        "Learn ethical hacking, penetration testing, and cybersecurity best practices to protect digital assets and systems.",
      members: 98,
      founded: "2021",
      category: "Security & Ethics",
      rating: 4.8,
      projects: 8,
      events: 12,
      image: "/placeholder.svg?height=300&width=400",
      highlights: [
        "Capture The Flag competitions",
        "Penetration testing labs",
        "Security awareness campaigns",
        "Industry certifications prep",
      ],
      upcomingEvents: [
        { name: "CTF Competition", date: "Jan 22" },
        { name: "Security Audit Workshop", date: "Jan 28" },
      ],
      leaders: [
        { name: "Maya Patel", role: "President", image: "/placeholder.svg?height=40&width=40" },
        { name: "David Silva", role: "Technical Lead", image: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  const allClubs = [
    {
      id: "dev-group",
      name: "Full Stack Development Group",
      icon: Code,
      description: "Master modern web development with React, Node.js, and cloud technologies.",
      members: 220,
      category: "Web Development",
      rating: 4.7,
      color: "bg-green-500",
    },
    {
      id: "competitive-programming",
      name: "Competitive Programming Club",
      icon: Trophy,
      description: "Sharpen your algorithmic thinking and problem-solving skills for coding competitions.",
      members: 156,
      category: "Algorithms & DS",
      rating: 4.9,
      color: "bg-yellow-500",
    },
    {
      id: "mobile-dev",
      name: "Mobile Development Club",
      icon: Smartphone,
      description: "Build native and cross-platform mobile applications for iOS and Android.",
      members: 89,
      category: "Mobile Development",
      rating: 4.6,
      color: "bg-purple-500",
    },
    {
      id: "data-science",
      name: "Data Science & Analytics Club",
      icon: Database,
      description: "Dive into data analysis, visualization, and statistical modeling.",
      members: 134,
      category: "Data Science",
      rating: 4.8,
      color: "bg-blue-500",
    },
    {
      id: "web3",
      name: "Web3 & Blockchain Club",
      icon: Globe,
      description: "Explore decentralized technologies, smart contracts, and cryptocurrency.",
      members: 67,
      category: "Emerging Tech",
      rating: 4.5,
      color: "bg-orange-500",
    },
    {
      id: "game-dev",
      name: "Game Development Club",
      icon: Gamepad2,
      description: "Create immersive games using Unity, Unreal Engine, and web technologies.",
      members: 78,
      category: "Game Development",
      rating: 4.7,
      color: "bg-red-500",
    },
  ]

  const categories = [
    "All Clubs",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Security & Ethics",
    "Research & Development",
    "Algorithms & DS",
    "Emerging Tech",
    "Game Development",
  ]

  const clubStats = {
    totalClubs: 8,
    totalMembers: 987,
    activeProjects: 45,
    monthlyEvents: 25,
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-50/50 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Clubs & Special Interest Groups</h1>
            <p className="text-xl text-muted-foreground">
              Join specialized communities within SLIIT CS Hub and dive deep into your areas of interest
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{clubStats.totalClubs}</div>
                <div className="text-sm text-muted-foreground">Active Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{clubStats.totalMembers}</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{clubStats.activeProjects}</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{clubStats.monthlyEvents}</div>
                <div className="text-sm text-muted-foreground">Monthly Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clubs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-12">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured Clubs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredClubs.map((club, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-video bg-muted">
                  <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <club.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{club.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary">{club.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{club.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3">{club.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Club Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{club.members}</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{club.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{club.events}</div>
                      <div className="text-xs text-muted-foreground">Events</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">What We Do:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {club.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leaders */}
                  <div>
                    <h4 className="font-semibold mb-3">Leadership Team:</h4>
                    <div className="flex space-x-4">
                      {club.leaders.map((leader, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={leader.image || "/placeholder.svg"} />
                            <AvatarFallback>
                              {leader.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{leader.name}</p>
                            <p className="text-xs text-muted-foreground">{leader.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div>
                    <h4 className="font-semibold mb-3">Upcoming Events:</h4>
                    <div className="space-y-2">
                      {club.upcomingEvents.map((event, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span>{event.name}</span>
                          <Badge variant="outline">{event.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1" asChild>
                      <Link href={`/clubs/${club.id}`}>
                        Join Club
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/clubs/${club.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Clubs Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">All Clubs & Groups</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allClubs.map((club, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 ${club.color} rounded-lg`}>
                      <club.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {club.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{club.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{club.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{club.members} members</span>
                    </div>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>

                  <Progress value={(club.members / 250) * 100} className="h-2" />

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/clubs/${club.id}`}>Join</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/clubs/${club.id}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How to Join a Club</h2>
            <p className="text-xl text-muted-foreground">Getting started is easy!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Choose Your Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse through our clubs and find ones that match your interests and career goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Join & Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Click the join button and connect with club leaders and fellow members.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Start Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Participate in events, work on projects, and grow your skills with the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Start Your Own Club</h2>
            <p className="text-xl opacity-90">
              Have a unique interest or idea? We support students in creating new clubs and special interest groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Propose a New Club
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Club Leadership Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
