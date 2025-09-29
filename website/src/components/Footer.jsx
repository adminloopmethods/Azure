"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import azureLogo from "@/assets/icons/azure-logo.png";
import { ServiceBenefits } from "./_homeComponent/ServiceBenefits";

export const Footer = () => {
  return (
    <div className="lg:flex lg:flex-col">
      {/* <ServiceBenefits /> */}

      {/* ====== Desktop & Large Screen Footer ====== */}
      <footer className="hidden lg:block w-full bg-white text-sm text-zinc-700 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-start gap-10">
          {/* Left */}
          <div className="flex flex-col gap-5 max-w-md">
            <Image
              src={azureLogo}
              alt="Logo"
              width={180}
              className="object-contain -mt-4"
            />
            <p className="text-lg font-light leading-relaxed text-zinc-700">
              Explore Apple in India — Shop, learn, and connect across devices,
              services, and values.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 items-end">
            <div className="flex gap-3 text-lg text-zinc-700">
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
            <div className="flex flex-wrap gap-6">
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

        {/* Divider + Bottom Row */}
        <div className="max-w-[1440px] mx-auto mt-10">
          <div className="w-full h-px bg-zinc-300" />
          <div className="text-neutral-500 mt-5 flex justify-between text-sm">
            <p>Copyright © 2025 Azure Inc. All rights reserved.</p>
            <p>India</p>
          </div>
        </div>
      </footer>

      {/* ====== Mobile & Tablet Footer ====== */}
      <footer className="lg:hidden w-full bg-white text-sm text-zinc-700">
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
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 mt-6 text-sm font-light">
            {[
              { text: "Home", href: "/" },
              { text: "About", href: "/about" },
              { text: "Contacts", href: "/contact" },
              { text: "Service", href: "/services" },
              { text: "Solutions", href: "/educational-solutions" },
              { text: "Shops", href: "/shops" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="hover:underline">
                {item.text}
              </a>
            ))}
          </div>

          {/* Divider + Copyright */}
          <div className="w-full h-px bg-zinc-300 my-5" />
          <div className="text-neutral-500 mb-0 text-xs">
            Copyright © 2025 Azure Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
