"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";

export const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-20 py-12 mt-20 w-full bg-black">
      {/* ✅ Top Card: Webcasting */}
      <div className="w-full max-w-[1240px] bg-neutral-900 text-white rounded-2xl border border-neutral-500 border-opacity-20 px-6 sm:px-7 py-9">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* 🔹 Left Side: Heading + Description */}
          <div className="md:w-1/2 text-lg font-light space-y-4">
            <h3 className="text-2xl font-medium text-center md:text-left">Webcasting</h3>

            <p>
              Reach a wider audience with live, internet-based broadcasts of key events and meetings.
            </p>
          </div>

          {/* 🔹 Right Side: Bullet Points */}
          <div className="md:w-1/2">
            <ul className="space-y-3 text-lg font-light">
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Stream live events to remote participants</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Improve accessibility and audience engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Cost-effective alternative to in-person gatherings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Cards: Webinars + Streaming Platforms */}
      <div className="mt-5 w-full max-w-[1240px] flex flex-col md:flex-row gap-5">
        {/* 🔹 Card 1: Webinars */}
        <div className="flex-1">
          <div className="flex flex-col h-full bg-neutral-900 text-white rounded-2xl border border-neutral-500 border-opacity-20 p-6 sm:p-10 text-lg font-light">
            <h3 className="text-2xl font-medium text-center md:text-left mb-2.5">Webinars</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Interactive online seminars made simple</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Ideal for education, corporate training, and product demos</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Real-time Q&A and polls to boost audience interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Save time and costs with easy remote access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Card 2: Streaming Platforms / CDNs */}
        <div className="flex-1">
          <div className="flex flex-col h-full bg-neutral-900 text-white rounded-2xl border border-neutral-500 border-opacity-20 p-6 sm:p-10 text-lg font-light">
            <h3 className="text-2xl font-medium text-center md:text-left mb-2.5">Streaming Platforms / CDNs</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>Professional-grade content management and delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>
                  Use platforms like IBM Ustream to broadcast, record, and manage content
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>
                  Embed live or on-demand videos on your website or social media
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCircle size={8} className="mt-2 text-white" />
                <span>
                  Free trial and pricing available at{" "}
                  <span className="underline font-normal hover:text-gray-400"> <a href="https://streamingindia.net">streamingindia.net</a></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
