"use client";
import * as React from "react";

export function MicrosoftSurfaceSection() {
  return (
    <section className="mt-12 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[44%] max-md:ml-0 max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9b698cfe44c74b2e9f2d2c39dbb02bd23923222b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Microsoft Surface devices"
            className="object-contain grow w-full shadow-sm aspect-[0.83] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-6xl font-semibold leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Microsoft Surface for Business
            </h2>
            <p className="mt-8 text-2xl leading-9 font-[275] max-md:max-w-full">
              As an authorised Microsoft Surface reseller, we provide the full
              lineup of powerful laptops and 2-in-1 tablets tailored for
              enterprise productivity.
              <br />
              <br />
              Work smarter with Surface + Microsoft 365.
              <br />
              Choose sleek, touchscreen, 4G-enabled devices for ultimate
              mobility.
              <br />
              Built-in security and manageability for today's hybrid work
              culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
