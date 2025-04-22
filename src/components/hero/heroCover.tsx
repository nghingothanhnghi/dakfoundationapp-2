
import React from 'react';
import HeroHeadline from './heroHeadline';
import HeroNeonGlobe from './heroNeonGlobe';
import ButtonPrimary from '../button/buttonPrimary';

const HeroCover: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 z-10">
            <HeroHeadline />
            <div className="relative" style={{ height: '300px' }}>
                <HeroNeonGlobe />
            </div>
            <div className="my-8">
                <ButtonPrimary label="Get Started" width="20rem" />
            </div>
        </div>
    );
};

export default HeroCover;
