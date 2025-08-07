"use client";

import React from "react";
import { Header } from "./Header";
import { SecondaryNav } from "./SecondaryNav";
import { HeroSection } from "./HeroSection";
import { MainContent } from "./MainContent";
import { ServicesSection } from "./ServicesSection";
import { FeaturesGrid } from "./FeaturesGrid";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "./Footer";

export const StreamingServices: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-2.5 bg-white">
      <Header />
      <SecondaryNav />
      <HeroSection />
      <MainContent />
      <ServicesSection />
      <FeaturesGrid />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default StreamingServices;
