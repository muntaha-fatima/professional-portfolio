"use client"

import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default function Contact() {
  return (
    <main>
      <div className="container px-4 py-16 md:py-24 relative pb-32">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white">
            Get in Touch
          </h1>
          <p className="text-lg text-white max-w-2xl">
            Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6">
             
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5" />
                    <span>Seeratfatima@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:Seeratfatima@gmail.com" className="inline-flex items-center justify-center">
                        Send Email
                        <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Connect With Me</h2>
                <p className="text-muted-foreground">Follow me on social media for updates and more content</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/muntaha-fatima" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.instagram.com/seeratfatima39" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t">
        <div className="container py-4 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Seerat Fatima. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="/privacy">Privacy Policy</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="/terms">Terms of Service</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
