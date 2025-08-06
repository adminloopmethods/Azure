import React from "react";

interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col flex-1 gap-6 max-md:min-w-[200px]">
      <div className="text-sm font-medium tracking-normal leading-4 text-zinc-900">
        {title}
      </div>
      <div className="flex flex-col gap-2.5">
        {links.map((link, index) => (
          <div
            key={index}
            className="text-xs leading-4 cursor-pointer text-zinc-700"
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const shopAndLearnLinks = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ];

  const servicesLinks = [
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
  ];

  const accountLinks = [
    "Manage Your Apple ID",
    "Apple Store Account",
    "iCloud.com",
  ];

  const appleStoreLinks = [
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
  ];

  const businessLinks = ["Apple and Business", "Shop for Business"];
  const educationLinks = [
    "Apple and Education",
    "Shop for K-12",
    "Shop for College",
  ];
  const healthcareLinks = [
    "Apple in Healthcare",
    "Health on Apple Watch",
    "Health Records on iPhone",
  ];
  const governmentLinks = [
    "Shop for Government",
    "Shop for Veterans and Military",
  ];

  const appleValuesLinks = [
    "Accessibility",
    "Education",
    "Environment",
    "Inclusion and Diversity",
    "Privacy",
    "Racial Equity and Justice",
    "Supplier Responsibility",
  ];

  const aboutAppleLinks = [
    "Newsroom",
    "Apple Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
    "Contact Apple",
  ];

  return (
    <div className="px-24 py-8 w-full bg-white max-md:px-12 max-md:py-8 max-sm:p-5">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="406:197" width="1439" height="2" viewBox="0 0 1439 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-border" style="width: 100%; height: 1px; margin-bottom: 30px"> <path d="M0 1H1439" stroke="#D2D2D7"></path> </svg>',
          }}
        />
      </div>
      <div className="w-full">
        <div className="flex gap-16 justify-between mb-8 max-md:flex-wrap max-md:gap-8 max-sm:flex-col max-sm:gap-5">
          <FooterSection title="Shop and Learn" links={shopAndLearnLinks} />

          <div className="flex flex-col flex-1 gap-6 max-md:min-w-[200px]">
            <FooterSection title="Services" links={servicesLinks} />
            <FooterSection title="Account" links={accountLinks} />
          </div>

          <FooterSection title="Apple Store" links={appleStoreLinks} />

          <div className="flex flex-col flex-1 gap-6 max-md:min-w-[200px]">
            <FooterSection title="For Business" links={businessLinks} />
            <FooterSection title="For Education" links={educationLinks} />
            <FooterSection title="For Healthcare" links={healthcareLinks} />
            <FooterSection title="For Government" links={governmentLinks} />
          </div>

          <div className="flex flex-col flex-1 gap-6 max-md:min-w-[200px]">
            <FooterSection title="Apple Values" links={appleValuesLinks} />
            <FooterSection title="About Apple" links={aboutAppleLinks} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xs leading-4 text-black">Call : 98703698212</div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="406:293" width="1239" height="2" viewBox="0 0 1239 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-divider" style="width: 100%; height: 1px; margin: 15px 0"> <path d="M0 1H1239" stroke="#D2D2D7"></path> </svg>',
              }}
            />
          </div>
          <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start">
            <div className="flex gap-6 items-center">
              <div className="text-sm leading-4 text-neutral-500">
                Copyright © 2022 Azure Inc. All rights reserved.
              </div>
              <div className="flex gap-3 items-center max-sm:flex-wrap max-sm:gap-2">
                <div className="text-sm leading-4 cursor-pointer text-zinc-700">
                  Privacy Policy
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="406:299" width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="legal-separator" style="width: 1px; height: 16px"> <path d="M1 0.3125V16.3125" stroke="#D2D2D7"></path> </svg>',
                    }}
                  />
                </div>
                <div className="text-sm leading-4 cursor-pointer text-zinc-700">
                  Terms of Use
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="406:300" width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="legal-separator" style="width: 1px; height: 16px"> <path d="M1 0.3125V16.3125" stroke="#D2D2D7"></path> </svg>',
                    }}
                  />
                </div>
                <div className="text-sm leading-4 cursor-pointer text-zinc-700">
                  Sales and Refunds
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="406:301" width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="legal-separator" style="width: 1px; height: 16px"> <path d="M1 0.3125V16.3125" stroke="#D2D2D7"></path> </svg>',
                    }}
                  />
                </div>
                <div className="text-sm leading-4 cursor-pointer text-zinc-700">
                  Legal
                </div>
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        '<svg id="406:302" width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="legal-separator" style="width: 1px; height: 16px"> <path d="M1 0.3125V16.3125" stroke="#D2D2D7"></path> </svg>',
                    }}
                  />
                </div>
                <div className="text-sm leading-4 cursor-pointer text-zinc-700">
                  Site Map
                </div>
              </div>
            </div>
            <div className="text-sm leading-4 text-zinc-700">India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
