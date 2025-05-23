import React, { useEffect, useRef } from 'react';
import { SuperAppBackgroundSection } from "./superAppBackgroundSection";
import { SuperAppLogo } from "./superAppLogo"
import { SuperAppDescription } from "./superAppDescription";
import { SuperAppIconsRow } from "./superAppIconRow";

interface SuperAppContentProps {
  setupAnimation: (element: HTMLElement) => void;
}


const SuperAppContent: React.FC<SuperAppContentProps> = ({ setupAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setupAnimation(containerRef.current);
    }
  }, [setupAnimation]);
  return (
    <SuperAppBackgroundSection>
      <div
        ref={containerRef}
        className="relative w-full max-w-[1502px] max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[31%] max-md:ml-0 max-md:w-full">
            <SuperAppLogo />
          </div>
          <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <SuperAppDescription />
          </div>
        </div>
      </div>
      <SuperAppIconsRow />
    </SuperAppBackgroundSection>
  );
}
export default SuperAppContent;