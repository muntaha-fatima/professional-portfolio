// import { Card } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
// import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key, ReactPortal } from "react"

// export default function Skill(){
//     return(
        
//         {/* Skills Section */}
//         <div className="space-y-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
//             <p className="text-muted-foreground mt-2">
//               A comprehensive overview of my technical and academic capabilities
//             </p>
//           </div>

//           <Tabs defaultValue="technical" className="w-full">
//             <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
//               <TabsTrigger value="technical">Technical</TabsTrigger>
//               <TabsTrigger value="islamic">Islamic Studies</TabsTrigger>
//               <TabsTrigger value="soft">Soft Skills</TabsTrigger>
//             </TabsList>

//             {Object.entries(skills).map(([category, categorySkills]) => (
//               <TabsContent key={category} value={category}>
//                 <Card className="backdrop-blur-sm bg-card/50">
//                   <div className="grid gap-4 p-6 sm:grid-cols-2">
//                     {categorySkills.map((skill: { name: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | Key | null | undefined; level: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) => (
//                       <div key={skill.name} className="space-y-2">
//                         <div className="flex justify-between">
//                           <span className="font-medium">{skill.name}</span>
//                           <span className="text-muted-foreground">{skill.level}%</span>
//                         </div>
//                         {/* <Progress value={skill.level} className="h-2" /> */}
//                       </div>
//                     ))}
//                   </div>
//                 </Card>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
      
//     )
// }




// import { Card } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

// interface SkillType {
//   name: string;
//   level: number;
// }

// const skills: Record<string, SkillType[]> = {

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

// export default function Skill() {
//   return (
//     <div className="space-y-8 p-20">
//       {/* Skills Section */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
//         <p className="text-muted-foreground mt-2">
//           A comprehensive overview of my technical and academic capabilities
//         </p>
//       </div>

//       <Tabs defaultValue="technical" className="w-full">
//         <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
//           <TabsTrigger value="technical">Technical</TabsTrigger>
//           <TabsTrigger value="islamic">Islamic Studies</TabsTrigger>
//           <TabsTrigger value="soft">Soft Skills</TabsTrigger>
//         </TabsList>

//         {Object.entries(skills).map(([category, categorySkills]) => (
//           <TabsContent key={category} value={category}>
//             <Card className="backdrop-blur-sm bg-card/50 p-6">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {categorySkills.map((skill) => (
//                   <div key={skill.name} className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="font-medium">{skill.name}</span>
//                       <span className="text-muted-foreground">{skill.level}%</span>
//                     </div>
//                     {/* <Progress value={skill.level} className="h-2" /> */}
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// }







// "use client"


// import { Card } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
// import { Progress } from "@/components/ui/progress"; 
// import { Code, Book, Users } from "lucide-react"; 
// import { motion } from "framer-motion"; 

// interface SkillType {
//   name: string;
//   level: number;
// }

// const skills: Record<string, SkillType[]> = {
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
// };

// export default function Skill() {
//   return (
//     <div className="space-y-8 p-20 relative">
//       {/* Background Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 opacity-30 blur-3xl"></div>

//       {/* Skills Section */}
//       <div className="text-center relative z-10">
//         <h2 className="text-4xl font-bold tracking-tight text-white">🚀 Skills & Expertise</h2>
//         <p className="text-muted-foreground mt-2 text-lg">
//           A comprehensive overview of my technical and academic capabilities
//         </p>
//       </div>

//       {/* Tabs Section */}
//       <Tabs defaultValue="technical" className="w-full relative z-10">
//         <TabsList className="grid w-full grid-cols-3 max-w-[450px] mx-auto bg-gray-800 text-white p-2 rounded-lg shadow-lg">
//           <TabsTrigger value="technical" className="flex items-center gap-2 hover:text-blue-400">
//             <Code size={18} /> Technical
//           </TabsTrigger>
//           <TabsTrigger value="islamic" className="flex items-center gap-2 hover:text-yellow-400">
//             <Book size={18} /> Islamic Studies
//           </TabsTrigger>
//           <TabsTrigger value="soft" className="flex items-center gap-2 hover:text-green-400">
//             <Users size={18} /> Soft Skills
//           </TabsTrigger>
//         </TabsList>

