"use client";
import React from "react";

export const SolutionsSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-12 md:py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex flex-col justify-center w-full text-black">
            <h2 className="text-5xl md:text-4xl lg:text-5xl font-normal leading-tight">
              Our Solutions
            </h2>
            <p className="mt-4 text-xl md:mt-6 md:text-lg font-light">
              We offer end-to-end Apple product solutions, including:
            </p>
            <div className="mt-6 text-xl md:mt-8  md:text-base leading-relaxed font-extralight space-y-2">
              <p>DEP and MDM services via trusted vendors like 42Gears and AirWatch</p>
              <p>Cloud and streaming solutions with IBM and Google</p>
              <p>Network management solutions through partners like Cisco</p>
            </div>
            <button className="mt-8 md:mt-10 text-sm md:text-base px-6 md:px-10 py-2.5 md:py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9284abfa1db00c94e25e348bffc34741f74926d6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Our Solutions"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
