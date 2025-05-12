import React, { useEffect, useRef } from 'react';
import { HeroBackgroundSection } from '../../hero/heroBackgroundSection';
import BlockDetailFeaturesGrid from './blockDetailFeaturesGrid';

interface BlockDetailProps {
    setupAnimation: (element: HTMLElement) => void;
}

const BlockDetail: React.FC<BlockDetailProps> = ({ setupAnimation }) => {
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
                <div className='lg:flex lg:gap-12'>
                    <BlockDetailFeaturesGrid setupAnimation={setupAnimation} />
                </div>
            </div>
        </HeroBackgroundSection>
    );
};

export default BlockDetail;
