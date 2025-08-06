"use client";
import React from "react";
import {icons} from "@/assets/index"

export const ProductNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center gap-10 px-[100px] py-5 w-full text-xs font-light text-white bg-black border-b border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 items-center ">
        <img
          src={icons.appleIcon.src}
          alt="Authorized reseller badge"
          className="object-contain shrink-0 w-4 aspect-[0.8] translate-y-[-3px]"
        />
        <span className="basis-auto">Authorised Reseller</span>
      </div>
      <div className="flex flex-wrap gap-10 items-center  max-md:max-w-full ">
        <a href="#" className="self-stretch my-auto">
          Mac
        </a>
        <a href="#" className="self-stretch my-auto">
          iPad
        </a>
        <a href="#" className="self-stretch my-auto">
          iPhone
        </a>
        <a href="#" className="self-stretch my-auto">
          Watch
        </a>
        <a href="#" className="self-stretch my-auto">
          AirPods
        </a>
        <a href="#" className="self-stretch my-auto">
          TV & Home
        </a>
        <a href="#" className="self-stretch my-auto">
          Accessories
        </a>
      </div>
    </nav>
  );
};
