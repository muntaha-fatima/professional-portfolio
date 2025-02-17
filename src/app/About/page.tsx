"use client"
// import Image from "next/image"

// export default function About() {
//     return (
//       <div className=" flex flex-col md:flex-row p-10 md:p-40 bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  text-white font-sans">
//       <div className="flex-1 mb-30 md:mb-0 animate-slideLeft">
//           <h1 className="mr-10 text-yellow-300 text-3xl  md:text-4xl mb-4 font-bold ">About</h1>
//           <p className="text-2xl md:text-md  font-light">I&apos;m Seerat Fatima a web developer with a passion for both technology and 
//             Islamic studies. Alongside my expertise in web development using HTML, CSS, JavaScript, and Next.js, 
//             I have completed courses in Seerat and Alima studies, which deepened my understanding of the life and 
//             Islamic teachings. I enjoy bringing creativity and purpose to my projects, striving to combine my skills in technology with the values and knowledge I&apos;ve gained from my studies. Through my work, I hope to contribute positively to both the tech world and the broader community. Whether I&apos;m developing user-friendly websites or learning new tech skills, I am always guided by a sense of purpose and a desire to make meaningful contributions.
//              </p>
         
//       </div>
//       <div className="p-2 w-full lg:w-1/2 h-2/3 lg:h-full flex justify-cente items-star pb-72">
//       <Image
//       src="/image/b-4.jpg"
//       alt="profile"
//       layout="responsive"
//       width={336}
//       height={400}
//       className="object-cover h-full w-full rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"

//       /> 
//   </div>
//   <footer className="bg-[#461e53] p-4 w-screen fixed bottom-0 left-0">
//   <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
// />

// <div className="flex justify-center items-center ">
// <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
//      <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
//     <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
// </div>

//   <p className="text-center text-white">Follow me for more updates</p>
//   <p className="text-center text-yellow-400">Seeratfatima@gamail.com</p>

//   </footer>
//   </div>
//   );
//   }










// import Image from "next/image";

// export default function About() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-10 md:p-20 bg-gradient-to-br from-[#1e1e2e] via-[#282a36] to-[#1e1e2e] text-white font-sans">
      
//       {/* Left Section - Text */}
//       <div className="flex-1 space-y-6 animate-fadeIn max-w-lg">
//         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 tracking-wide">
//           About Me
//         </h1>
//         <p className="text-lg md:text-xl leading-relaxed text-gray-300">
//           Hi, I'm <span className="font-semibold text-yellow-400">Seerat Fatima</span>, a web developer skilled in  
//           <span className="text-yellow-400"> HTML, CSS, JavaScript, and Next.js</span>.  
//           Alongside my tech journey, I've also mastered <span className="text-yellow-400">Islamic studies</span>,  
//           completing advanced courses in <strong>Seerat and Alima</strong>.
//         </p>
//         <p className="text-lg md:text-xl leading-relaxed text-gray-400">
//           I specialize in crafting <strong>aesthetic, functional, and interactive</strong> web experiences.  
//           Whether designing <strong>smooth UI</strong> or exploring <strong>cutting-edge tech</strong>, my mission is to create  
//           meaningful and impactful digital solutions.
//         </p>
        
//         {/* Social Icons */}
//         <div className="flex space-x-6 mt-6">
//           <a href="https://github.com/muntaha-fatima" className="text-3xl text-gray-400 hover:text-white transition duration-300">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="https://www.instagram.com/seeratfatima39" className="text-3xl text-pink-500 hover:text-pink-300 transition duration-300">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6" className="text-3xl text-blue-500 hover:text-blue-300 transition duration-300">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>

//       {/* Right Section - Image in Glassmorphism Card */}
//       <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
//         <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 transition duration-500 hover:scale-105">
//           <Image
//             src="/image/b-4.jpg"
//             alt="Seerat Fatima"
//             width={400}
//             height={500}
//             className="object-cover rounded-xl"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-semibold">
//             Passionate Developer & Learner
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="w-full text-center py-6 mt-12 border-t border-gray-700">
//         <p className="text-gray-400">Let's connect & create something amazing!</p>
//         <p className="text-yellow-400 font-semibold">Seeratfatima@gmail.com</p>
//       </footer>
//     </div>
//   );
// }




// import Image from "next/image"
// import { Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// const skills = ["HTML & CSS", "JavaScript", "Next.js", "React", "UI/UX Design", "Islamic Studies", "Seerat", "Alima"]

