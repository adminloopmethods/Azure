"use client";
import React, { useState } from "react";
import icons from "@/assets/icons/azure-logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import EnquireNow from "@/components/_homeComponent/EnquireNow";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showEnquire, setShowEnquire] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { label: "Services", isDropdown: true, type: "services" },
    { label: "Solutions", isDropdown: true, type: "solutions" },
    { href: "/shops", label: "Shops" },
  ];

  const solutionLinks = [
    { href: "/educational-solutions", label: "Educational Solutions" },
    { href: "/corporate-solutions", label: "Corporate Solutions" },
    { href: "/hospital-solutions", label: "Hospital Solutions" },
    { href: "/other-solutions", label: "Other Solutions" },
  ];

  const serviceLinks = [
    { href: "/services/software-services", label: "Software Services" },
    { href: "/services/hardware-services", label: "Hardware Services" },
    { href: "/services/it-professional-services", label: "IT Professional Services" },
    { href: "/services/streaming-services", label: "Streaming Services" },
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
        {/* Mobile Hamburger */}
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
          {/* <div className="flex gap-2.5 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-full items-center">
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
          </div> */}

          {/* Mobile Nav */}
          <nav className="flex flex-col gap-4 items-center">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div
                  key={link.label}
                  className="relative w-full flex flex-col items-center"
                >
                  <button
                    onClick={() =>
                      link.type === "solutions"
                        ? setSolutionsOpen(!solutionsOpen)
                        : setServicesOpen(!servicesOpen)
                    }
                    className="relative px-1 py-1 font-medium text-black opacity-70 hover:opacity-100 nav-link cursor-pointer flex items-center gap-1"
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-300 ${
                        (link.type === "solutions" && solutionsOpen) ||
                        (link.type === "services" && servicesOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {link.type === "solutions" && solutionsOpen && (
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

                  {link.type === "services" && servicesOpen && (
                    <div className="mt-2 flex flex-col gap-1 items-center w-full bg-white shadow-lg p-2 rounded-md">
                      {serviceLinks.map((sLink) => (
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
            <button
              onClick={() => setShowEnquire(true)}
              className="inline-block text-sm px-2 py-1 border border-black rounded-full w-1/3 text-black whitespace-nowrap hover:bg-black hover:text-white font-normal"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden xl:flex items-center justify-between w-full">
        {/* Search */}
        {/* <div className="flex gap-2.5 ml-32 px-3 py-2 border border-zinc-300 rounded-full text-neutral-500 h-9 w-80 items-center">
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
        </div> */}

        {/* Nav + CTA */}
        <div className="flex items-center gap-6 ml-auto">
          <nav className="flex flex-row gap-6 items-center">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      link.type === "solutions"
                        ? setSolutionsOpen(!solutionsOpen)
                        : setServicesOpen(!servicesOpen)
                    }
                    className="relative px-1 py-1 font-medium text-black opacity-70 hover:opacity-100 nav-link cursor-pointer flex items-center gap-1"
                  >
                    {link.label}
                    <MdKeyboardArrowDown
                      className={`transition-transform duration-300 ${
                        (link.type === "solutions" && solutionsOpen) ||
                        (link.type === "services" && servicesOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Solutions dropdown */}
                  {link.type === "solutions" && solutionsOpen && (
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

                  {/* Services dropdown */}
                  {link.type === "services" && servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-2 rounded-md flex flex-col gap-1 w-56 z-50">
                      {serviceLinks.map((sLink) => (
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

          {/* CTA */}
          <button
            onClick={() => setShowEnquire(true)}
            className="inline-block text-sm px-3 py-2 border border-black rounded-full text-black whitespace-nowrap hover:bg-black hover:text-white cursor-pointer font-normal"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* EnquireNow Popup */}
      {showEnquire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <EnquireNow onClose={() => setShowEnquire(false)} />
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        .nav-link {
          position: relative;
          transition: opacity 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #d3d3d3;
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