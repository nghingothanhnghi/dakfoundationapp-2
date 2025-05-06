import React, { useEffect, useRef } from 'react';
import { HeroBackgroundSection } from '../../hero/heroBackgroundSection';

interface CloudDetailFeaturesGridProps {
    setupAnimation: (element: HTMLElement) => void;
}

const CloudDetailFeaturesGrid: React.FC<CloudDetailFeaturesGridProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    const backgroundGradient = `
        linear-gradient(to bottom, hsla(275,52%,34%,1) 0%, hsla(275,52%,34%,1) 100%),
        radial-gradient(at 14% 40%, hsla(250,100%,55%,1) 0px, transparent 50%),
        radial-gradient(at 89% 63%, hsla(266,100%,55%,1) 0px, transparent 50%)
    `;
    
    return (
        <HeroBackgroundSection background={backgroundGradient} isImage={false}>
            <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">

            </div>
        </HeroBackgroundSection>
    );
};

export default CloudDetailFeaturesGrid;
