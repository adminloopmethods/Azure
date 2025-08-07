"use client";

import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-sm font-medium tracking-normal leading-none text-zinc-900">
        {title}
      </h4>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="mt-2.5 text-xs leading-none text-zinc-700 hover:underline"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export const Footer: React.FC = () => {
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
    },
  ];

  return (
    <footer>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/421826147270ef3b39308a103b3f9ad1c5ed955f?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Footer background"
        className="object-contain w-full aspect-[1000] max-md:max-w-full"
      />
      <div className="z-10 self-center py-8 w-full max-w-[1239px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-7 w-full text-xs leading-none text-zinc-700 max-md:pr-5">
          <FooterColumn
            title="Shop and Learn"
            links={[
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV & Home",
              "AirTag",
              "Accessories",
              "Gift Cards",
            ]}
          />

          <div className="flex flex-col items-start self-stretch">
            <h4 className="text-sm font-medium tracking-normal leading-none text-zinc-900">
              Services
            </h4>
            <a href="#" className="mt-2.5">
              Apple Music
            </a>
            <a href="#" className="mt-2.5">
              Apple TV+
            </a>
            <a href="#" className="mt-2.5">
              Apple Fitness+
            </a>
            <a href="#" className="mt-2.5">
              Apple News+
            </a>
            <a href="#" className="mt-2.5">
              Apple Arcade
            </a>
            <a href="#" className="mt-2.5">
              iCloud+
            </a>
            <a href="#" className="mt-2.5">
              Apple One
            </a>
            <a href="#" className="mt-2.5">
              Apple Card
            </a>
            <a href="#" className="mt-2.5">
              Apple Books
            </a>
            <a href="#" className="mt-2.5">
              Apple Podcasts
            </a>
            <a href="#" className="mt-2.5">
              App Store
            </a>
            <h4 className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
              Account
            </h4>
            <a href="#" className="self-stretch mt-2.5">
              Manage Your Apple ID
            </a>
            <a href="#" className="self-stretch mt-2.5 max-md:mr-2.5">
              Apple Store Account
            </a>
            <a href="#" className="mt-2.5">
              iCloud.com
            </a>
          </div>

          <FooterColumn
            title="Apple Store"
            links={[
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
            ]}
          />

          <div className="flex flex-col items-start">
            <h4 className="text-sm font-medium tracking-normal leading-none text-zinc-900">
              For Business
            </h4>
            <a href="#" className="mt-2.5">
              Apple and Business
            </a>
            <a href="#" className="mt-2.5">
              Shop for Business
            </a>
            <h4 className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
              For Education
            </h4>
            <a href="#" className="mt-2.5">
              Apple and Education
            </a>
            <a href="#" className="mt-2.5">
              Shop for K-12
            </a>
            <a href="#" className="mt-2.5">
              Shop for College
            </a>
            <h4 className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
              For Healthcare
            </h4>
            <a href="#" className="mt-2.5">
              Apple in Healthcare
            </a>
            <a href="#" className="mt-2.5">
              Health on Apple Watch
            </a>
            <a href="#" className="mt-2.5">
              Health Records on iPhone
            </a>
            <h4 className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
              For Government
            </h4>
            <a href="#" className="mt-2.5">
              Shop for Government
            </a>
            <a href="#" className="self-stretch mt-2.5">
              Shop for Veterans and Military
            </a>
          </div>

          <div className="flex flex-col items-start self-stretch">
            <h4 className="text-sm font-medium tracking-normal leading-none text-zinc-900">
              Apple Values
            </h4>
            <a href="#" className="mt-2.5">
              Accessibility
            </a>
            <a href="#" className="mt-2.5">
              Education
            </a>
            <a href="#" className="mt-2.5">
              Environment
            </a>
            <a href="#" className="mt-2.5">
              Inclusion and Diversity
            </a>
            <a href="#" className="mt-2.5">
              Privacy
            </a>
            <a href="#" className="self-stretch mt-2.5">
              Racial Equity and Justice
            </a>
            <a href="#" className="mt-2.5">
              Supplier Responsibility
            </a>
            <h4 className="mt-6 text-sm font-medium tracking-normal leading-none text-zinc-900">
              About Apple
            </h4>
            <a href="#" className="mt-2.5">
              Newsroom
            </a>
            <a href="#" className="mt-2.5">
              Apple Leadership
            </a>
            <a href="#" className="mt-2.5">
              Career Opportunities
            </a>
            <a href="#" className="mt-2.5">
              Investors
            </a>
            <a href="#" className="mt-2.5">
              Ethics & Compliance
            </a>
            <a href="#" className="mt-2.5">
              Events
            </a>
            <a href="#" className="mt-2.5">
              Contact Apple
            </a>
          </div>
        </div>

        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
          <p className="self-start text-xs leading-none text-black">
            Call : 98703698212
          </p>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a28e3f1dbfb9cfd11d6644b9bc8d661ba2f05ae9?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            alt="Footer divider"
            className="object-contain mt-2.5 w-full aspect-[1000] max-md:max-w-full"
          />
          <div className="flex flex-wrap gap-5 justify-between mt-2.5 w-full text-sm leading-none max-md:max-w-full">
            <div className="flex flex-wrap gap-6">
              <p className="flex-auto text-neutral-500">
                Copyright © 2022 Azure Inc. All rights reserved.
              </p>
              <div className="flex flex-wrap flex-auto gap-2.5 text-zinc-700">
                <a href="#" className="grow">
                  Privacy Policy
                </a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Terms of Use</a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#" className="basis-auto">
                  Sales and Refunds
                </a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Legal</a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f5ec51a2cbd28c5d363110a1ab5f4f133d78f1bb?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                  alt="Separator"
                  className="object-contain shrink-0 w-px aspect-[0.06]"
                />
                <a href="#">Site Map</a>
              </div>
            </div>
            <p className="text-zinc-700">India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
