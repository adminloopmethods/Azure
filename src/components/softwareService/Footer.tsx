"use client";
import * as React from "react";
import Image from "next/image";

interface FooterColumnProps {
  title: string;
  links: string[];
  additionalSections?: { title: string; links: string[] }[];
}

function FooterColumn({ title, links, additionalSections }: FooterColumnProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-sm font-medium tracking-normal leading-none text-zinc-900">
        {title}
      </div>
      {links.map((link, index) => (
        <div
          key={index}
          className={`${link.includes("Apple Store Account") || link.includes("Refurbished and Clearance") || link.includes("Shop for Veterans and Military") || link.includes("Racial Equity and Justice") ? "self-stretch" : ""} mt-2.5 ${link.includes("Apple Store Account") ? "max-md:mr-2.5" : ""}`}
        >
          {link}
        </div>
      ))}
      {additionalSections?.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          <div className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
            {section.title}
          </div>
          {section.links.map((link, linkIndex) => (
            <div
              key={linkIndex}
              className={`${link.includes("Apple Store Account") || link.includes("Refurbished and Clearance") || link.includes("Shop for Veterans and Military") || link.includes("Racial Equity and Justice") ? "self-stretch" : ""} mt-2.5 ${link.includes("Apple Store Account") ? "max-md:mr-2.5" : ""}`}
            >
              {link}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export function Footer() {
  const footerData = [
    {
      title: "Shop and Learn",
      links: [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      links: [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "Apple News+",
        "Apple Arcade",
        "iCloud+",
        "Apple One",
        "Apple Card",
        "Apple Books",
        "Apple Podcasts",
        "App Store",
      ],
      additionalSections: [
        {
          title: "Account",
          links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
        },
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Refurbished and Clearance",
        "Financing",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
      additionalSections: [
        {
          title: "For Education",
          links: ["Apple and Education", "Shop for K-12", "Shop for College"],
        },
        {
          title: "For Healthcare",
          links: [
            "Apple in Healthcare",
            "Health on Apple Watch",
            "Health Records on iPhone",
          ],
        },
        {
          title: "For Government",
          links: ["Shop for Government", "Shop for Veterans and Military"],
        },
      ],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supplier Responsibility",
      ],
      additionalSections: [
        {
          title: "About Apple",
          links: [
            "Newsroom",
            "Apple Leadership",
            "Career Opportunities",
            "Investors",
            "Ethics & Compliance",
            "Events",
            "Contact Apple",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/421826147270ef3b39308a103b3f9ad1c5ed955f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Banner image"
        width={1000}
        height={1}
        className="object-contain w-full aspect-[1000] max-md:max-w-full"
      />
      <div className="z-10 self-center py-8 w-full max-w-[1239px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-7 w-full text-xs leading-none text-zinc-700 max-md:pr-5">
          {footerData.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
              additionalSections={column.additionalSections}
            />
          ))}
        </div>
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <div className="self-start text-xs leading-none text-black">
            Call : 98703698212
          </div>
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/a28e3f1dbfb9cfd11d6644b9bc8d661ba2f05ae9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Separator line"
            width={1000}
            height={1}
            className="object-contain mt-2.5 w-full aspect-[1000] max-md:max-w-full"
          />
          <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full text-sm leading-none max-md:max-w-full">
            <div className="flex flex-wrap gap-6">
              <div className="flex-auto text-neutral-500">
                Copyright © 2022 Azure Inc. All rights reserved.
              </div>
              <div className="flex flex-wrap flex-auto gap-2.5 text-zinc-700">
                <div className="grow">Privacy Policy</div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  width={1}
                  height={16}
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <div>Terms of Use</div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  width={1}
                  height={16}
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <div className="basis-auto">Sales and Refunds</div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  width={1}
                  height={16}
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <div>Legal</div>
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  width={1}
                  height={16}
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <div>Site Map</div>
              </div>
            </div>
            <div className="text-zinc-700">India</div>
          </div>
        </div>
      </div>
    </>
  );
}
