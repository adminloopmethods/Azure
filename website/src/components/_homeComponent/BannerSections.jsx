"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import local assets
import huwabuds from "@/assets/images/earphone2.png";
import ipads from "@/assets/images/ipad.png";
import samsung from "@/assets/images/samsung.png";
import mac from "@/assets/images/macbook.png";
import earbuds from "@/assets/images/watch1.png";

export const BannerSections = () => {
  const bannerCards = [
    {
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-white",
      buttonHoverStyle: "hover:bg-black hover:text-white",
      textColor: "text-black",
      image1: huwabuds,
      image1Class: "object-contain h-[200px] md:h-[240px] rotate-[10deg]",
      image2: earbuds,
      image2Class: "object-contain h-[180px] md:h-[220px]",
    },
    {
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-zinc-100",
      buttonHoverStyle: "hover:bg-black hover:text-white",
      textColor: "text-black",
      image1: ipads,
      image1Class: "object-contain h-[220px] md:h-[260px]",
    },
    {
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-black border-black",
      bgColor: "bg-neutral-200",
      buttonHoverStyle: "hover:bg-black hover:text-white",
      textColor: "text-black",
      image1: samsung,
      image1Class: "object-contain h-[220px] md:h-[260px]",
    },
    {
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      buttonColor: "text-white border-white",
      bgColor: "bg-black",
      buttonHoverStyle: "hover:bg-white hover:text-black",
      textColor: "text-white",
      image1: mac,
      image1Class: "object-contain h-[220px] md:h-[260px]",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full px-4 md:px-6 lg:px-8">
      {bannerCards.map((card, index) => (
        <div
          key={index}
          className={`relative text-medium overflow-hidden rounded-lg shadow-md ${card.bgColor} flex flex-col`}
        >
          {/* Image Container */}
          <div className="relative w-full h-[240px] md:h-[300px] flex justify-center items-center">
            {card.image1 && (
              <Image
                src={card.image1}
                alt={card.title}
                className={card.image1Class}
              />
            )}
            {card.image2 && (
              <Image
                src={card.image2}
                alt={card.title}
                className={`absolute right-6 top-6 ${card.image2Class}`}
              />
            )}
          </div>

          {/* Text Content */}
          <div className="relative z-10 px-4 pb-8">
            <h3
              className={`text-xl md:text-2xl font-medium leading-none ${card.textColor}`}
            >
              {card.title}
            </h3>
            <p
              className={`mt-3 text-sm md:text-base font-light leading-6 ${card.textColor}`}
            >
              {card.description}
            </p>
            <button
              className={`mt-4 py-2 px-4 text-sm md:text-[17px] leading-6 border rounded-full transition-colors duration-300 cursor-pointer ${card.buttonColor} ${card.buttonHoverStyle}`}
            >
              <Link href="/shops">Shop Now</Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
