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
    <div
      className={`${marginTop} w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full`}
    >
      <div className="flex gap-5 max-md:flex-col max-md:">
        {isImageRight ? (
          <>
            <div className="w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-6xl font-semibold leading-none max-md:max-w-full max-md:text-4xl">
                  {title}
                </div>
                <div className="mt-8 text-2xl leading-9 font-[275] max-md:max-w-full">
                  {description}
                </div>
              </div>
            </div>
            <div className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <img
                src={imageSrc}
                className="object-contain grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-[46%] max-md:ml-0 max-md:w-full">
              <img
                src={imageSrc}
                className="object-contain grow w-full shadow-sm aspect-[0.93] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-6xl font-semibold leading-none max-md:text-4xl">
                  {title}
                </div>
                <div className="mt-8 text-2xl leading-9 font-[275] max-md:max-w-full">
                  {description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
