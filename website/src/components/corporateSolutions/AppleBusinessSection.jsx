"use client";
import * as React from "react";

export function AppleBusinessSection() {
  return (
    <section className="w-full px-5 lg:px-20 py-5">
      <div className="w-full">
        <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/441c12a659c137f74200ec8b41b7d04446f2db17?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
        alt="Apple for Business"
        className="object-cover shadow-sm aspect-[2.9] max-md:max-w-full"
      />
      </div>
      <h2 className="mt-16 text-6xl font-semibold leading-none text-black max-md:mt-10 max-md:max-w-full max-md:text-3xl">
        Apple for Business – Smart, Secure, Scalable
      </h2>
      <div className="mt-8 px-5 text-2xl max-md:text-xl leading-9 text-black font-[275] max-md:max-w-full">
        <ul className="list-disc">
          <li>
            <span style={{ fontWeight: 400 }}>
              Secure, Seamless Integration
            </span>{" "}
            Enjoy a secure, manageable, and scalable solution built to work
            effortlessly with your existing IT infrastructure.
          </li>
          <li>
            <span style={{ fontWeight: 400 }}>Zero-Touch Deployment</span> Save
            IT team hours with remote provisioning and configuration of Apple
            devices right out of the box.
          </li>
          <li>
            <span style={{ fontWeight: 400 }}>
              Reliable Performance & Support
            </span>{" "}
            Benefit from Apple's enterprise service ecosystem—designed to
            maximize uptime, ensure business continuity, and deliver a seamless
            user experience.
          </li>
          <li>
            <span style={{ fontWeight: 400 }}>Cost-Effective Investment</span>
          </li>
          <ul className="list-disc px-5 lg:px-10">
            <li>IBM reports saving ₹22,800–₹45,400 per Mac compared to PCs.</li>
            <li>Forrester states Macs cost ₹43,000 less over three years.</li>
            <li>
              On average, Macs reduce 3-year hardware/software costs by ₹8,000
              versus PCs.
            </li>
          </ul>
        </ul>
      </div>
    </section>
  );
}