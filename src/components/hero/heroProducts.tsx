import React from 'react';
import { HeroFeaturesGrid } from './heroFeaturesGrid';
import HeroProductBg from '../../assets/bg/hero_products-bg.svg'

const HeroProducts: React.FC = () => {
    return (
        <div className="flex overflow-hidden relative flex-col w-full h-full">
            <img
                src={HeroProductBg}
                alt="Background decoration"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-px pt-14 pb-28 w-full min-h-[1117px] max-md:pb-24 ">

                <HeroFeaturesGrid />
            </div>
        </div>
    );
};

export default HeroProducts;
