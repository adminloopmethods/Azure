"use client";
import React from "react";
import { Header } from "./Header";
import { ProductNavigation } from "./ProductNavigation";
import { HeroSection } from "./HeroSection";
import { ProductShowcase } from "./ProductShowcase";
import { AboutSection } from "./AboutSection";
import { FeaturesSection } from "./FeaturesSection";
import { ProductGrid } from "./ProductGrid";
import { BannerSections } from "./BannerSections";
import { SolutionsSection } from "./SolutionsSection";
import { ServiceBenefits } from "./ServiceBenefits";
import { Footer } from "./Footer";

export const HomePage = () => {``
  return (
    <div className="flex flex-col items-end font-poppins">
      <div className="flex overflow-hidden flex-col w-full bg-white  max-md:max-w-full">
        {/* <Header /> */}
        {/* <ProductNavigation /> */}
        <HeroSection />
        <ProductShowcase />
        <AboutSection />
        <FeaturesSection />
        <ProductGrid />
        <BannerSections />
        <SolutionsSection />
        <ServiceBenefits />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default HomePage;
