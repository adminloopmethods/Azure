"use client";
import * as React from "react";

export const Footer: React.FC = () => {
  const footerSections = [
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
      additionalSection: {
        title: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
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
      additionalSection: {
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
    },
  ];

  return (
    <div className="z-10 self-center py-8 w-full max-w-[1239px] max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start pr-7 w-full text-xs leading-none text-zinc-700 max-md:pr-5">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="text-sm font-medium tracking-normal leading-none text-zinc-900">
              {section.title}
            </div>
            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="mt-2.5">
                {link}
              </div>
            ))}

            {section.additionalSection && (
              <>
                <div className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
                  {section.additionalSection.title}
                </div>
                {section.additionalSection.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="self-stretch mt-2.5">
                    {link}
                  </div>
                ))}
              </>
            )}

            {section.additionalSections &&
              section.additionalSections.map(
                (additionalSection, sectionIndex) => (
                  <div key={sectionIndex}>
                    <div className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
                      {additionalSection.title}
                    </div>
                    {additionalSection.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="mt-2.5">
                        {link}
                      </div>
                    ))}
                  </div>
                ),
              )}
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="self-start text-xs leading-none text-black">
          Call : 98703698212
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a28e3f1dbfb9cfd11d6644b9bc8d661ba2f05ae9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          className="object-contain mt-2.5 w-full aspect-[1000] max-md:max-w-full"
          alt="Footer divider"
        />
        <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full text-sm leading-none max-md:max-w-full">
          <div className="flex flex-wrap gap-6">
            <div className="flex-auto text-neutral-500">
              Copyright © 2022 Azure Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap flex-auto gap-2.5 text-zinc-700">
              <div className="grow">Privacy Policy</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain shrink-0 w-px aspect-[0.06]"
                alt="Separator"
              />
              <div>Terms of Use</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain shrink-0 w-px aspect-[0.06]"
                alt="Separator"
              />
              <div className="basis-auto">Sales and Refunds</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain shrink-0 w-px aspect-[0.06]"
                alt="Separator"
              />
              <div>Legal</div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain shrink-0 w-px aspect-[0.06]"
                alt="Separator"
              />
              <div>Site Map</div>
            </div>
          </div>
          <div className="text-zinc-700">India</div>
        </div>
      </div>
    </div>
  );
};
