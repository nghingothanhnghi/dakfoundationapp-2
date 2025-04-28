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
    const sectionsContainerRef = useRef<HTMLDivElement>(null);
    const bgLayer1Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const sectionsContainer = sectionsContainerRef.current;
        const bgLayer1 = bgLayer1Ref.current;

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        if (container && sectionsContainer && bgLayer1) {
            setupAnimation(container);

            gsap.to(bgLayer1, {
                backgroundPositionY: '+=200px',
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            gsap.set(bgLayer1, { opacity: 1 });

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
                    },
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.to(bgLayer1, { opacity: 1 - progress, duration: 0.1 });
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
                gsap.killTweensOf([container, sectionsContainer, bgLayer1]);
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
            className="overflow-hidden relative w-full h-screen bg-slate-900 will-change-transform"
            style={{ margin: 0, padding: 0 }}
        >
            {/* Background Layer 1 - First section background */}
            <div
                ref={bgLayer1Ref}
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            {/* Content Sections */}
            <div
                ref={sectionsContainerRef}
                className="flex h-full absolute top-0 left-0 z-10 w-full"
                style={{ width: '200vw' }}
            >
                <HeroCover setupAnimation={setupAnimation} />
                <HeroProducts setupAnimation={setupAnimation} />
            </div>
        </div>
    );
};

export default HeroContent;
