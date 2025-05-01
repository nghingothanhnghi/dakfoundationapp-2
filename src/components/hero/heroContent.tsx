import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCover from './heroCover';
import HeroProducts from './heroProducts';

gsap.registerPlugin(ScrollTrigger);

interface HeroContentProps {
    setupAnimation: (element: HTMLElement) => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const sectionsContainer = sectionsContainerRef.current;

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        if (container && sectionsContainer) {
            setupAnimation(container);

            const totalWidth = 200; // Assuming two panels, each 100vw
            gsap.set(sectionsContainer, { width: `${totalWidth}%` });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    pinSpacing: true,
                    start: 'top top',
                    end: () => `+=${container.offsetHeight}`,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onEnter: () => {
                        gsap.set(container, { clearProps: "transform" });
                    },
                    onLeaveBack: () => {
                        gsap.set(container, { clearProps: "transform" });
                    }
                }
            });

            tl.to(sectionsContainer, {
                x: () => -(sectionsContainer.offsetWidth - window.innerWidth),
                ease: 'none',
                duration: 1
            });

            return () => {
                window.removeEventListener('resize', handleResize);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.killTweensOf([container, sectionsContainer]);
                if (container) {
                    gsap.set(container, { clearProps: "all" });
                }
                if (sectionsContainer) {
                    gsap.set(sectionsContainer, { clearProps: "all" });
                }
            };
        }
    }, [setupAnimation]);


    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen bg-slate-900 will-change-transform"
            style={{ margin: 0, padding: 0 }}
        >
            {/* Content Sections */}
            <div
                ref={sectionsContainerRef}
                className="flex h-full w-full"
                style={{ width: '200vw' }}
            >
                <HeroCover setupAnimation={setupAnimation} />
                <HeroProducts setupAnimation={setupAnimation} />
            </div>
        </div>
    );
};

export default HeroContent;
