"use client";
import * as React from "react";

export function DeviceManagementSection() {
  return (
    <section className="mb-5 px-5 py-10">
      <h2 className="py-5 text-6xl font-semibold leading-none text-black max-md:text-3xl">
        Device Life Cycle Management Solutions
      </h2>

      <div className="lg:hidden mt-5">
        <div className="flex w-full justify-between mb-5">
          {/* first  arrow div */}
          <h3 className="text-sm font-light p-5 rounded-xl leading-6 w-[158px] min-h-[100px] bg-zinc-100 text-black ">
            Seamless Device Management
          </h3>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Arrow"
            className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
          />
          <h3 className="text-sm font-light p-5 rounded-xl leading-6 w-[158px] h-[100px] bg-zinc-100 text-black">
            Secure Deployment & Access Control
          </h3>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px] rotate-90 -translate-y-3 relative left-75"
        />

        <div className="flex w-full justify-between mb-5">
          {/* second  arrow div */}
          <h3 className="text-sm font-light p-5 rounded-xl leading-6 w-[158px] min-h-[100px] bg-zinc-100 text-black ">
            Flexible Financial Options
          </h3>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Arrow"
            className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px] rotate-180"
          />
          <h3 className="text-sm font-light p-5 rounded-xl leading-6 w-[158px] h-[100px] bg-zinc-100 text-black">
            Buy-Back Programs
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center w-fit mb-5">
          {/* third  arrow div */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Arrow"
            className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px] rotate-90 -translate-y-3"
          />
          <h3 className="text-sm font-light p-5 rounded-xl leading-6 w-[158px] min-h-[100px] bg-zinc-100 text-black ">
            Eco-Friendly Disposal
          </h3>
        </div>
      </div>

{/* larger screen */}

      <div className="max-md:hidden flex justify-between mt-5">
        <div className="h-40 w-40 bg-zinc-100 flex justify-center items-center rounded-2xl p-10">
          <h3 className="font-light leading-6  text-black">
            Seamless Device Management
          </h3>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
        />
        <div className="h-40 w-40 bg-zinc-100 flex justify-center items-center rounded-2xl p-10">
          <h3 className="font-light leading-6  text-black">
            Secure Deployment & Access Control
          </h3>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
        />

        <div className="h-40 w-40 bg-zinc-100 flex justify-center items-center rounded-2xl p-10">
          <h3 className="font-light leading-6  text-black">
            Flexible Financial Options
          </h3>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
        />
        <div className="h-40 w-40 bg-zinc-100 flex justify-center items-center rounded-2xl p-10">
          <h3 className="font-light leading-6  text-black">
            Buy-Back Programs
          </h3>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow"
          className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
        />
        <div className="h-40 w-40 bg-zinc-100 flex justify-center items-center rounded-2xl p-10">
          <h3 className="font-light leading-6  text-black">
            Eco-Friendly Disposal
          </h3>
        </div>
      </div>
    </section>
  );
}
