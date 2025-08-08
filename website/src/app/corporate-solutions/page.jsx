"use client";
import * as React from "react";


export default function CorporateSolutions() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-2.5 bg-white">
      <SecondaryNav />
      <HeroSection />
      <AppleBusinessSection />
      <div className="shrink-0 mt-40 max-w-full h-px border border-solid border-black border-opacity-10 w-[1240px] max-md:mt-10" />
      <MicrosoftSurfaceSection />
      <AppleCareSection />
      <DeviceManagementSection />
    </div>
  );
}