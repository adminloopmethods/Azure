"use client";
import * as React from "react";

export function ITSolutions() {
  return (
    <div className="flex flex-col items-center self-stretch px-20 pt-12 pb-36 mt-28 w-full bg-black max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="text-6xl font-semibold leading-none text-white max-md:text-4xl">
        Solutions For IT
      </div>
      <div className="mt-12 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow pb-16 w-full font-light leading-10 text-white bg-neutral-800 bg-opacity-40 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c0959dd8dfa404d28be1c761faa5deb72237fb06?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[1.38] max-md:max-w-full"
              />
              <div className="flex flex-col items-start px-7 mt-8 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-medium leading-tight">
                  Apple School Manager
                </div>
                <div className="mt-2.5 text-3xl">
                  Centralized device and user management.
                </div>
                <div className="self-stretch mt-2.5 text-2xl max-md:max-w-full">
                  Organize staff, students, and devices
                  <br />
                  Pair with Jamf School for remote setup & deployment
                  <br />
                  Use Azure emails as Managed Apple IDs
                  <br />
                  Create and manage student Apple IDs in bulk
                  <br />
                  Enable seamless learning experiences across your institution
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow pb-48 w-full font-light text-white bg-neutral-800 bg-opacity-40 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4c4e355e550d3fa59add857b11758f753748ea5e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[1.38] max-md:max-w-full"
              />
              <div className="flex flex-col items-start px-7 mt-8 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl font-medium leading-tight">VPP</div>
                <div className="mt-2.5 text-3xl leading-loose">
                  Smart content distribution.
                </div>
                <div className="self-stretch mt-2.5 text-2xl leading-10 max-md:max-w-full">
                  Buy and distribute apps and books in bulk
                  <br />
                  Manage licenses with full ownership and flexibility
                  <br />
                  Revoke, reassign, and control all installations remotely
                  <br />
                  Unlock discounted pricing for paid apps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-7 mt-32 mb-0 max-w-full bg-neutral-800 bg-opacity-40 w-[1240px] max-md:pr-5 max-md:mt-10 max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-4 py-28 w-full bg-white max-md:py-24 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/281f6eb736305b9d5e91cb4cb4d0ea0409d30339?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[1.6] max-md:max-w-full"
              />
            </div>
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-7 font-light text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-medium leading-tight">
                Jamf School MDM
              </div>
              <div className="mt-2.5 text-3xl leading-loose max-md:max-w-full">
                Modern device lifecycle management.
              </div>
              <div className="self-stretch mt-2.5 text-2xl leading-10 max-md:max-w-full">
                Zero-touch provisioning for teachers and students
                <br />
                Remote device configuration and restriction
                <br />
                Push apps and updates wirelessly
                <br />
                Easy hardware tracking and inventory control
                <br />
                Supports remote learning seamlessly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
