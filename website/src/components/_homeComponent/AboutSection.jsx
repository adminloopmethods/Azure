"use client";
import Link from "next/link";
import React from "react";

export const AboutSection = () => {
  return (
    <section className="w-full  max-w-screen-2xl mx-auto py-[clamp(30px,5.5vw,80px)] px-[100px] max-2xl:px-24 max-xl:px-16 max-lg:px-10 max-md:px-6 max-sm:px-4 border border-gray-200">
      <div className="flex gap-10 max-md:flex-col items-start">
        {/* Left: Heading and Button */}
        {/* Left: Heading and Button */}
        <div className="w-[30%] max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <div className="flex flex-col">
            <h2 className="text-black font-semibold text-5xl xl:text-6xl leading-tight max-lg:text-4xl max-md:text-3xl max-md:leading-[42px]">
              <span className="font-light">About </span>Azure
              <br />
              Innovation
            </h2>

            <button className="mt-8 py-3 px-10 text-xl max-md:text-base leading-8 text-black border border-black rounded-full min-h-[57px] max-sm:px-6 transition hover:bg-black hover:text-white cursor-pointer">
              <Link href="/about">Read More</Link>
            </button>
          </div>
        </div>

        {/* Right: Paragraph Text */}
        <div className="w-[70%] max-md:w-full max-md:mt-6">
          <div className="text-black text-2xl xl:text-2xl font-extralight leading-8 max-xl:text-xl max-lg:text-lg max-md:text-base max-md:leading-7">
            <p>
              Azure Innovations is a dynamic Apple Reseller and Service
              Provider, supplying genuine Apple products to individuals and
              educational institutions. Headquartered in Naraina (Delhi) with
              branches in Noida and Gurgaon, we ensure seamless service across
              NCR.
            </p>
            <p className="mt-5">
              We're also a proud Microsoft Surface Partner, expanding in premium
              tech. At Azure, we value innovation, integrity, and
              teamwork—putting our customers at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
