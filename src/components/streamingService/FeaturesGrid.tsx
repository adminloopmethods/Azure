"use client";

import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="grow px-5 py-8 w-full bg-white rounded-2xl border border-solid border-black border-opacity-20 text-zinc-900 max-md:mt-6">
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain aspect-square w-[52px]"
      />
      <h3 className="mt-10 text-2xl font-medium leading-10 max-md:mr-0.5">
        {title}
      </h3>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/57b875b06dd76bfa83ec9f7231e91997c355153c?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Decorative line"
        className="object-contain mt-5 w-full aspect-[333.33]"
      />
      <p className="mt-2.5 text-sm font-light leading-5 max-md:mr-0.5">
        {description}
      </p>
    </div>
  );
};

export const FeaturesGrid: React.FC = () => {
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
    <section className="self-center mt-20 w-full max-w-[1237px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {features.slice(0, 3).map((feature, index) => (
          <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
      <div className="mt-6 w-full max-w-[1237px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(3, 6).map((feature, index) => (
            <div key={index + 3} className="w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
