import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Sparkles,
  Eye,
  MessageSquare,
  Star,
} from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "🚀 The Future of AI in Software Development at SLIIT",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code at SLIIT. From automated code generation to intelligent debugging, discover how our CS students are embracing AI to reshape the developer experience.",
    author: "Dr. Pradeep Kalansooriya",
    date: "Jan 15, 2024",
    readTime: "12 min read",
    category: "🤖 Artificial Intelligence",
    image: "/placeholder.svg?height=400&width=800",
    gradient: "from-blue-500 to-cyan-500",
    views: "2.4K",
    comments: "45",
  }

  const blogPosts = [
    {
      title: "🎯 Mastering React Hooks: A SLIIT Student's Journey",
      excerpt:
        "Learn the fundamentals of React Hooks through a SLIIT CS student's perspective and how they can revolutionize your component logic and state management.",
      author: "Nimasha Perera (Y3)",
      date: "Jan 10, 2024",
      readTime: "5 min read",
      category: "💻 Web Development",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-green-500 to-emerald-500",
      views: "1.8K",
      comments: "23",
      delay: "0s",
    },
    {
      title: "🧠 Machine Learning Applications in Campus Projects",
      excerpt:
        "Discover how SLIIT students are integrating ML models into their web applications for enhanced user experiences and intelligent campus solutions.",
      author: "Sahan Wickramasinghe (Y4)",
      date: "Jan 8, 2024",
      readTime: "8 min read",
      category: "🤖 Machine Learning",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-purple-500 to-pink-500",
      views: "2.1K",
      comments: "31",
      delay: "0.1s",
    },
    {
      title: "🛡️ Cybersecurity Best Practices for Student Developers",
      excerpt:
        "Essential security practices every SLIIT CS student should know to build secure applications and protect user data in their projects.",
      author: "Tharindu Silva (Y3)",
      date: "Jan 5, 2024",
      readTime: "6 min read",
      category: "🔐 Cybersecurity",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-red-500 to-pink-500",
      views: "1.5K",
      comments: "18",
      delay: "0.2s",
    },
    {
      title: "⚡ Building Scalable APIs: From Classroom to Industry",
      excerpt:
        "Learn how to design and implement scalable REST APIs using Node.js and Express, bridging the gap between SLIIT coursework and industry practices.",
      author: "Kavindi Fernando (Y2)",
      date: "Jan 3, 2024",
      readTime: "10 min read",
      category: "🔧 Backend Development",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-orange-500 to-red-500",
      views: "1.9K",
      comments: "27",
      delay: "0.3s",
    },
    {
      title: "☁️ Cloud Computing for SLIIT Students",
      excerpt:
        "Understanding cloud fundamentals and how to leverage AWS, Azure, and Google Cloud for your academic projects and future career.",
      author: "Ravindu Perera (Y4)",
      date: "Dec 28, 2023",
      readTime: "7 min read",
      category: "☁️ Cloud Computing",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-blue-500 to-purple-500",
      views: "1.3K",
      comments: "15",
      delay: "0.4s",
    },
    {
      title: "📊 Data Structures & Algorithms: Interview Success Guide",
      excerpt:
        "A comprehensive guide to mastering DSA for technical interviews and competitive programming, written by successful SLIIT alumni.",
      author: "Alumni Success Team",
      date: "Dec 25, 2023",
      readTime: "15 min read",
      category: "📚 Computer Science",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-indigo-500 to-purple-500",
      views: "2.7K",
      comments: "42",
      delay: "0.5s",
    },
  ]

  const categories = [
    "All Topics",
    "💻 Web Development",
    "🤖 Machine Learning",
    "🔐 Cybersecurity",
    "📱 Mobile Development",
    "☁️ Cloud Computing",
    "📊 Data Science",
    "📚 Computer Science",
  ]

  const trendingTopics = [
    "React Hooks",
    "AI & ML",
    "Cybersecurity",
    "Node.js",
    "Python Tips",
    "Cloud AWS",
    "Data Structures",
    "API Development",
  ]

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
          <div className="text-center space-y-10 max-w-5xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform duration-300 animate-bounce-slow">
              <BookOpen className="h-3 w-3 mr-1 animate-pulse" />
              📚 SLIIT CS Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Stories from Our 
              <span className="tech-gradient-text animate-pulse-slow"> Tech Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover insights, tutorials, and inspiring stories from SLIIT's most innovative Computer Science students, 
              faculty, and alumni who are shaping the future of technology
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative pt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl animate-pulse-slow" />
              <div className="relative glass-effect rounded-2xl p-3 border-gradient">
                <div className="flex items-center space-x-4">
                  <Search className="h-5 w-5 text-muted-foreground ml-2 animate-pulse" />
                  <Input
                    placeholder="Search articles, tutorials, or author insights..."
                    className="border-0 bg-transparent text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0"
                  />
                  <Button className="btn-glow hover:scale-105 transition-all group">
                    <span>Search</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Post */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-3 mb-12 animate-slide-up">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-2 neon-glow">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold gradient-text">🌟 Featured Article</h2>
          </div>

          <Card className="overflow-hidden card-hover glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group">
            <div className={`h-3 bg-gradient-to-r ${featuredPost.gradient} relative`}>
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-square bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="glass-effect animate-pulse">
                    ⭐ Featured
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="w-fit glass-effect hover:scale-105 transition-transform">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">{featuredPost.excerpt}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className={`bg-gradient-to-br ${featuredPost.gradient} text-white font-bold`}>
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">👤 {featuredPost.author}</p>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>📅 {featuredPost.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>⏱️ {featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                      <MessageSquare className="h-4 w-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-fit btn-glow hover:scale-105 transition-all group/btn">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`rounded-full glass-effect ${index === 0 ? "btn-glow" : "bg-transparent"} animate-scale-in hover:scale-105 transition-all`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Grid */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`overflow-hidden card-hover glass-effect border-gradient animate-scale-in group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: post.delay }}
              >
                <div className={`h-3 bg-gradient-to-r ${post.gradient} relative`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="glass-effect text-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-primary transition-colors cursor-pointer">
                        <MessageSquare className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed group-hover:text-foreground/80 transition-colors">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8 group-hover:scale-110 transition-transform">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className={`bg-gradient-to-br ${post.gradient} text-white text-xs font-bold`}>
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">👤 {post.author}</p>
                        <p className="text-xs text-muted-foreground">📅 {post.date}</p>
                      </div>
                    </div>

                    <Button size="sm" variant="ghost" className="btn-glow hover:scale-105 transition-all group/btn">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="glass-effect bg-transparent btn-glow hover:scale-105 transition-all">
              Load More Amazing Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Sidebar Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-6 mb-12 animate-slide-up">
                <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
                  <BookOpen className="h-3 w-3 mr-1 animate-pulse" />
                  📰 Latest Articles
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text">Recent Community Posts</h2>
              </div>
              <div className="space-y-8">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Card
                    key={index}
                    className={`card-hover glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                      <div className="relative aspect-video md:aspect-square bg-muted rounded-xl overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                          className={`absolute top-2 left-2 w-4 h-4 rounded-full bg-gradient-to-r ${post.gradient} animate-pulse`}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <div className="space-y-3">
                          <Badge variant="outline" className="glass-effect">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="font-medium group-hover:text-foreground/80 transition-colors">👤 {post.author}</span>
                            <span>•</span>
                            <span>📅 {post.date}</span>
                            <span>•</span>
                            <span>⏱️ {post.readTime}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="btn-glow hover:scale-105 transition-all">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary animate-pulse" />
                    <span>🔥 Trending Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all glass-effect hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    <span>📧 Newsletter</span>
                  </CardTitle>
                  <CardDescription>Get the latest insights delivered to your SLIIT email</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your SLIIT email" className="glass-effect bg-transparent" />
                  <Button className="w-full btn-glow hover:scale-105 transition-all group">
                    <span>Subscribe for Updates</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">🌟 Join 1,200+ other SLIIT subscribers</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary animate-pulse" />
                    <span>✨ Top Contributors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Nimasha Perera", "Sahan Wickramasinghe", "Tharindu Silva"].map((author, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-all cursor-pointer group"
                      >
                        <Avatar className="h-10 w-10 group-hover:scale-110 transition-transform">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold">
                            {author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">👤 {author}</p>
                          <p className="text-xs text-muted-foreground">📝 {Math.floor(Math.random() * 10) + 5} articles</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
