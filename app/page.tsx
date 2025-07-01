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
  Star,
  Rocket,
  Globe,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Enhanced Hero Section with Floating Elements */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code className="absolute top-20 left-20 h-8 w-8 text-blue-400/30 animate-float" />
          <Brain className="absolute top-32 right-32 h-6 w-6 text-purple-400/30 animate-float delay-1000" />
          <Rocket className="absolute bottom-32 left-16 h-10 w-10 text-cyan-400/30 animate-float delay-2000" />
          <Star className="absolute top-1/2 left-8 h-4 w-4 text-yellow-400/30 animate-float delay-500" />
          <Globe className="absolute bottom-20 right-20 h-7 w-7 text-green-400/30 animate-float delay-1500" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-slide-up">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit bg-white/10 backdrop-blur-md border-white/20 text-white animate-bounce-slow">
                  <Sparkles className="h-3 w-3 mr-1 text-yellow-400" />
                  Welcome to SLIIT CS Hub
                </Badge>

                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  Empowering{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-slow">
                    Future Developers
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                  Join Sri Lanka's premier Computer Science student community. Learn, collaborate, and build the future
                  together with cutting-edge technology and innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/25 text-lg px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
                  <Heart className="mr-2 h-5 w-5" />
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-lg px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Explore Events
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { icon: Users, label: "500+ Members", color: "text-blue-400", bg: "bg-blue-500/20" },
                  { icon: Calendar, label: "50+ Events", color: "text-green-400", bg: "bg-green-500/20" },
                  { icon: BookOpen, label: "100+ Resources", color: "text-purple-400", bg: "bg-purple-500/20" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center space-y-3 animate-fade-in group hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`p-4 rounded-2xl ${stat.bg} backdrop-blur-md mx-auto w-fit group-hover:shadow-lg transition-all duration-300`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <span className="font-bold text-white text-sm block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              {/* Glowing Orb Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-3xl" />

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/20 shadow-2xl">
                <div className="text-center space-y-8">
                  {/* Animated Code Icon */}
                  <div className="relative mx-auto w-fit">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-75 animate-pulse" />
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl">
                      <Code className="h-20 w-20 text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Building Tomorrow's Tech
                    </h3>
                    <div className="flex items-center justify-center space-x-6 text-gray-300">
                      <span className="flex items-center"><Sparkles className="h-4 w-4 mr-1 text-yellow-400" /> Innovation</span>
                      <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-blue-400" /> Collaboration</span>
                      <span className="flex items-center"><Trophy className="h-4 w-4 mr-1 text-purple-400" /> Excellence</span>
                    </div>
                  </div>

                  {/* Floating Mini Cards */}
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 bg-blue-500/20 backdrop-blur-md rounded-xl p-3 animate-float">
                      <Brain className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-purple-500/20 backdrop-blur-md rounded-xl p-3 animate-float delay-1000">
                      <Rocket className="h-5 w-5 text-purple-400" />
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
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-24 animate-slide-up">
            <Badge variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <TrendingUp className="h-3 w-3 mr-1 text-green-400" />
              Our Mission
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Shaping Digital Leaders
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              To create a thriving ecosystem where Computer Science students can learn, innovate, and grow together
              through collaborative projects, knowledge sharing, and industry connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Learn & Grow",
                description: "Access cutting-edge resources, workshops, and mentorship opportunities with industry experts",
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
                bgPattern: "bg-blue-500/10",
              },
              {
                icon: Users,
                title: "Collaborate",
                description: "Work on exciting projects with like-minded peers and build lasting professional relationships",
                color: "from-purple-500 to-pink-500",
                delay: "0.2s",
                bgPattern: "bg-purple-500/10",
              },
              {
                icon: Zap,
                title: "Innovate",
                description: "Turn your ideas into reality with our supportive community, resources, and cutting-edge tools",
                color: "from-orange-500 to-red-500",
                delay: "0.4s",
                bgPattern: "bg-orange-500/10",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`group hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 animate-scale-in overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                {/* Gradient Top Border */}
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />

                <CardHeader className="text-center pb-6 relative">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${item.bgPattern} opacity-50 rounded-t-lg`} />

                  <div className={`relative w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${item.color} p-5 mb-6 shadow-2xl group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:scale-110`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-center text-lg leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-20">
                    </div>
                    <Button size="sm" variant="ghost" className="btn-glow">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Clubs */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect">
              <Users className="h-3 w-3 mr-1" />
              Join the Community
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Our Clubs & Groups</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Find your passion and connect with like-minded students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "AI Club",
                icon: Brain,
                members: "120+",
                description: "Explore artificial intelligence and machine learning",
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
              },
              {
                name: "Cybersecurity",
                icon: Shield,
                members: "85+",
                description: "Learn ethical hacking and security practices",
                color: "from-red-500 to-pink-500",
                delay: "0.1s",
              },
              {
                name: "Dev Group",
                icon: Code,
                members: "200+",
                description: "Full-stack development and modern frameworks",
                color: "from-green-500 to-emerald-500",
                delay: "0.2s",
              },
              {
                name: "Competitive Programming",
                icon: Trophy,
                members: "95+",
                description: "Algorithmic problem solving and contests",
                color: "from-yellow-500 to-orange-500",
                delay: "0.3s",
              },
            ].map((club, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group`}
                style={{ animationDelay: club.delay }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${club.color} p-4 mb-4 neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <club.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{club.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto glass-effect">
                    {club.members} members
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{club.description}</p>
                  <Button size="sm" variant="outline" className="w-full glass-effect bg-transparent btn-glow">
                    Join Club
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Latest Blog Posts */}
      <section className="py-32 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="space-y-4 animate-slide-up">
              <Badge variant="outline" className="glass-effect">
                <BookOpen className="h-3 w-3 mr-1" />
                Knowledge Hub
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Latest from Our Blog</h2>
              <p className="text-xl text-muted-foreground">Insights, tutorials, and stories from our community</p>
            </div>
            <Button variant="outline" asChild className="glass-effect bg-transparent btn-glow">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started with React Hooks",
                author: "Sarah Chen",
                date: "Jan 10, 2024",
                readTime: "5 min read",
                excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s",
              },
              {
                title: "Machine Learning in Web Development",
                author: "Alex Kumar",
                date: "Jan 8, 2024",
                readTime: "8 min read",
                excerpt:
                  "Discover how to integrate ML models into your web applications for enhanced user experiences.",
                gradient: "from-purple-500 to-pink-500",
                delay: "0.2s",
              },
              {
                title: "Cybersecurity Best Practices for Developers",
                author: "Maya Patel",
                date: "Jan 5, 2024",
                readTime: "6 min read",
                excerpt: "Essential security practices every developer should know to build secure applications.",
                gradient: "from-orange-500 to-red-500",
                delay: "0.4s",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in overflow-hidden`}
                style={{ animationDelay: post.delay }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2 leading-tight">{post.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <Button size="sm" variant="ghost" className="p-0 h-auto btn-glow">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600" />
        <div className="absolute inset-0 particles-bg" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-white animate-slide-up">
            <Badge variant="secondary" className="glass-effect">
              <Sparkles className="h-3 w-3 mr-1" />
              Join the Revolution
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Join Our Community?</h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Connect with fellow CS students, access exclusive resources, and accelerate your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 btn-glow">
                <Users className="mr-2 h-5 w-5" />
                Join Now - It's Free!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent glass-effect text-lg px-8 py-6"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