// export default function About() {
//   return (
//     <main className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 ">
//       <div className="container px-4 py-16 md:py-24">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
//           {/* Left Section - Content */}
//           <div className="space-y-8 max-w-2xl">
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                 About Me
//               </h1>
//               <p className="text-lg text-muted-foreground">
//                 Hi, I'm <span className="font-medium text-primary">Seerat Fatima</span>, a passionate web developer and
//                 Islamic studies scholar.
//               </p>
//             </div>

//             <div className="prose prose-gray dark:prose-invert">
//               <p>
//                 I combine my expertise in modern web development with deep knowledge of Islamic studies. My technical
//                 skills span across frontend development, while my academic background includes advanced studies in
//                 Seerat and completion of the Alima course.
//               </p>
//               <p>
//                 I specialize in building aesthetic, functional, and interactive web experiences that make a meaningful
//                 impact. My approach merges technical excellence with thoughtful design to create solutions that truly
//                 resonate.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <Badge key={skill} variant="secondary">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>

//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Button asChild>
//                 <a href="mailto:Seeratfatima@gmail.com">
//                   <Mail className="mr-2 h-4 w-4" />
//                   Contact Me
//                 </a>
//               </Button>
//               <div className="flex gap-4">
//                 <Button variant="ghost" size="icon" asChild>
//                   <a href="https://github.com/muntaha-fatima" target="_blank" rel="noopener noreferrer">
//                     <Github className="h-5 w-5" />
//                     <span className="sr-only">GitHub</span>
//                   </a>
//                 </Button>
//                 <Button variant="ghost" size="icon" asChild>
//                   <a
//                     href="https://www.linkedin.com/in/seerat-fatima-9281892b6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                     <span className="sr-only">LinkedIn</span>
//                   </a>
//                 </Button>
//                 <Button variant="ghost" size="icon" asChild>
//                   <a href="https://www.instagram.com/seeratfatima39" target="_blank" rel="noopener noreferrer">
//                     <Instagram className="h-5 w-5" />
//                     <span className="sr-only">Instagram</span>
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Image */}
//           <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//             <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl" />
//             <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-card">
//               <Image
//                 src="/image/b-4.jpg"
//                 alt="Seerat Fatima"
//                 fill
//                 className="object-cover transition duration-500 group-hover:scale-105"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
//                   <p className="text-lg font-medium">Passionate Developer & Scholar</p>
//                   <Button variant="link" asChild className="text-primary mt-2">
//                     <a href="/portfolio">
//                       View Portfolio
//                       <ExternalLink className="ml-2 h-4 w-4" />
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </main>
//   )
// }









// import Image from "next/image"
// import { Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// // import { Progress } from "@/components/ui/progress"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// const skills = {
//   technical: [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 80 },
//     { name: "Next.js", level: 75 },
//     { name: "Tailwind CSS", level: 85 },
//     { name: "UI/UX Design", level: 70 },
//   ],
//   islamic: [
//     { name: "Islamic Studies", level: 95 },
//     { name: "Seerat", level: 90 },
//     { name: "Alima Course", level: 95 },
//     { name: "Arabic Language", level: 85 },
//     { name: "Tafseer", level: 85 },
//     { name: "Hadith Studies", level: 90 },
//   ],
//   soft: [
//     { name: "Communication", level: 90 },
//     { name: "Problem Solving", level: 85 },
//     { name: "Team Collaboration", level: 85 },
//     { name: "Time Management", level: 80 },
//     { name: "Research", level: 90 },
//     { name: "Teaching", level: 85 },
//   ],
// }

// const tags = ["HTML & CSS", "JavaScript", "Next.js", "React", "UI/UX Design", "Islamic Studies", "Seerat", "Alima"]

// export default function About() {
//   return (
//     <main className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950">
//       <div className="container px-4 py-16 md:py-24">
//         {/* Hero Section */}
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
//           {/* Left Section - Content */}
//           <div className="space-y-8 max-w-2xl">
//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
//                 About Me
//               </h1>
//               <p className="text-lg text-muted-foreground">
//                 Hi, I'm <span className="font-medium text-primary">Seerat Fatima</span>, a passionate web developer and
//                 Islamic studies scholar.
//               </p>
//             </div>

//             <div className="prose prose-gray dark:prose-invert">
//               <p>
//                 I combine my expertise in modern web development with deep knowledge of Islamic studies. My technical
//                 skills span across frontend development, while my academic background includes advanced studies in
//                 Seerat and completion of the Alima course.
//               </p>
//               <p>
//                 I specialize in building aesthetic, functional, and interactive web experiences that make a meaningful
//                 impact. My approach merges technical excellence with thoughtful design to create solutions that truly
//                 resonate.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {tags.map((tag) => (
//                 <Badge key={tag} variant="secondary">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>

