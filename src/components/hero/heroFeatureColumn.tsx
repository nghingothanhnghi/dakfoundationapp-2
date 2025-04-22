"use client";

import React from "react";

interface HeroFeatureColumnProps {
  description: string;
  lineHeight?: string;
  className?: string;
  alignRight?: boolean;
  marginTop?: string;
}

export const HeroFeatureColumn: React.FC<HeroFeatureColumnProps> = ({
  description,
  lineHeight = "h-[280px]",
  className = "",
  alignRight = false,
  marginTop = "mt-40",
}) => {
  return (
    <div
      className={`relative flex flex-col grow ${marginTop} min-h-[352px] max-md:mt-10 ${className}`}
    >
      <div
        className={`flex flex-col items-${alignRight ? "end" : "start"} max-w-full rounded-none w-[182px] ${alignRight ? "px-16" : ""} max-md:pr-5 max-md:pl-5`}
      >
        <div
          className={`shrink-0 w-px border border-white border-solid ${lineHeight}`}
        />
      </div>
      <div className="px-7 mt-3.5 max-w-full text-2xl font-bold text-center text-white rounded-none w-[351px] max-md:px-5">
        {description}
      </div>
    </div>
  );
};
