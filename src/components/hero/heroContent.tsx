import React from 'react';
import HeroHeadline from './heroHeadline';
import HeroNeonGlobe from './heroNeonGlobe';
import backgroundImage from '../../assets/line-bg-1.png';

const HeroContent: React.FC = () => {
    return (
        <div
            className="w-full h-full relative bg-slate-900 overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat',
            }}
        >
            <HeroHeadline />
            <HeroNeonGlobe />
        </div>
    );
};

export default HeroContent;
