import React, { useEffect, useRef } from 'react';
import { HeroFeaturesGrid } from './heroFeaturesGrid';
import { HeroBackgroundSection } from './heroBackgroundSection';
import HeroHeadline from './heroHeadline';

interface HeroProductsProps {
    setupAnimation: (element: HTMLElement) => void;
}

const HeroProducts: React.FC<HeroProductsProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    const backgroundGradient = `
        radial-gradient(50% 50% at 50% 50%, #7000A8 0%, #622A88 100%);
    `;
    
    return (
        <HeroBackgroundSection background={backgroundGradient} isImage={false}>
            <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">
                <HeroHeadline />
                <HeroFeaturesGrid />
            </div>
        </HeroBackgroundSection>
    );
};

export default HeroProducts;
