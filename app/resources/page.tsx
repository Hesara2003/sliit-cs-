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
    { name: "Course Notes", count: 45, icon: FileText },
    { name: "Video Lectures", count: 32, icon: Video },
    { name: "Code Templates", count: 28, icon: Code },
    { name: "Project Guides", count: 24, icon: FileCode },
    { name: "Research Papers", count: 15, icon: FileText },
    { name: "Tools & Software", count: 12, icon: Database },
  ]

  const featuredResources = [
    {
      title: "Complete Data Structures & Algorithms Guide",
      description:
        "Comprehensive guide covering all major data structures and algorithms with Java implementations and complexity analysis.",
      type: "PDF Guide",
      category: "Computer Science",
      author: "Dr. Rajesh Gupta",
      date: "Dec 2023",
      downloads: 1247,
      rating: 4.9,
      size: "15.2 MB",
      pages: 340,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Algorithms", "Data Structures", "Java", "Interview Prep"],
    },
    {
      title: "React.js Complete Course Series",
      description:
        "Full-stack React development course with hooks, context, routing, and integration with Node.js backend.",
      type: "Video Series",
      category: "Web Development",
      author: "Sarah Chen",
      date: "Jan 2024",
      downloads: 892,
      rating: 4.8,
      duration: "12 hours",
      videos: 45,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "JavaScript", "Frontend", "Full Stack"],
    },
    {
      title: "Machine Learning Project Starter Kit",
      description:
        "Complete project template with data preprocessing, model training, and deployment scripts using Python and scikit-learn.",
      type: "Code Template",
      category: "Machine Learning",
      author: "Alex Kumar",
      date: "Dec 2023",
      downloads: 634,
      rating: 4.7,
      size: "8.5 MB",
      files: 25,
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Python", "ML", "Scikit-learn", "Template"],
    },
  ]

  const courseNotes = [
    {
      title: "Object-Oriented Programming (Java)",
      subject: "CS2040",
      semester: "Year 2 Semester 1",
      author: "Maya Patel",
      downloads: 456,
      rating: 4.6,
      size: "5.2 MB",
      lastUpdated: "Jan 2024",
    },
    {
      title: "Database Management Systems",
      subject: "CS3050",
      semester: "Year 3 Semester 1",
      author: "David Silva",
      downloads: 389,
      rating: 4.8,
      size: "7.8 MB",
      lastUpdated: "Dec 2023",
    },
    {
      title: "Computer Networks & Security",
      subject: "CS3060",
      semester: "Year 3 Semester 2",
      author: "Priya Sharma",
      downloads: 312,
      rating: 4.5,
      size: "6.1 MB",
      lastUpdated: "Dec 2023",
    },
    {
      title: "Software Engineering Principles",
      subject: "CS2050",
      semester: "Year 2 Semester 2",
      author: "Ravi Mendis",
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
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-50/50 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Learning Resources</h1>
            <p className="text-xl text-muted-foreground">
              Access a comprehensive collection of study materials, code templates, video lectures, and tools curated by
              our community
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Search resources, topics, or authors..." className="pl-12 h-12 text-lg" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <category.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-12">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured Resources</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-video bg-muted">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{resource.type}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.downloads} downloads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{resource.size || resource.duration}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="notes" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="notes">Course Notes</TabsTrigger>
              <TabsTrigger value="videos">Video Lectures</TabsTrigger>
              <TabsTrigger value="code">Code Templates</TabsTrigger>
              <TabsTrigger value="tools">Tools & Software</TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Course Notes & Study Materials</h3>
                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <Button variant="outline" size="sm">
                    Filter by Subject
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courseNotes.map((note, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{note.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{note.subject}</Badge>
                            <span className="text-sm text-muted-foreground">{note.semester}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{note.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>{note.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          <span>{note.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{note.size}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{note.lastUpdated}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-3 w-3" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
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
                <h3 className="text-2xl font-bold">Video Lectures & Tutorials</h3>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
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
                <h3 className="text-2xl font-bold">Code Templates & Boilerplates</h3>
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
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
                <h3 className="text-2xl font-bold">Development Tools & Software</h3>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
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

      {/* Contribution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Contribute Resources</h2>
            <p className="text-xl text-muted-foreground">Help grow our community knowledge base</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Share Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Upload your course notes and study materials to help fellow students.
                </p>
                <Button variant="outline">Upload Notes</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Submit Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your project templates and code snippets with the community.
                </p>
                <Button variant="outline">Submit Code</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-primary mb-4" />
                <CardTitle>Create Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Record video tutorials and share your knowledge with others.
                </p>
                <Button variant="outline">Create Tutorial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
