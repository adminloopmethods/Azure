"use client";
import * as React from "react";

export function DeviceManagementSection() {
  return (
    <section className="w-full max-w-[1240px]">
      <h2 className="mt-20 text-6xl font-semibold leading-none text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Device Life Cycle Management Solutions
      </h2>
      <div className="mt-12 w-full max-w-[1239px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[82%] max-md:ml-0 max-md:w-full">
            <div className="pl-7 mx-auto w-full rounded-lg bg-zinc-100 max-md:mt-1.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[17%] max-md:ml-0 max-md:w-full">
                  <h3 className="self-stretch my-auto text-2xl leading-9 text-black max-md:mt-10">
                    Seamless Device Management
                  </h3>
                </div>
                <div className="ml-5 w-[83%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-wrap gap-1 text-2xl leading-9 text-black max-md:mt-7">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/789ebd5a04bc1c835d40926026206106db354414?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                      alt="Arrow"
                      className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
                    />
                    <div className="flex">
                      <div className="flex flex-col items-center px-8 pt-14 pb-8 rounded-lg aspect-square bg-zinc-100 max-md:px-5">
                        <span>Secure Deployment & Access Control</span>
                      </div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/9d8616c8d58512aaa1b3e6a66ba97db47133ab64?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                        alt="Arrow"
                        className="object-contain shrink-0 my-auto aspect-[2.21] w-[31px]"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col justify-center items-center px-14 rounded-lg aspect-square bg-zinc-100 max-md:px-5">
                        <span>Flexible Financial Options</span>
                      </div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/d24f8e7822837ffc8b49a3f3ef517e5e7a35ec5a?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                        alt="Arrow"
                        className="object-contain shrink-0 self-start mt-24 aspect-[2.21] w-[31px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex">
                      <div className="flex flex-col justify-center items-center px-12 rounded-lg aspect-square bg-zinc-100 max-md:px-5">
                        <span>Buy-Back Programs</span>
                      </div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4226dd3f4efd771129eb15eda7660cc0a47e8661?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114"
                        alt="Arrow"
                        className="object-contain shrink-0 self-start mt-24 aspect-[2.21] w-[31px] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-center px-8 w-full text-2xl leading-9 text-black rounded-lg aspect-square bg-zinc-100 max-md:px-5 max-md:mt-1.5">
              <span>Eco-Friendly Disposal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}