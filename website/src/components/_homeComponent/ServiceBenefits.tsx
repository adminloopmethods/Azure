"use client";
import React from "react";

export const ServiceBenefits: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full px-16 py-24 mt-2.5 text-center bg-zinc-100 max-xl:px-10 max-lg:px-6 max-md:px-4 max-md:py-16">
      <div className="flex w-full max-w-[1141px] gap-8 max-md:flex-col max-md:gap-10">
        {/* 1st Block */}
        <div className="flex-1 flex flex-col items-center px-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Fast delivery icon"
            className="w-11 h-auto object-contain"
          />
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">
            Fast, free delivery
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Enjoy quick, free delivery or pick up your order at a nearby Apple Store.
          </p>
        </div>

        {/* Divider for Desktop */}
        <div className="self-stretch w-px bg-[#80808030] max-md:hidden" />

        {/* 2nd Block */}
        <div className="flex-1 flex flex-col items-center px-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Easy returns icon"
            className="w-11 h-auto object-contain"
          />
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">
            Free and easy returns
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Return online or at any Apple Store—simple and hassle-free.
          </p>
        </div>

        {/* Divider for Desktop */}
        <div className="self-stretch w-px bg-[#80808030] max-md:hidden" />

        {/* 3rd Block */}
        <div className="flex-1 flex flex-col items-center px-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Cash back icon"
            className="w-14 h-auto object-contain"
          />
          <h3 className="mt-4 text-lg font-semibold text-zinc-900">
            Get 3% Daily Cash back
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.
          </p>
        </div>
      </div>
    </section>
  );
};
