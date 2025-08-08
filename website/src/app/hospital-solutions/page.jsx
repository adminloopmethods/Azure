"use client";
import Image from "next/image";
import HospitalSolutionsHeader from "./common/HospitalSolutionsHeader";

import HospitalGrid from "./common/HospitalGrid";
import SolutionCard from "./common/SolutionCard";
import OstrixSolutionSection from "./common/OstrixSolutionSection";

export default function HospitalSolutionsPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white pb-12 md:pb-24">
      <HospitalSolutionsHeader>Hospital Solutions</HospitalSolutionsHeader>

      {/* Top Section */}
      <div className="px-4 sm:px-8 lg:px-24 pt-10 md:pt-20">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight md:leading-[3.8rem]">
            Apple Used In Healthcare
          </h1>
        </div>
        <div className="pt-6 md:pt-8 pb-16 md:pb-28 text-base sm:text-lg md:text-xl lg:text-2xl font-extralight leading-relaxed text-black">
          <p>
            Apple devices like iPad, iPhone, and Apple Watch empower medical
            professionals to deliver personalized and efficient care. With
            powerful hardware and secure software, Apple supports the fast-paced
            needs of healthcare organizations—making everyday tasks quicker and
            smoother.
          </p>
          <p className="pt-4 md:pt-8">
            Intuitive apps offer instant access to critical patient data,
            helping healthcare teams make informed decisions in real time. From
            managing workflows to improving patient outcomes, Apple technology
            provides the tools and flexibility needed for modern, connected
            healthcare.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <SolutionCard />
      <OstrixSolutionSection /> 
    </div>
  );
}
