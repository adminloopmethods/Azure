"use client";
import React from "react";
import { images } from "@/assets";

export const BannerSections: React.FC = () => {
  const bannerCards = [
    {
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-white",
      textColor: "text-black",
      image1: images.huwaiBuds.src,
      image1Class:
        "object-contain absolute -top-4 left-0 z-0 max-w-full aspect-[1.04] h-[307px] w-[318px] rotate-[50deg]",
      image2:
        "https://api.builder.io/api/v1/image/assets/TEMP/5e0fbf3a0aa98aa32fc5ba41f9aff705a5461cb8?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      image2Class:
        "object-contain absolute top-3 -right-14 z-0 max-w-full aspect-[1.04] h-[307px] w-[318px]",
    },
    {
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-zinc-100",
      textColor: "text-black",
      image1:
        images.ipads.src,
      image1Class:
        "object-contain absolute top-0 right-[-43px] z-0 max-w-full aspect-[1.1] h-[390px] w-[371px]",
    },
    {
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-neutral-200",
      textColor: "text-black",
      image1:
        "https://api.builder.io/api/v1/image/assets/TEMP/2b7c9a0b743f8958355bd687bdac3eb85c58da0e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      image1Class:
        "object-contain absolute top-0 left-[10px] z-0 max-w-full aspect-[1.61] h-[385px] w-[579px]",
    },
    {
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-white border-white",
      bgColor: "bg-black",
      textColor: "text-white",
      image1: images.mac.src,
      image1Class:
        "object-contain absolute top-0 left-[90px] z-0 max-w-full aspect-[1.61] h-[385px] w-[579px]",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full px-4 max-md:mt-10">
      {bannerCards.map((card, index) => (
        <div
          key={index}
          className={`relative overflow-hidden px-6 pt-[420px] pb-14 ${card.bgColor} rounded-lg shadow-md max-md:pt-64`}
        >
          {/* Text Content */}
          <div className="relative z-10">
            <h3 className={`text-2xl font-medium leading-none ${card.textColor}`}>
              {card.title}
            </h3>
            <p className="mt-4 text-base font-light leading-6 text-neutral-700">
              {card.description}
            </p>
            <button
              className={`mt-4 py-3 px-6 text-[17px] leading-7 border rounded-full ${card.buttonColor}`}
            >
              Shop Now
            </button>
          </div>

          {/* Images */}
          {card.image1 && (
            <img
              src={card.image1}
              alt={card.title}
              className={`${card.image1Class} max-md:h-[220px] max-md:w-auto `}
            />
          )}
          {card.image2 && (
            <img
              src={card.image2}
              alt={card.title}
              className={`${card.image2Class} max-md:h-[220px] max-md:w-auto `}
            />
          )}
        </div>
      ))}
    </section>
  );
};
