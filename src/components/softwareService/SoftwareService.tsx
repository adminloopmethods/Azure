"use client";
import * as React from "react";
import { Header } from "./Header";
import { SecondaryNav } from "./SecondaryNav";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "./Footer";

function SoftwareService() {
  return (
    <div className="flex overflow-hidden flex-col pt-2.5 bg-white">
      <Header />
      <SecondaryNav />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}

export default SoftwareService;
