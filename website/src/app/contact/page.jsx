import BenefitsSection from "@/components/contact/BenefitsSection";
import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/contact/Hero";
import Navigation from "@/components/contact/Navigation";
import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative">
        {/* <Navigation /> */}
      </div>
      <Hero />
      {/* <BenefitsSection /> */}
      <ContactSection />
    </div>
  );
}
