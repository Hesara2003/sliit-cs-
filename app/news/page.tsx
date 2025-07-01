import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Search,
  Filter,
  TrendingUp,
  Megaphone,
  Award,
  Users,
  BookOpen,
  Zap,
  Bell,
  ArrowRight,
  Eye,
  MessageSquare,
  Share2,
} from "lucide-react"

export default function NewsPage() {
  const breakingNews = {
    title: "SLIIT CS Hub Wins National Innovation Challenge 2024",
    excerpt:
      "Our team's AI-powered healthcare solution secured first place in the National University Innovation Challenge, earning recognition from industry leaders and a cash prize of LKR 500,000.",
    category: "Achievement",
    date: "January 15, 2024",
    time: "2 hours ago",
    author: "Admin Team",
    image: "/placeholder.svg?height=400&width=800",
    priority: "high",
  }

  const featuredNews = [
    {
      title: "New AI Research Lab Opens at SLIIT",
      excerpt:
        "State-of-the-art artificial intelligence research facility equipped with latest GPU clusters and quantum computing simulators now available for student research projects.",
      category: "Facility",
      date: "January 12, 2024",
      author: "Dr. Rajesh Gupta",
      image: "/placeholder.svg?height=200&width=300",
      views: 1247,
      comments: 23,
      priority: "high",
    },
    {
      title: "Industry Partnership with Tech Giants Announced",
      excerpt:
        "SLIIT CS Hub partners with Google, Microsoft, and AWS to provide exclusive internship opportunities and cloud credits for student projects.",
      category: "Partnership",
      date: "January 10, 2024",
      author: "Sarah Chen",
      image: "/placeholder.svg?height=200&width=300",
      views: 892,
      comments: 15,
      priority: "medium",
    },
    {
      title: "Hackathon 2024 Registration Now Open",
      excerpt:
        "Annual 48-hour hackathon featuring exciting challenges in AI, blockchain, and sustainable technology. Register now with your team of 2-4 members.",
      category: "Event",
      date: "January 8, 2024",
      author: "Event Committee",
      image: "/placeholder.svg?height=200&width=300",
      views: 2156,
      comments: 45,
      priority: "medium",
    },
  ]

  const recentNews = [
    {
      title: "New Course: Advanced Machine Learning Techniques",
      excerpt:
        "Specialized course covering deep learning, neural networks, and practical ML applications now available for final year students.",
      category: "Academic",
      date: "January 7, 2024",
      author: "Academic Committee",
      views: 567,
      comments: 12,
      priority: "low",
    },
    {
      title: "Student Startup Secures Seed Funding",
      excerpt: "CS Hub member's fintech startup raises $50,000 in seed funding from local venture capital firm.",
      category: "Achievement",
      date: "January 5, 2024",
      author: "Alumni Network",
      views: 789,
      comments: 18,
      priority: "medium",
    },
    {
      title: "Cybersecurity Workshop Series Begins",
      excerpt:
        "Weekly cybersecurity workshops covering ethical hacking, penetration testing, and security auditing start this month.",
      category: "Workshop",
      date: "January 3, 2024",
      author: "Maya Patel",
      views: 445,
      comments: 8,
      priority: "low",
    },
    {
      title: "Alumni Mentorship Program Launch",
      excerpt:
        "Connect with successful CS graduates working at top tech companies for career guidance and industry insights.",
      category: "Program",
      date: "January 1, 2024",
      author: "Alumni Relations",
      views: 623,
      comments: 14,
      priority: "medium",
    },
    {
      title: "Research Paper Publication Success",
      excerpt:
        "Three CS Hub members publish research papers in international conferences on AI and software engineering.",
      category: "Research",
      date: "December 28, 2023",
      author: "Research Committee",
      views: 334,
      comments: 6,
      priority: "low",
    },
    {
      title: "New Study Spaces and Equipment Available",
      excerpt: "Additional study rooms with high-end workstations and collaborative spaces now open for CS students.",
      category: "Facility",
      date: "December 25, 2023",
      author: "Facilities Team",
      views: 456,
      comments: 9,
      priority: "low",
    },
  ]

  const announcements = [
    {
      title: "Semester Break Schedule",
      content:
        "Academic activities will be suspended from February 1-15, 2024. CS Hub events will continue with modified schedule.",
      type: "Academic",
      date: "January 14, 2024",
      urgent: false,
    },
    {
      title: "Library Extended Hours",
      content: "Library will remain open 24/7 during exam period (January 20-30) for CS students.",
      type: "Facility",
      date: "January 12, 2024",
      urgent: true,
    },
    {
      title: "Guest Lecture: Future of Quantum Computing",
      content: "IBM Research scientist Dr. John Smith will deliver a special lecture on January 25, 2024, at 3:00 PM.",
      type: "Event",
      date: "January 10, 2024",
      urgent: false,
    },
    {
      title: "Scholarship Applications Open",
      content: "Merit-based scholarships for outstanding CS students. Application deadline: February 15, 2024.",
      type: "Opportunity",
      date: "January 8, 2024",
      urgent: true,
    },
  ]

  const categories = [
    "All News",
    "Achievement",
    "Academic",
    "Event",
    "Partnership",
    "Research",
    "Facility",
    "Workshop",
    "Program",
  ]

  const newsStats = {
    totalArticles: 156,
    thisMonth: 24,
    totalViews: 45678,
    subscribers: 892,
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-50/50 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">News & Announcements</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest happenings, achievements, and opportunities in our CS community
            </p>

            {/* Search and Subscribe */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search news and announcements..." className="pl-10" />
              </div>
              <Button className="shrink-0">
                <Bell className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{newsStats.totalArticles}</div>
                <div className="text-sm text-muted-foreground">Total Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{newsStats.thisMonth}</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{newsStats.totalViews.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{newsStats.subscribers}</div>
                <div className="text-sm text-muted-foreground">Subscribers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News */}
      <section className="py-8 bg-red-50 dark:bg-red-950/20 border-y border-red-200 dark:border-red-800">
        <div className="container mx-auto px-4">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center space-x-2 shrink-0">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <Badge variant="destructive" className="animate-pulse">
                    BREAKING
                  </Badge>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{breakingNews.title}</h2>
                  <p className="text-muted-foreground mb-3">{breakingNews.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{breakingNews.time}</span>
                      <span>•</span>
                      <span>{breakingNews.author}</span>
                    </div>
                    <Button size="sm">
                      Read Full Story
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-12">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-video bg-muted">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant={news.priority === "high" ? "default" : "secondary"}
                      className={news.priority === "high" ? "bg-red-500" : ""}
                    >
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                  <CardDescription>{news.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback className="text-xs">
                          {news.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{news.author}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{news.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News & Announcements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent News */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Recent News</h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant={news.priority === "medium" ? "default" : "secondary"}>
                              {news.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{news.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                          <p className="text-muted-foreground mb-3">{news.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>by {news.author}</span>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{news.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-3 w-3" />
                                <span>{news.comments}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline">Load More News</Button>
              </div>
            </div>

            {/* Sidebar - Announcements */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Megaphone className="h-5 w-5 text-primary" />
                    <CardTitle>Important Announcements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant={announcement.urgent ? "destructive" : "outline"} className="text-xs">
                          {announcement.type}
                        </Badge>
                        {announcement.urgent && (
                          <Badge variant="destructive" className="text-xs animate-pulse">
                            URGENT
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold text-sm">{announcement.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{announcement.content}</p>
                      <span className="text-xs text-muted-foreground">{announcement.date}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Newsletter Subscription</CardTitle>
                  <CardDescription>Get weekly updates delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full">
                    <Bell className="mr-2 h-4 w-4" />
                    Subscribe to Updates
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Join {newsStats.subscribers} other subscribers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="mr-2 h-4 w-4" />
                    Event Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Academic Resources
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Archive</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>January 2024</span>
                      <span className="text-muted-foreground">24 articles</span>
                    </div>
                    <div className="flex justify-between">
                      <span>December 2023</span>
                      <span className="text-muted-foreground">18 articles</span>
                    </div>
                    <div className="flex justify-between">
                      <span>November 2023</span>
                      <span className="text-muted-foreground">22 articles</span>
                    </div>
                    <div className="flex justify-between">
                      <span>October 2023</span>
                      <span className="text-muted-foreground">19 articles</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4">
                    View All Archives
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Submit News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Share Your News</h2>
            <p className="text-xl text-muted-foreground">Have something newsworthy to share with the community?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your academic achievements, competition wins, or project successes.
                </p>
                <Button variant="outline">Submit Achievement</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Event</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Announce upcoming events, workshops, or community gatherings.
                </p>
                <Button variant="outline">Submit Event</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share research findings, publications, or academic collaborations.
                </p>
                <Button variant="outline">Submit Research</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
