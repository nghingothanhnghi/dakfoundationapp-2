import React from 'react';
import { setupScrollAnimation } from '../utils/animationUtils';
import HeroContent from './hero/heroContent';
import CloudContent from './cloud/cloudContent';
import BlockContent from './block/blockContent';
import AiContent from './ai/aiContent';
import SuperAppContent from './superApp/superAppContent';
import { TimelineContent } from './timeline/timelineContent';

const MasterLayout: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <main className="flex-grow">
                <HeroContent setupAnimation={setupScrollAnimation}/>
                <CloudContent setupAnimation={setupScrollAnimation}/>
                <BlockContent setupAnimation={setupScrollAnimation}/>
                <AiContent setupAnimation={setupScrollAnimation}/>
                <SuperAppContent setupAnimation={setupScrollAnimation}/>
                <TimelineContent setupAnimation={setupScrollAnimation}/>
            </main>
        </div>
    );
};

export default MasterLayout;
