import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroContent from './hero/heroContent';
import CloudContent from './cloud/cloudContent';
import BlockContent from './block/blockContent';
import AiContent from './ai/aiContent';
import SuperAppContent from './superApp/superAppContent';

gsap.registerPlugin(ScrollTrigger);

const MasterLayout: React.FC = () => {
    const setupAnimation = (element: HTMLElement) => {
        gsap.fromTo(element, 
            { opacity: 0, y: 50 }, 
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    };
    return (
        <div className="w-full h-full flex flex-col">
            <main className="flex-grow">
                <HeroContent setupAnimation={setupAnimation}/>
                <CloudContent setupAnimation={setupAnimation}/>
                <BlockContent setupAnimation={setupAnimation}/>
                <AiContent setupAnimation={setupAnimation}/>
                <SuperAppContent setupAnimation={setupAnimation}/>
            </main>
        </div>
    );
};

export default MasterLayout;
