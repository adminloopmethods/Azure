"use client";
import React, { useState } from "react";
import icons from "@/assets/icons/azure-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
  ];

  return (
    <header className="w-full bg-white flex flex-col lg:flex-row justify-between pt-2.5 pb-5 px-4 lg:px-10 text-sm font-light relative">
      {/* Top Row: Logo + Hamburger */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link href="/">
          <img
            src={icons.src}
            alt="Azure Innovation Logo"
            className="object-contain w-32 h-14"
          />
        </Link>
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 px-4 pt-5 pb-6 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex gap-2.5 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-full items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              alt="Search icon"
              className="h-full w-auto"
            />
            <input
              type="text"
              placeholder="Search accessories"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative group px-1 py-1 font-medium text-black transition-opacity ${
                  pathname === link.href ? "opacity-100" : "opacity-70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left bg-black ${
                    pathname === link.href ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* CTA Button */}
          <div className="flex justify-center w-full">
            <button className="inline-block text-sm px-2 py-1 border border-black rounded-full w-1/3 text-black whitespace-nowrap transition duration-300 hover:bg-black hover:text-white font-normal">
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-between w-full">
        {/* Search Bar */}
        <div className="flex gap-2.5 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-96 bg-opacity-80 items-center lg:ml-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            className="h-full w-auto"
          />

          <input
            type="text"
            placeholder="Search accessories"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Navigation */}
        <nav
          className="flex flex-row gap-6 items-center ml-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative group px-1 py-1 font-medium text-black transition-opacity ${
                pathname === link.href ? "opacity-100" : "opacity-70"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left bg-black ${
                  pathname === link.href ? "scale-x-100" : ""
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="inline-block text-sm px-3 py-2 border border-black rounded-full text-black whitespace-nowrap transition duration-300 hover:bg-black hover:text-white ml-6 cursor-pointer font-normal">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
