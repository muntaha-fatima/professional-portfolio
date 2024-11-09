import Image from "next/image"

export default function About() {
    return (
      <div className=" flex flex-col md:flex-row p-10 md:p-40 bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  text-white font-sans">
      <div className="flex-1 mb-30 md:mb-0 animate-slideLeft">
          <h1 className="mr-10 text-yellow-300 text-3xl  md:text-4xl mb-4 font-bold ">About</h1>
          <p className="text-2xl md:text-md  font-light">I&apos;m Seerat Fatima a web developer with a passion for both technology and 
            Islamic studies. Alongside my expertise in web development using HTML, CSS, JavaScript, and Next.js, 
            I have completed courses in Seerat and Alima studies, which deepened my understanding of the life and 
            Islamic teachings. I enjoy bringing creativity and purpose to my projects, striving to combine my skills in technology with the values and knowledge I&apos;ve gained from my studies. Through my work, I hope to contribute positively to both the tech world and the broader community. Whether I&apos;m developing user-friendly websites or learning new tech skills, I am always guided by a sense of purpose and a desire to make meaningful contributions."
             </p>
         
      </div>
      <div className="p-2 w-full lg:w-1/2 h-2/3 lg:h-full flex justify-cente items-star pb-72">
      <Image
      src="/image/b-4.jpg"
      alt="profile"
      layout="responsive"
      width={336}
      height={400}
      className="object-cover h-full w-full rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"

      />
  </div>
  <footer className="bg-[#461e53] p-4 w-screen fixed bottom-0 left-0">
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
  );
  }