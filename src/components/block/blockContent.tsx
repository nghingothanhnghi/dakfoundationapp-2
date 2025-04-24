import React, { useEffect, useRef } from 'react';
import { BlockBackgroundSection } from "./blockBackgroundSection";
import { BlockLogo } from "./blockLogo";
import { BlockDescription } from "./blockDescription";
import { BlockIconsRow } from "./blockIconRow";

interface BlockContentProps {
  setupAnimation: (element: HTMLElement) => void;
}

const BlockContent: React.FC<BlockContentProps> = ({ setupAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setupAnimation(containerRef.current);
    }
  }, [setupAnimation]);
  return (
    <BlockBackgroundSection>
      <div
        ref={containerRef}
        className="relative w-full max-w-[1502px] max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[31%] max-md:ml-0 max-md:w-full">
            <BlockLogo />
          </div>
          <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <BlockDescription />
          </div>
        </div>
      </div>
      <BlockIconsRow />
    </BlockBackgroundSection>
  );
}
export default BlockContent;