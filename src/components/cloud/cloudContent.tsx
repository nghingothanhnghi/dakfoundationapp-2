import React, { useEffect, useRef } from 'react';
import { CloudBackgroundSection } from "./cloudBackgroundSection";
import CloudLogo from './cloudLogo';
import CloudDescription from "./cloudDescription";
import CloudIconsRow from "./cloudIconRow";

interface CloudContentProps {
  setupAnimation: (element: HTMLElement, options: { type?: string; direction?: 'vertical' | 'horizontal' }) => void;
}

const CloudContent: React.FC<CloudContentProps> = ({ setupAnimation }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const iconsRowRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      setupAnimation(logoRef.current, { type: 'cloudLogo' });
    }
    if (descriptionRef.current) {
      setupAnimation(descriptionRef.current, { type: 'cloudDescription' });
    }
    if (iconsRowRef.current) {
      setupAnimation(iconsRowRef.current, { type: 'cloudIconsRow' });
    }
    if (horizontalScrollRef.current) {
      setupAnimation(horizontalScrollRef.current, { direction: 'horizontal' });
    }
  }, [setupAnimation]);
  return (
    <>
      <CloudBackgroundSection>
        <div
          className="relative w-full max-w-[1502px] max-md:max-w-full"
        >
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[31%] max-md:ml-0 max-md:w-full">
              <CloudLogo ref={logoRef} />
            </div>
            <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full" >
              <CloudDescription ref={descriptionRef} />
            </div>
          </div>
        </div>
        <CloudIconsRow ref={iconsRowRef} />
      </CloudBackgroundSection>
      <div ref={horizontalScrollRef} className="w-full h-screen horizontal-scroll-container overflow-x-hidden whitespace-nowrap">
        {/* Add your horizontal content here */}
        <div className="horizontal-content inline-flex">
          {/* Example content */}
          <div className="item min-w-[300px] mr-5 bg-gray-200 p-5">Item 1</div>
          <div className="item min-w-[300px] mr-5 bg-gray-200 p-5">Item 2</div>
          <div className="item min-w-[300px] mr-5 bg-gray-200 p-5">Item 3</div>
          {/* Add more items as needed */}
        </div>
      </div>
    </>
  );
}
export default CloudContent;