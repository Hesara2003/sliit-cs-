import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Award, Linkedin, Github, Mail, Sparkles, TrendingUp, Heart } from "lucide-react"

export default function AboutPage() {
  const committee = [
    {
      name: "Sahan Wickramasinghe",
      role: "President",
      year: "4th Year",
      specialization: "AI & Machine Learning",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "sahan@sliitcshub.lk",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Nimasha Perera",
      role: "Vice President",
      year: "3rd Year",
      specialization: "Full Stack Development",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "nimasha@sliitcshub.lk",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Tharindu Silva",
      role: "Secretary",
      year: "3rd Year",
      specialization: "Cybersecurity",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "tharindu@sliitcshub.lk",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Kavindi Fernando",
      role: "Treasurer",
      year: "2nd Year",
      specialization: "Data Science",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "kavindi@sliitcshub.lk",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const advisors = [
    {
      name: "Dr. Pradeep Kalansooriya",
      title: "Senior Lecturer",
      department: "Computer Science & Software Engineering",
      specialization: "Artificial Intelligence, Deep Learning & Computer Vision",
      image: "/placeholder.svg?height=100&width=100",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Prof. Janaka Wijerathne",
      title: "Associate Professor",
      department: "Computer Science & Software Engineering", 
      specialization: "Software Engineering, Mobile Technologies & IoT",
      image: "/placeholder.svg?height=100&width=100",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const goals = [
    {
      icon: Users,
      title: "🤝 Community Building",
      description:
        "Creating a supportive brotherhood where SLIIT CS students connect, collaborate, and grow together through shared experiences and mutual support.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s",
    },
    {
      icon: Award,
      title: "🎯 Skill Mastery",
      description: "Empowering students through hands-on workshops, coding bootcamps, and real-world projects that bridge the gap between theory and practice.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.1s",
    },
    {
      icon: Target,
      title: "🏢 Industry Bridge",
      description: "Connecting ambitious students with industry leaders through networking events, guest lectures, and exclusive internship opportunities.",
      gradient: "from-green-500 to-emerald-500",
      delay: "0.2s",
    },
    {
      icon: Heart,
      title: "💡 Innovation Lab",
      description: "Nurturing creative minds and providing resources, mentorship, and funding for students to transform ideas into breakthrough solutions.",
      gradient: "from-red-500 to-pink-500",
      delay: "0.3s",
    },
    {
      icon: TrendingUp,
      title: "📚 Academic Excellence",
      description: "Supporting academic success through peer tutoring, study circles, exam prep sessions, and collaborative learning initiatives.",
      gradient: "from-yellow-500 to-orange-500",
      delay: "0.4s",
    },
    {
      icon: Target,
      title: "🚀 Career Launchpad",
      description: "Preparing students for successful careers with resume workshops, mock interviews, placement assistance, and alumni mentorship programs.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.5s",
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
          <div className="text-center space-y-10 max-w-5xl mx-auto animate-slide-up">
            <Badge variant="secondary" className="glass-effect hover:scale-105 transition-transform duration-300 animate-bounce-slow">
              <Sparkles className="h-3 w-3 mr-1 animate-spin-slow" />
              🎓 Discover SLIIT CS Hub
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
              Where Dreams Meet 
              <br />
              <span className="tech-gradient-text animate-pulse-slow">Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              More than just a student community—we're a family of passionate innovators at SLIIT, 
              transforming ambitious dreams into groundbreaking technological solutions that shape Sri Lanka's digital future.
            </p>
            <div className="flex justify-center pt-4">
              <div className="flex items-center space-x-6 text-sm">
                {["🌟 500+ Future Leaders", "🚀 50+ Innovation Events", "💼 25+ Industry Partners"].map((stat, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 animate-fade-in hover:scale-110 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span className="font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision & Mission */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-hover glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-4 neon-glow group-hover:rotate-12 transition-transform duration-500">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl group-hover:text-primary transition-colors">👁️ Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  To become Sri Lanka's most influential Computer Science student community, recognized globally for producing 
                  visionary tech leaders who pioneer digital transformation and drive innovation that makes a lasting impact on humanity.
                </p>
              </CardContent>
            </Card>

            <Card
              className="card-hover glass-effect border-gradient animate-scale-in hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 neon-glow group-hover:rotate-12 transition-transform duration-500">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl group-hover:text-primary transition-colors">🎯 Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  To create an extraordinary ecosystem where SLIIT CS students unlock their full potential through collaborative learning, 
                  industry exposure, innovative projects, and lifelong mentorship that transforms them into confident tech professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Goals */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <Target className="h-3 w-3 mr-1 animate-pulse" />
              🎯 Our Strategic Goals
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Transforming Students into Tech Titans</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Six pillars of excellence that define our commitment to student success and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: goal.delay }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${goal.gradient} p-5 mb-4 neon-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <goal.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground/80 transition-colors">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Current Committee */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <Users className="h-3 w-3 mr-1 animate-bounce" />
              👥 Leadership Excellence
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">The Visionaries Leading Our Journey</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate SLIIT students who dedicate their time to building something extraordinary for our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committee.map((member, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow`}
                    />
                    <Avatar className="h-28 w-28 mx-auto relative border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white text-xl font-bold`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto glass-effect animate-pulse">
                    ✨ {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground space-y-1 group-hover:text-foreground/80 transition-colors">
                    <p className="font-medium">🎓 {member.year} Student</p>
                    <p>💻 Specializing in {member.specialization}</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow hover:scale-110 transition-transform group/btn">
                      <Linkedin className="h-4 w-4 group-hover/btn:text-blue-500 transition-colors" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow hover:scale-110 transition-transform group/btn">
                      <Github className="h-4 w-4 group-hover/btn:text-purple-500 transition-colors" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow hover:scale-110 transition-transform group/btn">
                      <Mail className="h-4 w-4 group-hover/btn:text-green-500 transition-colors" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Faculty Advisors */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40" />
        <div className="absolute inset-0 particles-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <Award className="h-3 w-3 mr-1 animate-pulse" />
              🎓 Academic Guidance Council
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Our Distinguished Faculty Mentors</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Renowned academics and industry experts who guide our vision and ensure academic excellence in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group hover:scale-105 transition-all duration-500`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${advisor.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow`}
                    />
                    <Avatar className="h-36 w-36 mx-auto relative border-4 border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={advisor.image || "/placeholder.svg"} alt={advisor.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${advisor.gradient} text-white text-2xl font-bold`}>
                        {advisor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{advisor.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto glass-effect">
                    ⭐ {advisor.title}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="font-medium text-lg group-hover:text-primary transition-colors">🏢 {advisor.department}</p>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    🔬 Research Focus: {advisor.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="py-32 relative">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect hover:scale-105 transition-transform">
              <TrendingUp className="h-3 w-3 mr-1 animate-pulse" />
              📊 Our Growing Impact
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Milestones of Excellence</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              These numbers tell the story of our thriving community and the incredible impact we're making together
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Passionate Members", gradient: "from-blue-500 to-cyan-500", delay: "0s", icon: "👥", desc: "Growing strong!" },
              { number: "50+", label: "Epic Campus Events", gradient: "from-purple-500 to-pink-500", delay: "0.1s", icon: "🎓", desc: "And counting!" },
              { number: "25+", label: "Industry Partners", gradient: "from-green-500 to-emerald-500", delay: "0.2s", icon: "🤝", desc: "Top companies!" },
              { number: "100+", label: "Amazing Projects", gradient: "from-orange-500 to-red-500", delay: "0.3s", icon: "🚀", desc: "Built together!" },
            ].map((stat, index) => (
              <div key={index} className={`text-center animate-scale-in hover:scale-110 transition-transform duration-300 cursor-pointer group`} style={{ animationDelay: stat.delay }}>
                <div className="mb-4 text-5xl group-hover:animate-bounce">{stat.icon}</div>
                <div
                  className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 animate-pulse-slow group-hover:scale-110 transition-transform`}
                >
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg font-medium group-hover:text-foreground/80 transition-colors">{stat.label}</div>
                <div className="text-xs text-muted-foreground/60 italic group-hover:text-foreground/60 transition-colors">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
