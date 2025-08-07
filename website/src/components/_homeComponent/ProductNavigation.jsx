"use client";
import React from "react";
import { icons } from "@/assets/index";
import Link from "next/link";

export const ProductNavigation = () => {
  return (
    <nav className="hidden md:flex flex-wrap items-center gap-10 px-[100px] py-5 w-full text-xs font-light text-white bg-black border-b border-white/10 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center ">
        <img
          src={icons.appleIcon.src}
          alt="Authorized reseller badge"
          className="object-contain shrink-0 w-4 aspect-[0.8] translate-y-[-3px]"
        />
        <span className="basis-auto">Authorised Reseller</span>
      </div>
      <div className="flex flex-wrap ml-[200px] gap-10 items-center  max-md:max-w-full ">
        <Link href="#" className="self-stretch my-auto">
          Mac
        </Link>
        <Link href="#" className="self-stretch my-auto">
          iPad
        </Link>
        <Link href="#" className="self-stretch my-auto">
          iPhone
        </Link>
        <Link href="#" className="self-stretch my-auto">
          Watch
        </Link>
        <Link href="#" className="self-stretch my-auto">
          AirPods
        </Link>
        <Link href="#" className="self-stretch my-auto">
          TV & Home
        </Link>
        <Link href="#" className="self-stretch my-auto">
          Accessories
        </Link>
      </div>
    </nav>
  );
};
