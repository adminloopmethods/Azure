"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import azureLogo from "@/assets/icons/azure-logo.svg";

// Footer section data
const footerSections = [
  {
    heading: "Shop and Learn",
    links: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    heading: "Services",
    links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud+", "Apple One", "Apple Card", "Apple Books", "Apple Podcasts", "App Store"],
    subSections: [
      {
        heading: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
    ],
  },
  {
    heading: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    subSections: [
      {
        heading: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        heading: "For Healthcare",
        links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
      },
      {
        heading: "For Government",
        links: ["Shop for Government", "Shop for Veterans and Military"],
      },
    ],
  },
  {
    heading: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"],
    subSections: [
      {
        heading: "About Apple",
        links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-white text-sm py-10 text-zinc-700">

      {/* ===== Desktop Footer (lg and up) ===== */}
      <div className="hidden lg:block px-[100px] max-xl:px-16 max-lg:px-10 max-md:px-5">
        <div className="max-w-[1239px] mx-auto">
          {/* Sections */}
          <div className="flex flex-wrap justify-between gap-y-10 text-xs leading-snug">
            {footerSections.map((section, i) => (
              <div key={i} className="flex flex-col min-w-[150px] max-w-xs pr-6">
                <h4 className="text-base font-semibold text-zinc-800 mb-3">{section.heading}</h4>
                {section.links.map((link, j) => (
                  <a key={j} href="#" className="mt-2.5 hover:underline">{link}</a>
                ))}
                {section.subSections?.map((sub, k) => (
                  <div key={k} className="mt-6">
                    <h5 className="text-sm font-semibold text-zinc-800 mb-2">{sub.heading}</h5>
                    {sub.links.map((link, l) => (
                      <a key={l} href="#" className="block mt-2 hover:underline">{link}</a>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Contact and Divider */}
          <div className="mt-10 text-xs text-black">Call : 98703698212</div>

          {/* Divider */}
        <div className="w-full h-px bg-zinc-300 my-6" />

          {/* Legal + Country */}
          <div className="flex flex-wrap justify-between items-center mt-4 gap-y-4 text-sm text-zinc-700">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-neutral-500">© 2022 Azure Inc. All rights reserved.</span>
              {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((text, i, arr) => (
                <React.Fragment key={i}>
                  <a href="#" className="hover:underline">{text}</a>
                  {i < arr.length - 1 && <span className="w-px h-4 bg-zinc-400 mx-1" />}
                </React.Fragment>
              ))}
            </div>
            <div className="ml-auto">India</div>
          </div>
        </div>
      </div>

      {/* ===== Mobile & Tablet Footer (below lg) ===== */}
      <div className="lg:hidden flex flex-col px-5 pt-10 text-center text-xs">
        {/* Logo + Social Icons */}
        <div className="flex items-center justify-between">
          <Image
            src={azureLogo}
            alt="Logo"
            width={80}
            height={24}
            className="object-contain"
          />
          <div className="flex gap-3 text-lg text-zinc-700">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Info Text */}
        <p className="mt-6 text-sm leading-relaxed text-zinc-700">
          Explore Apple in India — Shop, learn, and connect across devices, services, and values.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-6 text-sm font-medium">
          {["Home", "About", "Contact Us", "Blog"].map((text, i) => (
            <a key={i} href="#" className="hover:underline">{text}</a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-300 my-6" />

        {/* Copyright */}
        <div className="text-neutral-500 mb-8">
          © 2025 Azure Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
