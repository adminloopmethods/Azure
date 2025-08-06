"use client";
import React, { useState } from "react";
import icons from "@/assets/icons/azure-logo.svg";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between flex-col md:flex-row px-6 py-4 sm:px-10 lg:px-[100px] px-[clamp(15px,6.5vw,100px)] md:py-[16px] text-sm font-light">
      {/* Top Row: Logo + Hamburger */}
      <div className="flex justify-between items-center">
        <img
          src={icons.src}
          alt="Azure Innovation Logo"
          className="object-contain shrink-0 aspect-[1.97] w-[100px] sm:w-[122px]"
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
        } flex-col mt-4 gap-[clamp(2px,1.1vw,16px)] md:gap-10 md:flex md:flex-row md:mt-5 md:items-center md:justify-between`}
      >
        {/* Search box */}
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500 w-full md:w-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
          />
          <input
            type="text"
            placeholder="Search accessories"
            className="flex-auto bg-transparent outline-none placeholder-neutral-500 text-sm"
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
