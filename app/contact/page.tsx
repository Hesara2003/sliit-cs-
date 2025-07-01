"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    })
    setFormData({ name: "", email: "", subject: "", category: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
              <MessageSquare className="h-3 w-3 mr-1 animate-pulse" />
              💬 Connect with SLIIT CS Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Let's Start a 
              <span className="tech-gradient-text animate-pulse-slow"> Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Have questions, brilliant ideas, or want to get involved with our amazing SLIIT CS community? 
              We'd absolutely love to hear from you and help make your tech journey extraordinary!
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form and Info */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">💌 Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you faster than you can say "Hello World!" 🚀
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-primary font-medium">👤 Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your awesome name"
                          className="glass-effect hover:scale-105 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-primary font-medium">📧 Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@sliit.lk"
                          className="glass-effect hover:scale-105 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="subject" className="text-primary font-medium">📝 Subject *</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="What's on your mind?"
                          className="glass-effect hover:scale-105 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="category" className="text-primary font-medium">🏷️ Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger className="glass-effect hover:scale-105 transition-all">
                            <SelectValue placeholder="Choose a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">💬 General Inquiry</SelectItem>
                            <SelectItem value="membership">👥 Membership</SelectItem>
                            <SelectItem value="events">📅 Events & Workshops</SelectItem>
                            <SelectItem value="collaboration">🤝 Collaboration</SelectItem>
                            <SelectItem value="technical">🛠️ Technical Support</SelectItem>
                            <SelectItem value="feedback">⭐ Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary font-medium">💭 Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us more about your inquiry... We're all ears! 👂"
                        rows={6}
                        className="glass-effect hover:scale-105 transition-all"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-glow hover:scale-105 transition-all group">
                      <Send className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Send Message 🚀
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">📞 Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3 hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                    <Mail className="h-5 w-5 text-primary mt-0.5 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">📧 Email</p>
                      <p className="text-muted-foreground">info@sliitcshub.lk</p>
                      <p className="text-muted-foreground">admin@sliitcshub.lk</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                    <Phone className="h-5 w-5 text-primary mt-0.5 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">📱 Phone</p>
                      <p className="text-muted-foreground">+94 11 754 4801</p>
                      <p className="text-muted-foreground">+94 77 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">📍 Address</p>
                      <p className="text-muted-foreground">
                        SLIIT Malabe Campus
                        <br />
                        New Kandy Road, Malabe
                        <br />
                        Sri Lanka 🇱🇰
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 hover:bg-muted/20 p-2 rounded transition-colors cursor-pointer group">
                    <Clock className="h-5 w-5 text-primary mt-0.5 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">⏰ Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">🔗 Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/clubs">
                    <Button variant="outline" className="w-full justify-start glass-effect hover:scale-105 transition-all group">
                      <Users className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                      👥 Join Our Community
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="w-full justify-start glass-effect hover:scale-105 transition-all group">
                      <Calendar className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                      📅 View Upcoming Events
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start glass-effect hover:scale-105 transition-all group"
                    onClick={() => window.open('https://discord.gg/sliitcshub', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    💬 Join Our Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">🌟 Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="glass-effect hover:scale-110 transition-all hover:bg-blue-500 hover:text-white"
                      onClick={() => window.open('https://twitter.com/sliitcshub', '_blank')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="glass-effect hover:scale-110 transition-all hover:bg-blue-600 hover:text-white"
                      onClick={() => window.open('https://facebook.com/sliitcshub', '_blank')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="glass-effect hover:scale-110 transition-all hover:bg-blue-700 hover:text-white"
                      onClick={() => window.open('https://linkedin.com/company/sliitcshub', '_blank')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="glass-effect hover:scale-110 transition-all hover:bg-pink-500 hover:text-white"
                      onClick={() => window.open('https://instagram.com/sliitcshub', '_blank')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017z" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-slide-up">📍 Find Us on Campus</h2>

          <Card className="max-w-4xl mx-auto glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10" />
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-600 p-4 neon-glow">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">🏫 SLIIT Malabe Campus</h3>
                    <p className="text-muted-foreground text-lg">New Kandy Road, Malabe, Sri Lanka 🇱🇰</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="glass-effect btn-glow hover:scale-105 transition-all"
                    onClick={() => window.open('https://maps.google.com/maps?q=SLIIT+Malabe+Campus,+New+Kandy+Road,+Malabe,+Sri+Lanka', '_blank')}
                  >
                    🗺️ Open in Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-slide-up">❓ Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "🤝 How can I join the SLIIT CS Hub?",
                answer:
                  "You can join by filling out our membership form on the website or attending one of our exciting events. Membership is open to all SLIIT Computer Science students - it's completely free and full of opportunities!",
              },
              {
                question: "💰 Are events free for members?",
                answer:
                  "Most of our events are absolutely free for members! Some specialized workshops or bootcamps may have a nominal fee to cover materials and refreshments, but we keep it super affordable.",
              },
              {
                question: "💡 Can I propose an event or workshop?",
                answer:
                  "We absolutely encourage members to propose events, workshops, or talks! Contact us with your brilliant idea and we'll help you organize it. Your creativity makes our community stronger! 🌟",
              },
              {
                question: "📅 How often do you organize events?",
                answer:
                  "We typically organize 2-3 awesome events per month, including workshops, seminars, competitions, and networking sessions. There's always something exciting happening at CS Hub!",
              },
            ].map((faq, index) => (
              <Card key={index} className="glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{faq.answer}</p>
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
