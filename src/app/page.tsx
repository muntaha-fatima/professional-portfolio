// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col md:flex-row p-10 md:p-20 justify-between items-center bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 -mt-12 h-screen">
//       <div className="flex-1 md:mr-8 text-center md:text-left animate-slideLeft">
//         <h1 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-4 animate-pulse">
//           Hi, I&apos;m <span>Seeratfatima</span>
//         </h1>
//         <p className="text-2xl md:text-md">
//           A passionate Web Developer specialized in TypeScript, HTML, CSS, and Next.js.
//         </p>
//         <div className="mt-6 space-x-4">
//           <button className="bg-pink-400 hover:bg-white py-2 px-6 rounded-lg">
//             <a href="/Project">View My Work</a>
//           </button>
//           <button className="text-black bg-white hover:bg-pink-400 py-2 px-6 rounded-lg">
//             <a href="/Contact">Contact Me</a>
//           </button>
//         </div>
//       </div>

  
//       <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3 ">
//         <Image
//           src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="profile"
//           layout="responsive"
//           width={336}
//           height={400}
//           className="object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//         />
//       </div>

    
//       <footer className="hidden md:block bg-[#461e53] p-4 text-center mt-10 md:fixed md:bottom-0 md:left-0 md:right-0">
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//         />
//         <div className="flex justify-center space-x-4">
//         <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
//      <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
//     <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
//         </div>
//         <p className="text-white mt-2">Follow me for more updates</p>
//         <p className="text-yellow-400">Seeratfatima@gmail.com</p>
//       </footer>

// <footer className="md:hidden bg-[#461e53] p-4 text-center mt-10 w-screen -mb-11">
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//         />
//         <div className="flex justify-center space-x-4">
//         <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
//      <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
//     <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
//         </div>
//         <p className="text-white mt-2">Follow me for more updates</p>
//         <p className="text-yellow-400">Seeratfatima@gmail.com</p>
//       </footer>
//     </div>
//   );
// }








// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import Project from "./Project/page";
// import About from "./About/page";
// import Contact from "./Contact/page";
// import Skill from "./skill/page";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  text-white flex flex-col items-center justify-center p-8">
//       {/* Hero Section */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-bold text-pink-400 "
//       >
//       Hi, I&apos;m <span>Seeratfatima</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
//       >
//      A passionate Web Developer specialized in TypeScript, HTML, CSS, and Next.js.<strong>Next.js, TypeScript, and Tailwind CSS</strong>.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         className="mt-6 flex gap-4"
//       >
//         <Link href="/About">
//           <Button className="bg-pink-400  text-white px-6 py-3 rounded-xl hover:bg-pink-400  transition">
//             About Me
//           </Button>
//         </Link>
//         <Link href="/Project">
//           <Button className="bg-pink-400 text-white px-6 py-3 rounded-xl hover:bg-pink-400 transition">
//             View My Work
//           </Button>
//         </Link>
//         <Link href="/Contact">
//           <Button className="bg-pink-400 text-white px-6 py-3 rounded-xl hover:bg-pink-400 transition">
//             Contact
//           </Button>
//         </Link>
//       </motion.div>

//       <div className="home-image-container mt-6 ">
//         <Image
//          src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="profile"
//           width={200}
//           height={200}
//           className="rounded-full border-4 border--500"
//         />
//       </div>
//       <About>
//       </About>
//       <Skill/>
//       <Project>
//       </Project>
//       <Contact>
//       </Contact>
//     </div>
//   );
// }











// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";
// import Project from "./Project/page";
// import About from "./About/page";
// import Contact from "./Contact/page";
// import Skill from "./skill/page";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 text-white flex flex-col items-center justify-center p-8">
//       {/* Hero Section */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20, scale: 0.8 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-5xl font-bold text-pink-400 drop-shadow-lg"
//       >
//         Hi, I&apos;m{" "}
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-yellow-400 glow"
//         >
//           Seeratfatima
//         </motion.span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
//       >
//         A passionate Web Developer specialized in{" "}
//         <strong className="text-yellow-400">TypeScript, HTML, CSS, and Next.js.</strong>
//       </motion.p>

//       {/* Buttons Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="mt-6 flex gap-4"
//       >
//         {[
//           { href: "/About", text: "About Me" },
//           { href: "/Project", text: "View My Work" },
//           { href: "/Contact", text: "Contact" },
//         ].map((btn, index) => (
//           <motion.div
//             key={btn.href}
//             whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255, 105, 180, 0.8)" }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <Link href={btn.href}>
//               <Button className="bg-pink-400 text-white px-6 py-3 rounded-xl transition">
//                 {btn.text}
//               </Button>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Profile Image with Reveal Animation */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
//         className="home-image-container mt-6"
//       >
//         <Image
//           src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//           alt="profile"
//           width={200}
//           height={200}
//           className="rounded-full border-4 border-pink-400 shadow-lg"
//         />
//       </motion.div>

