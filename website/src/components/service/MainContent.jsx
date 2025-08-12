"use client";

import React from "react";

export const MainContent = () => {
  return (
    <section className="w-full max-w-[1239px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Streaming <span className="font-light">&</span> Webcasting{" "}
            <span className="font-light">Services</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 font-light leading-relaxed">
            Delivering reliable, high-quality streaming solutions tailored to
            your business needs—seamless, scalable, and secure.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ae1c29ed55203a42b40fe6a4b7057ec64aa76de7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Streaming services illustration"
            className="w-full object-cover rounded-2xl shadow-md aspect-video"
          />
        </div>
      </div>
    </section>
  );
};
