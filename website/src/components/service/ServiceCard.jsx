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
      className="flex relative flex-col w-full text-3xl font-medium leading-none text-white rounded-lg h-[619px] cursor-pointer max-md:mt-10 max-md:max-w-full"
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        className="object-cover absolute inset-0 w-full h-full"
        alt={title}
      />

      {/* Bottom Section */}
      <div className="flex relative flex-wrap gap-5 justify-between items-start px-14 pb-12 rounded-lg pt-[527px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div>{title}</div>

        {/* Icon Hover Effect */}
        <img
          src={iconUrl}
          alt="Service icon"
          className="object-contain shrink-0 rounded-lg aspect-[1.02] w-[41px] transition-transform duration-300 hover:scale-110 hover:brightness-125 cursor-pointer"
        />
      </div>
    </div>
  );
};
