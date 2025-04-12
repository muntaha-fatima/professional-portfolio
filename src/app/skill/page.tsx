
"use client"


import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Progress } from "@/components/ui/progress"; 
import { Code, Book, Users } from "lucide-react"; 
import { motion } from "framer-motion"; 

interface SkillType {
  name: string;
  level: number;
}

const skills: Record<string, SkillType[]> = {
  technical: [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "UI/UX Design", level: 70 },
  ],
  islamic: [
    { name: "Islamic Studies", level: 95 },
    { name: "Seerat", level: 90 },
    { name: "Alima Course", level: 95 },
    { name: "Arabic Language", level: 85 },
    { name: "Tafseer", level: 85 },
    { name: "Hadith Studies", level: 90 },
  ],
  soft: [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Team Collaboration", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Research", level: 90 },
    { name: "Teaching", level: 85 },
  ],
};

export default function Skill() {
  return (
    <div className="space-y-8 p-20 relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 opacity-30 blur-3xl"></div>

      {/* Skills Section */}
      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-white">🚀 Skills & Expertise</h2>
        <p className="text-muted-foreground mt-2 text-lg">
          A comprehensive overview of my technical and academic capabilities
        </p>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="technical" className="w-full relative z-10">
        <TabsList className="grid w-full grid-cols-3 max-w-[450px] mx-auto bg-gray-800 text-white p-2 rounded-lg shadow-lg">
          <TabsTrigger value="technical" className="flex items-center gap-2 hover:text-blue-400">
            <Code size={18} /> Technical
          </TabsTrigger>
          <TabsTrigger value="islamic" className="flex items-center gap-2 hover:text-yellow-400">
            <Book size={18} /> Islamic Studies
          </TabsTrigger>
          <TabsTrigger value="soft" className="flex items-center gap-2 hover:text-green-400">
            <Users size={18} /> Soft Skills
          </TabsTrigger>
        </TabsList>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <TabsContent key={category} value={category}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <Card className="bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 p-8 shadow-xl border border-gray-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white group-hover:text-blue-400 transition-all duration-300">
                          {skill.name}
                        </span>
                        <span 
                          className="px-3 py-1 text-xs font-bold rounded-full 
                          bg-gradient-to-r from-blue-500 to-purple-600 
                          text-white shadow-md"
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      >
                        <Progress value={skill.level} className="h-2 bg-gray-800" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
