"use client";
import * as React from "react";

export function AppleCareSection() {
  return (
    <section className="w-screen bg-black px-5 py-7 lg:px-20 mt-5 pb-20">
      <h2 className="text-6xl font-semibold text-white mb-5 lg:mb-10 max-md:max-w-full max-md:text-3xl">
        Complete Apple Care Solutions for Corporates
      </h2>
      <div className="bg-neutral-800 border border-white/10 ">
        <div className="lg:flex">
          <div className="lg:flex-3/9 -mt-10 lg:m-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3285fd04388791a9d7012bdcc5692469afeab299?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
              alt="AppleCare Enterprise services"
              className="object-contain max-md:mt-9 max-md:max-w-full"
            />
          </div>

          <div className="lg:flex-5/7 lg:p-7 p-5">
            <h3 className="self-start text-4xl font-light leading-tight max-md:text-3xl mt-5">
              AppleCare for Enterprise
            </h3>
            <ul className="list-disc pl-5 lg:pl-10 mt-5 text-xl font-thin leading-8 max-md:text-xl">
              <li>24/7 Priority Apple Support</li>
              <li>Dedicated AppleCare Account Manager</li>
              <li>Onsite Repair & Replacement Services</li>
              <li>Seamless MDM Integration with Jamf</li>
              <li>Zero-Touch Deployment</li>
              <li>Secure Lifecycle Management</li>
              <li>Flexible Financial Leasing & Buy-Back</li>
              <li>Eco-Friendly Device Recycling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
