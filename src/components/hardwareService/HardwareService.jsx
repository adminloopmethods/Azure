import React from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { ServicesSection } from "./ServicesSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "./Footer";

const HardwareService = () => {
  return (
    <div className="relative w-full bg-white">
      <Header />
      <Navigation />
      <Hero />
      <ServicesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default HardwareService;
