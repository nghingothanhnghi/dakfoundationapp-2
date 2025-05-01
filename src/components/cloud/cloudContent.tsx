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
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

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
    
    // Set up horizontal scroll animation
    if (horizontalScrollRef.current) {
      // Make sure the container is wide enough for scrolling
      horizontalScrollRef.current.style.width = '200vw';
      
      setupAnimation(horizontalScrollRef.current, { 
        direction: 'horizontal'
      });
    }
  }, [setupAnimation]);

  const backgroundGradient = `
    radial-gradient(at 52% 38%, hsla(328,56%,54%,0.35) 0px, transparent 50%),
    radial-gradient(at 8% 88%, hsla(255,16%,84%,0.3) 0px, transparent 50%),
    radial-gradient(at 26% 91%, hsla(35,16%,68%,0.3) 0px, transparent 50%),
    radial-gradient(at 69% 95%, hsla(50,15%,64%,0.3) 0px, transparent 50%)
  `;

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={horizontalScrollRef} 
        className="flex w-[200vw] h-screen horizontal-scroll-container"
      >
        <div ref={section1Ref} className="w-screen h-full flex-shrink-0">
          <CloudBackgroundSection
            background="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe850586a47258fd17035599f570eee37404e00?placeholderIfAbsent=true"
            isImage={true}
          >
            <div className="relative w-full max-w-[1502px] max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[31%] max-md:ml-0 max-md:w-full">
                  <CloudLogo ref={logoRef} />
                </div>
                <div className="ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                  <CloudDescription ref={descriptionRef} />
                </div>
              </div>
            </div>
            <CloudIconsRow ref={iconsRowRef} />
          </CloudBackgroundSection>
        </div>
        
        <div ref={section2Ref} className="w-screen h-full flex-shrink-0">
          <CloudBackgroundSection background={backgroundGradient} isImage={false}>
            <div className="flex flex-wrap justify-center items-center gap-8 h-full">
              <div className="item min-w-[300px] bg-gray-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Cloud Feature 1</h3>
                <p>Detailed description of this amazing cloud feature and its benefits.</p>
              </div>
              <div className="item min-w-[300px] bg-gray-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Cloud Feature 2</h3>
                <p>Detailed description of this amazing cloud feature and its benefits.</p>
              </div>
              <div className="item min-w-[300px] bg-gray-200 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Cloud Feature 3</h3>
                <p>Detailed description of this amazing cloud feature and its benefits.</p>
              </div>
            </div>
          </CloudBackgroundSection>
        </div>
      </div>
    </div>
  );
}

export default CloudContent;