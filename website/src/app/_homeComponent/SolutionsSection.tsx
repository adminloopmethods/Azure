"use client";
import React from "react";

export const SolutionsSection: React.FC = () => {
  return (
    <section className="w-full px-[100px] max-xl:px-16 max-lg:px-10 max-md:px-6 py-16 max-md:py-10">
      <div className="flex gap-10 max-lg:gap-6 max-md:flex-col">
        {/* Text Section */}
        <div className="w-[57%] max-md:w-full flex items-center">
          <div className="flex flex-col items-start justify-center w-full text-black">
            <h2 className="text-5xl max-xl:text-4xl max-md:text-3xl font-semibold leading-tight">
              Our Solutions
            </h2>
            <p className="mt-6 text-xl max-md:text-base font-light">
              We offer end-to-end Apple product solutions, including:
            </p>
            <div className="mt-8 text-lg max-md:text-base leading-relaxed font-light space-y-2">
              <p>
                DEP and MDM services via trusted vendors like 42Gears and AirWatch
              </p>
              <p>
                Cloud and streaming solutions with IBM and Google
              </p>
              <p>
                Network management solutions through partners like Cisco
              </p>
            </div>
            <button className="mt-10 max-md:mt-8 text-xl max-md:text-base px-10 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[43%] max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9284abfa1db00c94e25e348bffc34741f74926d6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Our Solutions"
            className="w-full h-auto object-contain mt-6 max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
