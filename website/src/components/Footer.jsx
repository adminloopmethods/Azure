"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import azureLogo from "@/assets/icons/azure-logo.svg";
import { ServiceBenefits } from "./_homeComponent/ServiceBenefits";

// Footer section data

export const Footer = () => {
  return (
    <div className="lg:h-screen lg:flex lg:flex-col">
      <ServiceBenefits />

      <footer className="max-md:hidden flex-1 w-full bg-white text-sm text-zinc-700 px-24 py-20">
        <div className=" flex justify-between h-full gap-20">
          {/* left */}
          <div className="relative flex flex-col flex-1/3 gap-5">
            <Image
              src={azureLogo}
              alt="Logo"
              width={180}
              className="object-contain relative -top-10"
            />

            <p className="text-lg font-light leading-relaxed text-zinc-700">
              Explore Apple in India — Shop, learn, and connect across devices,
              services, and values.
            </p>

            {/* <p className="text-md font-medium">Call : 98703698212</p> */}
          </div>

          {/* right */}
          <div className="flex flex-col flex-1/3 gap-10">
            <div className="flex gap-3 justify-end text-lg text-zinc-700">
              <a href="#" className="rounded-full bg-black/10 p-2">
                <FaFacebookF />
              </a>
              <a href="#" className="rounded-full bg-black/10 p-2">
                <FaTwitter />
              </a>
              <a href="#" className="rounded-full bg-black/10 p-2">
                <FaLinkedinIn />
              </a>
              <a href="#" className="rounded-full bg-black/10 p-2">
                <FaInstagram />
              </a>
            </div>
            <div className="flex gap-10 py-8">
              {[
                { text: "Home", href: "/" },
                { text: "About", href: "/about" },
                { text: "Contacts", href: "/contact" },
                { text: "Service", href: "/services" },
                { text: "Solutions", href: "/educational-solutions" },
                { text: "Shops", href: "/shops" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="hover:underline text-lg font-light"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-300" />
        <div className="text-neutral-500 mt-5 flex justify-between">
          <p>Copyright © 2025 Azure Inc. All rights reserved.</p>
          <p>India</p>
        </div>
      </footer>

      <footer className="lg:hidden w-full bg-white text-sm text-zinc-700">
        {/* ===== Mobile & Tablet Footer (below lg) ===== */}
        <div className="px-5 flex flex-col min-h-[280px] pt-5 text-xs">
          {/* Logo + Social Icons */}
          <div className="flex items-center justify-between mb-5">
            <Image
              src={azureLogo}
              alt="Logo"
              width={80}
              height={24}
              className="object-contain"
            />
            <div className="flex gap-5 text-lg text-black mt-2">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-sm font-light leading-relaxed text-zinc-700">
            Explore Apple in India — Shop, learn, and connect across devices,
            services, and values.
          </p>

          {/* Navigation Links */}
          {/* <div className="flex justify-between flex-wrap gap-x-4 gap-y-2 mt-6 text-sm font-light"> */}
          <div className="grid grid-cols-2 grid-rows-3 gap-x-10 mt-6 text-sm font-light">
            {[
                { text: "Home", href: "/" },
                { text: "About", href: "/about" },
                { text: "Contacts", href: "/contact" },
                { text: "Service", href: "/services" },
                { text: "Solutions", href: "/educational-solutions" },
                { text: "Shops", href: "/shops" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="hover:underline"
                >
                  {item.text}
                </a>
              ))}
          </div>
        <div className="w-full h-px bg-zinc-300 my-5" />
        <div className="text-neutral-500 mb-0">
          Copyright © 2025 Azure Inc. All rights reserved.
        </div>
        </div>
      </footer>
    </div>
  );
};
