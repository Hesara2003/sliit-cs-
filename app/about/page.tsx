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
      name: "Alex Chen",
      role: "President",
      year: "4th Year",
      specialization: "AI & Machine Learning",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "alex@sliitcshub.lk",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sarah Kumar",
      role: "Vice President",
      year: "3rd Year",
      specialization: "Full Stack Development",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "sarah@sliitcshub.lk",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "David Silva",
      role: "Secretary",
      year: "3rd Year",
      specialization: "Cybersecurity",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "david@sliitcshub.lk",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Maya Perera",
      role: "Treasurer",
      year: "2nd Year",
      specialization: "Data Science",
      image: "/placeholder.svg?height=100&width=100",
      linkedin: "#",
      github: "#",
      email: "maya@sliitcshub.lk",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const advisors = [
    {
      name: "Dr. Rajesh Gupta",
      title: "Senior Lecturer",
      department: "Computer Science & Software Engineering",
      specialization: "Artificial Intelligence, Machine Learning",
      image: "/placeholder.svg?height=100&width=100",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Prof. Samantha Fernando",
      title: "Associate Professor",
      department: "Computer Science & Software Engineering",
      specialization: "Software Engineering, Web Technologies",
      image: "/placeholder.svg?height=100&width=100",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const goals = [
    {
      icon: Users,
      title: "Community Building",
      description:
        "Foster a supportive environment where students can connect, collaborate, and learn from each other.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Provide workshops, seminars, and hands-on projects to enhance technical and soft skills.",
      gradient: "from-purple-500 to-pink-500",
      delay: "0.1s",
    },
    {
      icon: Target,
      title: "Industry Connection",
      description: "Bridge the gap between academia and industry through networking events and mentorship programs.",
      gradient: "from-green-500 to-emerald-500",
      delay: "0.2s",
    },
    {
      icon: Heart,
      title: "Innovation Hub",
      description: "Encourage creative thinking and provide resources for students to work on innovative projects.",
      gradient: "from-red-500 to-pink-500",
      delay: "0.3s",
    },
    {
      icon: TrendingUp,
      title: "Academic Excellence",
      description: "Support academic achievement through study groups, resource sharing, and peer tutoring.",
      gradient: "from-yellow-500 to-orange-500",
      delay: "0.4s",
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Offer career counseling, interview preparation, and job placement assistance to members.",
      gradient: "from-indigo-500 to-purple-500",
      delay: "0.5s",
    },
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
              <Sparkles className="h-3 w-3 mr-1" />
              About Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text">About SLIIT CS Hub</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are a vibrant community of Computer Science students at SLIIT, dedicated to fostering innovation,
              collaboration, and academic excellence in the field of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Vision & Mission */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-hover glass-effect border-gradient animate-scale-in">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 neon-glow">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading Computer Science student community in Sri Lanka, recognized for producing innovative
                  technologists who contribute meaningfully to the global tech ecosystem and drive digital
                  transformation in our nation.
                </p>
              </CardContent>
            </Card>

            <Card
              className="card-hover glass-effect border-gradient animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 neon-glow">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create an inclusive platform where CS students can enhance their technical skills, engage in
                  collaborative projects, access industry insights, and build lasting professional networks that will
                  shape their careers in technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Goals */}
      <section className="py-32 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect">
              <Target className="h-3 w-3 mr-1" />
              Our Goals
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">What We Strive to Achieve</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Building a comprehensive ecosystem for student growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group`}
                style={{ animationDelay: goal.delay }}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${goal.gradient} p-4 mb-4 neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <goal.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Current Committee */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect">
              <Users className="h-3 w-3 mr-1" />
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Current Committee</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated students leading our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committee.map((member, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}
                    />
                    <Avatar className="h-24 w-24 mx-auto relative border-4 border-white/20">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white text-lg font-bold`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto glass-effect">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="font-medium">{member.year}</p>
                    <p>{member.specialization}</p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8 btn-glow">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Faculty Advisors */}
      <section className="py-32 bg-gradient-to-br from-muted/30 to-muted/60 relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect">
              <Award className="h-3 w-3 mr-1" />
              Faculty Guidance
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Faculty Advisors</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experienced academics guiding our journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className={`card-hover glass-effect border-gradient animate-scale-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${advisor.gradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
                    />
                    <Avatar className="h-32 w-32 mx-auto relative border-4 border-white/20">
                      <AvatarImage src={advisor.image || "/placeholder.svg"} alt={advisor.name} />
                      <AvatarFallback className={`bg-gradient-to-br ${advisor.gradient} text-white text-2xl font-bold`}>
                        {advisor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl">{advisor.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto glass-effect">
                    {advisor.title}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="font-medium text-lg">{advisor.department}</p>
                  <p className="text-muted-foreground leading-relaxed">{advisor.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-20 animate-slide-up">
            <Badge variant="outline" className="glass-effect">
              <TrendingUp className="h-3 w-3 mr-1" />
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold gradient-text">Numbers That Matter</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Reflecting our growing community and achievements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members", gradient: "from-blue-500 to-cyan-500", delay: "0s" },
              { number: "50+", label: "Events Organized", gradient: "from-purple-500 to-pink-500", delay: "0.1s" },
              { number: "25+", label: "Industry Partners", gradient: "from-green-500 to-emerald-500", delay: "0.2s" },
              { number: "100+", label: "Projects Completed", gradient: "from-orange-500 to-red-500", delay: "0.3s" },
            ].map((stat, index) => (
              <div key={index} className={`text-center animate-scale-in`} style={{ animationDelay: stat.delay }}>
                <div
                  className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 animate-pulse-slow`}
                >
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
