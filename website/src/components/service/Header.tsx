"use client";
import * as React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full text-sm font-light text-black max-w-[1240px] max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/705b5eb6eaa7d57ebe19672ffcdb17f164af0d7a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        className="object-contain shrink-0 max-w-full aspect-[1.97] w-[122px]"
        alt="Company logo"
      />
      <div className="flex flex-wrap gap-10 self-end mt-5 max-md:max-w-full">
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/feac8458b9d780f3e7a69397d6f0170d371ef099?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
            alt="Search icon"
          />
          <div className="flex-auto">Search accessories</div>
        </div>
        <div className="flex gap-10 justify-center items-center my-auto">
          <div className="self-stretch my-auto font-medium text-black underline">
            Home
          </div>
          <div className="self-stretch my-auto text-black opacity-30">
            About
          </div>
          <div className="self-stretch my-auto text-black opacity-30">
            Contact Us
          </div>
          <div className="self-stretch my-auto text-black opacity-30">Blog</div>
        </div>
        <div className="flex gap-2 justify-center items-center px-7 py-2.5 leading-6 text-center border border-black border-solid min-h-[41px] rounded-[86px] max-md:px-5">
          <div className="self-stretch my-auto text-black">Contact Us</div>
        </div>
      </div>
    </div>
  );
};
