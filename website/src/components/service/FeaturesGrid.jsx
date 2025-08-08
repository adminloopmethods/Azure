"use client";

import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 px-5 py-8 w-full h-full bg-white rounded-2xl border border-solid border-black border-opacity-20 text-zinc-900">
      {/* Icon */}
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-[52px] h-[52px] object-contain mb-2 md:mb-0"
      />

      {/* Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Divider */}
      <div className="w-full h-[0.5px] bg-gray-300 rounded-full" />

      {/* Description */}
      <p className="text-sm font-light leading-5">{description}</p>
    </div>
  );
};

export const FeaturesGrid = () => {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/bf14b19a206a2580209bc13e90f784ea6d1b9290?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Multi-Camera Event Coverage",
      description: "Capture every angle with live switching between cameras",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d37f2b09b9082f36563b7395561c3760f9150085?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "PowerPoint Integration",
      description: "Seamlessly integrate slide presentations into your stream",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ef3577de71f6033baa975d2a5faffc0993e105f9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Custom-Branded Event Pages",
      description: "Create tailored event pages with your company's branding",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/738f71855b3a860220683b73613d9df966a3e90b?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Adaptive Bitrate Streaming",
      description: "Ensure smooth viewing across varying internet speeds",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/704fe738e32085012a9ebb04a8d04a6578a19b4c?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Social Media Interactivity",
      description:
        "Let viewers comment, react, and share live on social platforms",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7eec2310c771c1dbb9b7381f33f4da566b5594dc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Cross-Platform Compatibility",
      description: "Stream across PC, mobile, and tablet devices with ease",
    },
  ];

  return (
    <section className="self-center mt-20 w-full max-w-[1237px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
