import React from 'react';
import { HeroFeaturesGrid } from './heroFeaturesGrid';

const HeroProducts: React.FC = () => {
    return (
        <div className="flex overflow-hidden relative flex-col min-h-[1117px]">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb43221056712b2a1d38fc017517d272c2b26fde?placeholderIfAbsent=true"
                alt="Background decoration"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-px pt-14 pb-28 w-full min-h-[1117px] max-md:pb-24 max-md:max-w-full">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1be93a7f0c1ef706ccb8802568e517760ab2df?placeholderIfAbsent=true"
                    alt="Overlay pattern"
                    className="object-cover absolute inset-0 size-full"
                />
                <HeroFeaturesGrid />
            </div>
        </div>
    );
};

export default HeroProducts;
