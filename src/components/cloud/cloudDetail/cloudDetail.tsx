import React, { useEffect, useRef } from 'react';
import { HeroBackgroundSection } from '../../hero/heroBackgroundSection';
import CloudDetailHeadline from './cloudDetailHeadline';
import CloudDetailFeaturesGrid from './cloudDetailFeaturesGrid';
interface CloudDetailProps {
    setupAnimation: (element: HTMLElement) => void;
}

const CloudDetail: React.FC<CloudDetailProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    const backgroundGradient = `
        radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, #8C47CE 0%, #540EAB 100%)
    `;
    
    return (
        <HeroBackgroundSection background={backgroundGradient} isImage={false}>
            <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">
                <CloudDetailHeadline setupAnimation={setupAnimation}/>
                <CloudDetailFeaturesGrid setupAnimation={setupAnimation}/>
            </div>
        </HeroBackgroundSection>
    );
};

export default CloudDetail;
