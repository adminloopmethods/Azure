"use client";
import Link from "next/link";
import React from "react";

export const ProductCard = ({
  imageSrc,
  title,
  price,
  buttonText,
  imageWidth = "w-[217px]",
  showPrice = false,
  onEnquire,
}) => {
  return (
    <article className="flex flex-col justify-between px-3 sm:px-4 py-4 sm:py-6 mx-auto w-full h-full rounded-lg bg-zinc-100 max-md:mt-4">
      {/* TOP SECTION */}
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src={imageSrc}
          alt={title}
          className={`object-contain mx-4 sm:mx-6 mt-6 sm:mt-8 h-[150px] sm:h-[200px] ${imageWidth}`}
        />
        <div
          style={{
            flexGrow: 1,
          }}
          className="flex flex-col justify-between text-center mt-6 sm:mt-10 w-full text-black"
        >
          <h3 className="text-base sm:text-lg font-medium leading-snug">
            {title}
          </h3>
          {showPrice && price && (
            <div className="mt-2 sm:mt-4 text-lg sm:text-2xl font-semibold tracking-wider leading-none">
              {price}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <button
        onClick={onEnquire} 
        className="mt-4 sm:mt-6 flex gap-2 justify-center items-center self-center px-10 sm:px-16 py-2 sm:py-3 text-xs sm:text-sm leading-6 text-white bg-black rounded-lg border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors duration-300 cursor-pointer"
      >
        {buttonText}
      </button>
    </article>
  );
};
