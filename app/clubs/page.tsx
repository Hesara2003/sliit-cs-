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
      name: "🤖 AI & Machine Learning Club",
      icon: Brain,
      description:
        "Explore the cutting-edge frontiers of artificial intelligence and machine learning through hands-on projects, groundbreaking research, and exciting industry collaborations.",
      members: 145,
      founded: "2022",
      category: "🔬 Research & Development",
      rating: 4.9,
      projects: 12,
      events: 8,
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-blue-500 to-cyan-500",
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
        { name: "Sahan Wickramasinghe", role: "President", image: "/placeholder.svg?height=40&width=40" },
        { name: "Nimasha Perera", role: "Vice President", image: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: "cybersecurity",
      name: "🛡️ Cybersecurity Club",
      icon: Shield,
      description:
        "Master ethical hacking, penetration testing, and cybersecurity best practices to become a guardian of digital assets and systems.",
      members: 98,
      founded: "2021",
      category: "🔐 Security & Ethics",
      rating: 4.8,
      projects: 8,
      events: 12,
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-red-500 to-pink-500",
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
        { name: "Tharindu Silva", role: "President", image: "/placeholder.svg?height=40&width=40" },
        { name: "Kavindi Fernando", role: "Technical Lead", image: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  const allClubs = [
    {
      id: "dev-group",
      name: "💻 Full Stack Development Group",
      icon: Code,
      description: "Master modern web development with React, Node.js, and cutting-edge cloud technologies.",
      members: 220,
      category: "🌐 Web Development",
      rating: 4.7,
      color: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "competitive-programming",
      name: "🏆 Competitive Programming Club",
      icon: Trophy,
      description: "Sharpen your algorithmic thinking and problem-solving skills for coding competitions and interviews.",
      members: 156,
      category: "🧮 Algorithms & DS",
      rating: 4.9,
      color: "bg-yellow-500",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "mobile-dev",
      name: "📱 Mobile Development Club",
      icon: Smartphone,
      description: "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
      members: 89,
      category: "📲 Mobile Development",
      rating: 4.6,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "data-science",
      name: "📊 Data Science & Analytics Club",
      icon: Database,
      description: "Dive deep into data analysis, visualization, and statistical modeling with real-world datasets.",
      members: 134,
      category: "📈 Data Science",
      rating: 4.8,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "web3",
      name: "🌐 Web3 & Blockchain Club",
      icon: Globe,
      description: "Explore decentralized technologies, smart contracts, and the future of cryptocurrency.",
      members: 67,
      category: "🚀 Emerging Tech",
      rating: 4.5,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "game-dev",
      name: "🎮 Game Development Club",
      icon: Gamepad2,
      description: "Create immersive games using Unity, Unreal Engine, and modern web technologies.",
      members: 78,
      category: "🎯 Game Development",
      rating: 4.7,
      color: "bg-red-500",
      gradient: "from-red-500 to-pink-500",
    },
  ]

  const categories = [
    "All Clubs",
    "🌐 Web Development",
    "📱 Mobile Development",
    "📊 Data Science",
    "🔐 Security & Ethics",
    "🔬 Research & Development",
    "🧮 Algorithms & DS",
    "🚀 Emerging Tech",
    "🎮 Game Development",
  ]

  const clubStats = {
    totalClubs: 8,
    totalMembers: 987,
    activeProjects: 45,
    monthlyEvents: 25,
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
              <Users className="h-3 w-3 mr-1 animate-pulse" />
              🌟 SLIIT CS Clubs & Groups
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Find Your Tech 
              <span className="tech-gradient-text animate-pulse-slow"> Passion Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Join specialized communities within SLIIT CS Hub and dive deep into your areas of interest. 
              Connect with like-minded peers, work on exciting projects, and build your expertise together!
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: clubStats.totalClubs, label: "Active Clubs", icon: "🏛️" },
                { value: clubStats.totalMembers, label: "Total Members", icon: "👥" },
                { value: clubStats.activeProjects, label: "Active Projects", icon: "🚀" },
                { value: clubStats.monthlyEvents, label: "Monthly Events", icon: "📅" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in hover:scale-110 transition-transform cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary group-hover:text-blue-500 transition-colors">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-8 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap gap-3 justify-center">
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
      </section>

      {/* Enhanced Featured Clubs */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-3 mb-12 animate-slide-up">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-2 neon-glow">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold gradient-text">⭐ Featured Clubs</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredClubs.map((club, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`h-3 bg-gradient-to-r ${club.gradient} relative`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img src={club.image || "/placeholder.svg"} alt={club.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-gradient-to-br ${club.gradient} rounded-xl neon-glow group-hover:rotate-12 transition-transform duration-500`}>
                        <club.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{club.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="glass-effect">{club.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                            <span className="text-sm font-medium">{club.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-3 group-hover:text-foreground/80 transition-colors">{club.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Enhanced Club Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-primary">👥 {club.members}</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <div className="hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-primary">🚀 {club.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="hover:scale-110 transition-transform cursor-pointer">
                      <div className="text-2xl font-bold text-primary">📅 {club.events}</div>
                      <div className="text-xs text-muted-foreground">Events</div>
                    </div>
                  </div>

                  {/* Enhanced Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">🎯 What We Do:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {club.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm hover:text-primary transition-colors cursor-pointer">
                          <div className={`w-2 h-2 bg-gradient-to-r ${club.gradient} rounded-full animate-pulse`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Leaders */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">👑 Leadership Team:</h4>
                    <div className="flex space-x-4">
                      {club.leaders.map((leader, idx) => (
                        <div key={idx} className="flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer group/leader">
                          <Avatar className="h-8 w-8 group-hover/leader:scale-110 transition-transform">
                            <AvatarImage src={leader.image || "/placeholder.svg"} />
                            <AvatarFallback className={`bg-gradient-to-br ${club.gradient} text-white`}>
                              {leader.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium group-hover/leader:text-primary transition-colors">👤 {leader.name}</p>
                            <p className="text-xs text-muted-foreground">✨ {leader.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Upcoming Events */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">📅 Upcoming Events:</h4>
                    <div className="space-y-2">
                      {club.upcomingEvents.map((event, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors cursor-pointer">
                          <span className="hover:text-primary transition-colors">🎯 {event.name}</span>
                          <Badge variant="outline" className="glass-effect">📅 {event.date}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1 btn-glow hover:scale-105 transition-all group/btn" asChild>
                      <Link href={`/clubs/${club.id}`}>
                        <Users className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                        Join Club
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="glass-effect hover:scale-105 transition-all" asChild>
                      <Link href={`/clubs/${club.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced All Clubs Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-slide-up">🏛️ All Clubs & Groups</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allClubs.map((club, index) => (
              <Card key={index} className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-gradient-to-br ${club.gradient} rounded-xl neon-glow group-hover:rotate-12 transition-transform duration-500`}>
                      <club.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{club.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs glass-effect">
                          {club.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                          <span className="text-sm font-medium">{club.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">{club.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>👥 {club.members} members</span>
                    </div>
                    <TrendingUp className="h-4 w-4 text-green-500 animate-pulse" />
                  </div>

                  <Progress value={(club.members / 250) * 100} className="h-3" />

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 btn-glow hover:scale-105 transition-all group/btn" asChild>
                      <Link href={`/clubs/${club.id}`}>
                        <span>Join</span>
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="glass-effect hover:scale-105 transition-all" asChild>
                      <Link href={`/clubs/${club.id}`}>Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How to Join Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">🚀 How to Join a Club</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Getting started is easier than you think!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "🎯 Choose Your Interest",
                desc: "Browse through our amazing clubs and find ones that match your interests and career goals perfectly.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s"
              },
              {
                step: "2", 
                title: "🤝 Join & Connect",
                desc: "Click the join button and connect with club leaders and fellow passionate members instantly.",
                gradient: "from-purple-500 to-pink-500",
                delay: "0.1s"
              },
              {
                step: "3",
                title: "📚 Start Learning",
                desc: "Participate in exciting events, work on cool projects, and grow your skills with our supportive community.",
                gradient: "from-orange-500 to-red-500",
                delay: "0.2s"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: item.delay }}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-4 neon-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600" />
        <div className="absolute inset-0 particles-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-10 text-white animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform">
              <Star className="h-3 w-3 mr-1 animate-spin-slow" />
              🌟 Create Something Amazing
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Start Your Own Club?</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Have a unique passion or innovative idea? We support ambitious SLIIT students in creating 
              new clubs and special interest groups that can make a real impact on our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" variant="secondary" className="text-lg px-10 py-7 btn-glow hover:scale-110 transition-all duration-300 group">
                <Users className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                Propose Your Club Idea
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent glass-effect text-lg px-10 py-7 hover:scale-110 transition-all duration-300 group"
              >
                <Brain className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Club Leadership Guide
              </Button>
            </div>
            <div className="flex justify-center space-x-8 pt-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>💡 Free Support & Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>👥 Community Building Help</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>🎯 Leadership Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
