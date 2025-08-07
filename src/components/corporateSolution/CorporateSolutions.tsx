"use client";
import * as React from "react";
import { Header } from "./Header";
import { SecondaryNav } from "./SecondaryNav";
import { HeroSection } from "./HeroSection";
import { AppleBusinessSection } from "./AppleBusinessSection";
import { MicrosoftSurfaceSection } from "./MicrosoftSurfaceSection";
import { AppleCareSection } from "./AppleCareSection";
import { DeviceManagementSection } from "./DeviceManagementSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "./Footer";

export default function CorporateSolutions() {
  return (
    <div className="flex overflow-hidden flex-col items-center pt-2.5 bg-white">
      <Header />
      <SecondaryNav />
      <HeroSection />
      <AppleBusinessSection />
      <div className="shrink-0 mt-40 max-w-full h-px border border-solid border-black border-opacity-10 w-[1240px] max-md:mt-10" />
      <MicrosoftSurfaceSection />
      <AppleCareSection />
      <DeviceManagementSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
