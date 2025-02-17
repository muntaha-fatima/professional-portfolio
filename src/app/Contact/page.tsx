// export default function Contact() {
//     return (
//         <div className="flex flex-col  pb-72 items-center justify-center min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  rounded-lg font-sans">
//             <h1 className="text-3xl font-bold mb-6 pb-70">Contact Us</h1>
//             <form className="bg-gradient-to-br from-[#4c2569] p-8 rounded shadow-md w-full max-w-md text-black transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                 <div className="mb-4 ">
//                     <label className="block text-white text-sm font-bold mb-2 " htmlFor="name">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="w-full px-3 py-2 border rounded"
//                         placeholder="Enter your name"
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="w-full px-3 py-2 border rounded"
//                         placeholder="Enter your email"
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         className="w-full px-3 py-2 border rounded"
                        
//                         placeholder="Enter your message"
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                 >
//                     Send Message
//                 </button>
//             </form>
//             <footer className="bg-[#461e53] p-4 w-full fixed bottom-0">
//   <link
//      rel="stylesheet"
//      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//    />
   
//    <div className="flex justify-center items-center ">
//    <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
//      <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
//     <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
//    </div>
   
//      <p className="text-center text-white">Follow me for more updates</p>
//      <p className="text-center text-yellow-400">Seeratfatima@gamail.com</p>
//      </footer>
//         </div>
//     );
// }
import { ContactForm } from "../Contact/contact-form"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <main className=" ">
      <div className="container px-4 py-16 md:py-24 relative pb-32">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white">
            Contact
          </h1>
          <p className="text-lg text-white max-w-2xl">
            Have a question or want to work together? Feel free to reach out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5" />
                    <span>Seeratfatima6@gmail.com</span>
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

            <Card className="">
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
                    <a
                      href="https://www.linkedin.com/in/seerat-fatima-9281892b6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