//             <div className="flex flex-col gap-4 sm:flex-row">
//               <Button asChild>
//                 <a href="mailto:Seeratfatima@gmail.com">
//                   <Mail className="mr-2 h-4 w-4" />
//                   Contact Me
//                 </a>
//               </Button>
//               <div className="flex gap-4">
//                 <Button variant="ghost" size="icon" asChild>
//                   <a href="https://github.com/muntaha-fatima" target="_blank" rel="noopener noreferrer">
//                     <Github className="h-5 w-5" />
//                     <span className="sr-only">GitHub</span>
//                   </a>
//                 </Button>
//                 <Button variant="ghost" size="icon" asChild>
//                   <a
//                     href="https://www.linkedin.com/in/seerat-fatima-9281892b6"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                     <span className="sr-only">LinkedIn</span>
//                   </a>
//                 </Button>
//                 <Button variant="ghost" size="icon" asChild>
//                   <a href="https://www.instagram.com/seeratfatima39" target="_blank" rel="noopener noreferrer">
//                     <Instagram className="h-5 w-5" />
//                     <span className="sr-only">Instagram</span>
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Right Section - Image */}
//           <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//             <div className="absolute inset-1 rounded-2xl " />
//             <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//               <Image
//                 src="/image/b-4.jpg"
//                 alt="Seerat Fatima"
//                 fill
//                 className="object-cover transition duration-500 group-hover:scale-105"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
//                   <p className="text-lg font-medium">Passionate Developer & Scholar</p>
//                   <Button variant="link" asChild className="text-primary mt-2">
//                     <a href="/portfolio">
//                       View Portfolio
//                       <ExternalLink className="ml-2 h-4 w-4" />
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
// </div>
//     </main>
//   )
// }










// 'use client'

// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// const skills = {
//   technical: [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 80 },
//     { name: "Next.js", level: 75 },
//     { name: "Tailwind CSS", level: 85 },
//     { name: "UI/UX Design", level: 70 },
//   ],
// };

// const tags = ["HTML & CSS", "JavaScript", "Next.js", "React", "UI/UX Design", "Islamic Studies", "Seerat", "Alima"];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } },
// };

// export default function About() {
//   return (
//     <motion.main
//       initial="hidden"
//       animate="visible"
//       variants={staggerContainer}
//       className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950"
//     >
//       <div className="container px-4 py-16 md:py-24">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
//           {/* Left Section - Content */}
//           <motion.div variants={fadeInUp} className="space-y-8 max-w-2xl">
//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent"
//             >
//               About Me
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
//               Hi, I'm <span className="font-medium text-primary">Seerat Fatima</span>, a passionate web developer and
//               Islamic studies scholar.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="prose prose-gray dark:prose-invert">
//               <p>
//                 I combine my expertise in modern web development with deep knowledge of Islamic studies. My technical
//                 skills span across frontend development, while my academic background includes advanced studies in
//                 Seerat and completion of the Alima course.
//               </p>
//             </motion.div>

//             <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
//               {tags.map((tag) => (
//                 <motion.div key={tag} variants={fadeInUp}>
//                   <Badge variant="secondary">{tag}</Badge>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Section - Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//               <div className="absolute inset-1 rounded-2xl" />
//               <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//                 <Image
//                   src="/image/b-4.jpg"
//                   alt="Seerat Fatima"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   priority
//                 />
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </motion.main>
//   );
// }











// 'use client'

// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// const skills = {
//   technical: [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 80 },
//     { name: "Next.js", level: 75 },
//     { name: "Tailwind CSS", level: 85 },
//     { name: "UI/UX Design", level: 70 },
//   ],
// };

// const tags = ["HTML & CSS", "JavaScript", "Next.js", "React", "UI/UX Design", "Islamic Studies", "Seerat", "Alima"];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } },
// };

// export default function About() {
//   return (
//     <motion.main
//       initial="hidden"
//       animate="visible"
//       variants={staggerContainer}
//       className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950"
//     >
//       <div className="container px-4 py-16 md:py-24">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
//           {/* Left Section - Content */}
//           <motion.div variants={fadeInUp} className="space-y-8 max-w-2xl">
//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white"
//             >
//               About
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg text-white">
//               Hi, I'm <span className="font-medium text-white">Seerat Fatima</span>, a passionate web developer and
//               Islamic studies scholar.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="prose text-white dark:prose-invert">
//               <p>
//                 I combine my expertise in modern web development with deep knowledge of Islamic studies. My technical
//                 skills span across frontend development, while my academic background includes advanced studies in
//                 Seerat and completion of the Alima course.
//               </p>
//             </motion.div>

