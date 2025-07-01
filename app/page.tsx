import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  BookOpen,
  Zap,
  ArrowRight,
  Code,
  Brain,
  Shield,
  Trophy,
  Sparkles,
  TrendingUp,
  Rocket,
  Star,
  Globe,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-grid-small pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" />

      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-medium" />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/30" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 animate-slide-up">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit glass-effect animate-bounce-slow hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-3 w-3 mr-1 animate-spin-slow" />
                  🎓 SLIIT Computer Science Hub
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Empowering <span className="tech-gradient-text animate-pulse-slow">CS Students</span>
                  <br />
                  <span className="text-4xl md:text-6xl text-muted-foreground">Building Tomorrow's Innovators</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                  The ultimate hub for SLIIT Computer Science students to excel academically, collaborate on projects, 
                  and build lasting connections within our vibrant campus community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/clubs">
                  <Button size="lg" className="glow-effect btn-glow text-lg px-8 py-6 hover:scale-105 transition-all duration-300 group">
                    <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Join Our Community
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" size="lg" className="glass-effect text-lg px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300 group">
                    <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Campus Events
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                {[
                  { icon: Users, label: "Active Students", color: "text-blue-500", count: "500+" },
                  { icon: Calendar, label: "Campus Events", color: "text-orange-500", count: "50+" },
                  { icon: BookOpen, label: "Study Resources", color: "text-blue-400", count: "100+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in hover:scale-110 transition-transform duration-300 cursor-pointer group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className={`h-5 w-5 ${stat.color} group-hover:animate-pulse`} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{stat.count}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-600/20 rounded-3xl blur-3xl animate-pulse-slow" />
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-orange-600/20 rounded-3xl flex items-center justify-center glass-effect border-gradient hover:scale-105 transition-transform duration-700">
                <div className="text-center space-y-6">
                  <div className="relative group">
                    <Code className="h-32 w-32 mx-auto text-primary animate-pulse-slow group-hover:rotate-12 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <Star className="absolute top-0 right-0 h-8 w-8 text-yellow-500 animate-bounce" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-2xl font-bold gradient-text">Building Future Tech Leaders at SLIIT</p>
                    <p className="text-muted-foreground">📚 Academic Excellence • 🤝 Peer Support • 🚀 Innovation</p>
                    <div className="flex justify-center space-x-2 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <TrendingUp className="h-3 w-3 mr-1 animate-pulse" />
              🎯 Our Mission
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Elevating SLIIT CS Students Together</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're dedicated to creating the strongest Computer Science community at SLIIT, where students support each other 
              through assignments, projects, and career preparation while building lifelong friendships and professional networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "📚 Academic Support",
                description: "Get help with coursework, assignments, and exam preparation from senior students and study groups. Access shared notes, tutorials, and mentorship programs.",
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
                feature: "Study Groups & Tutoring"
              },
              {
                icon: Users,
                title: "🤝 Project Collaboration",
                description: "Team up with fellow CS students for assignments, hackathons, and final year projects. Find the perfect project partners and build amazing things together.",
                color: "from-orange-500 to-red-500",
                delay: "0.2s",
                feature: "Team Formation Hub"
              },
              {
                icon: Zap,
                title: "🚀 Career Development",
                description: "Prepare for internships and job placements with interview prep, coding practice, and industry connections. Build your portfolio with real projects.",
                color: "from-blue-500 to-orange-500",
                delay: "0.4s",
                feature: "Career Guidance Center"
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group`}
                style={{ animationDelay: item.delay }}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${item.color} p-5 mb-6 neon-glow group-hover:rotate-12 transition-transform duration-500`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto glass-effect text-xs">
                    {item.feature}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-medium" />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
                <Calendar className="h-3 w-3 mr-1 animate-pulse" />
                📅 Campus Life
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Upcoming Campus Events</h2>
              <p className="text-xl text-muted-foreground">Don't miss these exciting opportunities happening right here at SLIIT</p>
            </div>
            <Button variant="outline" asChild className="glass-effect bg-transparent btn-glow hover:scale-105 transition-all group">
              <Link href="/events">
                <Globe className="mr-2 h-4 w-4 group-hover:animate-spin" />
                View All Campus Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🤖 AI Workshop by CS Department",
                date: "Next Tuesday",
                time: "2:00 PM - 5:00 PM",
                type: "🎓 Academic Workshop",
                description: "Department-organized workshop on machine learning fundamentals with hands-on coding sessions",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s",
                spots: "15 seats available",
                level: "All CS Years Welcome"
              },
              {
                title: "🏆 SLIIT CS Hackathon 2024",
                date: "This Weekend",
                time: "24 Hours of Innovation",
                type: "⚡ Campus Competition",
                description: "Annual CS department hackathon with prizes, industry mentors, and potential internship opportunities",
                gradient: "from-orange-500 to-red-500",
                delay: "0.2s",
                spots: "8 teams remaining",
                level: "Teams of 2-4 Students"
              },
              {
                title: "💼 Tech Career Fair Prep",
                date: "Next Friday",
                time: "3:00 PM - 6:00 PM",
                type: "🎯 Career Development",
                description: "Resume workshops, mock interviews, and tips for the upcoming SLIIT career fair with tech companies",
                gradient: "from-blue-500 to-orange-500",
                delay: "0.4s",
                spots: "25 slots open",
                level: "3rd & 4th Year Focus"
              },
            ].map((event, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in overflow-hidden hover:scale-105 transition-all duration-500 group`}
                style={{ animationDelay: event.delay }}
              >
                <div className={`h-3 bg-gradient-to-r ${event.gradient} relative`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="glass-effect group-hover:scale-105 transition-transform">
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium bg-muted/50 px-2 py-1 rounded">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="outline" className="text-xs">
                      {event.level}
                    </Badge>
                    <Badge variant="destructive" className="text-xs animate-pulse">
                      {event.spots}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.gradient} animate-pulse`} />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <Link href="/events">
                      <Button size="sm" variant="ghost" className="btn-glow group-hover:scale-105 transition-transform">
                        <Heart className="mr-1 h-3 w-3 group-hover:fill-current group-hover:text-red-500 transition-colors" />
                        Join Now
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Clubs */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <Users className="h-3 w-3 mr-1 animate-bounce" />
              🌟 Study Groups & Clubs
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Find Your Study Tribe</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join specialized study groups and clubs that match your interests and academic needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "🤖 AI & ML Study Group",
                icon: Brain,
                members: "45+",
                description: "Weekly sessions covering machine learning, deep learning, and AI project collaborations",
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
                activity: "Weekly Study Sessions",
                growth: "+8 this semester"
              },
              {
                name: "🛡️ Cybersecurity Club",
                icon: Shield,
                members: "32+",
                description: "Ethical hacking practice, CTF competitions, and cybersecurity certification preparation",
                color: "from-red-500 to-orange-500",
                delay: "0.1s",
                activity: "CTF Practice & Labs",
                growth: "+6 this semester"
              },
              {
                name: "💻 Full-Stack Developers",
                icon: Code,
                members: "78+",
                description: "Modern web development, project collaborations, and internship preparation workshops",
                color: "from-green-500 to-emerald-500",
                delay: "0.2s",
                activity: "Weekly Code Sessions",
                growth: "+12 this semester"
              },
              {
                name: "🏆 Competitive Programming",
                icon: Trophy,
                members: "28+",
                description: "Algorithm practice, contest preparation, and representing SLIIT in programming competitions",
                color: "from-orange-500 to-yellow-500",
                delay: "0.3s",
                activity: "Contest Training",
                growth: "+5 this semester"
              },
            ].map((club, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: club.delay }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${club.color} p-5 mb-4 neon-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <club.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{club.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge variant="outline" className="glass-effect">
                      {club.members} members
                    </Badge>
                    <Badge variant="secondary" className="text-xs animate-pulse">
                      {club.growth}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{club.description}</p>
                  <Badge variant="outline" className="w-fit mx-auto text-xs glass-effect">
                    📅 {club.activity}
                  </Badge>
                  <Link href="/clubs">
                    <Button size="sm" variant="outline" className="w-full glass-effect bg-transparent btn-glow group-hover:scale-105 transition-all">
                      <Rocket className="mr-2 h-3 w-3 group-hover:animate-bounce" />
                      Join the Squad
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Latest Blog Posts */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-medium" />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="space-y-6 animate-slide-up">
              <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
                <BookOpen className="h-3 w-3 mr-1 animate-pulse" />
                📝 Student Resources
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Latest Study Materials & Tips</h2>
              <p className="text-xl text-muted-foreground">Shared resources, tutorials, and success stories from fellow SLIIT CS students</p>
            </div>
            <Button variant="outline" asChild className="glass-effect bg-transparent btn-glow hover:scale-105 transition-all group">
              <Link href="/blog">
                <Brain className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Browse All Resources
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "📚 Data Structures & Algorithms Study Guide",
                author: "Kasun Perera (Y3)",
                date: "Last Week",
                readTime: "10 min read",
                excerpt: "Comprehensive guide covering all DSA topics with SLIIT exam patterns and coding examples that helped me ace my exams.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s",
                category: "Study Materials",
                likes: "89",
                trending: true
              },
              {
                title: "🚀 My Internship Journey at Dialog Axiata",
                author: "Nimali Silva (Y4)",
                date: "3 days ago",
                readTime: "6 min read",
                excerpt: "How I prepared for and secured my internship, what I learned, and tips for fellow SLIIT students applying for tech internships.",
                gradient: "from-orange-500 to-red-500",
                delay: "0.2s",
                category: "Career Stories",
                likes: "67",
                trending: false
              },
              {
                title: "🔧 Setting Up Your Development Environment",
                author: "Ravindu Fernando (Y2)",
                date: "1 week ago",
                readTime: "8 min read",
                excerpt: "Step-by-step guide to setting up IDEs, Git, and development tools that every SLIIT CS student needs for coursework and projects.",
                gradient: "from-blue-500 to-orange-500",
                delay: "0.4s",
                category: "Technical Guides",
                likes: "94",
                trending: true
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in overflow-hidden hover:scale-105 transition-all duration-500 group`}
                style={{ animationDelay: post.delay }}
              >
                <div className={`h-3 bg-gradient-to-r ${post.gradient} relative`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="glass-effect text-xs">
                      {post.category}
                    </Badge>
                    {post.trending && (
                      <Badge variant="destructive" className="text-xs animate-pulse">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl line-clamp-2 leading-tight group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="font-medium">👤 {post.author}</span>
                    <span>•</span>
                    <span>📅 {post.date}</span>
                    <span>•</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">{post.likes} likes</span>
                    </div>
                    <Link href="/blog">
                      <Button size="sm" variant="ghost" className="p-0 h-auto btn-glow group-hover:scale-105 transition-all">
                        Dive In
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-large" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-orange-600" />
        <div className="absolute inset-0 particles-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10 text-white animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform">
              <Sparkles className="h-3 w-3 mr-1 animate-spin-slow" />
              🎓 Join SLIIT CS Hub
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Join Our Campus Community?</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Connect with 500+ SLIIT CS students, access exclusive study materials, get academic support, 
              and make your university experience unforgettable. It's completely free for all SLIIT students!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/clubs">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-7 btn-glow hover:scale-110 transition-all duration-300 group">
                  <Rocket className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                  Join with SLIIT Email - FREE!
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary bg-transparent glass-effect text-lg px-10 py-7 hover:scale-110 transition-all duration-300 group"
                >
                  <Globe className="mr-2 h-6 w-6 group-hover:animate-spin" />
                  Explore Community
                </Button>
              </Link>
            </div>
            <div className="flex justify-center space-x-8 pt-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>📚 Academic Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>🤝 Study Groups</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span>💼 Career Prep</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
