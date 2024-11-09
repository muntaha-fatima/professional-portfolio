import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row p-10 md:p-20 justify-between items-center bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 -mt-12 h-screen">
      <div className="flex-1 md:mr-8 text-center md:text-left animate-slideLeft">
        <h1 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-4 animate-pulse">
          Hi, I&apos;m <span>Seeratfatima</span>
        </h1>
        <p className="text-2xl md:text-md">
          A passionate Web Developer specialized in TypeScript, HTML, CSS, and Next.js.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-pink-400 hover:bg-white py-2 px-6 rounded-lg">
            <a href="/Project">View My Work</a>
          </button>
          <button className="text-black bg-white hover:bg-pink-400 py-2 px-6 rounded-lg">
            <a href="/Contact">Contact Me</a>
          </button>
        </div>
      </div>

  
      <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/3 ">
        <Image
          src="/image/arab-woman-niqab-works-with-laptop-symbolizing-challenges-faced-by-women-arab-world-engage-entrepreneurial-pursuits-generative-ai_213438-10662.jpg"
          alt="profile"
          layout="responsive"
          width={336}
          height={400}
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        />
      </div>

    
      <footer className="hidden md:block bg-[#461e53] p-4 text-center mt-10 md:fixed md:bottom-0 md:left-0 md:right-0">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <div className="flex justify-center space-x-4">
        <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
     <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
    <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
        </div>
        <p className="text-white mt-2">Follow me for more updates</p>
        <p className="text-yellow-400">Seeratfatima@gmail.com</p>
      </footer>

<footer className="md:hidden bg-[#461e53] p-4 text-center mt-10 w-screen -mb-11">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <div className="flex justify-center space-x-4">
        <a href="https://github.com/muntaha-fatima"><i className="fab fa-github text-2xl mr-4"></i></a>
     <a href="https://www.instagram.com/seeratfatima39?igsh=YTBrMjIwNWpwanJ3"><i className="fab fa-instagram text-2xl mr-4 text-fuchsia-800"></i></a> 
    <a href="https://www.linkedin.com/in/seerat-fatima-9281892b6/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1HqQeswQ%2B2Xyv1A280CZQ%3D%3D"><i className="fab fa-linkedin text-2xl text-blue-500"></i></a>
        </div>
        <p className="text-white mt-2">Follow me for more updates</p>
        <p className="text-yellow-400">Seeratfatima@gmail.com</p>
      </footer>
    </div>
  );
}
