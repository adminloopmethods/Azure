"use client";
import * as React from "react";

interface TeamCardProps {
  name: string;
  title: string;
  svgContent: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  name,
  title,
  svgContent,
}) => {
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
