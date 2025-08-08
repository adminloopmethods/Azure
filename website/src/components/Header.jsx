"use client";
import React, { useState } from "react";
import icons from "@/assets/icons/azure-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
    { label: "Solutions", isDropdown: true },
    { href: "/shops", label: "Shops" },
  ];

  const solutionLinks = [
    { href: "/educational-solutions", label: "Educational Solutions" },
    { href: "/corporate-solutions", label: "Corporate Solutions" },
    { href: "/hospital-solutions", label: "Hospital Solutions" },
    { href: "/other-solutions", label: "Other Solutions" },
  ];

  return (
    <header className="w-full bg-white flex flex-col xl:flex-row items-end justify-between pt-2.5 pb-5 px-4 xl:px-10 text-sm font-light relative">
      {/* Logo */}
      <div className="flex justify-between items-center w-full xl:w-auto">
        <Link href="/">
          <img
            src={icons.src}
            alt="Azure Innovation Logo"
            className="object-contain w-32 h-14"
          />
        </Link>
        {/* Mobile Hamburger (visible until xl) */}
        <button
          className="xl:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 px-4 pt-5 pb-6 flex flex-col gap-6">
          {/* Search */}
          <div className="flex gap-2.5 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-full items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099"
              alt="Search icon"
              className="h-full w-auto"
            />
            <input
              type="text"
              placeholder="Search accessories"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col gap-4 items-center">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="relative w-full flex flex-col items-center">
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="relative px-1 py-1 font-medium text-black opacity-70 hover:opacity-100 nav-link cursor-pointer"
                  >
                    {link.label} ▼
                  </button>
                  {solutionsOpen && (
                    <div className="mt-2 flex flex-col gap-1 items-center w-full bg-white shadow-lg p-2 rounded-md">
                      {solutionLinks.map((sLink) => (
                        <a
                          key={sLink.href}
                          href={sLink.href}
                          className={`px-3 py-1 w-full text-center text-black text-sm rounded-md hover:bg-gray-100 nav-link ${
                            pathname === sLink.href ? "active" : ""
                          }`}
                        >
                          {sLink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-1 font-medium text-black nav-link ${
                    pathname === link.href ? "active" : "opacity-70"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="flex justify-center w-full">
            <button className="inline-block text-sm px-2 py-1 border border-black rounded-full w-1/3 text-black whitespace-nowrap hover:bg-black hover:text-white font-normal">
              Whatsapp
            </button>
          </div>
        </div>
      )}

      {/* Desktop Menu (only xl and above) */}
      <div className="hidden xl:flex items-center justify-between w-full">
        {/* Search + Nav in one row */}
        <div className="flex items-center gap-6 flex-1 ml-32">
          {/* Search Bar */}
          <div className="flex gap-2.5 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-80 items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099"
              alt="Search icon"
              className="h-full w-auto"
            />
            <input
              type="text"
              placeholder="Search accessories"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="flex flex-row gap-6 items-center">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className={`px-1 py-1 font-medium text-black nav-link ${
                      solutionsOpen ? "active" : "opacity-70"
                    }`}
                  >
                    {link.label} ▼
                  </button>
                  {solutionsOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-2 rounded-md flex flex-col gap-1 w-56 z-50">
                      {solutionLinks.map((sLink) => (
                        <a
                          key={sLink.href}
                          href={sLink.href}
                          className={`px-3 py-1 text-black text-sm rounded-md hover:bg-gray-100 nav-link ${
                            pathname === sLink.href ? "active" : ""
                          }`}
                        >
                          {sLink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-1 font-medium text-black nav-link ${
                    pathname === link.href ? "active" : "opacity-70"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>

        {/* CTA */}
        <button className="inline-block text-sm px-3 py-2 border border-black rounded-full text-black whitespace-nowrap hover:bg-black hover:text-white cursor-pointer font-normal">
          Whatsapp
        </button>
      </div>

      {/* CSS for Line Animation */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: opacity 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #D3D3D3;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          opacity: 1 !important;
        }
      `}</style>
    </header>
  );
};

export default Header;