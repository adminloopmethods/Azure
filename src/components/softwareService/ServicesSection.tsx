"use client";
import * as React from "react";

export function ServicesSection() {
  return (
    <div className="flex flex-col self-center mt-20 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[57%] max-md:ml-0 max-md:w-full">
            <div className="text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl font-semibold leading-[64px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                <span style={{ fontWeight: 300 }}>Your</span> Trusted{" "}
                <span style={{ fontWeight: 300 }}>Software</span>{" "}
                <span style={{ fontWeight: 300 }}>Service</span> Partner
              </div>
              <div className="mt-8 text-2xl leading-9 font-[275] max-md:max-w-full">
                We specialize in expert software support for Apple and other IT
                solutions. Whether online or onsite, we handle everything from
                technical troubleshooting to ongoing maintenance—ensuring
                smooth, reliable performance at every step.
              </div>
            </div>
          </div>
          <div className="ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <div className="grow text-zinc-900 max-md:mt-10 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col px-10 py-11 bg-gray-200 max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl font-medium leading-none">
                  Comprehensive Support
                </div>
                <div className="mt-2.5 text-sm font-light leading-5">
                  From break/fix services to remote troubleshooting and
                  installations—we cover all your software needs.
                </div>
              </div>
              <div className="flex overflow-hidden flex-col px-10 py-11 mt-2.5 bg-gray-200 max-md:px-5 max-md:max-w-full">
                <div className="self-start text-2xl font-medium leading-none">
                  Annual Maintenance Contracts{" "}
                </div>
                <div className="mt-2.5 text-sm font-light leading-5">
                  Ensure smooth performance with AMCs customized for Apple and
                  other IT systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-end px-8 py-11 mt-2.5 max-w-full bg-zinc-900 w-[475px] max-md:px-5">
        <div className="text-2xl font-medium leading-none text-neutral-100">
          Seamless Upgrades & Migrations
        </div>
        <div className="self-start mt-2.5 text-sm font-light leading-5 text-white">
          Experience hassle-free software upgrades, updates, and system
          migrations with expert support.
        </div>
      </div>
    </div>
  );
}
