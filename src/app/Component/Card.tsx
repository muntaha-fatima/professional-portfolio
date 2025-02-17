// import Image from "next/image"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { ExternalLink } from "lucide-react"

// interface CardProps {
//   imageSrc: string
//   title: string
//   description: string
//   link: string
// }

// export function ProjectCard({ imageSrc, title, description, link }: CardProps) {
//   return (
//     <Card className="w-full max-w-sm overflow-hidden bg-white">
//       <CardHeader className="p-0">
//         <div className="relative aspect-video overflow-hidden">
//           <Image
//             src={imageSrc}
//             alt={title}
//             fill
//             className="object-cover transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       </CardHeader>
//       <CardContent className="p-4">
//         <h3 className="mb-2 font-bold text-lg">{title}</h3>
//         <p className="text-gray-700">{description}</p>
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
//         >
//           View Project <ExternalLink className="h-4 w-4" />
//         </a>
//       </CardContent>
//     </Card>
//   )
// }

// export { Card }




import Image from "next/image";
 interface CardProps {
   imageSrc: string
   title: string
   description: string
   link: string
 }
export function Card({ imageSrc, title, description, link }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageSrc} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <a href={link} target="_blank" className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
}
