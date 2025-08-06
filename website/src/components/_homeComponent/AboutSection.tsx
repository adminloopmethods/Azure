"use client";
import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section className="self-center py-[clamp(30px,5.5vw,80px)] border px-[100px] w-full max-xl:px-16 max-lg:px-10 max-md:px-6 max-sm:px-4 max-md:mt-10">
      <div className="flex gap-10 max-md:flex-col">
        {/* Left: Heading and Button */}
        <div className="w-[30%] max-md:w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-6xl font-semibold text-black leading-[64px] max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-md:leading-[42px]">
              <span className="font-light">About</span> Azure
              <br />
              Innovation
            </h2>

            <button className="flex gap-3 justify-center items-center self-start py-3 px-10 mt-8 text-xl max-md:text-base leading-8 text-center text-black border-black border-solid border-[1.385px] min-h-[57px] rounded-full max-sm:px-6">
              <span className="text-black">Read More</span>
            </button>
          </div>
        </div>

        {/* Right: Paragraph Text */}
        <div className="w-[70%] ml-5 max-md:ml-0 max-md:w-full">
          <div className="text-2xl font-light leading-9 text-black max-xl:text-xl max-lg:text-lg max-md:text-base max-md:leading-7">
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
