"use client";
import React from "react";
import { images } from "@/assets";

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        paddingLeft: "clamp(1rem, 5vw, 100px)",
        paddingRight: "clamp(1rem, 5vw, 100px)",
        paddingTop: "clamp(2rem, 5vw, 4rem)",
      }}
      className="bg-black"
    >
      <div
        className="flex max-md:flex-col"
        style={{ gap: "clamp(1rem, 3vw, 2rem)" }}
      >
        {/* Left */}
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full text-neutral-100 max-md:mt-10 max-md:max-w-full">
            {/* Tagline */}
            <div
              className="flex flex-col justify-center self-stretch bg-white bg-opacity-10 border-white border-opacity-20 rounded-[66px] max-md:max-w-full"
              style={{
                padding: "clamp(0.8rem, 2vw, 1.5rem)",
                fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
                lineHeight: "clamp(1.2rem, 1.5vw, 1.8rem)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 400,
                    color: "rgba(85,85,85,1)",
                  }}
                >
                  Azure.
                </span>{" "}
                <span
                  style={{
                    fontFamily:
                      "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                    fontWeight: 275,
                    color: "rgba(85,85,85,1)",
                  }}
                >
                  The best way to buy the products you love.
                </span>
              </div>
            </div>

            {/* Heading */}
            <div
              style={{ gap: "clamp(0.5rem, 1vw, 1rem)", marginTop: "clamp(1.5rem, 4vw, 2rem)" }}
              className="flex leading-none max-md:text-4xl"
            >
              <h1
                className="flex-auto text-neutral-100"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                  fontWeight: 600,
                }}
              >
                iPhone 16
              </h1>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0340dd5d657e26e3ecc2da040feef7c5b9cc067b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                alt="Arrow icon"
                className="object-contain shrink-0 my-auto w-6 aspect-[0.8]"
              />
            </div>

            {/* Subtext */}
            <p
              className="text-neutral-100 font-[275]"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                lineHeight: "clamp(1.5rem, 3vw, 2.25rem)",
                marginTop: "clamp(1rem, 2.5vw, 1.5rem)",
              }}
            >
              Our most powerful cameras yet.
              <br />
              Ultrafast chips. And USB-C.
            </p>

            {/* Buttons */}
            <div
              className="flex gap-4 items-start [@media(min-width:200px)_and_(max-width:400px)]:flex-col text-center text-blue-500 max-md:max-w-full"
              style={{ marginTop: "clamp(1.5rem, 4vw, 2.5rem)" }}
            >
              <button className="flex justify-center items-start px-6 py-3 text-[clamp(0.7rem,.8vw,1rem)] sm:text-[clamp(0.9rem,1vw,1.2rem)] border border-blue-500 border-solid min-w-7 rounded-[980px] max-md:px-5">
                <span
                  style={{
                    fontSize: "",
                    fontWeight: 500,
                  }}
                >
                  Explore iPhone 16
                </span>
              </button>
              <button className="flex justify-center items-start px-6 py-3 text-[clamp(0.7rem,.8vw,1rem)] sm:text-[clamp(0.9rem,1vw,1.2rem)] border border-blue-500 border-solid min-w-7 rounded-[980px] max-md:px-5">
                <span
                  style={{
                    fontSize: "",
                    fontWeight: 500,
                  }}
                >
                  Explore iPhone 16 Pro
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src={images.bannerImage.src}
            alt="iPhone 16"
            className="object-contain grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