//         {Object.entries(skills).map(([category, categorySkills]) => (
//           <TabsContent key={category} value={category}>
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }} 
//               animate={{ opacity: 1, y: 0 }} 
//               transition={{ duration: 0.5 }}
//               className="p-6"
//             >
//               <Card className="bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 p-8 shadow-xl border border-gray-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   {categorySkills.map((skill) => (
//                     <div key={skill.name} className="space-y-2 group">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-white group-hover:text-blue-400 transition-all duration-300">
//                           {skill.name}
//                         </span>
//                         <span 
//                           className="px-3 py-1 text-xs font-bold rounded-full 
//                           bg-gradient-to-r from-blue-500 to-purple-600 
//                           text-white shadow-md"
//                         >
//                           {skill.level}%
//                         </span>
//                       </div>
//                       <motion.div
//                         initial={{ width: "0%" }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       >
//                         <Progress value={skill.level} className="h-2 bg-gray-800" />
//                       </motion.div>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// }








// "use client";

// import { Card } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
// import { Progress } from "@/components/ui/progress";
// import { Code, Book, Users } from "lucide-react";
// import { motion } from "framer-motion";

// interface SkillType {
//   name: string;
//   level: number;
// }

// const skills: Record<string, SkillType[]> = {
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
// };

// const hoverSkills = [
//   { name: "JavaScript", color: "yellow-500" },
//   { name: "React.js", color: "blue-500" },
//   { name: "TypeScript", color: "indigo-500" },
//   { name: "Node.js", color: "green-500" },
// ];

// export default function Skill() {
//   return (
//     <div className="space-y-8 p-20 relative">
//       {/* Background Glow Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 opacity-30 blur-3xl"></div>

//       {/* Skills Section */}
//       <div className="text-center relative z-10">
//         <h2 className="text-4xl font-bold tracking-tight text-white">🚀 Skills & Expertise</h2>
//         <p className="text-muted-foreground mt-2 text-lg">
//           A comprehensive overview of my technical and academic capabilities
//         </p>
//       </div>

//       {/* Tabs Section */}
//       <Tabs defaultValue="technical" className="w-full relative z-10">
//         <TabsList className="grid w-full grid-cols-3 max-w-[450px] mx-auto bg-gray-800 text-white p-2 rounded-lg shadow-lg">
//           <TabsTrigger value="technical" className="flex items-center gap-2 hover:text-blue-400">
//             <Code size={18} /> Technical
//           </TabsTrigger>
//           <TabsTrigger value="islamic" className="flex items-center gap-2 hover:text-yellow-400">
//             <Book size={18} /> Islamic Studies
//           </TabsTrigger>
//           <TabsTrigger value="soft" className="flex items-center gap-2 hover:text-green-400">
//             <Users size={18} /> Soft Skills
//           </TabsTrigger>
//         </TabsList>

//         {Object.entries(skills).map(([category, categorySkills]) => (
//           <TabsContent key={category} value={category}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="p-6"
//             >
//               <Card className="bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 p-8 shadow-xl border border-gray-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   {categorySkills.map((skill) => (
//                     <div key={skill.name} className="space-y-2 group">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-white group-hover:text-blue-400 transition-all duration-300">
//                           {skill.name}
//                         </span>
//                         <span
//                           className="px-3 py-1 text-xs font-bold rounded-full 
//                           bg-gradient-to-r from-blue-500 to-purple-600 
//                           text-white shadow-md"
//                         >
//                           {skill.level}%
//                         </span>
//                       </div>
//                       <motion.div
//                         initial={{ width: "0%" }}
//                         animate={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.5, ease: "easeInOut" }}
//                       >
//                         <Progress value={skill.level} className="h-2 bg-gray-800" />
//                       </motion.div>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         ))}
//       </Tabs>

//       {/* Additional Skills Section */}
//       <div className="text-center relative z-10 mt-10">
//         <h3 className="text-2xl font-bold text-white">✨ Additional Skills</h3>
//         <p className="text-muted-foreground mt-2">These are some of my highlighted skills</p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
//         {hoverSkills.map((skill, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             className={`p-4 border rounded-lg shadow-lg bg-gray-900 text-${skill.color} text-lg font-semibold text-center transition-all duration-300`}
//           >
//             {skill.name}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }









// "use client";

// import { Card } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
// import { Progress } from "@/components/ui/progress";
// import { Code, Book, Users } from "lucide-react";
// import { motion } from "framer-motion";

// interface SkillType {
//   name: string;
//   level: number;
// }

// const skills: Record<string, SkillType[]> = {
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
// };

// const hoverSkills = [
//   { name: "JavaScript", color: "yellow-500" },
//   { name: "React.js", color: "blue-500" },
//   { name: "TypeScript", color: "indigo-500" },
//   { name: "Node.js", color: "green-500" },
// ];

// export default function Skill() {
//   return (
//     <div className="space-y-8 p-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 opacity-30 blur-3xl"></div>

