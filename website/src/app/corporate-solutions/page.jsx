"use client";
import { AppleBusinessSection } from "@/components/corporateSolutions/AppleBusinessSection";
import { AppleCareSection } from "@/components/corporateSolutions/AppleCareSection";
import { DeviceManagementSection } from "@/components/corporateSolutions/DeviceManagementSection";
import { HeroSection } from "@/components/corporateSolutions/HeroSection";
import { MicrosoftSurfaceSection } from "@/components/corporateSolutions/MicrosoftSurfaceSection";
import * as React from "react";


export default function CorporateSolutions() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <HeroSection />
      <AppleBusinessSection />
      <div className="w-full px-5 lg:px-20 lg:my-10">
        <div className="h-px bg-black/30">
        </div>
      </div>
      <MicrosoftSurfaceSection />
      <AppleCareSection />
      <DeviceManagementSection />
    </div>
  );
}