//       {/* Sections with Scroll Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <About />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         <Skill />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.6 }}
//       >
//         <Project />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.9 }}
//       >
//         <Contact />
//       </motion.div>
//     </div>
//   );
// }











// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import Image from "next/image"
// import Project from "./Project/page"
// import About from "./About/page"
// import Contact from "./Contact/page"
// import Skill from "./skill/page"

// // Text animation variants
// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: [0.6, -0.05, 0.01, 0.99]
//     }
//   })
// }

// // Letter animation variants
// const letterVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.05,
//       duration: 0.5,
//       ease: [0.6, -0.05, 0.01, 0.99]
//     }
//   })
// }

// export default function Home() {
//   const name = "Seeratfatima".split("")
  
//   return (
//     <div className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 text-white flex flex-col items-center justify-center p-8">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//           className="text-5xl font-bold text-white drop-shadow-lg flex flex-wrap justify-center items-center gap-x-3"
//         >
//           <motion.span variants={textVariants} custom={0}>
//             Hi, I&apos;m
//           </motion.span>
//           <div className="flex">
//             {name.map((letter, i) => (
//               <motion.span
//                 key={i}
//                 variants={letterVariants}
//                 custom={i + 1}
//                 className="text-pink-400 inline-block"
//                 whileHover={{
//                   scale: 1.2,
//                   rotate: [-5, 5, 0],
//                   transition: { duration: 0.3 }
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </div>
//         </motion.h1>

//         <motion.p
//           initial="hidden"
//           animate="visible"
//           variants={textVariants}
//           custom={2}
//           className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
//         >
//           A passionate Web Developer specialized in{" "}
//           <motion.strong 
//             className="text-silver"
//             whileHover={{
//               scale: 1.1,
//               color: "#FCD34D",
//               transition: { duration: 0.2 }
//             }}
//           >
//             TypeScript, HTML, CSS, and Next.js.
//           </motion.strong>
//         </motion.p>
//       </motion.div>

//       {/* Buttons Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="mt-6 flex gap-4"
//       >
//         {[
//           { href: "/About", text: "About Me" },
//           { href: "/Project", text: "View My Work" },
//           { href: "/Contact", text: "Contact" },
//         ].map((btn, index) => (
//           <motion.div
//             key={btn.href}
//             whileHover={{ 
//               scale: 1.1,
//               boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.8)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
//           >
//             <Link href={btn.href}>
//               <Button 
//                 className="bg-pink-400 text-white px-6 py-3 rounded-xl transition hover:bg-pink-500"
//                 style={{ boxShadow: "0px 0px 10px rgba(255, 105, 180, 0.3)" }}
//               >
//                 {btn.text}
//               </Button>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Profile Image with Floating Animation */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
//         className="mt-6"
//       >
//         <motion.div
//           animate={{
//             y: [-10, 10, -10],
//             rotate: [-2, 2, -2],
//           }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           <Image
//             src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
//             alt="profile"
//             width={400}
//             height={300}
//             className="rounded-full -inset-18  border-4 border-pink-400 "
//           />
//           <motion.div
//             className="absolute -inset-18 rounded-full "
//             animate={{
//               boxShadow: [
//                 "0 0 20px rgba(236, 72, 153, 0.3)",
//                 "0 0 40px rgba(236, 72, 153, 0.2)",
//                 "0 0 20px rgba(236, 72, 153, 0.3)",
//               ]
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Sections with Enhanced Scroll Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ 
//           opacity: 1, 
//           y: 0,
//           transition: {
//             type: "spring",
//             stiffness: 50,
//             damping: 20
//           }
//         }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <About />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ 
//           opacity: 1, 
//           y: 0,
//           transition: {
//             type: "spring",
//             stiffness: 50,
//             damping: 20,
//             delay: 0.2
//           }
//         }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <Skill />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ 
//           opacity: 1, 
//           y: 0,
//           transition: {
//             type: "spring",
//             stiffness: 50,
//             damping: 20,
//             delay: 0.4
//           }
//         }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <Project />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ 
//           opacity: 1, 
//           y: 0,
//           transition: {
//             type: "spring",
//             stiffness: 50,
//             damping: 20,
//             delay: 0.6
//           }
//         }}
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <Contact />
//       </motion.div>
//     </div>
//   )
// }



