import React from "react";

export const BenefitsSection = () => {
  return (
    <div className="flex justify-center items-center w-full bg-zinc-100 h-[343px] max-sm:px-0 max-sm:py-10 max-sm:h-auto">
      <div className="flex justify-between items-start h-[162px] w-[1168px] max-md:flex-col max-md:gap-10 max-md:h-auto max-md:w-[90%]">
        <div className="flex flex-col items-center text-center max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ecda8f319f377123e2a829dabfdc9bec4b231def?width=88"
            alt=""
            className="mb-2.5 h-14"
          />
          <div className="mb-2.5 text-lg font-semibold leading-6 text-center text-zinc-900">
            Fast, free delivery
          </div>
          <div className="text-sm leading-5 text-center text-neutral-500">
            Enjoy quick, free delivery or pick up your order at a nearby Apple
            Store.
          </div>
        </div>
        <div className="flex flex-col items-center text-center max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bec1318e8eabc4a24941bfa7b4542343ae71edac?width=88"
            alt=""
            className="mb-2.5 h-14"
          />
          <div className="mb-2.5 text-lg font-semibold leading-6 text-center text-zinc-900">
            Free and easy returns
          </div>
          <div className="text-sm leading-5 text-center text-neutral-500">
            Return online or at any Apple Store—simple and hassle-free.
          </div>
        </div>
        <div className="flex flex-col items-center text-center max-md:w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bde46adeb55329589ff0d8df33ef0e184523cfc1?width=112"
            alt=""
            className="mb-2.5 h-14"
          />
          <div className="mb-2.5 text-lg font-semibold leading-6 text-center text-zinc-900">
            Get 3% Daily Cash back
          </div>
          <div className="text-sm leading-5 text-center text-neutral-500">
            Get 3% back daily when you pay with Apple Card, plus interest-free
            monthly installments.
          </div>
        </div>
      </div>
    </div>
  );
};
