
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
