"use client";
import React from "react";
import { icons } from "@/assets/index";
import Link from "next/link";

export const ProductNavigation = () => {
  return (
    <nav className="hidden lg:flex flex-col lg:flex-row flex-wrap items-center gap-5 lg:gap-10 px-5 lg:px-[100px] py-5 w-full text-xs font-light text-white bg-black border-b border-white/10">
      {/* Logo & Badge */}
      <div className="-ml-10 flex gap-2 items-center">
        <img
          src={icons.appleIcon.src}
          alt="Authorized reseller badge"
          className="object-contain shrink-0 w-4 aspect-[0.8] translate-y-[-3px]"
        />
        <span className="w-15">Business Partner</span>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-5 lg:gap-10 items-center ml-auto">
        <Link href="#" className="my-auto">Mac</Link>
        <Link href="#" className="my-auto">iPad</Link>
        <Link href="#" className="my-auto">iPhone</Link>
        <Link href="#" className="my-auto">Watch</Link>
        <Link href="#" className="my-auto">AirPods</Link>
        <Link href="#" className="my-auto">TV & Home</Link>
        <Link href="#" className="my-auto">Accessories</Link>
      </div>
    </nav>
  );
};
