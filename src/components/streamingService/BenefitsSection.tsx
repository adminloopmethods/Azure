"use client";

import React from "react";

interface BenefitProps {
  icon: string;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-11 aspect-[0.79]"
      />
      <h3 className="mt-2.5 text-lg font-semibold leading-none text-zinc-900">
        {title}
      </h3>
      <p className="self-stretch mt-2.5 text-sm leading-5 text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Fast, free delivery",
      description:
        "Enjoy quick, free delivery or pick up your order at a nearby Apple Store.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Free and easy returns",
      description:
        "Return online or at any Apple Store—simple and hassle-free.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Get 3% Daily Cash back",
      description:
        "Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-16 py-24 mt-20 w-full text-center bg-zinc-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1141px] max-md:max-w-full">
        {benefits.map((benefit, index) => (
          <React.Fragment key={index}>
            <Benefit {...benefit} />
            {index < benefits.length - 1 && (
              <div className="shrink-0 self-stretch w-px h-[162px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
