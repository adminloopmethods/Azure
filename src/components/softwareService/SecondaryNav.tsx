"use client";
import * as React from "react";
import Image from "next/image";

export function SecondaryNav() {
  return (
    <div className="flex flex-wrap gap-10 px-20 py-4 mt-5 w-full text-xs font-light text-white bg-black border-b border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/6531e5569f8cf68f66fdcfff1c1f642f3113b3dd?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Authorized reseller icon"
          width={16}
          height={20}
          className="object-contain shrink-0 self-start w-4 aspect-[0.8]"
        />
        <div className="basis-auto">Authorised Reseller</div>
      </div>
      <div className="flex flex-wrap gap-10 items-center my-auto max-md:max-w-full">
        <div className="self-stretch my-auto">Mac</div>
        <div className="self-stretch my-auto">iPad</div>
        <div className="self-stretch my-auto">iPhone</div>
        <div className="self-stretch my-auto">Watch</div>
        <div className="self-stretch my-auto">AirPods</div>
        <div className="self-stretch my-auto">TV & Home</div>
        <div className="self-stretch my-auto">Accessories</div>
      </div>
    </div>
  );
}
