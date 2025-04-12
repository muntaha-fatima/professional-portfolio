
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    imageSrc: "/image/Screenshot 2024-11-08 200729.png",
    title: "Calculator App",
    description:
      "A simple, functional calculator built with HTML, CSS, and JavaScript. Features basic arithmetic operations in a user-friendly interface.",
    link: "https://calculator-muntaha-fatimas-projects.vercel.app/",
    github: "https://github.com/yourusername/calculator",
    category: "web-app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    imageSrc: "/image/Screenshot 2024-11-09 124247.png",
    title: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing projects, skills, and journey in web development with clean design and responsive layout.",
    link: "https://create-portfolio-eosin.vercel.app/",
    github: "https://github.com/yourusername/portfolio",
    category: "website",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    imageSrc: "/image/Screenshot 2024-11-09 124150.png",
    title: "Online Resume",
    description:
      "A static resume page presenting professional information in a clear, structured format with sections for experience, education, and skills.",
    link: "http://resume-delta-orcin.vercel.app/",
    github: "https://github.com/yourusername/resume",
    category: "website",
    tags: ["HTML", "CSS", "Responsive Design"],
  },
  {
    imageSrc: "/image/Screenshot 2024-11-09 124107.png",
    title: "Multi-page Website",
    description:
      "A Next.js website with Home, About, and Contact pages demonstrating efficient routing and smooth user experience.",
    link: "https://next-js-theta-hazel.vercel.app/",
    github: "https://github.com/yourusername/multipage",
    category: "website",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    imageSrc: "/image/Screenshot 2024-11-09 124958.png",
    title: "Figma Portfolio Design",
    description:
      "A Figma design prototype showcasing the layout and user interface of my portfolio, focusing on clean and engaging design.",
    link: "https://figma-assignment-eight.vercel.app/",
    github: "https://github.com/yourusername/figma-portfolio",
    category: "design",
    tags: ["Figma", "UI/UX", "Design"],
    
  },
  {
    imageSrc: "/image/Screenshot 2025-02-15 140316.png",
    title: "Blog Portfolio Design",
    description:
      "A Figma design prototype showcasing the layout and user interface of my portfolio, focusing on clean and engaging design.",
    link: "https://blogs-dynemic.vercel.app/",
    github: "",
    category: "website",
    tags: ["BLOG", "UI/UX", "Design"],
    
  },
  {
    imageSrc: "/image/Screenshot 2025-02-15 140516.png",
    title: "Market place website",
    description:
      "A Figma design prototype showcasing the layout and user interface of my portfolio, focusing on clean and engaging design.",
    link: "https://hackathon-rho-ochre.vercel.app/",
    github: "",
    category: "website",
    tags: ["BLOG", "UI/UX", "Design"],
    
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Apps" },
  { id: "website", label: "Websites" },
  { id: "design", label: "Design" },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950">
      <div className="container px-4 py-16 md:py-24 relative pb-32">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white">
            My Projects
          </h1>
          <p className="text-lg text-white max-w-2xl">
            A collection of my work showcasing web development and design skills. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full transition duration-300 group-hover:scale-105">
          <TabsList className="flex justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {projects
                  .filter((project) => (category.id === "all" ? true : project.category === category.id))
                  .map((project) => (
                    <Card key={project.title} className=" group overflow-hidden backdrop-blur-sm bg-card/50  ml-8 h-[368px] transition duration-300 hover:scale-105">
                      <div className="aspect-video relative h-48 w-[410px] overflow-hidden ">
                        <Image
                          src={project.imageSrc || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover "
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg -mt-5">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm -mt-5">{project.description}</p>
                      </CardContent>
                      <CardFooter className="flex gap-4 -mt-5" >
                        <Button asChild>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">View on GitHub</span>
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t">
        <div className="container py-4 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Seerat Fatima. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:seeratfatima@gmail.com">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