//       <div className="text-center relative z-10">
//         <h2 className="text-4xl font-bold tracking-tight text-white">🚀 Skills & Expertise</h2>
//         <p className="text-muted-foreground mt-2 text-lg">
//           A comprehensive overview of my technical and academic capabilities
//         </p>
//       </div>

//       <Tabs defaultValue="technical" className="w-full relative z-10">
//         <TabsList className="grid w-full grid-cols-3 max-w-[450px] mx-auto bg-gray-800 text-white p-2 rounded-lg shadow-lg">
//           <TabsTrigger value="technical" className="flex items-center gap-2 hover:text-blue-400">
//             <Code size={18} /> Technical
//           </TabsTrigger>
//           <TabsTrigger value="islamic" className="flex items-center gap-2 hover:text-yellow-400">
//             <Book size={18} /> Islamic Studies
//           </TabsTrigger>
//           <TabsTrigger value="soft" className="flex items-center gap-2 hover:text-green-400">
//             <Users size={18} /> Soft Skills
//           </TabsTrigger>
//         </TabsList>

//         {Object.entries(skills).map(([category, categorySkills]) => (
//           <TabsContent key={category} value={category}>
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6">
//               <Card className="bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 p-8 shadow-xl border border-gray-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   {categorySkills.map((skill) => (
//                     <div key={skill.name} className="space-y-2 group">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-white group-hover:text-blue-400 transition-all duration-300">
//                           {skill.name}
//                         </span>
//                         <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
//                           {skill.level}%
//                         </span>
//                       </div>
//                       <motion.div initial={{ width: "0%" }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.5, ease: "easeInOut" }}>
//                         <Progress value={skill.level} className="h-2 bg-gray-800" />
//                       </motion.div>
//                     </div>
//                   ))}
//                 </div>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         ))}
//       </Tabs>

//       <div className="text-center relative z-10 mt-10">
//         <h3 className="text-2xl font-bold text-white">✨ Additional Skills</h3>
//         <p className="text-muted-foreground mt-2">These are some of my highlighted skills</p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
//         {hoverSkills.map((skill, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.1 }} className={`p-4 border rounded-lg shadow-lg bg-gray-900 text-${skill.color} text-lg font-semibold text-center transition-all duration-300`}>
//             {skill.name}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }









"use client";

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

const hoverSkills = [
  { name: "JavaScript", color: "yellow-500" },
  { name: "React.js", color: "blue-500" },
  { name: "TypeScript", color: "indigo-500" },
  { name: "Node.js", color: "green-500" },
];

export default function Skill() {
  return (
    <div className="space-y-8 p-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-purple-900 to-blue-950 opacity-30 blur-3xl"></div>

      <div className="text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-white"> Skills & Expertise</h2>
        <p className="text-muted-foreground mt-2 text-lg">
          A comprehensive overview of my technical and academic capabilities
        </p>
      </div>

      <Tabs defaultValue="technical" className="w-full relative z-10">
        <TabsList className="grid w-full grid-cols-3 max-w-[500px] items-center mx-auto bg-pink-400 hover:bg-pink-500 text-white p-2 rounded-lg shadow-lg">
          <TabsTrigger value="technical" className="flex items-center  hover:text-blue-400">
            <Code size={18} /> Technical
          </TabsTrigger>
          <TabsTrigger value="islamic" className="flex items-center  hover:text-yellow-400">
            <Book size={18} />Islamic Studies
          </TabsTrigger>
          <TabsTrigger value="soft" className="flex items-center  hover:text-green-400">
            <Users size={18} /> Soft Skills
          </TabsTrigger>
        </TabsList>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <TabsContent key={category} value={category}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6">
              <Card className=" bg-gradient-to-r from-pink-400 via-pink-400 to-pink-400 p-8 shadow-xl border border-gray-700  -rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="grid gap-4 sm:grid-cols-2 ">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-white group-hover:text-blue-400 transition-all duration-300">
                          {skill.name}
                        </span>
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div initial={{ width: "0%" }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.5, ease: "easeInOut" }}>
                        <Progress value={skill.level} className="h-2 bg-pink-400 hover:bg-pink-500 text-white" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center relative z-10 mt-10">
        <h3 className="text-2xl font-bold text-white"> Additional Skills</h3>
        <p className="text-muted-foreground mt-2">These are some of my highlighted skills</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {hoverSkills.map((skill, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} className={`p-4 border rounded-lg shadow-lg bg-pink-400 hover:bg-pink-500 text-white text-${skill.color} text-lg font-semibold text-center transition-all duration-300`}>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
