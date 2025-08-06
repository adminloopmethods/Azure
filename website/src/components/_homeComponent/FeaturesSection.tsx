"use client";
import React from "react";

const features = [
  {
    title: "Love our Customers",
    description:
      "At Azure Innovations, we prioritize your satisfaction by delivering personalized solutions and outstanding service at every step.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/c18f0ff6b5555f64b3d8cd2ae711aee11f46b181?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    alt: "Love customers icon",
    imageWidth: "w-[46px]",
  },
  {
    title: "Continuously Evolve",
    description:
      "We embrace innovation and upgrade our offerings to stay ahead in the dynamic tech world, meeting tomorrow's needs today.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/7c36b8bb955d7ea057e3879d7735c16e6786f477?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    alt: "Continuously evolve icon",
    imageWidth: "w-[43px]",
  },
  {
    title: "Passionate About IT",
    description:
      "We live and breathe technology, bringing expert solutions and dedicated support to empower your digital journey.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/70ce3152bb0f2431b7ac366663b02de7a2bf26bc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    alt: "Passionate about IT icon",
    imageWidth: "w-[42px]",
  },
  {
    title: "Incredible Team",
    description:
      "Our strength lies in a skilled, diverse team that collaborates with passion to deliver excellence in every solution.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/9332deb05bd43649b49d229ea18eb9f3b3f16ab7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    alt: "Incredible team icon",
    imageWidth: "w-[52px]",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col px-20 py-20 w-full text-white bg-black max-md:px-6 max-md:py-14">
      <h2 className="text-5xl font-bold leading-none max-md:text-3xl">
        Azure Innovations Features
      </h2>

      <div className="mt-12 flex flex-wrap justify-between gap-y-12">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-start w-full lg:w-[22%]">
              <img
                src={feature.image}
                alt={feature.alt}
                className={`object-contain ${feature.imageWidth}`}
              />
              <h3 className="mt-5 text-2xl font-semibold leading-tight">
                {feature.title}
              </h3>
              <p className="mt-5 text-lg font-light leading-7">
                {feature.description}
              </p>
            </div>

            {/* Divider for desktop */}
            {index < features.length - 1 && (
              // <div className="hidden lg:block w-px h-auto bg-white/30 mx-4" />
              <div className="hidden lg:block shrink-0 w-[1px] h-[292px] bg-[#ffffff80] fade-mask" />
            )}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
};
