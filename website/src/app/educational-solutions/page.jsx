"use client";
import { Hero } from "@/components/educationalSolutions/Hero";
import { ITSolutions } from "@/components/educationalSolutions/ITSolutions";
import { ProductSection } from "@/components/educationalSolutions/ProductSection";
import { RemoteTeaching } from "@/components/educationalSolutions/RemoteTeaching";
import * as React from "react";

export function EducationalSolutions() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <Hero />
      {/* iPad & Apple Pencil Section */}
      <ProductSection
        title="iPad & Apple Pencil"
        description={
          <>
            <li>
              Learn anywhere with the iPad's portability and 12-hour battery
              life
            </li>
            <li>
              Instantly capture ideas with Apple Pencil's smooth, paper-like
              writing experience
            </li>
            <li>
              Explore creativity with built-in tools for design, writing, and
              multimedia
            </li>
            <li>
              iPad brings education to your fingertips with flexibility and
              power
            </li>
            <li>
              Ideal for all classes—create, sketch, present, and collaborate
              with ease
            </li>
          </>
        }
        imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/71b883390ea39e9b11b4e118393a0fd3bf12b939?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        imagePosition="right"
        marginTop="mt-20"
      />

      <div className="shrink-0 mt-12 max-w-full h-px border border-solid border-black/20 border-opacity-10 w-[1240px] max-md:m-10" />

      {/* Mac & macOS Section */}
      <ProductSection
        title="Mac & macOS"
        description={
          <>
            <li>
              Thin, powerful Macs with all-day battery life (up to 10 hours)
            </li>
            <li>Comes pre-loaded with Pages, Numbers, and Keynote</li>
            <li>
              Supports professional skill development with robust creative tools
            </li>
            <li>
              No third-party tools required—everything is built-in and ready
            </li>
            <li>Simple subscriptions and licensing-free software management</li>
          </>
        }
        imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/e7440e2ce31174add8dbaf69d233ad3de35cd577?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        imagePosition="left"
        marginTop="mt-12"
      />

      <div className="shrink-0 mt-12 max-w-full h-px border border-solid border-black/20 border-opacity-10 w-[1240px] max-md:mt-10" />

      {/* Content & Apps Section */}
      <ProductSection
        title="Content & Apps"
        description={
          <ul className="list-disc list-inside">
            <li>Access millions of education-focused apps on iPad and Mac</li>
            <li>
              App Store features tools tailored by age, subject, and class level
            </li>
            <li>iTunes U offers free content—PDFs, audio, and video lessons</li>
            <li>Get lectures from top universities and institutions</li>
            <li>
              Educational discounts available on Pro apps for schools and
              colleges
            </li>
          </ul>
        }
        imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/ca358a4ac792838d9cbd9a6b4c8e26f1add6c2ca?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        imagePosition="right"
        marginTop="mt-12"
      />

      <ITSolutions />
      <RemoteTeaching />
    </div>
  );
}

export default EducationalSolutions;
