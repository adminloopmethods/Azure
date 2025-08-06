"use client";
import * as React from "react";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { BenefitCard } from "@/components/BenefitCard";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  const serviceCards = [
    {
      title: "Software Services",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/7f19be419d4810aeac15e061d4b7f8be1b75a3e1?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    },
    {
      title: "Hardware Services",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/e1e240b2891b32b612e190e35a41d7e480873d1a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    },
    {
      title: "IT Professional Services",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/153a993d83c5d1d1c7c8bf2875c82aa11e4e294d?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d443871b3635bcdb6a67f48fe2cdf6212f2ce566?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    },
    {
      title: "Streaming Services",
      imageUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/e49b9bf4db941173f9b716778b28bbe39aa8c91b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    },
  ];

  const benefits = [
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Fast, free delivery",
      description:
        "Enjoy quick, free delivery or pick up your order at a nearby Apple Store.",
    },
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Free and easy returns",
      description:
        "Return online or at any Apple Store—simple and hassle-free.",
    },
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Get 3% Daily Cash back",
      description:
        "Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pt-2.5 bg-white">
      <Header />

      {/* Secondary Navigation */}
      <div className="flex flex-wrap gap-10 px-20 py-5 mt-5 w-full text-xs font-light text-white bg-black border-b border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/933d96863eb67b9f0e5e1962dbd8b111241a9831?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain shrink-0 w-4 aspect-[0.8]"
            alt="Authorized reseller icon"
          />
          <div className="basis-auto">Authorised Reseller</div>
        </div>
        <div className="flex flex-wrap gap-10 items-center self-start max-md:max-w-full">
          <div className="self-stretch my-auto">Mac</div>
          <div className="self-stretch my-auto">iPad</div>
          <div className="self-stretch my-auto">iPhone</div>
          <div className="self-stretch my-auto">Watch</div>
          <div className="self-stretch my-auto">AirPods</div>
          <div className="self-stretch my-auto">TV & Home</div>
          <div className="self-stretch my-auto">Accessories</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center px-16 py-28 w-full text-6xl leading-none whitespace-nowrap bg-black text-neutral-100 max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <div className="mb-0 text-neutral-100 max-md:mb-2.5 max-md:text-4xl">
          Services
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="self-center mt-20 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[0].title}
              imageUrl={serviceCards[0].imageUrl}
              iconUrl={serviceCards[0].iconUrl}
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[1].title}
              imageUrl={serviceCards[1].imageUrl}
              iconUrl={serviceCards[1].iconUrl}
            />
          </div>
        </div>
      </div>

      <div className="self-center mt-10 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[2].title}
              imageUrl={serviceCards[2].imageUrl}
              iconUrl={serviceCards[2].iconUrl}
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[3].title}
              imageUrl={serviceCards[3].imageUrl}
              iconUrl={serviceCards[3].iconUrl}
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col justify-center items-center px-16 py-24 mt-20 w-full text-center bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1141px] max-md:max-w-full">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <BenefitCard
                iconUrl={benefit.iconUrl}
                title={benefit.title}
                description={benefit.description}
              />
              {index < benefits.length - 1 && (
                <div className="shrink-0 self-stretch w-px h-[162px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Decorative Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/421826147270ef3b39308a103b3f9ad1c5ed955f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        className="object-contain w-full aspect-[1000] max-md:max-w-full"
        alt="Decorative element"
      />

      <Footer />
    </div>
  );
}
