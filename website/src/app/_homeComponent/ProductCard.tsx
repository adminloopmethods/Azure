"use client";
import React from "react";

interface ProductCardProps {
  iconSrc: string;
  imageSrc: string;
  title: string;
  price?: string;
  buttonText: string;
  imageAspect?: string;
  imageWidth?: string;
  showPrice?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  iconSrc,
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
        <div className="flex gap-2 items-center self-start">
          <img
            src={iconSrc}
            alt="Product category icon"
            className="object-contain self-start my-auto aspect-square w-[30px]"
          />
        </div>
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
      <button className="mt-6 flex gap-2 justify-center items-center self-center px-16 py-3  text-sm leading-6 text-white bg-black rounded-lg max-md:px-5">
        <span className="self-stretch my-auto text-white">{buttonText}</span>
      </button>
    </article>
  );
};
