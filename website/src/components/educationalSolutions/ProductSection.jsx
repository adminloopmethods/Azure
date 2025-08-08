"use client";
import * as React from "react";

export function ProductSection({
  title,
  description,
  imageSrc,
  imagePosition,
  marginTop,
}) {
  const isImageRight = imagePosition === "right";

  return (
    <div className={`${marginTop} px-20 max-md:px-5 max-md:mt-1`}>
      {isImageRight ? (
        <div className="flex justify-between gap-10 box-border max-md:flex-col max-md:gap-0">
          <div className="">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-6xl font-semibold leading-none max-md:max-w-full max-md:text-3xl">
                {title}
              </div>
              <div className="mt-8 text-xl max-md:text-lg leading-10 font-[275] max-md:max-w-full">
                {description}
              </div>
            </div>
          </div>
          <img
            src={imageSrc}
            className="object-contain size-100"
          />
        </div>
      ) : (
        <div className="flex justify-between gap-10 box-border max-md:gap-0 max-md:flex-col-reverse">
          <img
            src={imageSrc}
            className="object-contain size-100 mr-30"
          />
          <div className="">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-6xl font-semibold leading-none max-md:max-w-full max-md:text-3xl">
                {title}
              </div>
              <div className="mt-8 text-xl max-md:text-lg leading-10 font-[275] max-md:max-w-full">
                {description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
