"use client";
import * as React from "react";

interface BenefitCardProps {
  iconUrl: string;
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  iconUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={iconUrl}
        className="object-contain w-11 aspect-[0.79]"
        alt={title}
      />
      <div className="mt-2.5 text-lg font-semibold leading-none text-zinc-900">
        {title}
      </div>
      <div className="self-stretch mt-2.5 text-sm leading-5 text-neutral-500">
        {description}
      </div>
    </div>
  );
};
