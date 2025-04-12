
"use client"

import React from "react"
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
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
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
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
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
                  transition: { duration: 0.3 }
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
              transition: { duration: 0.2 }
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
            repeat: Infinity,
            ease: "easeInOut"
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
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
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
            damping: 20
          }
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
            delay: 0.2
          }
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
            delay: 0.4
          }
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
            delay: 0.6
          }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Contact />
      </motion.div>
    </div>
  )
  
}

