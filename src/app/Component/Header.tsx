"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gradient-to-l from-blue-950 via-purple-950 to-blue-950 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <h1 className="md:text-4xl m-3 ml-20 flex-row font-bold font-serif"><span className="text-pink-400 font-extrabold text-3xl" >S</span>eerat <span className="text-pink-400 font-extrabold text-3xl">P</span>ortfolio</h1>
                

                <nav className="hidden md:flex gap-6 text-2xl mr-28 font-sans">
                    <ul className="flex gap-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Project">Projects</Link></li>
                        <li><Link href="/skill">Skill</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                      
                    </ul>
                </nav>

                <div className="md:hidden text-2xl">
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        &#9776;
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="md:hidden font-sans">
                    <ul className="flex flex-col gap-4 mt-4 text-center">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Project">Projects</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}