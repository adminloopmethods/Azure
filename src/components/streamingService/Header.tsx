"use client";

import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-center w-full text-sm font-light text-black max-w-[1240px] max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/705b5eb6eaa7d57ebe19672ffcdb17f164af0d7a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Company Logo"
        className="object-contain shrink-0 max-w-full aspect-[1.97] w-[122px]"
      />
      <div className="flex flex-wrap gap-10 self-end mt-5 max-md:max-w-full">
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a8deabdff7469bd140c1c274bafe4b58009d0aca?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
          />
          <span className="flex-auto">Search accessories</span>
        </div>
        <nav className="flex gap-10 justify-center items-center my-auto">
          <a
            href="#"
            className="self-stretch my-auto font-medium text-black underline"
          >
            Home
          </a>
          <a href="#" className="self-stretch my-auto text-black opacity-30">
            About
          </a>
          <a href="#" className="self-stretch my-auto text-black opacity-30">
            Contact Us
          </a>
          <a href="#" className="self-stretch my-auto text-black opacity-30">
            Blog
          </a>
        </nav>
        <button className="flex gap-2 justify-center items-center px-7 py-2.5 leading-6 text-center border border-black border-solid min-h-[41px] rounded-[86px] max-md:px-5">
          <span className="self-stretch my-auto text-black">Contact Us</span>
        </button>
      </div>
    </header>
  );
};
