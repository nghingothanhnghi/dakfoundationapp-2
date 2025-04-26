"use client";

import React from "react";
import { HeroFeatureColumn } from "./heroFeatureColumn";

export const HeroFeaturesGrid: React.FC = () => {
  return (
    <section className="relative self-center mt-64 mb-0 w-full max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col w-full">
        <div className="w-[23%] max-md:ml-0 max-md:w-full">
          <HeroFeatureColumn description="Globalization with Decentralized Cloud" />
        </div>

        <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex relative z-10 flex-col mr-0 w-full max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90cd44cf00a35f63da6e1aa595ad7bb839bb70f6?placeholderIfAbsent=true"
              alt="DAK Productions feature illustration"
              className="object-contain z-10 w-full aspect-[2.05] max-md:max-w-full"
            />
            <div className="self-center mt-0 max-w-full w-[648px]">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center mt-2.5 text-2xl font-bold text-center text-white min-h-28 max-md:mt-8">
                    <p className="px-6 max-w-full rounded-none w-[339px] max-md:px-5">
                      Transparent Governance with Hybrid-Chain
                    </p>
                  </div>
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center text-2xl font-bold text-center text-white min-h-[122px] max-md:mt-5">
                    <p className="px-4 max-w-full rounded-none w-[289px]">
                      Automatic Production with Personal AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-5 w-[22%] max-md:ml-0 max-md:w-full">
          <HeroFeatureColumn
            description="Ultimate Personalization with One-In-All SuperApp"
            lineHeight="h-[274px]"
            alignRight={true}
            className="items-start"
          />
        </div>
      </div>
    </section>
  );
};
