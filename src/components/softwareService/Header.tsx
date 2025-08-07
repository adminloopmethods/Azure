"use client";
import * as React from "react";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full text-sm font-light text-black max-w-[1240px] max-md:max-w-full">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/705b5eb6eaa7d57ebe19672ffcdb17f164af0d7a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Company Logo"
        width={122}
        height={62}
        className="object-contain shrink-0 max-w-full aspect-[1.97] w-[122px]"
      />
      <div className="flex flex-wrap gap-10 self-end mt-5 max-md:max-w-full">
        <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/f7c967fabeaae4d1a49fc7e2e70ecec9d3a0bf35?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Search icon"
            width={14}
            height={14}
            className="object-contain shrink-0 self-start w-3.5 aspect-square"
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
}
