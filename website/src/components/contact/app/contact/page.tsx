import React from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative">
        <Header />
        <Navigation />
      </div>
      <Hero />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
