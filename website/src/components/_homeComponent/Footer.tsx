"use client";
import React from "react";

const footerSections = [
  {
    heading: "Shop and Learn",
    links: [
      "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"
    ],
  },
  {
    heading: "Services",
    links: [
      "Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud+",
      "Apple One", "Apple Card", "Apple Books", "Apple Podcasts", "App Store"
    ],
    subSections: [
      {
        heading: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
    ],
  },
  {
    heading: "Apple Store",
    links: [
      "Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App",
      "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"
    ],
  },
  {
    heading: "For Business",
    links: ["Apple and Business", "Shop for Business"],
    subSections: [
      {
        heading: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        heading: "For Healthcare",
        links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
      },
      {
        heading: "For Government",
        links: ["Shop for Government", "Shop for Veterans and Military"],
      },
    ],
  },
  {
    heading: "Apple Values",
    links: [
      "Accessibility", "Education", "Environment", "Inclusion and Diversity",
      "Privacy", "Racial Equity and Justice", "Supplier Responsibility"
    ],
    subSections: [
      {
        heading: "About Apple",
        links: [
          "Newsroom", "Apple Leadership", "Career Opportunities", "Investors",
          "Ethics & Compliance", "Events", "Contact Apple"
        ],
      },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-[100px] max-xl:px-16 max-lg:px-10 max-md:px-5 bg-white text-sm text-zinc-700">
      {/* Divider Line */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/421826147270ef3b39308a103b3f9ad1c5ed955f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Footer divider"
        className="object-contain w-full h-px my-6"
      />

      <div className="max-w-[1239px] mx-auto">
        {/* Sections */}
        <div className="flex flex-wrap justify-between gap-y-10 text-xs leading-snug">
          {footerSections.map((section, i) => (
            <div key={i} className="flex flex-col min-w-[150px] max-w-xs pr-6">
              <h4 className="text-base font-semibold text-zinc-800 mb-3">{section.heading}</h4>
              {section.links.map((link, j) => (
                <a key={j} href="#" className="mt-2.5 hover:underline">
                  {link}
                </a>
              ))}
              {section.subSections?.map((sub, k) => (
                <div key={k} className="mt-6">
                  <h5 className="text-sm font-semibold text-zinc-800 mb-2">{sub.heading}</h5>
                  {sub.links.map((link, l) => (
                    <a key={l} href="#" className="block mt-2 hover:underline">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Contact and Divider */}
        <div className="mt-10 text-xs text-black">Call : 98703698212</div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a28e3f1dbfb9cfd11d6644b9bc8d661ba2f05ae9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
          alt="Footer separator"
          className="w-full h-px mt-4"
        />

        {/* Legal + Country */}
        <div className="flex flex-wrap justify-between items-center mt-4 gap-y-4 text-sm text-zinc-700">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-neutral-500">© 2022 Azure Inc. All rights reserved.</span>
            {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((text, i, arr) => (
              <React.Fragment key={i}>
                <a href="#" className="hover:underline">{text}</a>
                {i < arr.length - 1 && (
                  <span className="w-px h-4 bg-zinc-400 mx-1" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="ml-auto">India</div>
        </div>
      </div>
    </footer>
  );
};
