"use client";
import * as React from "react";

export function Benefits() {
  return (
    <div className="flex flex-col justify-center items-center self-stretch px-16 py-24 mt-24 w-full text-center bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1141px] max-md:max-w-full">
        <div className="flex flex-col items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-11 aspect-[0.79]"
          />
          <div className="mt-2.5 text-lg font-semibold leading-none text-zinc-900">
            Fast, free delivery
          </div>
          <div className="self-stretch mt-2.5 text-sm leading-5 text-neutral-500">
            Enjoy quick, free delivery or pick up your order at a nearby Apple
            Store.
          </div>
        </div>
        <div className="shrink-0 self-stretch w-px h-[162px]" />
        <div className="flex flex-col items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-11 aspect-[0.79]"
          />
          <div className="self-stretch mt-2.5 text-lg font-semibold leading-none text-zinc-900">
            Free and easy returns
          </div>
          <div className="mt-2.5 text-sm leading-5 text-neutral-500">
            Return online or at any Apple Store—simple and hassle-free.
          </div>
        </div>
        <div className="shrink-0 self-stretch w-px h-[162px]" />
        <div className="flex flex-col items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-14 aspect-square"
          />
          <div className="mt-2.5 text-lg font-semibold leading-none text-zinc-900">
            Get 3% Daily Cash back
          </div>
          <div className="self-stretch mt-3 text-sm leading-5 text-neutral-500">
            Get 3% back daily when you pay with Apple Card, plus interest-free
            monthly installments.
          </div>
        </div>
      </div>
    </div>
  );
}
