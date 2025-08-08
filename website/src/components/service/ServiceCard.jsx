"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export const ServiceCard = ({
  title,
  imageUrl,
  iconUrl,
  routeTo,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(routeTo)}
      className="relative flex flex-col w-full text-white rounded-lg cursor-pointer 
                 h-[619px] md:h-[550px] sm:h-auto sm:aspect-[4/5] min-h-[400px]
                 text-2xl md:text-3xl font-medium leading-none
                 transition-shadow hover:shadow-xl"
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        className="object-cover absolute inset-0 w-full h-full rounded-lg"
        alt={title}
      />

      {/* Overlay Content */}
      <div className="relative mt-auto flex justify-between items-start 
                      gap-5 px-6 md:px-10 lg:px-14 pt-[85%] md:pt-[85%] pb-8 rounded-lg
                      bg-gradient-to-t from-black/80 via-black/30 to-transparent">
        <div className="break-words">{title}</div>

        {/* Icon */}
        <img
          src={iconUrl}
          alt="Service icon"
          className="w-[36px] md:w-[41px] aspect-square rounded-lg object-contain 
                     transition-transform duration-300 hover:scale-110 hover:brightness-125"
        />
      </div>
    </div>
  );
};
