"use client";
import * as React from "react";

export const Header: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center px-24 py-2.5 bg-white border-b border-solid border-b-white border-b-opacity-10 max-md:px-12 max-md:py-2.5 max-sm:flex-col max-sm:gap-5 max-sm:px-5 max-sm:py-2.5">
        <div className="relative h-[62px] w-[122px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=244"
            alt=""
            className="object-cover h-[62px] w-[122px]"
          />
        </div>
        <div className="flex gap-12 items-center">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="387:162" width="424" height="42" viewBox="0 0 424 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-bar" style="width: 424px; height: 41px"> <rect x="0.366663" y="0.366663" width="423.267" height="40.3329" rx="20.1665" fill="white" fill-opacity="0.8"></rect> <rect x="0.366663" y="0.366663" width="423.267" height="40.3329" rx="20.1665" stroke="#D2D2D7" stroke-width="0.733326"></rect> <text fill="#6E6E73" xml:space="preserve" style="white-space: pre" font-family="Poppins" font-size="14" font-weight="300" letter-spacing="0px"><tspan x="37" y="25.4">Search accessories</tspan></text> <path d="M26.8054 26.4007L22.9057 22.4994C23.8725 21.3675 24.3635 19.9052 24.2757 18.4192C24.1878 16.9332 23.528 15.539 22.4346 14.5289C21.3412 13.5187 19.8991 12.9712 18.4108 13.0012C16.9225 13.0311 15.5037 13.6361 14.4517 14.6894C13.3998 15.7427 12.7966 17.1623 12.7686 18.6507C12.7406 20.139 13.2899 21.5803 14.3015 22.6725C15.313 23.7646 16.7081 24.4226 18.1942 24.5085C19.6803 24.5944 21.142 24.1016 22.2726 23.1333L26.1715 27.0346C26.2123 27.0794 26.2618 27.1154 26.3169 27.1405C26.3721 27.1656 26.4317 27.1792 26.4923 27.1806C26.5528 27.182 26.6131 27.1711 26.6693 27.1486C26.7255 27.126 26.7766 27.0923 26.8194 27.0495C26.8623 27.0066 26.896 26.9556 26.9185 26.8993C26.9411 26.8431 26.952 26.7829 26.9506 26.7223C26.9492 26.6618 26.9355 26.6021 26.9104 26.547C26.8853 26.4918 26.8493 26.4424 26.8046 26.4015L26.8054 26.4007ZM13.6992 18.7717C13.6999 17.8136 13.9846 16.8772 14.5173 16.0809C15.0501 15.2846 15.8069 14.6641 16.6923 14.2979C17.5776 13.9318 18.5516 13.8363 19.4912 14.0236C20.4308 14.2109 21.2938 14.6726 21.971 15.3503C22.6483 16.028 23.1094 16.8912 23.2961 17.8309C23.4827 18.7707 23.3866 19.7446 23.0198 20.6297C22.653 21.5148 22.032 22.2713 21.2354 22.8035C20.4387 23.3357 19.5021 23.6198 18.5441 23.6198C17.2593 23.6174 16.0279 23.1058 15.1197 22.197C14.2115 21.2882 13.7007 20.0564 13.6992 18.7717Z" fill="#86868B"></path> </svg>',
              }}
            />
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex gap-10 items-center max-sm:hidden">
              <div className="text-sm font-medium text-black underline cursor-pointer">
                Home
              </div>
              <div className="text-sm text-black opacity-30 cursor-pointer">
                About
              </div>
              <div className="text-sm text-black opacity-30 cursor-pointer">
                Contact Us
              </div>
              <div className="text-sm text-black opacity-30 cursor-pointer">
                Blog
              </div>
            </div>
            <div className="flex justify-center items-center px-14 py-4 bg-white border border-black border-solid cursor-pointer rounded-[86px] max-sm:w-full">
              <div className="text-sm text-center text-black">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-24 py-5 bg-black max-md:px-12 max-md:py-5 max-sm:flex-col max-sm:gap-4 max-sm:px-5 max-sm:py-4">
        <div className="flex gap-2 items-center">
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg id="387:186" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="apple-icon" style="width: 16px; height: 20px; fill: #FFF"> <path d="M15.4905 6.70059C15.3758 6.78976 13.3631 7.92353 13.3631 10.4458C13.3631 13.3629 15.9235 14.3948 16 14.4202C15.9873 14.4839 15.5924 15.8342 14.6496 17.21C13.8089 18.4202 12.9299 19.6303 11.5924 19.6303C10.2548 19.6303 9.91082 18.8533 8.36941 18.8533C6.86624 18.8533 6.33117 19.6559 5.10823 19.6559C3.88529 19.6559 3.03176 18.5348 2.05094 17.159C0.917176 15.5412 0 13.0316 0 10.6495C0 6.82787 2.48412 4.80234 4.92988 4.80234C6.22929 4.80234 7.312 5.65587 8.12729 5.65587C8.90435 5.65587 10.1146 4.7514 11.5922 4.7514C12.1528 4.75153 14.1656 4.80259 15.4905 6.70059ZM10.8918 3.13376C11.5032 2.40765 11.9364 1.40129 11.9364 0.394943C11.9364 0.254826 11.9237 0.114709 11.8981 0C10.9045 0.0382362 9.71977 0.662474 9.00635 1.49047C8.44588 2.12741 7.92353 3.13377 7.92353 4.15295C7.92353 4.30577 7.94906 4.45871 7.96176 4.50965C8.02541 4.52236 8.12741 4.53518 8.22929 4.53518C9.12106 4.53506 10.242 3.93635 10.8918 3.13376Z" fill="white"></path> </svg>',
              }}
            />
          </div>
          <div className="text-xs font-light text-white">
            Authorised Reseller
          </div>
        </div>
        <div className="flex gap-16 items-center max-sm:flex-wrap max-sm:gap-8 max-sm:justify-center">
          <div className="text-xs font-light text-white cursor-pointer">
            Mac
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            iPad
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            iPhone
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            Watch
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            AirPods
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            TV &amp; Home
          </div>
          <div className="text-xs font-light text-white cursor-pointer">
            Accessories
          </div>
        </div>
      </div>
    </div>
  );
};