//             <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
//               {tags.map((tag) => (
//                 <motion.div key={tag} variants={fadeInUp}>
//                   <Badge variant="secondary">{tag}</Badge>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Section - Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//               <div className="absolute inset-1 rounded-2xl" />
//               <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//                 <Image
//                   src="/image/b-4.jpg"
//                   alt="Seerat Fatima"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   priority
//                 />
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </motion.main>
//   );
// }







// 'use client'

// import Image from "next/image";
// import { Github, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// const skills = {
//   technical: [
//     { name: "HTML & CSS", level: 90 },
//     { name: "JavaScript", level: 85 },
//     { name: "React", level: 80 },
//     { name: "Next.js", level: 75 },
//     { name: "Tailwind CSS", level: 85 },
//     { name: "UI/UX Design", level: 70 },
//   ],
// };

// const tags = ["HTML & CSS", "JavaScript", "Next.js", "React", "UI/UX Design", "Islamic Studies", "Seerat", "Alima"];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.2 } },
// };

// export default function About() {
//   return (
//     <motion.main
//       initial="hidden"
//       animate="visible"
//       variants={staggerContainer}
//       className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950"
//     >
//       <div className="container px-4 py-16 md:py-24">
//         <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
//           {/* Left Section - Content */}
//           <motion.div variants={fadeInUp} className="space-y-8 max-w-2xl">
//             <motion.h1
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-white"
//             >
//               About Me
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-lg text-white">
//               Hi, I'm <span className="font-medium text-white">Seerat Fatima</span>, and this is my About page! I am a passionate web developer and
//               Islamic studies scholar.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="prose text-white dark:prose-invert">
//               <p>
//                 Welcome to my About page! I combine my expertise in modern web development with deep knowledge of Islamic studies.
//                 My technical skills span across frontend development, while my academic background includes advanced studies in
//                 Seerat and completion of the Alima course.
//               </p>
//             </motion.div>

//             <motion.div variants={staggerContainer} className="flex flex-wrap gap-2">
//               {tags.map((tag) => (
//                 <motion.div key={tag} variants={fadeInUp}>
//                   <Badge variant="secondary">{tag}</Badge>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* Right Section - Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//               <div className="absolute inset-1 rounded-2xl" />
//               <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//                 <Image
//                   src="/image/b-4.jpg"
//                   alt="Seerat Fatima"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   priority
//                 />
//               </div>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </motion.main>
//   );
// }












// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Github, Linkedin, Instagram } from "lucide-react";
// import Link from "next/link";
// import { Card } from "@/components/ui/card";

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl text-center"
//       >
//         <Image
//           src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="Profile Picture"
//           width={150}
//           height={150}
//           className="rounded-full mx-auto mb-4 border-4 border-white"
//         />
//         <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
//         <p className="mt-4 text-lg text-gray-300">
//           I am a passionate web developer with expertise in modern technologies
//           like TypeScript, Next.js, and Tailwind CSS. With a keen interest in
//           UI/UX design, I love crafting interactive and user-friendly
//           applications that enhance user experiences.
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
//       >
//         <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center">
//           <h3 className="text-2xl font-semibold">🚀 Skills & Technologies</h3>
//           <p className="mt-2 text-gray-400">
//             Proficient in JavaScript, React, TypeScript, Next.js, and Tailwind
//             CSS, with a focus on performance and maintainability.
//           </p>
//         </div>

//         <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center">
//           <h3 className="text-2xl font-semibold">🎯 My Mission</h3>
//           <p className="mt-2 text-gray-400">
//             To build efficient, scalable, and innovative solutions that solve
//             real-world problems while continuously learning and evolving.
//           </p>
//         </div>
//       </motion.div>

//       <div className="mt-10 flex space-x-6">
//         <Link href="https://github.com" target="_blank">
//           <Github className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://linkedin.com" target="_blank">
//           <Linkedin className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://instagram.com" target="_blank">
//           <Instagram className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-10"
//       >
//         <Link href="/projects">
//           <button className="px-6 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
//             View My Projects
//           </button>
//         </Link>
//                   {/* Right Section - Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//               <div className="absolute inset-1 rounded-2xl" />
//               <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//                 <Image
//                   src="/image/b-4.jpg"
//                   alt="Seerat Fatima"
//                   fill
//                   className="object-cover transition duration-500 group-hover:scale-105"
//                   priority
//                 />
//               </div>
//             </Card>
//           </motion.div>
//       </motion.div>
//     </div>
//   );
// }












// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Github, Linkedin, Instagram } from "lucide-react";
// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import { useState, useEffect } from 'react';



// const chapters = [
//   { title: 'Chapter 1: The Beginning', text: 'Javeria started her coding journey with curiosity and passion.' },
//   { title: 'Chapter 2: First Breakthrough', text: 'She built her first project using HTML, CSS, and JavaScript.' },
//   { title: 'Chapter 3: Mastering TypeScript', text: 'Her love for TypeScript and Next.js grew as she took on challenging projects.' },
//   { title: 'Chapter 4: Hackathon Experience', text: 'She participated in hackathons and built an interactive resume builder.' },
//   { title: 'Chapter 5: Future Goals', text: 'Javeria aims to become an expert in AI and Web Development.' }
// ];

// export default function AboutPage() {
//   const [currentChapter, setCurrentChapter] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentChapter((prev) => (prev + 1) % chapters.length);
//     }, 5000);
  
//     return () => clearInterval(interval);
//   }, [currentChapter]); // Add currentChapter as a dependency
  
//   return (
//     <><div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl text-center"
//       >
//         <Image
//           src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="Profile Picture"
//           width={150}
//           height={150}
//           className="rounded-full mx-auto mb-4 border-4 border-white" />
//         <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
//         <p className="mt-4 text-lg text-gray-300">
//           I am a passionate web developer with expertise in modern technologies
//           like TypeScript, Next.js, and Tailwind CSS. With a keen interest in
//           UI/UX design, I love crafting interactive and user-friendly
//           applications that enhance user experiences.
//         </p>
//       </motion.div>
//       <motion.div
//         key={currentChapter} // This forces React to re-render when chapter changes
//         className="max-w-lg p-6"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.8 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-xl font-semibold mb-2 text-neon-yellow">{chapters[currentChapter].title}</h2>
//         <p className="text-yellow-300">{chapters[currentChapter].text}</p>
//       </motion.div>
//       {/* Navigation Dots */}
//       <div className="flex gap-4 mt-6">
//         {chapters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentChapter(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 
//               ${currentChapter === index ? 'bg-neon-yellow shadow-neon pulse-animation' : 'bg-yellow-600 hover:bg-neon-yellow'}`}
//           ></button>
//         ))}
//       </div>

//       {/* Next Chapter Button */}
//       <button
//         onClick={() => setCurrentChapter((prev) => (prev + 1) % chapters.length)}
//         className="mt-6 px-4 py-2 bg-neon-blue text-black font-bold rounded shadow-neon hover:scale-105 transition-transform"
//       >

//       </button>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
//       >
//         <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center">
//           <h3 className="text-2xl font-semibold">🚀 Skills & Technologies</h3>
//           <p className="mt-2 text-gray-400">
//             Proficient in JavaScript, React, TypeScript, Next.js, and Tailwind
//             CSS, with a focus on performance and maintainability.
//           </p>
//         </div>
//         {/* Right Section - Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//             <div className="absolute inset-1 rounded-2xl" />
//             <div className="absolute inset-[2px] w-70 h-96 rounded-2xl overflow-hidden bg-card lg:mt-56">
//               <Image
//                 src="/image/b-4.jpg"
//                 alt="Seerat Fatima"
//                 fill
//                 className="object-cover transition duration-500 group-hover:scale-105"
//                 priority />
//             </div>
//           </Card>
        
      
//       <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-center">
//         <h3 className="text-2xl font-semibold">🎯 My Mission</h3>
//         <p className="mt-2 text-gray-400">
//           To build efficient, scalable, and innovative solutions that solve
//           real-world problems while continuously learning and evolving.
//         </p>
//       </div>
//       </motion.div>

//       <div className="mt-10 flex space-x-6">
//         <Link href="https://github.com" target="_blank">
//           <Github className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://linkedin.com" target="_blank">
//           <Linkedin className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://instagram.com" target="_blank">
//           <Instagram className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-10"
//       >
//         <Link href="/projects">
//           <button className="px-6 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
//             View My Projects
//           </button>
//         </Link>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="mt-10"
//       >
//         <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//           <div className="absolute inset-1 rounded-2xl" />
//           <div className="absolute inset-[2px] w-full h-auto rounded-2xl overflow-hidden bg-card">
//             <Image
//               src="/image/b-4.jpg"
//               alt="Seerat Fatima"
//               width={400}
//               height={500}
//               className="object-cover transition duration-500 group-hover:scale-105"
//             />
//           </div>
//         </Card>
//       </motion.div>
//       </motion.div>
//     </div>
//     </div>
    
