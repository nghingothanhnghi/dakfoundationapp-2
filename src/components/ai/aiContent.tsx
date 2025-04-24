import React, { useEffect, useRef } from 'react';
import { AiBackgroundSection } from "./aiBackgroundSection";
import { AiLogo } from "./aiLogo";
import { AiDescription } from "./aiDescription";
import { AiIconsRow } from "./aiIconRow";

interface AiContentProps {
  setupAnimation: (element: HTMLElement) => void;
}

const AiContent: React.FC<AiContentProps> = ({ setupAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setupAnimation(containerRef.current);
    }
  }, [setupAnimation]);
  return (
    <AiBackgroundSection>
      <div
        ref={containerRef}
        className="relative w-full max-w-[1502px] max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[31%] max-md:ml-0 max-md:w-full">
            <AiLogo />
          </div>
          <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <AiDescription />
          </div>
        </div>
      </div>
      <AiIconsRow />
    </AiBackgroundSection>
  );
}
export default AiContent;