"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, FileText, MessageSquare, Plus, Edit, Trash2, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BlogPost {
  id: string
  title: string
  author: string
  status: 'Published' | 'Draft' | 'Review'
  date: string
}

interface Event {
  id: string
  title: string
  date: string
  type: string
  attendees: number
}

interface NewsItem {
  id: string
  title: string
  date: string
  priority: 'High' | 'Medium' | 'Low'
}

interface FormSubmission {
  id: string
  type: string
  name: string
  email: string
  date: string
  status: 'Unread' | 'Processed' | 'Confirmed'
}

interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Member'
  status: 'Active' | 'Inactive'
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  const [stats, setStats] = useState({
    totalMembers: 524,
    activeEvents: 8,
    blogPosts: 42,
    formSubmissions: 18
  })
  
  // Dialog states
  const [blogDialogOpen, setBlogDialogOpen] = useState(false)
  const [eventDialogOpen, setEventDialogOpen] = useState(false)
  const [newsDialogOpen, setNewsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  // Form states
  const [blogForm, setBlogForm] = useState({ title: '', content: '', author: '', status: 'Draft' })
  const [eventForm, setEventForm] = useState({ title: '', date: '', type: '', attendees: 0 })
  const [newsForm, setNewsForm] = useState({ title: '', priority: 'Medium' })
  
  // Data states
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    { id: '1', title: "Getting Started with React Hooks", author: "Sarah Chen", status: "Published", date: "Jan 10, 2024" },
    { id: '2', title: "Machine Learning in Web Development", author: "Alex Kumar", status: "Draft", date: "Jan 8, 2024" },
    { id: '3', title: "Cybersecurity Best Practices", author: "Maya Patel", status: "Review", date: "Jan 5, 2024" },
  ])
  
  const [events, setEvents] = useState<Event[]>([
    { id: '1', title: "AI Workshop Series", date: "Jan 15, 2024", type: "Workshop", attendees: 45 },
    { id: '2', title: "Hackathon 2024", date: "Jan 20-21, 2024", type: "Competition", attendees: 120 },
    { id: '3', title: "Industry Talk: Cybersecurity", date: "Jan 25, 2024", type: "Seminar", attendees: 80 },
  ])
  
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    { id: '1', title: "New AI Club Formation", date: "Jan 12, 2024", priority: "High" },
    { id: '2', title: "Semester Break Schedule", date: "Jan 10, 2024", priority: "Medium" },
    { id: '3', title: "Resource Library Update", date: "Jan 8, 2024", priority: "Low" },
  ])
  
  const [formSubmissions] = useState<FormSubmission[]>([
    { id: '1', type: "Contact Form", name: "John Doe", email: "john@example.com", date: "Jan 12, 2024", status: "Unread" },
    { id: '2', type: "Join Request", name: "Jane Smith", email: "jane@example.com", date: "Jan 11, 2024", status: "Processed" },
    { id: '3', type: "Event Registration", name: "Mike Johnson", email: "mike@example.com", date: "Jan 10, 2024", status: "Confirmed" },
  ])
  
  const [users] = useState<User[]>([
    { id: '1', name: "Alex Chen", email: "alex@sliitcshub.lk", role: "Admin", status: "Active" },
    { id: '2', name: "Sarah Kumar", email: "sarah@sliitcshub.lk", role: "Editor", status: "Active" },
    { id: '3', name: "David Silva", email: "david@sliitcshub.lk", role: "Member", status: "Active" },
  ])

  const { toast } = useToast()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication simulation
    if (loginForm.username === "admin" && loginForm.password === "admin123") {
      setIsAuthenticated(true)
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try admin/admin123",
        variant: "destructive",
      })
    }
  }

  // Blog post functions
  const handleCreateBlogPost = () => {
    if (!blogForm.title || !blogForm.content || !blogForm.author) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }
    
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: blogForm.title,
      author: blogForm.author,
      status: blogForm.status as 'Published' | 'Draft' | 'Review',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    
    setBlogPosts([newPost, ...blogPosts])
    setBlogForm({ title: '', content: '', author: '', status: 'Draft' })
    setBlogDialogOpen(false)
    
    toast({
      title: "Success",
      description: "Blog post created successfully!",
    })
  }

  const handleEditBlogPost = (post: BlogPost) => {
    setBlogForm({
      title: post.title,
      author: post.author,
      status: post.status,
      content: ''
    })
    setEditingItem(post)
    setBlogDialogOpen(true)
  }

  const handleDeleteBlogPost = (postId: string) => {
    setBlogPosts(blogPosts.filter(post => post.id !== postId))
    toast({
      title: "Success",
      description: "Blog post deleted successfully!",
    })
  }

  // Event functions
  const handleCreateEvent = () => {
    if (!eventForm.title || !eventForm.date || !eventForm.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }
    
    const newEvent: Event = {
      id: Date.now().toString(),
      title: eventForm.title,
      date: eventForm.date,
      type: eventForm.type,
      attendees: eventForm.attendees || 0
    }
    
    setEvents([newEvent, ...events])
    setEventForm({ title: '', date: '', type: '', attendees: 0 })
    setEventDialogOpen(false)
    
    toast({
      title: "Success",
      description: "Event created successfully!",
    })
  }

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(event => event.id !== eventId))
    toast({
      title: "Success",
      description: "Event deleted successfully!",
    })
  }

  // News functions
  const handleCreateNews = () => {
    if (!newsForm.title) {
      toast({
        title: "Error",
        description: "Please enter a title",
        variant: "destructive",
      })
      return
    }
    
    const newNews: NewsItem = {
      id: Date.now().toString(),
      title: newsForm.title,
      priority: newsForm.priority as 'High' | 'Medium' | 'Low',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }
    
    setNewsItems([newNews, ...newsItems])
    setNewsForm({ title: '', priority: 'Medium' })
    setNewsDialogOpen(false)
    
    toast({
      title: "Success",
      description: "News item created successfully!",
    })
  }

  const handleDeleteNews = (newsId: string) => {
    setNewsItems(newsItems.filter(news => news.id !== newsId))
    toast({
      title: "Success",
      description: "News item deleted successfully!",
    })
  }

  // Load data on mount (simulate API calls)
  useEffect(() => {
    // Simulate loading data from API
    setStats({
      totalMembers: blogPosts.length + events.length + newsItems.length + 500,
      activeEvents: events.length,
      blogPosts: blogPosts.length,
      formSubmissions: formSubmissions.length
    })
  }, [blogPosts, events, newsItems, formSubmissions])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Admin Login</CardTitle>
                <CardDescription>Access the admin dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      placeholder="Enter password"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">Demo credentials: admin / admin123</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your SLIIT CS Hub community</p>
          </div>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalMembers}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeEvents}</div>
              <p className="text-xs text-muted-foreground">3 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blogPosts}</div>
              <p className="text-xs text-muted-foreground">5 pending review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Form Submissions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.formSubmissions}</div>
              <p className="text-xs text-muted-foreground">12 unread</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="blog" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manage Blog Posts</CardTitle>
                    <CardDescription>Create, edit, and manage blog content</CardDescription>
                  </div>
                  <Button onClick={() => setBlogDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          By {post.author} • {post.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={post.status === "Published" ? "default" : "secondary"}>{post.status}</Badge>
                        <Button size="sm" variant="ghost" onClick={() => toast({ title: "View", description: `Viewing ${post.title}` })}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleEditBlogPost(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteBlogPost(post.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manage Events</CardTitle>
                    <CardDescription>Create and manage community events</CardDescription>
                  </div>
                  <Button onClick={() => setEventDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {event.date} • {event.attendees} registered
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{event.type}</Badge>
                        <Button size="sm" variant="ghost" onClick={() => toast({ title: "Edit", description: `Editing ${event.title}` })}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteEvent(event.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>News & Announcements</CardTitle>
                    <CardDescription>Manage community updates and notices</CardDescription>
                  </div>
                  <Button onClick={() => setNewsDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Announcement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsItems.map((news) => (
                    <div key={news.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{news.title}</h3>
                        <p className="text-sm text-muted-foreground">{news.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            news.priority === "High"
                              ? "destructive"
                              : news.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {news.priority}
                        </Badge>
                        <Button size="sm" variant="ghost" onClick={() => toast({ title: "Edit", description: `Editing ${news.title}` })}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteNews(news.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms">
            <Card>
              <CardHeader>
                <CardTitle>Form Submissions</CardTitle>
                <CardDescription>View and manage form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formSubmissions.map((submission) => (
                    <div key={submission.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{submission.type}</h3>
                        <p className="text-sm text-muted-foreground">
                          {submission.name} • {submission.email} • {submission.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={submission.status === "Unread" ? "destructive" : "default"}>
                          {submission.status}
                        </Badge>
                        <Button size="sm" variant="ghost" onClick={() => toast({ title: "View", description: `Viewing ${submission.type} from ${submission.name}` })}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user access and roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{user.role}</Badge>
                        <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                        <Button size="sm" variant="ghost" onClick={() => toast({ title: "Edit", description: `Editing user ${user.name}` })}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Create Blog Post Dialog */}
        <Dialog open={blogDialogOpen} onOpenChange={setBlogDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{editingItem ? 'Edit Blog Post' : 'Create New Blog Post'}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="blog-title">Title</Label>
                <Input
                  id="blog-title"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="Enter blog post title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-author">Author</Label>
                <Input
                  id="blog-author"
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                  placeholder="Enter author name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-content">Content</Label>
                <Textarea
                  id="blog-content"
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="Write your blog post content here..."
                  rows={6}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-status">Status</Label>
                <Select value={blogForm.status} onValueChange={(value) => setBlogForm({ ...blogForm, status: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Draft">Draft</SelectItem>
                    <SelectItem value="Review">Review</SelectItem>
                    <SelectItem value="Published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setBlogDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateBlogPost}>
                {editingItem ? 'Update' : 'Create'} Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create Event Dialog */}
        <Dialog open={eventDialogOpen} onOpenChange={setEventDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="event-title">Title</Label>
                <Input
                  id="event-title"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="Enter event title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-date">Date</Label>
                <Input
                  id="event-date"
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-type">Type</Label>
                <Select value={eventForm.type} onValueChange={(value) => setEventForm({ ...eventForm, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Seminar">Seminar</SelectItem>
                    <SelectItem value="Competition">Competition</SelectItem>
                    <SelectItem value="Social">Social</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-attendees">Expected Attendees</Label>
                <Input
                  id="event-attendees"
                  type="number"
                  value={eventForm.attendees}
                  onChange={(e) => setEventForm({ ...eventForm, attendees: parseInt(e.target.value) || 0 })}
                  placeholder="0"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEventDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEvent}>
                Create Event
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create News Dialog */}
        <Dialog open={newsDialogOpen} onOpenChange={setNewsDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Announcement</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="news-title">Title</Label>
                <Input
                  id="news-title"
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="Enter announcement title"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="news-priority">Priority</Label>
                <Select value={newsForm.priority} onValueChange={(value) => setNewsForm({ ...newsForm, priority: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setNewsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateNews}>
                Create Announcement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
