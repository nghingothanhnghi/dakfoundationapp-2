import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCover from './heroCover';
import HeroProducts from './heroProducts';
import backgroundImage from '../../assets/line-bg-1.png';

gsap.registerPlugin(ScrollTrigger);
interface HeroContentProps {
    setupAnimation: (element: HTMLElement) => void;
}
const HeroContent: React.FC<HeroContentProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            setupAnimation(container);

            // Parallax effect for the background image
            gsap.to(container, {
                backgroundPositionY: '+=200px', // Adjust this value for the desired parallax effect
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }
    }, [setupAnimation]);
    return (
        <div
            ref={containerRef}
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
