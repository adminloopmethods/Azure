"use client";
import React, { useState } from "react";
import icons from "@/assets/icons/azure-logo.svg";
import { usePathname } from "next/navigation";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="w-full h-21 bg-white flex justify-between flex-col md:flex-row pt-2.5 pb-5 py-2.5 sm:px-10 text-sm font-light">
      {/* Top Row: Logo + Hamburger */}
      <div className="flex justify-between items-center">
        <img
          src={icons.src}
          alt="Azure Innovation Logo"
          className="object-contain shrink-0 w-32 h-14"
        />

        {/* Hamburger Button (visible on small screens only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      

      {/* Collapsible Menu for Mobile + Horizontal for Desktop */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col w-full pl-40 gap-10 md:flex md:flex-row items-center justify-between`}
      >
        {/* Search box */}  
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500 h-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
          />
          <input
            type="text"
            placeholder="Search accessories"
            className="flex-auto bg-transparent outline-none placeholder-neutral-500 w-[424px] text-sm"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col md:flex-row lg:gap-10 gap-[clamp(2px,1.1vw,16px)] mt-2 md:mt-0" role="navigation" aria-label="Main navigation">
          <a href="#" className="font-medium text-black hover:underline hover:opacity-60">
            Home
          </a>
          <a href="#" className="text-black opacity-70 hover:underline hover:opacity-90">
            About
          </a>
          <a href="#" className="text-black opacity-70 hover:underline hover:opacity-90">
            Contact
          </a>
          <a href="#" className="text-black opacity-70 hover:underline hover:opacity-90">
            Blog
          </a>
        </nav>

        {/* CTA Button */}
        <button className="self-start lg:px-6 px-4 min-h-[41px] py-2 text-black text-center border border-black border-solid rounded-[86px] w-fit md:w-auto">
          Get in Touch
        </button>
      </div>
    </header>
  );
};
