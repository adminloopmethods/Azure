"use client";
import React from "react";
import { images } from "@/assets";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-black px-4 sm:px-8 lg:px-24 2xl:px-36 pt-10">
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-2 max-w-screen-2xl mx-auto">
    {/* Left Side */}
    <div className="w-full lg:w-6/12 text-white text-center lg:text-left">
      {/* Tagline */}
      <div
        className="bg-[#1A1A1A] bg-opacity-10 rounded-full px-4 py-2 text-sm sm:text-base text-gray-400 mb-6 inline-block max-w-full md:max-w-[450px] whitespace-nowrap overflow-hidden text-ellipsis"
        style={{
          border: "0.42px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <span className="font-medium text-gray-600">Azure.</span>{" "}
        <span className="font-light">
          The best way to buy the products you love.
        </span>
      </div>

      {/* Heading */}
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 flex-wrap">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white">
          iPhone 17
        </h1>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0340dd5d657e26e3ecc2da040feef7c5b9cc067b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Arrow Icon"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

      {/* Subtext */}
      <p className="text-sm sm:text-base md:text-lg text-white font-light mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
        Our most powerful cameras yet.
        <br />
        Ultrafast chips. And USB-C.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        <button className="px-5 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition cursor-pointer">
          <a href="mailto:example@email.com">Explore iPhone 17</a>
        </button>
        <button className="px-5 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition cursor-pointer">
          <a href="mailto:example@email.com">Explore iPhone 17 Pro</a>
        </button>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full lg:w-6/12 flex justify-center pt-4 sm:pt-6">
      <Image
        src={images.bannerImage.src}
        width={500}
        height={524}
        alt="iPhone 17"
        className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[650px] h-auto object-contain"
        priority
      />
    </div>
  </div>
</section>

  );
};
