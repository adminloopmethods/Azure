"use client";
import * as React from "react";
import Image from "next/image";

interface BenefitItemProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  iconWidth?: number;
  iconHeight?: number;
}

function BenefitItem({
  iconSrc,
  iconAlt,
  title,
  description,
  iconWidth = 44,
  iconHeight = 56,
}: BenefitItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        className={`object-contain ${iconWidth === 56 ? "w-14 aspect-square" : "w-11 aspect-[0.79]"}`}
      />
      <div className="mt-2.5 text-lg font-semibold leading-none text-zinc-900">
        {title}
      </div>
      <div
        className={`${title === "Get 3% Daily Cash back" ? "self-stretch mt-3" : "self-stretch mt-2.5"} text-sm leading-5 text-neutral-500`}
      >
        {description}
      </div>
    </div>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconAlt: "Fast delivery icon",
      title: "Fast, free delivery",
      description:
        "Enjoy quick, free delivery or pick up your order at a nearby Apple Store.",
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconAlt: "Returns icon",
      title: "Free and easy returns",
      description:
        "Return online or at any Apple Store—simple and hassle-free.",
    },
    {
      iconSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      iconAlt: "Cash back icon",
      title: "Get 3% Daily Cash back",
      description:
        "Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.",
      iconWidth: 56,
      iconHeight: 56,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-16 py-24 mt-20 w-full text-center bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1141px] max-md:max-w-full">
        {benefits.map((benefit, index) => (
          <React.Fragment key={benefit.title}>
            <BenefitItem {...benefit} />
            {index < benefits.length - 1 && (
              <div className="shrink-0 self-stretch w-px h-[162px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
