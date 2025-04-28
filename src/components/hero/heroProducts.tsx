import React from 'react';
import { HeroFeaturesGrid } from './heroFeaturesGrid';
import { HeroBackgroundSection } from './heroBackgroundSection';
import HeroProductBg from '../../assets/bg/hero_products-bg.svg'
import HeroHeadline from './heroHeadline';


const HeroProducts: React.FC = () => {
    return (
        <HeroBackgroundSection
            background={`
          hsla(275,52%,34%,1);
          background-image: 
            radial-gradient(at 14% 40%, hsla(250,100%,55%,1) 0px, transparent 50%),
            radial-gradient(at 89% 63%, hsla(266,100%,55%,1) 0px, transparent 50%);
        `}
        /* Example with an image background */
        // background="https://example.com/path/to/image.jpg"
        // isImage={true}
        >
            <div className="flex flex-col items-center justify-center gap-8 z-10">
                <HeroHeadline />
                <div className="relative" style={{ height: '300px' }}>
                    <HeroFeaturesGrid />
                </div>

            </div>

            {/* <div className="flex overflow-hidden relative flex-col w-full h-full">
                <img
                    src={HeroProductBg}
                    alt="Background decoration"
                    className="object-cover absolute inset-0 size-full"
                /> */}

            {/* </div> */}
        </HeroBackgroundSection>
    );
};

export default HeroProducts;
