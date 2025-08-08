"use client";
import * as React from "react";
import Image from "next/image";
import faceBook from "@/assets/icons/fb.svg";
import LinkedIn from "@/assets/icons/LinkedIn.svg";
import instagram from "@/assets/icons/instagram.svg";
import twitter from "@/assets/icons/twitter.svg";

export const TeamCard = ({ name, title, image }) => {
  return (
    <div className="bg-[#101010] rounded-2xl border border-[#2F2F2F]">
      <Image
        src={image}
        alt="cofounder"
        className="rounded-lg h-[360px] w-[360px] object-cover"
      />
      <div className="p-4 rounded-2xl">
        <h2 className="text-3xl mt-2">{name}</h2>
        <p>{title}</p>
      </div>
      <div className=" flex gap-3  mb-4 px-4">
        <div className="rounded-full flex justify-center items-center size-10  bg-[#383D38]">
          <Image src={faceBook} alt="logo" className="size-5" />
        </div>
        <div className="rounded-full flex justify-center items-center size-10  bg-[#383D38]">
          <Image src={LinkedIn} alt="logo" className="size-5" />
        </div>
        <div className="rounded-full flex justify-center items-center size-10  bg-[#383D38]">
          <Image src={instagram} alt="logo" className="size-5" />
        </div>
        <div className="rounded-full flex justify-center items-center size-10  bg-[#383D38]">
          <Image src={twitter} alt="logo" className="size-5" />
        </div>
      </div>
    </div>
  );
};
