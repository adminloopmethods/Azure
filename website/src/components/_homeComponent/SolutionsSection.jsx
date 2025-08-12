"use client";
import Link from "next/link";
import React from "react";

export const SolutionsSection = () => {
  const router = useRouter();


  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-12 md:py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex flex-col justify-center w-full text-black">
            <h2 className="text-5xl md:text-4xl lg:text-5xl font-normal leading-tight">
              Our Solutions
            </h2>
            <p className="mt-4 text-black text-2xl xl:text-2xl leading-8 max-xl:text-xl max-lg:text-lg max-md:text-base max-md:leading-7 font-light">
              We offer end-to-end Apple product solutions, including:
            </p>
            <div className="mt-6 text-black text-2xl xl:text-2xl font-extralight leading-8 max-xl:text-xl max-lg:text-lg max-md:text-base max-md:leading-7">
              <p>DEP and MDM services via trusted vendors like 42Gears and AirWatch</p>
              <p>Cloud and streaming solutions with IBM and Google</p>
              <p>Network management solutions through partners like Cisco</p>
            </div>
            <button className="mt-8 w-64 py-3 px-10 text-xl max-md:text-base leading-8 text-black border border-black rounded-full min-h-[57px] max-sm:px-6 transition hover:bg-black hover:text-white cursor-pointer">
              <Link href="/other-solutions">
              Read More
              </Link>
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
