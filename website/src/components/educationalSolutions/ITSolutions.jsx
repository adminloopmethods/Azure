"use client";
import * as React from "react";

export function ITSolutions() {
  // ! todo
  return (
    <div className="bg-black lg:p-20 p-5 mt-10 w-screen">
      <div className="text-6xl font-semibold leading-none text-white max-md:text-4xl">
        Solutions For IT
      </div>

      <div className="mt-12 lg:flex lg:gap-10 ">
        <div className="mb-10 bg-neutral-800 border border-white/10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c0959dd8dfa404d28be1c761faa5deb72237fb06?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-full aspect-[1.38] max-md:max-w-full"
          />
          <div className="flex flex-col bg-neutral-800 p-5 font-light">
            <div className="text-4xl max-md:text-2xl font-medium ">Apple School Manager</div>
            <div className="mt-2.5 text-3xl max-md:text-xl  max-md:max-w-full">
              Centralized device and user management.
            </div>
            <ul className="list-disc ml-10 mt-5">
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

        <div className="mb-10 bg-neutral-800 border border-white/10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4c4e355e550d3fa59add857b11758f753748ea5e?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-full aspect-[1.38] max-md:max-w-full"
          />
          <div className="flex flex-col bg-neutral-800 p-5 font-light">
            <div className="text-4xl max-md:text-2xl font-medium ">VPP</div>
            <div className="mt-2.5 text-3xl max-md:text-xl  max-md:max-w-full">
              Smart content distribution.
            </div>
            <ul className="list-disc ml-10 mt-5">
              <li>Buy and distribute apps and books in bulk</li>
              <li>Manage licenses with full ownership and flexibility</li>
              <li>Revoke, reassign, and control all installations remotely</li>
              <li>Unlock discounted pricing for paid apps</li>
            </ul>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="bg-neutral-800 lg:flex border border-white/10">
        <div className="px-2 py-18 w-full flex-3/7 bg-white max-md:py-24 max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/281f6eb736305b9d5e91cb4cb4d0ea0409d30339?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
            className="object-contain w-full aspect-[2.2] max-md:max-w-full"
          />
        </div>

        <div className="flex flex-col bg-neutral-800 flex-4/7 p-5 font-light">
          <div className="text-4xl max-md:text-2xl font-medium ">
            Jamf School MDM
          </div>
          <div className="mt-2.5 text-3xl max-md:text-xl  max-md:max-w-full">
            Modern device lifecycle management.
          </div>
          <ul className="list-disc ml-10 mt-5">
            <li>Zero-touch provisioning for teachers and students</li>
            <li>Remote device configuration and restriction</li>
            <li>Push apps and updates wirelessly</li>

            <li>Easy hardware tracking and inventory control</li>
            <li>Supports remote learning seamlessly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