//   );
// }

















// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Github, Linkedin, Instagram } from "lucide-react";
// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import { useState, useEffect } from 'react';

// const chapters = [
//   { title: 'Chapter 1: The Beginning', text: 'Javeria started her coding journey with curiosity and passion.' },
//   { title: 'Chapter 2: First Breakthrough', text: 'She built her first project using HTML, CSS, and JavaScript.' },
//   { title: 'Chapter 3: Mastering TypeScript', text: 'Her love for TypeScript and Next.js grew as she took on challenging projects.' },
//   { title: 'Chapter 4: Hackathon Experience', text: 'She participated in hackathons and built an interactive resume builder.' },
//   { title: 'Chapter 5: Future Goals', text: 'Javeria aims to become an expert in AI and Web Development.' }
// ];

// export default function AboutPage() {
//   const [currentChapter, setCurrentChapter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentChapter((prev) => (prev + 1) % chapters.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl text-center"
//       >
//         <Image
//           src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="Profile Picture"
//           width={150}
//           height={150}
//           className="rounded-full mx-auto mb-4 border-4 border-white" 
//         />
//         <h1 className="text-5xl font-bold tracking-tight">About Me</h1>
//         <p className="mt-4 text-lg text-gray-300">
//           I am a passionate web developer with expertise in modern technologies
//           like TypeScript, Next.js, and Tailwind CSS.
//         </p>
//       </motion.div>
//       <div className="relative bg-opacity-20 bg-black p-6 rounded-lg shadow-lg text-center border border-purple-500 transition-transform hover:scale-105 hover:shadow-xl">
//   <h3 className="text-3xl font-bold text-purple-400 mb-4">🎯 My Mission</h3>
//   <p className="mt-2 text-lg text-gray-300 leading-relaxed">
//     "My mission is to create <span className="text-purple-300 font-semibold">impactful</span> and 
//     <span className="text-purple-300 font-semibold"> innovative</span> web solutions that not only enhance 
//     <span className="text-yellow-400 font-semibold"> user experiences</span> but also contribute to meaningful technological advancements."
//   </p>
//   <p className="mt-4 text-gray-400 italic">
//     "I am dedicated to developing <span className="text-purple-300">scalable</span>, 
//     <span className="text-purple-300"> efficient</span>, and <span className="text-purple-300">user-friendly</span> applications 
//     by leveraging modern technologies like <span className="text-yellow-400 font-semibold">TypeScript</span>, 
//     <span className="text-yellow-400 font-semibold">Next.js</span>, and <span className="text-yellow-400 font-semibold">Tailwind CSS</span>."
//   </p>
//   <p className="mt-4 text-gray-400">
//     "I believe in <span className="text-purple-300">lifelong learning</span>, <span className="text-purple-300">collaboration</span>, and 
//     building <span className="text-yellow-400">digital experiences</span> that leave a lasting impact."
//   </p>
// </div>

//       <motion.div
//         key={currentChapter}
//         className="max-w-lg p-6"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-xl font-semibold mb-2 text-yellow-400">{chapters[currentChapter].title}</h2>
//         <p className="text-yellow-300">{chapters[currentChapter].text}</p>
//       </motion.div>

//       <div className="flex gap-4 mt-6">
//         {chapters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentChapter(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 
//               ${currentChapter === index ? 'bg-yellow-400 shadow-lg' : 'bg-yellow-600 hover:bg-yellow-400'}`}
//           ></button>
//         ))}
//       </div>
      
//          <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//          className="mt-10"
//        >
//         <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent">
//            <div className="absolute inset-1 rounded-2xl" />
//                       <div className="absolute inset-[2px] w-full h-auto rounded-2xl overflow-hidden bg-card">
//              <Image
//                src="/image/b-4.jpg"
//                alt="Seerat Fatima"
//                width={400}
//               height={500}
//               className="object-cover transition duration-500 group-hover:scale-105"
//             />
//           </div>
//         </Card>
//       </motion.div> 
      
//       <div className="mt-10 flex space-x-6">
//         <Link href="https://github.com" target="_blank">
//           <Github className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://linkedin.com" target="_blank">
//           <Linkedin className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//         <Link href="https://instagram.com" target="_blank">
//           <Instagram className="w-8 h-8 hover:text-gray-400" />
//         </Link>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="mt-10"
//       >
//         <Link href="/projects">
//           <button className="px-6 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
//             View My Projects
//           </button>
//         </Link>
//       </motion.div>
//     </div>
//   );
// }



