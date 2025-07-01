import Link from "next/link"
import { Code2, Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SLIIT CS Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Computer Science students through collaboration, learning, and innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Clubs */}
          <div>
            <h3 className="font-semibold mb-4">Clubs & Groups</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/clubs/ai" className="text-muted-foreground hover:text-primary">
                  AI Club
                </Link>
              </li>
              <li>
                <Link href="/clubs/cybersecurity" className="text-muted-foreground hover:text-primary">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/clubs/dev" className="text-muted-foreground hover:text-primary">
                  Dev Group
                </Link>
              </li>
              <li>
                <Link href="/clubs/competitive" className="text-muted-foreground hover:text-primary">
                  Competitive Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-muted-foreground">info@sliitcshub.lk</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">+94 11 754 4801</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-muted-foreground">SLIIT Malabe Campus</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SLIIT CS Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
