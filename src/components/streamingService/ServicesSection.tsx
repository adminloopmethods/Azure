"use client";

import React from "react";

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 py-12 mt-20 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col px-7 py-9 w-full text-white rounded-2xl border border-solid bg-neutral-900 border-neutral-500 border-opacity-20 max-w-[1240px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
          <div className="flex flex-col self-start">
            <h3 className="self-start text-2xl font-medium leading-none">
              Webcasting
            </h3>
            <p className="mt-2.5 text-lg leading-none font-[275]">
              Stream live events to remote participants
            </p>
          </div>
          <div className="flex flex-col text-lg font-[275] max-md:max-w-full">
            <p className="leading-7 max-md:max-w-full">
              Broadcast key meetings, events, and announcements over the
              internet
            </p>
            <p className="self-start mt-1.5 leading-none max-md:max-w-full">
              Cost-effective alternative to in-person gatherings
            </p>
          </div>
        </div>
        <p className="self-end mt-1 mr-14 text-lg leading-none font-[275] max-md:mr-2.5 max-md:max-w-full">
          Improve accessibility and audience engagement
        </p>
      </div>
      <div className="mt-5 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start pt-7 pr-5 pb-20 pl-11 w-full text-lg leading-none text-white rounded-2xl border border-solid bg-neutral-900 border-neutral-500 border-opacity-20 font-[275] max-md:pl-5 max-md:mt-5 max-md:max-w-full">
              <h3 className="text-2xl font-medium leading-none">Webinars</h3>
              <p className="mt-2.5 font-light">
                Interactive online seminars made simple
              </p>
              <p className="self-stretch mt-5 max-md:max-w-full">
                Ideal for education, corporate training, and product demos
              </p>
              <p className="self-stretch mt-2.5 mr-9 max-md:mr-2.5 max-md:max-w-full">
                Real-time Q&A and polls to boost audience interaction.
              </p>
              <p className="mt-2.5 max-md:max-w-full">
                Save time and costs with easy remote access.
              </p>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 py-7 w-full text-lg leading-none text-white rounded-2xl border border-solid bg-neutral-900 border-neutral-500 border-opacity-20 font-[275] max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <h3 className="self-start text-2xl font-medium leading-none">
                Streaming Platforms / CDNs
              </h3>
              <p className="mt-2.5 mr-6 font-light max-md:mr-2.5 max-md:max-w-full">
                Professional-grade content management and delivery
              </p>
              <p className="mt-5 leading-7 max-md:max-w-full">
                Use platforms like IBM Ustream to broadcast, record, and manage
                content
              </p>
              <p className="mt-2.5 leading-7 max-md:mr-2.5 max-md:max-w-full">
                Embed live or on-demand videos on your website or social media
              </p>
              <div className="mt-2.5 max-md:mr-2.5 max-md:max-w-full">
                <ul>
                  <li>
                    Free trial and pricing available at{" "}
                    <span
                      style={{ fontWeight: 400, textDecoration: "underline" }}
                    >
                      streamingindia.net
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
