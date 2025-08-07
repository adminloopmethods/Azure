"use client";

import React from "react";

export const SecondaryNav: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-10 px-20 py-5 mt-5 w-full text-xs font-light text-white bg-black border-b border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/933d96863eb67b9f0e5e1962dbd8b111241a9831?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Authorized reseller badge"
          className="object-contain shrink-0 w-4 aspect-[0.8]"
        />
        <span className="basis-auto">Authorised Reseller</span>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-start max-md:max-w-full">
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
