import Image from "next/image"
export default function Project() {
    return (
        
        <div className="flex flex-col pb-72 items-center justify-center min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  rounded-lg font-sans ">
              <  div className="flex-1"></div>
            <h1 className="text-3xl font-bold mb-16 ">My project</h1>

        <div className=" gap-4">
        
        <div className="bg-white shadow-md rounded-md p-4 w-64 animate-slideLeft">
            <Image
              src="/image/Screenshot 2024-11-08 200729.png"
              alt="Product 1"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-2"></h3>
            <p className="text-black font-bold">A simple, functional calculator built with HTML, CSS, and JavaScript This project showcases my ability to build basic applications using HTML structureCSS styling, and JavaScript for interactive 
              functionality. Users can perform basic arithmetic operations like addition, subtraction, multiplication, and division 
              in a user-friendly interface. <a className="underline text-blue-400" href="https://calculator-muntaha-fatimas-projects.vercel.app/"><i className="fas fa-link text-3xl"></i></a> </p>
            <ul>
            <li></li>
          </ul>

        </div><br />
          </div>
          
        <div className="flex flex-wrap justify-center gap-10  md:-inset-12 animate-slideLeft">
          <div className="bg-white shadow-md rounded-md p-4 w-64">
            <Image
              src="/image/Screenshot 2024-11-09 124247.png"
              alt="Product 2"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-2"></h3>
            <p className="text-black font-bold"> My personal portfolio website created with HTML and CSS, designed to showcase my projects,
               skills, and journey in web development. This project focuses on clean design, responsive layout, and an engaging user
                experience, presenting a well-organized view of my work and experience.<a className="underline text-blue-400" href="https://create-portfolio-eosin.vercel.app/"><i className="fas fa-link text-3xl"></i></a>  </p>
          
          </div>
         
          <div className="flex flex-wrap justify-center gap-10 animate-slideLeft text-ellipsis ">
          <div className="bg-white shadow-md rounded-md p-4 w-64">
            <Image
              src="/image/Screenshot 2024-11-09 124150.png"
              alt="Product 3"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-2"></h3>
            <p className="text-black font-bold">A static resume created with HTML and CSS, designed to present professional 
              information in a clear, structured format. This page includes sections for personal information, work experience, 
              education, skills, and contact details. The single-page layout is ideal for showcasing a resume online, offering a 
              straightforward and visually appealing way to display my qualifications.

<a className="underline text-blue-400" href="http://resume-delta-orcin.vercel.app/"><i className="fas fa-link text-3xl"></i></a></p>
          </div>
          </div>
      <div className="flex flex-wrap justify-center gap-10 max-h-96 animate-slideLeft">
          <div className="bg-white shadow-md rounded-md p-4 w-64">
            <Image
              src="/image/Screenshot 2024-11-09 124107.png"
              alt="Product 4"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-2"></h3>
            <p className="text-black font-bold">A multi-page website built with Next.js, with dedicated pages for Home, About,
               and Contact. This project showcases my ability to use Next.js for creating a well-organized, multi-page website
                with efficient routing, providing a smooth and fast user experience<a className="underline text-blue-400" href="https://next-js-theta-hazel.vercel.app/">  <i className="fas fa-link text-3xl"></i></a> </p>
          </div></div><br />
          <br />
          <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white shadow-md rounded-md p-4 w-64 mt-24 animate-slideLeft">
            <Image
              src="/image/Screenshot 2024-11-09 124958.png"
              alt="Product 4"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-12 text-black">A Figma design prototype showcasing the layout and user interface of my portfolio or
            resume project.</h3>
            <p className="text-black font-bold "> This design serves as a blueprint for development, focusing on a clean and visually engaging layout.
                I used Figma&apos;s design tools to create a user-centric interface, ensuring a smooth transition from concept to code<a className="underline text-blue-400" href="https://figma-assignment-eight.vercel.app/"><i className="fas fa-link text-1xl"></i></a> </p>

          </div>
          </div>
    </div>
    
     
     <footer className="bg-[#461e53] p-4 w-full fixed bottom-0 left-0 right-0">
     <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
   />
   
   <div className="flex justify-center items-center ">
   <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
     <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
    <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a> 
   </div>
   
     <p className="text-center text-white">Follow me for more updates</p>
     <p className="text-center text-yellow-400">Seeratfatima@gamail.com</p>
   
     </footer>
     </div>
     
    )
};