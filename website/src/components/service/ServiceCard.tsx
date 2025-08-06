"use client";
import * as React from "react";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  iconUrl: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageUrl,
  iconUrl,
}) => {
  return (
    <div className="flex relative flex-col w-full text-3xl font-medium leading-none text-white rounded-lg min-h-[619px] max-md:mt-10 max-md:max-w-full">
      <img
        src={imageUrl}
        className="object-cover absolute inset-0 size-full"
        alt={title}
      />
      <div className="flex relative flex-wrap gap-5 justify-between items-start px-14 pb-12 rounded-lg pt-[527px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div>{title}</div>
        <img
          src={iconUrl}
          className="object-contain shrink-0 rounded-lg aspect-[1.02] w-[41px]"
          alt="Service icon"
        />
      </div>
    </div>
  );
};