{/* 

// 'use client'
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';


// // Chapter data array
// const chapters = [
//   { title: 'Chapter 1: The Beginning', text: 'Javeria started her coding journey with curiosity and passion.' },
//   { title: 'Chapter 2: First Breakthrough', text: 'She built her first project using HTML, CSS, and JavaScript.' },
//   { title: 'Chapter 3: Mastering TypeScript', text: 'Her love for TypeScript and Next.js grew as she took on challenging projects.' },
//   { title: 'Chapter 4: Hackathon Experience', text: 'She participated in hackathons and built an interactive resume builder.' },
//   { title: 'Chapter 5: Future Goals', text: 'Javeria aims to become an expert in AI and Web Development.' }
// ];

// export default function StoryPortfolio() {
//   const [currentChapter, setCurrentChapter] = useState(0);

//   // Auto change chapters every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentChapter((prev) => (prev + 1) % chapters.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-5">
//       {/* Title Section */}
//       <motion.h1
//         className="text-3xl font-bold mb-4 text-neon-blue"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Javeria's Cyberpunk Story Portfolio
//       </motion.h1>

//       {/* About Page Link */}


//       {/* Dynamic Chapter Section */}
//       <motion.div
//         key={currentChapter}
//         className="max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg border border-neon-yellow"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-xl font-semibold mb-2 text-neon-yellow">{chapters[currentChapter].title}</h2>
//         <p className="text-yellow-300">{chapters[currentChapter].text}</p>
//       </motion.div>

