"use client";
import * as React from "react";

export function Header() {
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between w-full text-sm font-light text-black max-w-[1240px] max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/705b5eb6eaa7d57ebe19672ffcdb17f164af0d7a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          className="object-contain shrink-0 max-w-full aspect-[1.97] w-[122px]"
        />
        <div className="flex flex-wrap gap-10 self-end mt-5 max-md:max-w-full">
          <div className="flex gap-2.5 px-3.5 py-2.5 border border-solid bg-white bg-opacity-80 border-zinc-300 rounded-[86px] text-neutral-500">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a8deabdff7469bd140c1c274bafe4b58009d0aca?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              className="object-contain shrink-0 my-auto w-3.5 aspect-square"
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
            <div className="self-stretch my-auto text-black opacity-30">
              Blog
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center px-7 py-2.5 leading-6 text-center border border-black border-solid min-h-[41px] rounded-[86px] max-md:px-5">
            <div className="self-stretch my-auto text-black">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 self-stretch px-20 py-5 mt-5 w-full text-xs font-light text-white bg-black border-b border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/933d96863eb67b9f0e5e1962dbd8b111241a9831?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain shrink-0 w-4 aspect-[0.8]"
          />
          <div className="basis-auto">Authorised Reseller</div>
        </div>
        <div className="flex flex-wrap gap-10 items-center self-start max-md:max-w-full">
          <div className="self-stretch my-auto">Mac</div>
          <div className="self-stretch my-auto">iPad</div>
          <div className="self-stretch my-auto">iPhone</div>
          <div className="self-stretch my-auto">Watch</div>
          <div className="self-stretch my-auto">AirPods</div>
          <div className="self-stretch my-auto">TV & Home</div>
          <div className="self-stretch my-auto">Accessories</div>
        </div>
      </div>
    </>
  );
}
