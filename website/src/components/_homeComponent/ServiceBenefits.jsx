"use client";
import React from "react";

export const ServiceBenefits = () => {
  return (
    <div className="px-30 py-10 bg-[#F2F2F2] max-md:px-12 max-md:py-16 max-sm:px-5 max-sm:py-10 max-sm:mb-10">
        <div className="flex justify-between max-md:flex-col max-md:gap-12 max-md:items-center max-sm:gap-10">
          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ecda8f319f377123e2a829dabfdc9bec4b231def?width=88"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Fast, free delivery
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Enjoy quick, free delivery or pick up your order at a nearby Apple
              Store.
            </div>
          </div>

          <div className="h-px w-[300px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_0%,_#d1d5db_20%,_#d1d5db_80%,_white_100%)] lg:rotate-90 lg:translate-y-20" />

          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bec1318e8eabc4a24941bfa7b4542343ae71edac?width=88"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Free and easy returns
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Return online or at any Apple Store—simple and hassle-free.
            </div>
          </div>

          <div className="h-px w-[300px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_0%,_#d1d5db_20%,_#d1d5db_80%,_white_100%)] lg:rotate-90 lg:translate-y-20 " />

          <div className="text-center max-w-[300px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bde46adeb55329589ff0d8df33ef0e184523cfc1?width=112"
              alt=""
              className="block mx-auto mt-0 mb-2.5 w-auto h-14"
            />
            <div className="mb-2.5 text-lg font-semibold leading-6 text-zinc-900">
              Get 3% Daily Cash back
            </div>
            <div className="text-sm leading-5 text-neutral-500">
              Get 3% back daily when you pay with Apple Card, plus interest-free
              monthly installments.
            </div>
          </div>
        </div>
      </div>
  );
};
