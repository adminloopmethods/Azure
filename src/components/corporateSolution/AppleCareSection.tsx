"use client";
import * as React from "react";

export function AppleCareSection() {
  return (
    <section className="flex flex-col self-stretch px-20 pt-12 pb-28 mt-52 w-full bg-black max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-6xl font-semibold leading-none text-white max-md:max-w-full max-md:text-4xl">
        Complete Apple Care Solutions for Corporates
      </h2>
      <div className="self-center pr-7 mt-12 mb-0 max-w-full bg-neutral-800 bg-opacity-40 w-[1239px] max-md:pr-5 max-md:mt-10 max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3285fd04388791a9d7012bdcc5692469afeab299?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              alt="AppleCare Enterprise services"
              className="object-contain grow w-full aspect-[0.94] max-md:mt-9 max-md:max-w-full"
            />
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-20 text-white max-md:mt-10 max-md:max-w-full">
              <h3 className="self-start text-4xl font-medium leading-tight">
                AppleCare for Enterprise
              </h3>
              <div className="mt-5 text-2xl font-light leading-10 max-md:max-w-full">
                24/7 Priority Apple Support
                <br />
                Dedicated AppleCare Account Manager
                <br />
                Onsite Repair & Replacement Services
                <br />
                Seamless MDM Integration with Jamf
                <br />
                Zero-Touch Deployment
                <br />
                Secure Lifecycle Management
                <br />
                Flexible Financial Leasing & Buy-Back
                <br />
                Eco-Friendly Device Recycling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
