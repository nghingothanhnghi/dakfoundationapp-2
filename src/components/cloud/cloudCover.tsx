import React, { useEffect, useRef } from 'react';
import { HeroBackgroundSection } from '../hero/heroBackgroundSection';
import CloudLogo from './cloudLogo';
import CloudDescription from './cloudDescription';
import CloudIconsRow from './cloudIconRow';

interface CloudCoverProps {
    setupAnimation: (element: HTMLElement, options?: { type?: string; direction?: 'vertical' | 'horizontal' }) => void;
}

const CloudCover: React.FC<CloudCoverProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const iconsRowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
        if (logoRef.current) {
            setupAnimation(logoRef.current, { type: 'cloudLogo' });
        }
        if (descriptionRef.current) {
            setupAnimation(descriptionRef.current, { type: 'cloudDescription' });
        }
        if (iconsRowRef.current) {
            setupAnimation(iconsRowRef.current, { type: 'cloudIconsRow' });
        }
    }, [setupAnimation]);

    
    return (
        <HeroBackgroundSection 
            background="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe850586a47258fd17035599f570eee37404e00?placeholderIfAbsent=true"
            isImage={true}
        >
            <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">
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
            </div>
        </HeroBackgroundSection>
    );
};

export default CloudCover;
