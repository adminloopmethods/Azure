"use client";
import * as React from "react";

export function ITSolutions() {
  // ! todo
  return (
    <div className="flex flex-col items-center self-stretch px-20 pt-12 pb-36 mt-28 w-full bg-black max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="text-6xl font-semibold leading-none text-white max-md:text-4xl">
        Solutions For IT
      </div>
      <div className="mt-12 w-full max-w-[1240px] h- max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:">
          <div className="w-6/12 h-2/12  max-md:ml-0 max-md:w-full">
            <div className="grow  w-full font-light leading-10 text-white  bg-opacity-40 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c0959dd8dfa404d28be1c761faa5deb72237fb06?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[1.38] max-md:max-w-full"
              />
              <div className="flex flex-col bg-neutral-800  h-[330px] p-7 max-md:px-5 max-md:max-w-full">
                <div className="text-4xl max-md:text-xl">
                  Apple School Manager
                </div>
                <div className="mt-2.5 text-lg max-md:text-md">
                  Centralized device and user management.
                </div>
                <ul className="list-disc ml-10">
                  <li>Organize staff, students, and devices</li>
                  <li>Pair with Jamf School for remote setup & deployment</li>
                  <li>Use Azure emails as Managed Apple IDs</li>
                  <li>Create and manage student Apple IDs in bulk</li>
                  <li>
                    Enable seamless learning experiences across your institution
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-5 w-6/12 h-2/12 max-md:ml-0 max-md:w-full">
            <div className="grow w-full font-light leading-10 text-white  bg-opacity-40 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4c4e355e550d3fa59add857b11758f753748ea5e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[1.38] max-md:max-w-full"
              />
              <div className="flex flex-col items-start p-7 h-[330px] bg-neutral-800  max-md:px-5 max-md:max-w-full">
                <div className="text-4xl max-md:text-xl font-medium leading-tight">VPP</div>
                <div className="mt-2.5 text-lg max-md:text-md ">
                  Smart content distribution.
                </div>
                <ul className="list-disc ml-10">
                  <li>Buy and distribute apps and books in bulk</li>
                  <li>Manage licenses with full ownership and flexibility</li>
                  <li>
                    Revoke, reassign, and control all installations remotely
                  </li>
                  <li>Unlock discounted pricing for paid apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-7 mt-22 mb-0 max-w-full  bg-opacity-40 w-[1240px] max-md:pr-5 max-md:mt-10 max-md:mb-2.5">
        <div className="flex max-md:flex-col max-md:">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-4 py-28 w-full bg-white max-md:py-24 max-md:mt-9 max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/281f6eb736305b9d5e91cb4cb4d0ea0409d30339?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                className="object-contain w-full aspect-[2.2] max-md:max-w-full"
              />
            </div>
          </div>
          <div className="ml-5 w-3/5 p-2 max-md:ml-0 bg-neutral-800 max-md:w-full">
            <div className="flex flex-col items-start  mt-7 font-light text-white max-md:mt-0 max-md:max-w-full">
              <div className="text-4xl max-md:text-2xl font-medium leading-tight">
                Jamf School MDM
              </div>
              <div className="mt-2.5 text-3xl max-md:text-xl leading-loose max-md:max-w-full">
                Modern device lifecycle management.
              </div>
              <ul className="list-disc ml-10">
                <li>Zero-touch provisioning for teachers and students</li>
                <li>Remote device configuration and restriction</li>
                <li>Push apps and updates wirelessly</li>
                
                <li>

                Easy hardware tracking and inventory control
                </li>
                <li>

                Supports remote learning seamlessly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
