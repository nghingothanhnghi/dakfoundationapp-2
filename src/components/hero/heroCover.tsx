
import React, { useEffect, useRef } from 'react';
import HeroHeadline from './heroHeadline';
import HeroNeonGlobe from './heroNeonGlobe';
import ButtonPrimary from '../button/buttonPrimary';
import { HeroBackgroundSection } from './heroBackgroundSection';
import backgroundImage from '../../assets/line-bg-1.png';

interface HeroCoverProps {
    setupAnimation: (element: HTMLElement) => void;
  }

const HeroCover: React.FC<HeroCoverProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);
    return (
        <HeroBackgroundSection
            background={backgroundImage}
            isImage={true}
        >
            <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">
                <HeroHeadline />
                <div className="relative" style={{ height: '300px' }}>
                    <HeroNeonGlobe />
                </div>
                <div className="my-8">
                    <ButtonPrimary label="Get Started" width="20rem" />
                </div>
            </div>
        </HeroBackgroundSection>
    );
};

export default HeroCover;
