import React from "react";

export const ServicesSection = () => {
  return (
    <div className="px-0 py-24 w-full bg-white">
      <div className="flex gap-28 mx-auto my-0 w-[1240px] max-md:flex-col max-md:gap-12 max-md:w-[90%]">
        <div className="w-[656px] max-md:w-full">
          <div className="mb-12 text-6xl text-black leading-[64px] w-[656px] max-md:w-full max-md:text-5xl max-md:leading-[50px] max-sm:text-3xl max-sm:leading-10">
            <div className="font-bold">Hardware</div>
            <div>and</div>
            <div className="font-bold">Network Support</div>
            <div>Services</div>
          </div>
          <div className="text-2xl leading-9 text-justify text-black font-[275] w-[656px] max-md:w-full max-md:text-xl max-md:leading-8 max-sm:text-base max-sm:leading-6">
            Reliable support for Apple and IT hardware, network setup, and CISCO
            solutions. From installations to repairs and preventive maintenance,
            we ensure smooth, secure, and uninterrupted operations.
          </div>
        </div>
        <div className="flex flex-col gap-2.5 w-[475px] max-md:w-full">
          <div className="flex flex-col gap-2.5 justify-center items-start px-10 py-8 bg-gray-200 h-[170px] w-[475px] max-md:w-full max-sm:p-5">
            <div className="w-full">
              <div className="mb-2.5 text-2xl font-medium leading-8 text-zinc-900 max-sm:text-lg max-sm:leading-6">
                Reliable Hardware Assistance
              </div>
              <div className="text-sm font-light leading-5 text-zinc-900">
                From diagnostics to repairs, we ensure your Apple and IT
                hardware performs at its best.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 justify-center items-start px-10 py-8 bg-gray-200 h-[170px] w-[475px] max-md:w-full max-sm:p-5">
            <div className="w-full">
              <div className="mb-2.5 text-2xl font-medium leading-8 text-zinc-900 max-sm:text-lg max-sm:leading-6">
                Robust Network Solutions
              </div>
              <div className="text-sm font-light leading-5 text-zinc-900">
                Design, installation, and support for secure and
                high-performance networks—powered by trusted vendors like CISCO.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 justify-center items-start px-10 py-8 bg-zinc-900 h-[170px] w-[475px] max-md:w-full max-sm:p-5">
            <div className="mb-2.5 text-2xl font-medium leading-8 text-neutral-100 max-sm:text-lg max-sm:leading-6">
              Proactive Maintenance
            </div>
            <div className="text-sm font-light leading-5 text-white">
              Prevent downtime with regular health checks, updates, and
              troubleshooting for your hardware and network systems.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
