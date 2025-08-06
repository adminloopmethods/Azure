"use client";
import * as React from "react";

export const TeamCard = ({ name, title, svgContent }) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    </div>
  );
};
