"use client";

import { ServiceCard } from "@/components/otherSolutions/ServiceCard";
import andriodiosimg from "@/assets/images/andriod-ios-sol.jpg";
import ecomimg from "@/assets/images/e-com-sol.jpg";
import humanresmangimg from "@/assets/images/human-res-mang-sys.jpg";
import webdevimg from "@/assets/images/web-dev-sol.jpg";
import OtherSolutionsHeader from "./common/OtherSolutionsHeader";

export default function OtherSolutionsPage() {
  const serviceCards = [
    {
      title: "Human Resource Management System",
      imageUrl:
        typeof humanresmangimg === "string"
          ? humanresmangimg
          : humanresmangimg.src,
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      routeTo: "/services/software-services",
    },
    {
      title: "Web Development Solution",
      imageUrl: typeof webdevimg === "string" ? webdevimg : webdevimg.src,
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      routeTo: "/services/hardware-services",
    },
    {
      title: "E-commerce Solution",
      imageUrl: typeof ecomimg === "string" ? ecomimg : ecomimg.src,
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d443871b3635bcdb6a67f48fe2cdf6212f2ce566?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      routeTo: "/services/it-professional-services",
    },
    {
      title: "Android/ ios Applecation Solution",
      imageUrl:
        typeof andriodiosimg === "string" ? andriodiosimg : andriodiosimg.src,
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/d75a879531fa3ede32e5bae2b11599f12861ea42?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      routeTo: "/services/streaming-services",
    },
  ];

  const benefits = [
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/a182124d608feeb4f6d631c13445ac12798c4a9e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Fast, free delivery",
      description:
        "Enjoy quick, free delivery or pick up your order at a nearby Apple Store.",
    },
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/366ec813a546b4d4a1f8e7a269a1be6143586999?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Free and easy returns",
      description:
        "Return online or at any Apple Store—simple and hassle-free.",
    },
    {
      iconUrl:
        "https://api.builder.io/api/v1/image/assets/TEMP/dd7fd682731fc522d0bf968e0f34fb8b3d7fdfb6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Get 3% Daily Cash back",
      description:
        "Get 3% back daily when you pay with Apple Card, plus interest-free monthly installments.",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white pb-24">
      {/* Hero Section */}
      <OtherSolutionsHeader>Other Solutions</OtherSolutionsHeader>

      {/* Service Cards Grid */}
      <div className="self-center mt-20 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full px-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[0].title}
              imageUrl={serviceCards[0].imageUrl}
              iconUrl={serviceCards[0].iconUrl}
              routeTo={serviceCards[0].routeTo}
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[1].title}
              imageUrl={serviceCards[1].imageUrl}
              iconUrl={serviceCards[1].iconUrl}
              routeTo={serviceCards[1].routeTo}
            />
          </div>
        </div>
      </div>

      <div className="self-center mt-10 w-full max-w-[1240px] max-md:max-w-full px-10 mb-20">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[2].title}
              imageUrl={serviceCards[2].imageUrl}
              iconUrl={serviceCards[2].iconUrl}
              routeTo={serviceCards[2].routeTo}
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ServiceCard
              title={serviceCards[3].title}
              imageUrl={serviceCards[3].imageUrl}
              iconUrl={serviceCards[3].iconUrl}
              routeTo={serviceCards[3].routeTo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
