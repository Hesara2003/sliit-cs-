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
    title: "🏆 SLIIT CS Hub Wins National Innovation Challenge 2024",
    excerpt:
      "Our brilliant team's AI-powered healthcare solution secured first place in the National University Innovation Challenge, earning recognition from industry leaders and a cash prize of LKR 500,000. This groundbreaking project demonstrates the incredible talent within our community!",
    category: "🎉 Major Achievement",
    date: "January 15, 2024",
    time: "2 hours ago",
    author: "CS Hub Leadership Team",
    image: "/placeholder.svg?height=400&width=800",
    priority: "high",
  }

  const featuredNews = [
    {
      title: "🔬 Revolutionary AI Research Lab Opens at SLIIT",
      excerpt:
        "State-of-the-art artificial intelligence research facility equipped with cutting-edge GPU clusters and quantum computing simulators now available for ambitious student research projects.",
      category: "🏗️ New Facility",
      date: "January 12, 2024",
      author: "Dr. Pradeep Kalansooriya",
      image: "/placeholder.svg?height=200&width=300",
      views: 1247,
      comments: 23,
      priority: "high",
    },
    {
      title: "🚀 Epic Industry Partnership with Tech Giants Announced",
      excerpt:
        "SLIIT CS Hub partners with Google, Microsoft, and AWS to provide exclusive internship opportunities and cloud credits for student innovation projects.",
      category: "🤝 Partnership",
      date: "January 10, 2024",
      author: "Industry Relations Team",
      image: "/placeholder.svg?height=200&width=300",
      views: 892,
      comments: 15,
      priority: "medium",
    },
    {
      title: "⚡ Hackathon 2024 Registration Now Open - Join the Innovation Battle!",
      excerpt:
        "Annual 48-hour coding marathon featuring thrilling challenges in AI, blockchain, and sustainable technology. Register now with your dream team of 2-4 members!",
      category: "🎯 Epic Event",
      date: "January 8, 2024",
      author: "Event Organizing Committee",
      image: "/placeholder.svg?height=200&width=300",
      views: 2156,
      comments: 45,
      priority: "medium",
    },
  ]

  const recentNews = [
    {
      title: "🧠 New Course: Advanced Machine Learning & Neural Networks",
      excerpt:
        "Cutting-edge specialized course covering deep learning, transformers, and practical ML applications now available for ambitious final year students.",
      category: "📚 Academic Excellence",
      date: "January 7, 2024",
      author: "Academic Affairs Committee",
      views: 567,
      comments: 12,
      priority: "low",
    },
    {
      title: "💰 Student Startup Success: CS Member Secures Major Seed Funding",
      excerpt: "CS Hub member's innovative fintech startup raises $50,000 in seed funding from prominent local venture capital firm.",
      category: "🎉 Achievement",
      date: "January 5, 2024",
      author: "Alumni Success Network",
      views: 789,
      comments: 18,
      priority: "medium",
    },
    {
      title: "🛡️ Cybersecurity Mastery Workshop Series Begins",
      excerpt:
        "Intensive weekly cybersecurity workshops covering ethical hacking, penetration testing, and security auditing start this month.",
      category: "🔐 Workshop Series",
      date: "January 3, 2024",
      author: "Cybersecurity Club Leaders",
      views: 445,
      comments: 8,
      priority: "low",
    },
    {
      title: "👥 Alumni Mentorship Program Launch - Connect with Industry Leaders",
      excerpt:
        "Connect with successful CS graduates working at top tech companies for personalized career guidance and exclusive industry insights.",
      category: "🌟 Mentorship Program",
      date: "January 1, 2024",
      author: "Alumni Relations Team",
      views: 623,
      comments: 14,
      priority: "medium",
    },
    {
      title: "📖 Research Excellence: Three Papers Published Internationally",
      excerpt:
        "Brilliant CS Hub members publish groundbreaking research papers in prestigious international conferences on AI and software engineering.",
      category: "🔬 Research Success",
      date: "December 28, 2023",
      author: "Research Excellence Committee",
      views: 334,
      comments: 6,
      priority: "low",
    },
    {
      title: "💻 Amazing New Study Spaces & High-End Equipment Available",
      excerpt: "Brand new collaborative study rooms with premium workstations and cutting-edge equipment now open exclusively for CS students.",
      category: "🏗️ Facility Upgrade",
      date: "December 25, 2023",
      author: "Campus Facilities Team",
      views: 456,
      comments: 9,
      priority: "low",
    },
  ]

  const announcements = [
    {
      title: "📅 Semester Break Schedule Update",
      content:
        "Academic activities will be suspended from February 1-15, 2024. CS Hub events will continue with an exciting modified schedule!",
      type: "📚 Academic",
      date: "January 14, 2024",
      urgent: false,
    },
    {
      title: "📖 Library Extended Hours - 24/7 Access!",
      content: "Library will remain open 24/7 during exam period (January 20-30) exclusively for dedicated CS students.",
      type: "🏗️ Facility",
      date: "January 12, 2024",
      urgent: true,
    },
    {
      title: "🎓 Special Guest Lecture: Future of Quantum Computing",
      content: "IBM Research scientist Dr. John Smith will deliver an exclusive lecture on January 25, 2024, at 3:00 PM.",
      type: "🎯 Special Event",
      date: "January 10, 2024",
      urgent: false,
    },
    {
      title: "💰 Scholarship Applications Now Open!",
      content: "Merit-based scholarships for outstanding CS students. Don't miss out! Application deadline: February 15, 2024.",
      type: "🌟 Opportunity",
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
    <div className="min-h-screen relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" />
      
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-10 max-w-4xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform duration-300 animate-bounce-slow">
              <TrendingUp className="h-3 w-3 mr-1 animate-pulse" />
              📰 SLIIT CS Hub News Center
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Stay Connected with Our 
              <span className="tech-gradient-text animate-pulse-slow"> Amazing Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover the latest achievements, exciting opportunities, and inspiring stories 
              from Sri Lanka's most dynamic Computer Science student community
            </p>

            {/* Enhanced Search and Subscribe */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto pt-6">
              <div className="relative flex-1 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 group-hover:text-primary transition-colors" />
                <Input placeholder="Search news and announcements..." className="pl-10 glass-effect hover:scale-105 transition-all" />
              </div>
              <Button className="shrink-0 glow-effect btn-glow hover:scale-105 transition-all group">
                <Bell className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Subscribe for Updates
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: newsStats.totalArticles, label: "Total Articles", icon: "📰" },
                { value: newsStats.thisMonth, label: "This Month", icon: "🔥" },
                { value: newsStats.totalViews.toLocaleString(), label: "Total Views", icon: "👁️" },
                { value: newsStats.subscribers, label: "Subscribers", icon: "🌟" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in hover:scale-110 transition-transform cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary group-hover:text-blue-500 transition-colors">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Breaking News */}
      <section className="py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="border-red-200 dark:border-red-800 glass-effect hover:scale-105 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center space-x-3 shrink-0">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  <Badge variant="destructive" className="animate-pulse font-bold">
                    🚨 BREAKING NEWS
                  </Badge>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{breakingNews.title}</h2>
                  <p className="text-muted-foreground mb-4">{breakingNews.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-medium">⏰ {breakingNews.time}</span>
                      <span>•</span>
                      <span>👤 {breakingNews.author}</span>
                    </div>
                    <Button size="sm" className="btn-glow hover:scale-105 transition-all group">
                      Read Full Story
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-8 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-4 mb-6 animate-slide-up">
            <Filter className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-medium">🎯 Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={index === 0 ? "default" : "outline"} 
                size="sm" 
                className="rounded-full glass-effect hover:scale-105 transition-all group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured News */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-3 mb-12 animate-slide-up">
            <TrendingUp className="h-6 w-6 text-primary animate-pulse" />
            <h2 className="text-4xl font-bold gradient-text">🔥 Featured News</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge
                      variant={news.priority === "high" ? "default" : "secondary"}
                      className={`${news.priority === "high" ? "bg-red-500 animate-pulse" : ""} glass-effect`}
                    >
                      {news.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">📅 {news.date}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{news.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors">{news.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Avatar className="h-6 w-6 group-hover:scale-110 transition-transform">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          {news.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="group-hover:text-foreground/80 transition-colors">👤 {news.author}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                        <Eye className="h-3 w-3" />
                        <span>{news.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                        <MessageSquare className="h-3 w-3" />
                        <span>{news.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="btn-glow hover:scale-110 transition-all">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Recent News & Announcements */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Recent News */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 gradient-text animate-slide-up">📰 Latest Updates</h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <Card key={index} className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant={news.priority === "medium" ? "default" : "secondary"} className="glass-effect">
                              {news.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground font-medium">📅 {news.date}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{news.title}</h3>
                          <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">{news.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="group-hover:text-foreground/80 transition-colors">👤 by {news.author}</span>
                              <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                                <Eye className="h-3 w-3" />
                                <span>{news.views}</span>
                              </div>
                              <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                                <MessageSquare className="h-3 w-3" />
                                <span>{news.comments}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost" className="btn-glow hover:scale-105 transition-all group/btn">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enhanced Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" className="glass-effect btn-glow hover:scale-105 transition-all">
                  Load More Exciting News
                </Button>
              </div>
            </div>

            {/* Enhanced Sidebar - Announcements */}
            <div className="space-y-6">
              <Card className="glass-effect border-gradient animate-scale-in">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Megaphone className="h-5 w-5 text-primary animate-pulse" />
                    <CardTitle>📢 Important Announcements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant={announcement.urgent ? "destructive" : "outline"} className="text-xs glass-effect">
                          {announcement.type}
                        </Badge>
                        {announcement.urgent && (
                          <Badge variant="destructive" className="text-xs animate-pulse font-bold">
                            🚨 URGENT
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{announcement.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">{announcement.content}</p>
                      <span className="text-xs text-muted-foreground">📅 {announcement.date}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-lg">📧 Newsletter Subscription</CardTitle>
                  <CardDescription>Get weekly updates delivered straight to your inbox</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your SLIIT email" className="glass-effect" />
                  <Button className="w-full btn-glow hover:scale-105 transition-all group">
                    <Bell className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Subscribe for Updates
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    🌟 Join {newsStats.subscribers} other amazing subscribers
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="text-lg">🔗 Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start glass-effect hover:scale-105 transition-all group">
                    <Calendar className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    📅 Event Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-effect hover:scale-105 transition-all group">
                    <BookOpen className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    📚 Academic Resources
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-effect hover:scale-105 transition-all group">
                    <Users className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    👥 Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="text-lg">📁 Archive</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    {[
                      { month: "January 2024", count: 24, icon: "🔥" },
                      { month: "December 2023", count: 18, icon: "🎄" },
                      { month: "November 2023", count: 22, icon: "🍂" },
                      { month: "October 2023", count: 19, icon: "🎃" }
                    ].map((archive, index) => (
                      <div key={index} className="flex justify-between items-center hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                        <span className="flex items-center space-x-2">
                          <span className="group-hover:animate-bounce">{archive.icon}</span>
                          <span className="group-hover:text-primary transition-colors">{archive.month}</span>
                        </span>
                        <span className="text-muted-foreground">{archive.count} articles</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-4 btn-glow hover:scale-105 transition-all">
                    View All Archives
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Submit News Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">📝 Share Your Amazing Story</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Got something incredible to share with our community?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "🏆 Achievement",
                desc: "Share your academic wins, competition victories, or project successes with the community.",
                gradient: "from-yellow-500 to-orange-500",
                delay: "0s"
              },
              {
                icon: Zap,
                title: "⚡ Event",
                desc: "Announce exciting upcoming events, workshops, or community gatherings.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0.1s"
              },
              {
                icon: BookOpen,
                title: "📚 Research",
                desc: "Share groundbreaking research findings, publications, or academic collaborations.",
                gradient: "from-purple-500 to-pink-500",
                delay: "0.2s"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: item.delay }}>
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} p-4 mb-4 neon-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                    {item.desc}
                  </p>
                  <Button variant="outline" className="glass-effect btn-glow hover:scale-105 transition-all">
                    Submit {item.title.split(' ')[1]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
