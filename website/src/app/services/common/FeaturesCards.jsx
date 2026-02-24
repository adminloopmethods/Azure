'use client';

import React, { useState } from "react";

export default function FeaturesCards({ data = [] }) {
  return (
    <div className="flex flex-col items-end gap-6">
      {data.map((item, index) => {
        const [expanded, setExpanded] = useState(false);
        return (
          <div
            key={index}
            className={`w-full rounded-sm shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer px-11 py-10 ${
              item.bgColor || "bg-black"
            } ${item.textColor || "text-white"}`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium mb-2">{item.title}</h2>
              <span
                onClick={() => setExpanded(!expanded)}
                className="text-2xl cursor-pointer"
              >
                {expanded ? '-' : '+'}
              </span>
            </div>
            <p className="text-sm font-light mt-2.5">{item.shortDescription}</p>
            {expanded && (
              <p className="text-sm font-light mt-4">{item.longDescription}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}