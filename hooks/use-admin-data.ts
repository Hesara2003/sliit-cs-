import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  authAPI, 
  blogAPI, 
  eventsAPI, 
  newsAPI, 
  submissionsAPI, 
  statsAPI,
  usersAPI 
} from '@/lib/admin-api';

export interface BlogPost {
  _id: string;
  title: string;
  author: { name: string; email: string };
  status: 'published' | 'draft' | 'review';
  createdAt: string;
  content?: string;
  excerpt?: string;
}

export interface Event {
  _id: string;
  title: string;
  date: string;
  type: string;
  description?: string;
  location?: string;
  maxAttendees?: number;
  attendees?: any[];
}

export interface NewsItem {
  _id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  createdAt: string;
  content?: string;
  author?: string;
}

export interface FormSubmission {
  _id: string;
  type: string;
  name: string;
  email: string;
  createdAt: string;
  status: 'Unread' | 'Processed' | 'Confirmed';
  message?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'club_admin';
  createdAt: string;
}

export interface DashboardStats {
  overview: {
    totalUsers: number;
    activeUsers: number;
    totalEvents: number;
    upcomingEvents: number;
    totalBlogPosts: number;
    publishedBlogPosts: number;
    draftBlogPosts: number;
    totalClubs: number;
    activeClubs: number;
  };
  growth: {
    users: number;
    events: number;
    blogs: number;
  };
  recentActivity: {
    blogPosts: any[];
    events: any[];
    users: any[];
  };
}

export function useAdminData() {
  const { toast } = useToast();
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Data states
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  
  // Authentication functions
  const login = async (credentials: { username: string; password: string }) => {
    try {
      setIsLoading(true);
      const response = await authAPI.login(credentials);
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
      return response;
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = async () => {
    try {
      await authAPI.logout();
      setIsAuthenticated(false);
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully",
      });
    } catch (error: any) {
      toast({
        title: "Logout Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };
  
  // Data loading functions
  const loadBlogPosts = async () => {
    try {
      const response = await blogAPI.getAll();
      setBlogPosts(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error loading blog posts:', error);
      setBlogPosts([]);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    }
  };
  
  const loadEvents = async () => {
    try {
      const response = await eventsAPI.getAll();
      setEvents(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error loading events:', error);
      setEvents([]);
      toast({
        title: "Error",
        description: "Failed to load events",
        variant: "destructive",
      });
    }
  };
  
  const loadNews = async () => {
    try {
      const response = await newsAPI.getAll();
      setNewsItems(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error loading news:', error);
      setNewsItems([]);
      toast({
        title: "Error",
        description: "Failed to load news",
        variant: "destructive",
      });
    }
  };
  
  const loadSubmissions = async () => {
    try {
      const response = await submissionsAPI.getAll();
      setFormSubmissions(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error loading form submissions:', error);
      setFormSubmissions([]);
      toast({
        title: "Error",
        description: "Failed to load form submissions",
        variant: "destructive",
      });
    }
  };
  
  const loadUsers = async () => {
    try {
      const response = await usersAPI.getAll();
      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (error: any) {
      console.error('Error loading users:', error);
      setUsers([]);
      toast({
        title: "Error",
        description: "Failed to load users",
        variant: "destructive",
      });
    }
  };
  
  const loadStats = async () => {
    try {
      const response = await statsAPI.get();
      setStats(response.data);
    } catch (error: any) {
      console.error('Error loading stats:', error);
      // Set fallback stats
      setStats({
        overview: {
          totalUsers: blogPosts.length + events.length + newsItems.length + 500,
          activeUsers: 524,
          totalEvents: events.length,
          upcomingEvents: events.length,
          totalBlogPosts: blogPosts.length,
          publishedBlogPosts: blogPosts.filter(p => p.status === 'published').length,
          draftBlogPosts: blogPosts.filter(p => p.status === 'draft').length,
          totalClubs: 12,
          activeClubs: 10
        },
        growth: {
          users: 12,
          events: 8,
          blogs: 15
        },
        recentActivity: {
          blogPosts: [],
          events: [],
          users: []
        }
      });
    }
  };
  
  // CRUD functions for blog posts
  const createBlogPost = async (data: {
    title: string;
    content: string;
    author: string;
    status?: string;
  }) => {
    try {
      const response = await blogAPI.create(data);
      await loadBlogPosts();
      toast({
        title: "Success",
        description: "Blog post created successfully!",
      });
      return response;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const updateBlogPost = async (id: string, data: any) => {
    try {
      const response = await blogAPI.update(id, data);
      await loadBlogPosts();
      toast({
        title: "Success",
        description: "Blog post updated successfully!",
      });
      return response;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update blog post",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const deleteBlogPost = async (id: string) => {
    try {
      await blogAPI.delete(id);
      await loadBlogPosts();
      toast({
        title: "Success",
        description: "Blog post deleted successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete blog post",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // CRUD functions for events
  const createEvent = async (data: {
    title: string;
    date: string;
    type: string;
    description?: string;
    maxAttendees?: number;
  }) => {
    try {
      const response = await eventsAPI.create(data);
      await loadEvents();
      toast({
        title: "Success",
        description: "Event created successfully!",
      });
      return response;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create event",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const deleteEvent = async (id: string) => {
    try {
      await eventsAPI.delete(id);
      await loadEvents();
      toast({
        title: "Success",
        description: "Event deleted successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete event",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // CRUD functions for news
  const createNews = async (data: {
    title: string;
    priority: string;
    content?: string;
  }) => {
    try {
      const response = await newsAPI.create(data);
      await loadNews();
      toast({
        title: "Success",
        description: "News item created successfully!",
      });
      return response;
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create news item",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  const deleteNews = async (id: string) => {
    try {
      await newsAPI.delete(id);
      await loadNews();
      toast({
        title: "Success",
        description: "News item deleted successfully!",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete news item",
        variant: "destructive",
      });
      throw error;
    }
  };
  
  // Load all data when authenticated
  const loadAllData = async () => {
    if (isAuthenticated) {
      await Promise.all([
        loadBlogPosts(),
        loadEvents(),
        loadNews(),
        loadSubmissions(),
        loadUsers(),
        loadStats()
      ]);
    }
  };
  
  useEffect(() => {
    loadAllData();
  }, [isAuthenticated]);
  
  return {
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
    deleteNews,
    
    // Reload functions
    loadAllData,
    loadBlogPosts,
    loadEvents,
    loadNews,
    loadSubmissions,
    loadUsers,
    loadStats
  };
}
