"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  LogOut,
  User,
  Shield,
  BookOpen,
  Newspaper,
  UserCheck,
  BarChart3,
  Globe,
  Code2,
} from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
      badge: "1.2K",
    },
    {
      name: "Events",
      href: "/admin/events",
      icon: Calendar,
      badge: "8",
    },
    {
      name: "Blog Posts",
      href: "/admin/blog",
      icon: FileText,
      badge: "5",
    },
    {
      name: "News",
      href: "/admin/news",
      icon: Newspaper,
      badge: "3",
    },
    {
      name: "Clubs",
      href: "/admin/clubs",
      icon: UserCheck,
      badge: null,
    },
    {
      name: "Resources",
      href: "/admin/resources",
      icon: BookOpen,
      badge: "12",
    },
    {
      name: "Forms",
      href: "/admin/forms",
      icon: MessageSquare,
      badge: "24",
    },
    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
      badge: null,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      badge: null,
    },
  ]

  const NavLink = ({ item }: { item: (typeof navigation)[0] }) => {
    const isActive = pathname === item.href
    return (
      <Link
        href={item.href}
        className={`group relative flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
          isActive
            ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25"
            : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-muted/50 hover:to-muted/30 hover:scale-105"
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl" />
        )}
        <item.icon className={`relative h-5 w-5 ${isActive ? 'animate-pulse' : 'group-hover:scale-110'} transition-all`} />
        <span className="relative">{item.name}</span>
        {item.badge && (
          <Badge 
            variant={isActive ? "secondary" : "outline"} 
            className={`relative ml-auto text-xs ${
              isActive 
                ? "bg-white/20 text-white border-white/30" 
                : "glass-effect hover:scale-110"
            } transition-all`}
          >
            {item.badge}
          </Badge>
        )}
        {!isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </Link>
    )
  }

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-background via-background/95 to-background/90 border-r border-border/50 backdrop-blur-xl">
      {/* Enhanced Logo */}
      <div className="p-6 border-b border-border/30">
        <Link href="/admin/dashboard" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 blur-xl animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SLIIT CS Hub
            </span>
            <p className="text-xs text-muted-foreground font-medium">Admin Control Center</p>
          </div>
        </Link>
      </div>

      {/* Enhanced Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item, index) => (
          <div
            key={item.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <NavLink item={item} />
          </div>
        ))}
      </nav>

      {/* Enhanced User Info */}
      <div className="p-4 border-t border-border/30">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-border/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <Avatar className="h-10 w-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold">AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold group-hover:text-primary transition-colors">Admin User</p>
            <p className="text-xs text-muted-foreground">Super Admin ⚡</p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative">
      {/* Global Grid Background */}
      <div className="fixed inset-0" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="backdrop-blur-xl bg-background/80 border-r border-border/50">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72 backdrop-blur-xl bg-background/95">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="lg:pl-72 relative z-10">
        {/* Enhanced Top Header */}
        <header className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-border/30 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 px-4 shadow-lg shadow-black/5 sm:gap-x-6 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden glass-effect hover:scale-110 transition-all duration-300" 
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>

          <div className="h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent lg:hidden" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1 items-center max-w-md">
              <Search className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-muted-foreground pl-4" />
              <Input 
                placeholder="Search admin panel..." 
                className="pl-12 glass-effect border-border/30 focus:border-primary/50 focus:ring-primary/20 hover:scale-105 transition-all duration-300" 
              />
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button variant="ghost" size="icon" className="relative glass-effect hover:scale-110 transition-all duration-300 group">
                <Bell className="h-5 w-5 group-hover:animate-pulse" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500 animate-pulse">
                  3
                </Badge>
              </Button>

              <div className="hidden lg:block lg:h-8 lg:w-px lg:bg-gradient-to-b lg:from-transparent lg:via-border lg:to-transparent" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full glass-effect hover:scale-110 transition-all duration-300 group">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold">AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 glass-effect border-border/30 shadow-xl" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal p-4">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm font-semibold leading-none">Admin User</p>
                      <p className="text-xs leading-none text-muted-foreground">admin@sliitcshub.lk</p>
                      <Badge variant="outline" className="w-fit text-xs">Super Admin</Badge>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border/30" />
                  <DropdownMenuItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <User className="mr-3 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <Settings className="mr-3 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                    <Shield className="mr-3 h-4 w-4" />
                    <span>Security</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-border/30" />
                  <Link href="/">
                    <DropdownMenuItem className="hover:bg-muted/50 transition-colors cursor-pointer">
                      <Globe className="mr-3 h-4 w-4" />
                      <span>View Site</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator className="bg-border/30" />
                  <DropdownMenuItem className="text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer">
                    <LogOut className="mr-3 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Enhanced Page Content */}
        <main className="py-8 px-4 sm:px-6 lg:px-8 relative">
          <div className="animate-slide-up">
            {children}
          </div>
        </main>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .glass-effect {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}
