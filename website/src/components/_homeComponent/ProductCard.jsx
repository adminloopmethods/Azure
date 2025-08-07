"use client";
import React from "react";



export const ProductCard= ({
  imageSrc,
  title,
  price,
  buttonText,
  imageWidth = "w-[217px]",
  showPrice = false,
}) => {
  return (
    <article className="flex flex-col justify-between px-4 py-6 mx-auto w-full h-full rounded-lg bg-zinc-100 max-md:mt-4">
      {/* TOP SECTION */}
      <div className="flex flex-col justify-center items-center  h-full">
        <img
          src={imageSrc}
          alt={title}
          className={`object-contain mx-6 mt-8 h-[200px] ${imageWidth}`}
        />
        <div style={{
          flexGrow: 1,
        }} className="flex flex-col justify-between text-center mt-10 w-full text-black">
          <h3 className="text-lg font-medium leading-6">{title}</h3>
          {showPrice && price && (
            <div className="mt-4 text-2xl font-semibold tracking-wider leading-none">
              {price}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <button className="mt-6 flex gap-2 justify-center items-center self-center px-16 py-3 text-sm leading-6 text-white bg-black rounded-lg max-md:px-5 border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors duration-300 cursor-pointer">
  <span className="self-stretch my-auto">{buttonText}</span>
</button>

  </article>
  );
};
