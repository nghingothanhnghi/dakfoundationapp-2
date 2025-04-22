import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCover from './heroCover';
import HeroProducts from './heroProducts';
import backgroundImage from '../../assets/line-bg-1.png';

gsap.registerPlugin(ScrollTrigger);

const HeroContent: React.FC = () => {

    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            gsap.to(container, {
                xPercent: -100 * (container.children.length - 1), // Move by the number of sections
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    pin: true,
                    scrub: 1,
                    end: () => `+=${container.offsetWidth * (container.children.length - 1)}`, // Adjust end based on number of sections
                },
            });
        }
    }, []);

    return (
        <div ref={containerRef}
        
            className="overflow-hidden relative w-full h-screen flex  bg-slate-900 "
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
                <HeroCover />
            </div>
            <div className="flex-shrink-0 w-full h-full flex items-center justify-center">
                <HeroProducts />
            </div>
        </div>
    );
};

export default HeroContent;
