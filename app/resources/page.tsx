import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  FileText,
  Video,
  Code,
  Download,
  ExternalLink,
  Search,
  Filter,
  Star,
  Eye,
  Calendar,
  User,
  Github,
  Play,
  FileCode,
  Database,
} from "lucide-react"

export default function ResourcesPage() {
  const resourceCategories = [
    { name: "All Resources", count: 156, icon: BookOpen },
    { name: "📝 Course Notes", count: 45, icon: FileText },
    { name: "🎥 Video Lectures", count: 32, icon: Video },
    { name: "💻 Code Templates", count: 28, icon: Code },
    { name: "📁 Project Guides", count: 24, icon: FileCode },
    { name: "📚 Research Papers", count: 15, icon: FileText },
    { name: "🛠️ Tools & Software", count: 12, icon: Database },
  ]

  const featuredResources = [
    {
      title: "📊 Complete Data Structures & Algorithms Guide",
      description:
        "Comprehensive guide covering all major data structures and algorithms with Java implementations, complexity analysis, and SLIIT exam patterns.",
      type: "📄 PDF Guide",
      category: "💻 Computer Science",
      author: "Dr. Pradeep Kalansooriya",
      date: "Dec 2023",
      downloads: 1247,
      rating: 4.9,
      size: "15.2 MB",
      pages: 340,
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["Algorithms", "Data Structures", "Java", "Interview Prep"],
    },
    {
      title: "⚛️ React.js Complete Course Series",
      description:
        "Full-stack React development course with hooks, context, routing, and integration with Node.js backend - perfect for SLIIT students.",
      type: "🎥 Video Series",
      category: "🌐 Web Development",
      author: "Senior SLIIT Alumni",
      date: "Jan 2024",
      downloads: 892,
      rating: 4.8,
      duration: "12 hours",
      videos: 45,
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-green-500 to-emerald-500",
      tags: ["React", "JavaScript", "Frontend", "Full Stack"],
    },
    {
      title: "🤖 Machine Learning Project Starter Kit",
      description:
        "Complete project template with data preprocessing, model training, and deployment scripts using Python and scikit-learn.",
      type: "💻 Code Template",
      category: "🧠 Machine Learning",
      author: "CS Research Team",
      date: "Dec 2023",
      downloads: 634,
      rating: 4.7,
      size: "8.5 MB",
      files: 25,
      image: "/placeholder.svg?height=200&width=300",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Python", "ML", "Scikit-learn", "Template"],
    },
  ]

  const courseNotes = [
    {
      title: "☕ Object-Oriented Programming (Java)",
      subject: "CS2040",
      semester: "Year 2 Semester 1",
      author: "Nimasha Perera (Y4)",
      downloads: 456,
      rating: 4.6,
      size: "5.2 MB",
      lastUpdated: "Jan 2024",
    },
    {
      title: "🗄️ Database Management Systems",
      subject: "CS3050",
      semester: "Year 3 Semester 1",
      author: "Sahan Wickramasinghe (Y4)",
      downloads: 389,
      rating: 4.8,
      size: "7.8 MB",
      lastUpdated: "Dec 2023",
    },
    {
      title: "🌐 Computer Networks & Security",
      subject: "CS3060",
      semester: "Year 3 Semester 2",
      author: "Tharindu Silva (Y3)",
      downloads: 312,
      rating: 4.5,
      size: "6.1 MB",
      lastUpdated: "Dec 2023",
    },
    {
      title: "⚙️ Software Engineering Principles",
      subject: "CS2050",
      semester: "Year 2 Semester 2",
      author: "Kavindi Fernando (Y2)",
      downloads: 278,
      rating: 4.7,
      size: "4.9 MB",
      lastUpdated: "Nov 2023",
    },
  ]

  const videoLectures = [
    {
      title: "Introduction to Machine Learning",
      instructor: "Dr. Rajesh Gupta",
      duration: "1h 45m",
      views: 2341,
      rating: 4.9,
      thumbnail: "/placeholder.svg?height=120&width=200",
      topics: ["ML Basics", "Supervised Learning", "Python"],
    },
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      duration: "2h 15m",
      views: 1876,
      rating: 4.8,
      thumbnail: "/placeholder.svg?height=120&width=200",
      topics: ["React", "Hooks", "Context", "Performance"],
    },
    {
      title: "Cybersecurity Fundamentals",
      instructor: "Maya Patel",
      duration: "1h 30m",
      views: 1654,
      rating: 4.7,
      thumbnail: "/placeholder.svg?height=120&width=200",
      topics: ["Security", "Encryption", "Network Security"],
    },
    {
      title: "Mobile App Development with Flutter",
      instructor: "Alex Kumar",
      duration: "3h 20m",
      views: 1432,
      rating: 4.6,
      thumbnail: "/placeholder.svg?height=120&width=200",
      topics: ["Flutter", "Dart", "Mobile", "Cross-platform"],
    },
  ]

  const codeTemplates = [
    {
      title: "REST API Boilerplate (Node.js)",
      description: "Complete Express.js API template with authentication, validation, and database integration.",
      language: "JavaScript",
      framework: "Express.js",
      downloads: 567,
      stars: 89,
      lastUpdated: "Jan 2024",
      author: "David Silva",
    },
    {
      title: "React Component Library",
      description: "Reusable React components with TypeScript, Storybook, and comprehensive testing setup.",
      language: "TypeScript",
      framework: "React",
      downloads: 423,
      stars: 76,
      lastUpdated: "Dec 2023",
      author: "Sarah Chen",
    },
    {
      title: "Python Data Analysis Template",
      description: "Jupyter notebook template for data analysis with pandas, matplotlib, and seaborn.",
      language: "Python",
      framework: "Jupyter",
      downloads: 389,
      stars: 65,
      lastUpdated: "Dec 2023",
      author: "Priya Sharma",
    },
    {
      title: "Flutter App Starter",
      description: "Complete Flutter app template with navigation, state management, and API integration.",
      language: "Dart",
      framework: "Flutter",
      downloads: 298,
      stars: 54,
      lastUpdated: "Nov 2023",
      author: "Alex Kumar",
    },
  ]

  const tools = [
    {
      name: "VS Code Extensions Pack",
      description: "Curated collection of essential VS Code extensions for CS students.",
      category: "Development Tools",
      downloads: 1234,
      rating: 4.8,
      type: "Extension Pack",
    },
    {
      name: "Git Workflow Templates",
      description: "Pre-configured Git workflows and templates for different project types.",
      category: "Version Control",
      downloads: 876,
      rating: 4.7,
      type: "Templates",
    },
    {
      name: "Database Design Tools",
      description: "Collection of database design and modeling tools with tutorials.",
      category: "Database",
      downloads: 654,
      rating: 4.6,
      type: "Software Bundle",
    },
    {
      name: "API Testing Collection",
      description: "Postman collections for testing common API patterns and endpoints.",
      category: "Testing",
      downloads: 543,
      rating: 4.5,
      type: "Postman Collection",
    },
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
          <div className="text-center space-y-10 max-w-4xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform duration-300 animate-bounce-slow">
              <BookOpen className="h-3 w-3 mr-1 animate-pulse" />
              📚 SLIIT CS Resource Library
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Your Ultimate 
              <span className="tech-gradient-text animate-pulse-slow"> Learning Arsenal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Access a comprehensive collection of study materials, code templates, video lectures, and tools 
              curated by our brilliant SLIIT CS community to accelerate your learning journey
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative pt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl blur-xl animate-pulse-slow" />
              <div className="relative glass-effect rounded-2xl p-3 border-gradient">
                <div className="flex items-center space-x-4">
                  <Search className="h-5 w-5 text-muted-foreground ml-2 animate-pulse" />
                  <Input
                    placeholder="Search resources, topics, or authors..."
                    className="border-0 bg-transparent text-lg placeholder:text-muted-foreground/70 focus-visible:ring-0"
                  />
                  <Button className="btn-glow hover:scale-105 transition-all group">
                    <span>Search</span>
                    <Search className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Resource Categories */}
      <section className="py-12 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="text-center glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4">
                  <category.icon className="h-8 w-8 mx-auto text-primary mb-2 group-hover:animate-bounce" />
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Resources */}
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
            <h2 className="text-4xl font-bold gradient-text">⭐ Featured Resources</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-3 bg-gradient-to-r ${resource.gradient} relative`}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="glass-effect">{resource.type}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs glass-effect hover:scale-105 transition-transform cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>👤 {resource.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>📅 {resource.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>📥 {resource.downloads} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>📄 {resource.size || resource.duration}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 btn-glow hover:scale-105 transition-all group/btn">
                      <Download className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon" className="glass-effect hover:scale-110 transition-all">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Resource Tabs */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Tabs defaultValue="notes" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 glass-effect">
              <TabsTrigger value="notes" className="hover:scale-105 transition-all">📝 Course Notes</TabsTrigger>
              <TabsTrigger value="videos" className="hover:scale-105 transition-all">🎥 Video Lectures</TabsTrigger>
              <TabsTrigger value="code" className="hover:scale-105 transition-all">💻 Code Templates</TabsTrigger>
              <TabsTrigger value="tools" className="hover:scale-105 transition-all">🛠️ Tools & Software</TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold gradient-text">📚 Course Notes & Study Materials</h3>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-primary animate-pulse" />
                  <Button variant="outline" size="sm" className="glass-effect hover:scale-105 transition-all">
                    Filter by Subject
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseNotes.map((note, index) => (
                  <Card key={index} className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">{note.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="glass-effect">{note.subject}</Badge>
                            <span className="text-sm text-muted-foreground">🎓 {note.semester}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 animate-pulse" />
                          <span className="text-sm font-medium">{note.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>👤 {note.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span>📥 {note.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>📄 {note.size}</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-primary transition-colors cursor-pointer">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>📅 {note.lastUpdated}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 btn-glow hover:scale-105 transition-all group/btn">
                          <Download className="mr-2 h-3 w-3 group-hover/btn:animate-bounce" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline" className="glass-effect hover:scale-105 transition-all">
                          <Eye className="mr-2 h-3 w-3" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold gradient-text">🎥 Video Lectures & Tutorials</h3>
                <Button variant="outline" size="sm" className="glass-effect hover:scale-105 transition-all">
                  <Filter className="mr-2 h-4 w-4 text-primary animate-pulse" />
                  Filter by Topic
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoLectures.map((video, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video bg-muted">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button size="icon" className="rounded-full">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">by {video.instructor}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{video.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{video.views} views</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {video.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="code" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold gradient-text">💻 Code Templates & Boilerplates</h3>
                <Button variant="outline" size="sm" className="glass-effect hover:scale-105 transition-all">
                  <Github className="mr-2 h-4 w-4 text-primary animate-pulse" />
                  View on GitHub
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {codeTemplates.map((template, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{template.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{template.language}</Badge>
                            <Badge variant="secondary">{template.framework}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span className="text-sm">{template.stars}</span>
                        </div>
                      </div>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>{template.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span>{template.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{template.lastUpdated}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-muted-foreground" />
                          <span>{template.language}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Github className="mr-2 h-3 w-3" />
                          GitHub
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold gradient-text">🛠️ Development Tools & Software</h3>
                <Button variant="outline" size="sm" className="glass-effect hover:scale-105 transition-all">
                  <Filter className="mr-2 h-4 w-4 text-primary animate-pulse" />
                  Filter by Category
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{tool.category}</Badge>
                            <Badge variant="secondary">{tool.type}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{tool.rating}</span>
                        </div>
                      </div>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span>{tool.downloads} downloads</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Contribution Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">🤝 Contribute to Our Knowledge Base</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">Help grow our amazing SLIIT CS community knowledge base</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: FileText,
                title: "📝 Share Notes",
                desc: "Upload your course notes and study materials to help fellow SLIIT students excel in their studies.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0s"
              },
              {
                icon: Code,
                title: "💻 Submit Code",
                desc: "Share your project templates and code snippets with the community to accelerate learning.",
                gradient: "from-green-500 to-emerald-500",
                delay: "0.1s"
              },
              {
                icon: Video,
                title: "🎥 Create Tutorials",
                desc: "Record video tutorials and share your knowledge to inspire and educate fellow students.",
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
                    Contribute Now
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
