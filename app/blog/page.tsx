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
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code. From automated code generation to intelligent debugging, AI is reshaping the developer experience.",
    author: "Dr. Rajesh Gupta",
    date: "Jan 15, 2024",
    readTime: "12 min read",
    category: "Artificial Intelligence",
    image: "/placeholder.svg?height=400&width=800",
    gradient: "from-blue-500 to-cyan-500",
    views: "2.4K",
    comments: "45",
  }

  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn the fundamentals of React Hooks and how they can simplify your component logic and state management.",
      author: "Sarah Chen",
      date: "Jan 10, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-green-500 to-emerald-500",
      views: "1.8K",
      comments: "23",
      delay: "0s",
    },
    {
      title: "Machine Learning in Web Development",
      excerpt:
        "Discover how to integrate ML models into your web applications for enhanced user experiences and intelligent features.",
      author: "Alex Kumar",
      date: "Jan 8, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-purple-500 to-pink-500",
      views: "2.1K",
      comments: "31",
      delay: "0.1s",
    },
    {
      title: "Cybersecurity Best Practices for Developers",
      excerpt:
        "Essential security practices every developer should know to build secure applications and protect user data.",
      author: "Maya Patel",
      date: "Jan 5, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-red-500 to-pink-500",
      views: "1.5K",
      comments: "18",
      delay: "0.2s",
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn how to design and implement scalable REST APIs using Node.js, Express, and modern architectural patterns.",
      author: "David Silva",
      date: "Jan 3, 2024",
      readTime: "10 min read",
      category: "Backend Development",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-orange-500 to-red-500",
      views: "1.9K",
      comments: "27",
      delay: "0.3s",
    },
    {
      title: "Introduction to Cloud Computing",
      excerpt:
        "Understanding the fundamentals of cloud computing and how to leverage cloud services for modern applications.",
      author: "Priya Sharma",
      date: "Dec 28, 2023",
      readTime: "7 min read",
      category: "Cloud Computing",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-blue-500 to-purple-500",
      views: "1.3K",
      comments: "15",
      delay: "0.4s",
    },
    {
      title: "Data Structures and Algorithms Mastery",
      excerpt:
        "A comprehensive guide to mastering data structures and algorithms for technical interviews and competitive programming.",
      author: "Ravi Mendis",
      date: "Dec 25, 2023",
      readTime: "15 min read",
      category: "Computer Science",
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-indigo-500 to-purple-500",
      views: "2.7K",
      comments: "42",
      delay: "0.5s",
    },
  ]

  const categories = [
    "All",
    "Web Development",
    "Machine Learning",
    "Cybersecurity",
    "Mobile Development",
    "Cloud Computing",
    "Data Science",
    "Computer Science",
  ]

  const trendingTopics = [
    "React Hooks",
    "Machine Learning",
    "Cybersecurity",
    "Node.js",
    "Python",
    "Cloud Computing",
    "Data Structures",
    "API Development",
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="py-32 relative overflow-hidden particles-bg">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="glass-effect">
              <BookOpen className="h-3 w-3 mr-1" />
              Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">CS Hub Blog</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Insights, tutorials, and stories from our vibrant Computer Science community
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl" />
              <div className="relative glass-effect rounded-2xl p-2">
                <div className="flex items-center space-x-3">
                  <Search className="h-5 w-5 text-muted-foreground ml-4" />
                  <Input
                    placeholder="Search articles, topics, or authors..."
                    className="border-0 bg-transparent text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0"
                  />
                  <Button className="btn-glow">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Post */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-12 animate-slide-up">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 p-2">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Featured Article</h2>
          </div>

          <Card className="overflow-hidden card-hover glass-effect border-gradient animate-scale-in">
            <div className={`h-2 bg-gradient-to-r ${featuredPost.gradient}`} />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-square bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20" />
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="glass-effect">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit glass-effect">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">{featuredPost.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{featuredPost.excerpt}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback className={`bg-gradient-to-br ${featuredPost.gradient} text-white font-bold`}>
                        {featuredPost.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{featuredPost.author}</p>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{featuredPost.comments}</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-fit btn-glow">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`rounded-full glass-effect ${index === 0 ? "btn-glow" : "bg-transparent"} animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`overflow-hidden card-hover glass-effect border-gradient animate-scale-in group`}
                style={{ animationDelay: post.delay }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback className={`bg-gradient-to-br ${post.gradient} text-white text-xs font-bold`}>
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                    </div>

                    <Button size="sm" variant="ghost" className="btn-glow">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="glass-effect bg-transparent btn-glow">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Sidebar Section */}
      <section className="py-32 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="space-y-4 mb-12 animate-slide-up">
                <Badge variant="outline" className="glass-effect">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Latest Articles
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Recent Posts</h2>
              </div>
              <div className="space-y-8">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Card
                    key={index}
                    className={`card-hover glass-effect border-gradient animate-scale-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                      <div className="relative aspect-video md:aspect-square bg-muted rounded-xl overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-r ${post.gradient} animate-pulse`}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <div className="space-y-2">
                          <Badge variant="outline" className="glass-effect">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="btn-glow">
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
              <Card className="glass-effect border-gradient animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Trending Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors glass-effect"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5" />
                    <span>Newsletter</span>
                  </CardTitle>
                  <CardDescription>Get the latest articles delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Enter your email" className="glass-effect bg-transparent" />
                  <Button className="w-full btn-glow">Subscribe</Button>
                  <p className="text-xs text-muted-foreground text-center">Join 1,200+ other subscribers</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Popular Authors</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Sarah Chen", "Alex Kumar", "Maya Patel"].map((author, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold">
                            {author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{author}</p>
                          <p className="text-xs text-muted-foreground">{Math.floor(Math.random() * 10) + 5} articles</p>
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
