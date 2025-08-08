"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export const ServiceCard = ({ title, imageUrl, routeTo }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(routeTo)}
      className="relative flex flex-col w-full text-white rounded-lg cursor-pointer h-[508px] overflow-hidden transition-shadow hover:shadow-xl"
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mt-auto p-6">
        <div className="break-words text-2xl md:text-3xl font-medium">
          {title}
        </div>
      </div>
    </div>
  );
};
