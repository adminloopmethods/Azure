"use client";
import React from "react";


import { HeroSection } from "./HeroSection";
import { ProductShowcase } from "./ProductShowcase";
import { AboutSection } from "./AboutSection";
import { FeaturesSection } from "./FeaturesSection";
import { ProductGrid } from "./ProductGrid";
import { BannerSections } from "./BannerSections";
import { SolutionsSection } from "./SolutionsSection";

const HomePage = () => {
  return (
    <div className="flex flex-col items-end font-poppins">
      <div className="flex overflow-hidden flex-col w-full bg-white  max-md:max-w-full">   
        <HeroSection />
        <ProductShowcase />
        <AboutSection />
        <FeaturesSection />
        <ProductGrid />
        <BannerSections />
        <SolutionsSection />
      </div>
    </div>
  );
};

export default HomePage;