//       {/* Navigation Dots */}
//       <div className="flex gap-4 mt-6">
//         {chapters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentChapter(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 
//               ${currentChapter === index ? 'bg-neon-yellow shadow-neon pulse-animation' : 'bg-gray-600 hover:bg-neon-yellow'}`}
//           ></button>
//         ))}
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .text-neon-blue { color: #00ffff; text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff; }
//         .border-neon-yellow { border-color: #ffff00; box-shadow: 0 0 10px #ffff00; }
//         .text-neon-yellow { color: #ffff00; text-shadow: 0 0 5px #ffff00; }
//         .bg-neon-yellow { background-color: #ffff00; }
//         .shadow-neon { box-shadow: 0 0 15px #ffff00; }
//         .pulse-animation {
//           animation: pulse 1.5s infinite alternate;
//         }
//         @keyframes pulse {
//           0% { transform: scale(1); box-shadow: 0 0 10px #ffff00; }
//           100% { transform: scale(1.2); box-shadow: 0 0 20px #ffff00; }
//         }
//       `}</style>
//     </div>
//   );
// } */}











import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap } from "lucide-react"
// import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 text-white py-16 px-1 sm:px-4 lg:px-8">
      <div className="max-w-5xl mx-auto p-6 ">
        {/* Header Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className=" mb-16">
          <h1 className="text-4xl font-bold mb-4 p-6">About Me</h1>
         

    <div className="mx-auto p-6  ">
     
      <p className="text-white text-lg">
      I&apos;m Seerat Fatima a web developer with a passion for both technology and 
             Islamic studies. Alongside my expertise in web development using HTML, CSS, JavaScript, and Next.js, 
             I have completed courses in Seerat and Alima studies, which deepened my understanding of the life and 
             Islamic teachings. I enjoy bringing creativity and purpose to my projects, striving to combine my skills in technology with the values and knowledge I&apos;ve gained from my studies. Through my work, I hope to contribute positively to both the tech world and the broader community. Whether I&apos;m developing user-friendly websites or learning new tech skills, I am always guided by a sense of purpose and a desire to make meaningful contributions.
        <span className="font-semibold">TypeScript, Next.js, and Tailwind CSS</span>. With a keen interest in UI/UX design,
        I love crafting interactive and user-friendly applications that enhance user experiences.
      </p>
      <p className="text-white text-lg mt-4">
        Ever since I wrote my first line of code, I have been fascinated by the power of technology
        to create immersive and meaningful digital experiences. I specialize in <span className="font-semibold">Next.js, TypeScript, and UI/UX Design</span>,
        and I thrive on building modern, scalable, and visually appealing web applications.
      </p>
      <p className="text-white text-lg mt-4">
        My journey into the world of development began with <span className="font-semibold">HTML, CSS, and JavaScript</span>, and over time,
        I expanded my expertise to more advanced technologies like TypeScript, Next.js, and Tailwind CSS.
        I believe that a great user experience is at the heart of every successful application, which is why
        I focus not only on writing clean and efficient code but also on creating intuitive and aesthetically
        pleasing interfaces.
      </p>
    </div>
        </motion.div>
        <div className="mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-white mb-4">My Journey into Web Development</h1>
      <p className="text-white text-lg">
        My journey start 2024 into web development began with a deep curiosity about how websites work.
        I started by learning the basics—<span className="font-semibold">HTML, CSS, and JavaScript</span>—
        and quickly realized my passion for front-end development. As I explored further,
        I discovered the power of <span className="font-semibold">TypeScript and Next.js</span>, which made
        my development process more efficient and enjoyable. With each project, I continue to
        refine my skills and push the boundaries of what I can create.
      </p>
    </div>
          <motion.div
     initial={{ opacity: 0, scale: 0.8 }}
   animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-1"
    >
     <Card className="relative group aspect-[4/5] overflow-hidden border-0 bg-transparent -mb-32">
        {/* <div className="absolute inset-1 rounded-2xl " /> */}
                   <div className="rounded-2xl overflow-hidden transition duration-500 group-hover:scale-105">
          <Image
            src="/image/b-4.jpg"
            alt="Seerat Fatima"
            width={700}
           height={500}
           className="object-cover rounded-2xl "
         />
       </div>
     </Card>
   </motion.div> 
        <div className=" mx-auto p-6 lg:-mt-[498px] overflow-hidden md:-mt-64 shadow-lg rounded-lg">
  <h3 className="text-3xl font-bold text-white mb-4"> My Mission</h3>

  <p className="mt-2 text-lg text-gray-300 leading-relaxed">
  &apos;My mission is to create 
    <span className="text-purple-300 font-semibold"> impactful</span> and 
    <span className="text-purple-300 font-semibold"> innovative</span> web solutions that not only enhance 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> user experiences</span> but also contribute to meaningful 
    technological advancements.&apos;
  </p>

  <p className="mt-4 text-gray-400 italic">
  &apos;I am dedicated to developing 
    <span className="text-purple-300"> scalable</span>, 
    <span className="text-purple-300"> efficient</span>, and 
    <span className="text-purple-300"> highly interactive</span> applications by leveraging modern technologies like 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> TypeScript</span>, 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> Next.js</span>, and 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> Tailwind CSS</span>.&apos;
  </p>

  <p className="mt-4 text-gray-400">
  &apos;I believe in 
    <span className="text-purple-300"> lifelong learning</span>, 
    <span className="text-purple-300"> collaboration</span>, and 
    building <span className="bg-pink-400 hover:bg-pink-500"> digital experiences</span> that leave a lasting impact.&apos;
  </p>

  <p className="mt-4 text-lg text-gray-300 leading-relaxed">
    ✔️ Mastering 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> AI-driven web applications</span> to integrate AI into frontend development.<br />
    ✔️ Developing 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> scalable</span> and 
    <span className="bg-pink-400 hover:bg-pink-500 font-semibold"> efficient</span> web applications.<br />
    ✔️ Contributing to 
    <span className=" bg-pink-400 hover:bg-pink-500 font-semibold"> open-source projects</span> and the global developer community.<br />
    ✔️ Staying ahead by continuously 
    <span className="text-purple-300 font-semibold"> learning</span> the latest technologies.
  </p>
</div>


        

        {/* Education Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold mb-19 flex items-center gap-2">
            <GraduationCap className="text-pink-400" />
            Education
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="bg-white/5 border-none mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">MA ISALAMIYAT </h3>
                <p className="text-gray-300">JAMIYA TUL MADINA</p>
                <p className="text-sm text-gray-400">2019 - 2023</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeInUp} className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Briefcase className="text-pink-400" />
            Experience
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6">
            <Card className="bg-white/5 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Frontend Developer</h3>
                <p className="text-gray-300">Tech Solutions Inc.</p>
                <p className="text-sm text-gray-400 mb-4">2022 - Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed responsive web applications using React and Next.js</li>
                  <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                  <li>Collaborated with cross-functional teams on various projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-400">Web Development Intern</h3>
                <p className="text-gray-300">Digital Innovations</p>
                <p className="text-sm text-gray-400 mb-4">2024 - 2025</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Assisted in developing website features and functionality</li>
                  <li>Learned modern web development practices</li>
                  <li>Participated in code reviews and team meetings</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          {/* <Link href="/resume.pdf" target="_blank"> */}
            <Button
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-xl"
              style={{ boxShadow: "0px 0px 10px rgba(255, 105, 180, 0.3)" }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          {/* </Link> */}
        </motion.div>
      </div>
    </div>
  )
}

