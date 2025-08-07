"use client";

import React from "react";

export const MainContent: React.FC = () => {
  return (
    <section className="self-center mt-20 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[54%] max-md:ml-0 max-md:w-full">
          <div className="mt-6 text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="mr-12 text-6xl font-semibold leading-[64px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Streaming <span style={{ fontWeight: 300 }}>&</span> Webcasting{" "}
              <span style={{ fontWeight: 300 }}>Services</span>
            </h2>
            <p className="mt-8 text-2xl leading-9 font-[275] max-md:max-w-full">
              Delivering reliable, high-quality streaming solutions tailored to
              your business needs—seamless, scalable, and secure.
            </p>
          </div>
        </div>
        <div className="ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ae1c29ed55203a42b40fe6a4b7057ec64aa76de7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Streaming services illustration"
            className="object-contain grow w-full rounded-2xl shadow-sm aspect-[1.41] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
