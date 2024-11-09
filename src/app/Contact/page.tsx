export default function Contact() {
    return (
        <div className="flex flex-col  pb-72 items-center justify-center min-h-screen bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950  rounded-lg font-sans">
            <h1 className="text-3xl font-bold mb-6 pb-70">Contact Us</h1>
            <form className="bg-gradient-to-br from-[#4c2569] p-8 rounded shadow-md w-full max-w-md text-black transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-4 ">
                    <label className="block text-white text-sm font-bold mb-2 " htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-3 py-2 border rounded"
                        
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
            <footer className="bg-[#461e53] p-4 w-full fixed bottom-0">
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
