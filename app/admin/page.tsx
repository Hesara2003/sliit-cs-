"use client"

import type React from "react"

import { useState } from "react"
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
import { useAdminData } from "@/hooks/use-admin-data"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const { toast } = useToast();
  const {
    // Authentication
    isAuthenticated,
    isLoading,
    login,
    logout,
    
    // Data
    blogPosts,
    events,
    newsItems,
    formSubmissions,
    users,
    stats,
    
    // Actions
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    createEvent,
    deleteEvent,
    createNews,
    deleteNews
  } = useAdminData();

  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  
  // Dialog states
  const [blogDialogOpen, setBlogDialogOpen] = useState(false)
  const [eventDialogOpen, setEventDialogOpen] = useState(false)
  const [newsDialogOpen, setNewsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<any>(null)
  
  // Form states
  const [blogForm, setBlogForm] = useState({ title: '', content: '', author: '', status: 'draft' })
  const [eventForm, setEventForm] = useState({ title: '', date: '', type: '', attendees: 0 })
  const [newsForm, setNewsForm] = useState({ title: '', priority: 'Medium' })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(loginForm)
      setLoginForm({ username: "", password: "" })
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  // Blog post functions
  const handleCreateBlogPost = async () => {
    if (!blogForm.title || !blogForm.content || !blogForm.author) {
      return
    }
    
    try {
      if (editingItem) {
        // Update existing post
        await updateBlogPost(editingItem._id, {
          title: blogForm.title,
          content: blogForm.content,
          author: blogForm.author,
          status: blogForm.status
        })
      } else {
        // Create new post
        await createBlogPost({
          title: blogForm.title,
          content: blogForm.content,
          author: blogForm.author,
          status: blogForm.status
        })
      }
      setBlogForm({ title: '', content: '', author: '', status: 'draft' })
      setBlogDialogOpen(false)
      setEditingItem(null)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleEditBlogPost = (post: any) => {
    setBlogForm({
      title: post.title,
      author: typeof post.author === 'object' ? post.author.name : post.author,
      status: post.status,
      content: post.content || ''
    })
    setEditingItem(post)
    setBlogDialogOpen(true)
  }

  const handleDeleteBlogPost = async (postId: string) => {
    try {
      await deleteBlogPost(postId)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  // Event functions
  const handleCreateEvent = async () => {
    if (!eventForm.title || !eventForm.date || !eventForm.type) {
      return
    }
    
    try {
      await createEvent({
        title: eventForm.title,
        date: eventForm.date,
        type: eventForm.type,
        maxAttendees: eventForm.attendees > 0 ? eventForm.attendees : undefined
      })
      setEventForm({ title: '', date: '', type: '', attendees: 0 })
      setEventDialogOpen(false)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await deleteEvent(eventId)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  // News functions
  const handleCreateNews = async () => {
    if (!newsForm.title) {
      return
    }
    
    try {
      await createNews({
        title: newsForm.title,
        priority: newsForm.priority
      })
      setNewsForm({ title: '', priority: 'Medium' })
      setNewsDialogOpen(false)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  const handleDeleteNews = async (newsId: string) => {
    try {
      await deleteNews(newsId)
    } catch (error) {
      // Error is handled in the hook
    }
  }

  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen relative">
        {/* Global Grid Background */}
        <div className="fixed inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="fixed inset-0 bg-gradient-to-br from-background via-background/50 to-background pointer-events-none" />
        
        <Navbar />
        
        {/* Enhanced Login Section */}
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-md mx-auto animate-slide-up">
            <Card className="glass-effect border-gradient shadow-2xl shadow-primary/10 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center space-y-4 pb-8">
                <div className="relative mx-auto">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 p-4 shadow-lg shadow-primary/25">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl blur-xl animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Admin Portal
                </CardTitle>
                <CardDescription className="text-lg">
                  🔐 Secure access to SLIIT CS Hub dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-primary font-medium">👤 Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                      placeholder="Enter admin username"
                      className="glass-effect hover:scale-105 transition-all focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-primary font-medium">🔑 Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      placeholder="Enter secure password"
                      className="glass-effect hover:scale-105 transition-all focus:ring-primary/50"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-glow hover:scale-105 transition-all duration-300 group text-lg py-6">
                    <Users className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Access Dashboard
                  </Button>
                  <div className="bg-muted/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                    <p className="text-sm text-muted-foreground text-center">
                      💡 <span className="text-primary font-medium">Demo credentials:</span> admin / admin123
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx>{`
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          
          .glass-effect {
            backdrop-filter: blur(12px);
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .border-gradient {
            border-image: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;
          }
          
          .btn-glow {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background pointer-events-none" />
      
      <Navbar />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex justify-between items-center mb-12 animate-slide-up">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">🚀 Manage your SLIIT CS Hub community</p>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="glass-effect hover:scale-105 transition-all duration-300 group"
            disabled={isLoading}
          >
            <Users className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Logout
          </Button>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Total Members",
              value: stats?.overview.totalUsers || 0,
              change: `+${stats?.growth.users || 0}% from last month`,
              icon: Users,
              gradient: "from-blue-500 to-cyan-500",
              delay: "0s"
            },
            {
              title: "Active Events", 
              value: stats?.overview.upcomingEvents || events.length,
              change: "3 this week",
              icon: Calendar,
              gradient: "from-green-500 to-emerald-500",
              delay: "0.1s"
            },
            {
              title: "Blog Posts",
              value: stats?.overview.totalBlogPosts || blogPosts.length, 
              change: `${stats?.overview.draftBlogPosts || 0} pending review`,
              icon: FileText,
              gradient: "from-purple-500 to-pink-500",
              delay: "0.2s"
            },
            {
              title: "Form Submissions",
              value: formSubmissions.length,
              change: `${formSubmissions.filter(s => s.status === 'Unread').length} unread`, 
              icon: MessageSquare,
              gradient: "from-orange-500 to-red-500",
              delay: "0.3s"
            }
          ].map((stat, index) => (
            <Card 
              key={stat.title}
              className="glass-effect border-gradient hover:scale-105 transition-all duration-500 animate-scale-in group"
              style={{ animationDelay: stat.delay }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                  <stat.icon className="h-4 w-4 text-white group-hover:animate-pulse" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Main Content Tabs */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Tabs defaultValue="blog" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 glass-effect border-border/30 p-1 h-14">
              {[
                { value: "blog", label: "📝 Blog Posts" },
                { value: "events", label: "📅 Events" },
                { value: "news", label: "📢 News" },
                { value: "forms", label: "📋 Forms" },
                { value: "users", label: "👥 Users" }
              ].map((tab) => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value} 
                  className="text-sm font-medium hover:scale-105 transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

          <TabsContent value="blog">
            <Card className="glass-effect border-gradient hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      📝 Manage Blog Posts
                    </CardTitle>
                    <CardDescription className="text-lg">Create, edit, and manage blog content</CardDescription>
                  </div>
                  <Button 
                    onClick={() => setBlogDialogOpen(true)}
                    className="btn-glow hover:scale-105 transition-all duration-300 group"
                  >
                    <Plus className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    New Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts && blogPosts.length > 0 ? blogPosts.map((post, index) => (
                    <div 
                      key={post._id} 
                      className="flex items-center justify-between p-6 border border-border/30 rounded-xl glass-effect hover:scale-105 transition-all duration-300 animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          👤 By {typeof post.author === 'object' ? post.author.name : post.author} • 📅 {formatDate(post.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={post.status === "published" ? "default" : "secondary"}
                          className="glass-effect"
                        >
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => toast({ title: "View", description: `Viewing ${post.title}` })}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => handleEditBlogPost(post)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteBlogPost(post._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No blog posts found. Create your first post!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events">
            <Card className="glass-effect border-gradient hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                      📅 Manage Events
                    </CardTitle>
                    <CardDescription className="text-lg">Create and manage community events</CardDescription>
                  </div>
                  <Button 
                    onClick={() => setEventDialogOpen(true)}
                    className="btn-glow hover:scale-105 transition-all duration-300 group bg-gradient-to-r from-green-500 to-emerald-600"
                  >
                    <Plus className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    New Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events && events.length > 0 ? events.map((event, index) => (
                    <div 
                      key={event._id} 
                      className="flex items-center justify-between p-6 border border-border/30 rounded-xl glass-effect hover:scale-105 transition-all duration-300 animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-green-500 transition-colors">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          📅 {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })} • 👥 {event.attendees?.length || 0} registered
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="glass-effect">{event.type}</Badge>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => toast({ title: "Edit", description: `Editing ${event.title}` })}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteEvent(event._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No events found. Create your first event!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card className="glass-effect border-gradient hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                      📢 News & Announcements
                    </CardTitle>
                    <CardDescription className="text-lg">Manage community updates and notices</CardDescription>
                  </div>
                  <Button 
                    onClick={() => setNewsDialogOpen(true)}
                    className="btn-glow hover:scale-105 transition-all duration-300 group bg-gradient-to-r from-purple-500 to-pink-600"
                  >
                    <Plus className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    New Announcement
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsItems && newsItems.length > 0 ? newsItems.map((news, index) => (
                    <div 
                      key={news._id} 
                      className="flex items-center justify-between p-6 border border-border/30 rounded-xl glass-effect hover:scale-105 transition-all duration-300 animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors">{news.title}</h3>
                        <p className="text-sm text-muted-foreground">📅 {formatDate(news.createdAt)}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant={
                            news.priority === "High"
                              ? "destructive"
                              : news.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                          className="glass-effect"
                        >
                          {news.priority}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => toast({ title: "Edit", description: `Editing ${news.title}` })}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all text-red-500 hover:text-red-600"
                          onClick={() => handleDeleteNews(news._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No announcements found. Create your first announcement!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forms">
            <Card className="glass-effect border-gradient hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                      📋 Form Submissions
                    </CardTitle>
                    <CardDescription className="text-lg">View and manage form submissions</CardDescription>
                  </div>
                  <Badge variant="outline" className="glass-effect text-lg px-4 py-2">
                    {formSubmissions.filter(s => s.status === 'Unread').length} Unread
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formSubmissions && formSubmissions.length > 0 ? formSubmissions.map((submission, index) => (
                    <div 
                      key={submission._id} 
                      className="flex items-center justify-between p-6 border border-border/30 rounded-xl glass-effect hover:scale-105 transition-all duration-300 animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-orange-500 transition-colors">{submission.type}</h3>
                        <p className="text-sm text-muted-foreground">
                          👤 {submission.name} • 📧 {submission.email} • 📅 {formatDate(submission.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={submission.status === "Unread" ? "destructive" : "default"}
                          className="glass-effect"
                        >
                          {submission.status}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => toast({ title: "View", description: `Viewing ${submission.type} from ${submission.name}` })}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No form submissions found.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="glass-effect border-gradient hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      👥 User Management
                    </CardTitle>
                    <CardDescription className="text-lg">Manage user access and roles</CardDescription>
                  </div>
                  <Badge variant="outline" className="glass-effect text-lg px-4 py-2">
                    {users.length} Active Users
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user, index) => (
                    <div 
                      key={user._id} 
                      className="flex items-center justify-between p-6 border border-border/30 rounded-xl glass-effect hover:scale-105 transition-all duration-300 animate-scale-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-cyan-500 transition-colors">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">📧 {user.email}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline" className="glass-effect">{user.role}</Badge>
                        <Badge 
                          variant="default"
                          className="glass-effect"
                        >
                          Active
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="hover:scale-110 transition-all"
                          onClick={() => toast({ title: "Edit", description: `Editing user ${user.name}` })}
                        >
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
        </div>

        {/* Create Blog Post Dialog */}
        <Dialog open={blogDialogOpen} onOpenChange={setBlogDialogOpen}>
          <DialogContent className="sm:max-w-[600px] glass-effect border-gradient">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {editingItem ? '✏️ Edit Blog Post' : '📝 Create New Blog Post'}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="blog-title" className="text-primary font-medium">📝 Title</Label>
                <Input
                  id="blog-title"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  placeholder="Enter blog post title"
                  className="glass-effect hover:scale-105 transition-all focus:ring-primary/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-author" className="text-primary font-medium">👤 Author</Label>
                <Input
                  id="blog-author"
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                  placeholder="Enter author name"
                  className="glass-effect hover:scale-105 transition-all focus:ring-primary/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-content" className="text-primary font-medium">📄 Content</Label>
                <Textarea
                  id="blog-content"
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  placeholder="Write your blog post content here..."
                  rows={6}
                  className="glass-effect hover:scale-105 transition-all focus:ring-primary/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="blog-status" className="text-primary font-medium">📊 Status</Label>
                <Select value={blogForm.status} onValueChange={(value) => setBlogForm({ ...blogForm, status: value })}>
                  <SelectTrigger className="glass-effect hover:scale-105 transition-all">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border-border/30">
                    <SelectItem value="draft">📝 Draft</SelectItem>
                    <SelectItem value="review">👀 Review</SelectItem>
                    <SelectItem value="published">✅ Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setBlogDialogOpen(false)}
                className="glass-effect hover:scale-105 transition-all"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateBlogPost}
                className="btn-glow hover:scale-105 transition-all duration-300"
              >
                {editingItem ? 'Update' : 'Create'} Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create Event Dialog */}
        <Dialog open={eventDialogOpen} onOpenChange={setEventDialogOpen}>
          <DialogContent className="sm:max-w-[500px] glass-effect border-gradient">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                📅 Create New Event
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="event-title" className="text-green-600 font-medium">🎯 Title</Label>
                <Input
                  id="event-title"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                  placeholder="Enter event title"
                  className="glass-effect hover:scale-105 transition-all focus:ring-green-500/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-date" className="text-green-600 font-medium">📅 Date</Label>
                <Input
                  id="event-date"
                  type="date"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  className="glass-effect hover:scale-105 transition-all focus:ring-green-500/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-type" className="text-green-600 font-medium">🏷️ Type</Label>
                <Select value={eventForm.type} onValueChange={(value) => setEventForm({ ...eventForm, type: value })}>
                  <SelectTrigger className="glass-effect hover:scale-105 transition-all">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border-border/30">
                    <SelectItem value="Workshop">🛠️ Workshop</SelectItem>
                    <SelectItem value="Seminar">🎓 Seminar</SelectItem>
                    <SelectItem value="Competition">🏆 Competition</SelectItem>
                    <SelectItem value="Social">🎉 Social</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-attendees" className="text-green-600 font-medium">👥 Expected Attendees</Label>
                <Input
                  id="event-attendees"
                  type="number"
                  value={eventForm.attendees}
                  onChange={(e) => setEventForm({ ...eventForm, attendees: parseInt(e.target.value) || 0 })}
                  placeholder="0"
                  className="glass-effect hover:scale-105 transition-all focus:ring-green-500/50"
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setEventDialogOpen(false)}
                className="glass-effect hover:scale-105 transition-all"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateEvent}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition-all duration-300"
              >
                Create Event
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Create News Dialog */}
        <Dialog open={newsDialogOpen} onOpenChange={setNewsDialogOpen}>
          <DialogContent className="sm:max-w-[500px] glass-effect border-gradient">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                📢 Create New Announcement
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="news-title" className="text-purple-600 font-medium">📝 Title</Label>
                <Input
                  id="news-title"
                  value={newsForm.title}
                  onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                  placeholder="Enter announcement title"
                  className="glass-effect hover:scale-105 transition-all focus:ring-purple-500/50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="news-priority" className="text-purple-600 font-medium">⚡ Priority</Label>
                <Select value={newsForm.priority} onValueChange={(value) => setNewsForm({ ...newsForm, priority: value })}>
                  <SelectTrigger className="glass-effect hover:scale-105 transition-all">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border-border/30">
                    <SelectItem value="Low">🟢 Low</SelectItem>
                    <SelectItem value="Medium">🟡 Medium</SelectItem>
                    <SelectItem value="High">🔴 High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setNewsDialogOpen(false)}
                className="glass-effect hover:scale-105 transition-all"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCreateNews}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-105 transition-all duration-300"
              >
                Create Announcement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .glass-effect {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .border-gradient {
          border-image: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)) 1;
        }
        
        .btn-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  )
}