// 'use client'
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const chapters = [
//   { title: 'Chapter 1: The Beginning', text: 'Javeria started her coding journey with curiosity and passion.' },
//   { title: 'Chapter 2: First Breakthrough', text: 'She built her first project using HTML, CSS, and JavaScript.' },
//   { title: 'Chapter 3: Mastering TypeScript', text: 'Her love for TypeScript and Next.js grew as she took on challenging projects.' },
//   { title: 'Chapter 4: Hackathon Experience', text: 'She participated in hackathons and built an interactive resume builder.' },
//   { title: 'Chapter 5: Future Goals', text: 'Javeria aims to become an expert in AI and Web Development.' }
// ];

// export default function StoryPortfolio() {
//   const [currentChapter, setCurrentChapter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentChapter((prev) => (prev + 1) % chapters.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-5">
//       <motion.h1
//         className="text-3xl font-bold mb-4 text-neon-blue"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Javeria's Cyberpunk Story Portfolio
//       </motion.h1>

//       {/* About Section */}
//       <motion.div
//         className="p-6 bg-gray-900 rounded-lg shadow-lg border border-neon-pink text-center mb-6"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-xl font-semibold mb-2 text-neon-green">Who am I?</h2>
//         <p className="text-gray-300 hacker-text">Javeria | Web Dev | TypeScript Expert</p>
//       </motion.div>

//       <motion.div
//         key={currentChapter}
//         className="max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg border border-neon-pink"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-xl font-semibold mb-2 text-neon-green">{chapters[currentChapter].title}</h2>
//         <p className="text-gray-300">{chapters[currentChapter].text}</p>
//       </motion.div>
//       <div className="flex gap-4 mt-6">
//         {chapters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentChapter(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 ${currentChapter === index ? 'bg-neon-yellow shadow-neon' : 'bg-gray-600'}`}
//           ></button>
//         ))}
//       </div>
//       <style jsx>{`
//         .text-neon-blue { color: #00ffff; text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff; }
//         .border-neon-pink { border-color: #ff00ff; box-shadow: 0 0 10px #ff00ff; }
//         .text-neon-green { color: #00ff00; text-shadow: 0 0 5px #00ff00; }
//         .bg-neon-yellow { background-color: #ffff00; }
//         .shadow-neon { box-shadow: 0 0 10px #ffff00; }
//         .hacker-text { font-family: 'Courier New', monospace; color: #00ff00; text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00; animation: glitch 1s infinite alternate; }
//         @keyframes glitch {
//           0% { transform: translateX(0); }
//           50% { transform: translateX(2px); }
//           100% { transform: translateX(-2px); }
//         }
//       `}</style>
//     </div>
//   );
// }
























"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Project from "./Project/page"
import About from "./About/page"
import Contact from "./Contact/page"
import Skill from "./skill/page"

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
}

// Letter animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
}

export default function Home() {
  const name = "Seeratfatima".split("")

  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 text-white flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-5xl font-bold text-white drop-shadow-lg flex flex-wrap justify-center items-center gap-x-3"
        >
          <motion.span variants={textVariants} custom={0}>
            Hi, I&apos;m
          </motion.span>
          <div className="flex">
            {name.map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                custom={i + 1}
                className="text-pink-400 inline-block"
                whileHover={{
                  scale: 1.2,
                  rotate: [-5, 5, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="mt-4 text-lg text-gray-300 text-center max-w-2xl"
        >
          A passionate Web Developer specialized in{" "}
          <motion.strong
            className="text-silver"
            whileHover={{
              scale: 1.1,
              color: "#FCD34D",
              transition: { duration: 0.2 },
            }}
          >
            TypeScript, HTML, CSS, and Next.js.
          </motion.strong>
        </motion.p>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 flex gap-4"
      >
        {[
          { href: "/About", text: "About Me" },
          { href: "/Project", text: "View My Work" },
          { href: "/Contact", text: "Contact" },
        ].map((btn, index) => (
          <motion.div
            key={btn.href}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
          >
            <Link href={btn.href}>
              <Button
                className="bg-pink-400 text-white px-6 py-3 rounded-xl transition hover:bg-pink-500"
                style={{ boxShadow: "0px 0px 10px rgba(255, 105, 180, 0.3)" }}
              >
                {btn.text}
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Profile Image with Floating Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="mt-6"
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
            alt="profile"
            width={400}
            height={300}
            className="rounded-full -inset-18  border-4 border-pink-400 "
          />
          <motion.div
            className="absolute -inset-18 rounded-full "
            animate={{
              boxShadow: [
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(236, 72, 153, 0.2)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Sections with Enhanced Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
          },
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.2,
          },
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Skill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.4,
          },
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Project />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.6,
          },
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>
    </div>
  )
}

