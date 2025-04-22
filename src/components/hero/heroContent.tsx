import React from 'react';
import HeroHeadline from './heroHeadline';
import HeroNeonGlobe from './heroNeonGlobe';
import ButtonPrimary from '../button/buttonPrimary';
import backgroundImage from '../../assets/line-bg-1.png';

const HeroContent: React.FC = () => {
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center bg-slate-900 overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                minHeight: '100vh'
            }}
        >
            <div className="flex flex-col items-center justify-center gap-8 z-10">
                <HeroHeadline />
                <div className="relative" style={{ height: '400px' }}>
                    <HeroNeonGlobe />
                </div>
                <div className="mt-8">
                    <ButtonPrimary label="Get Started" width="20rem" />
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
