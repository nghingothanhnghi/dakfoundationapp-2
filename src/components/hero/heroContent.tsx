import React, { useEffect, useRef, useState } from 'react';
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
    const panelsRef = useRef<HTMLDivElement[]>([]);
    const bgLayer1Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const sectionsContainer = sectionsContainerRef.current;
        const panels = panelsRef.current;
        const bgLayer1 = bgLayer1Ref.current;

        // Function to handle window resize
        const handleResize = () => {
            // Refresh ScrollTrigger to update positions
            ScrollTrigger.refresh();
        };

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        if (container && sectionsContainer && panels.length === 2 && bgLayer1) {
            // Apply the setupAnimation to the main container
            setupAnimation(container);

            // Parallax effect for the first background image
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
            
            // Set initial state of background layer
            gsap.set(bgLayer1, { opacity: 1 });

            // Set up horizontal scroll animation
            const totalPanels = panels.length;
            
            // Calculate the total width of all panels
            const totalWidth = totalPanels * 100;
            
            // Set the width of the sections container
            gsap.set(sectionsContainer, { width: `${totalWidth}%` });
            
            // Create the horizontal scroll animation
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
                        // Ensure proper positioning when entering the section
                        gsap.set(container, { clearProps: "transform" });
                    },
                    onLeaveBack: () => {
                        // Ensure proper positioning when scrolling back up
                        gsap.set(container, { clearProps: "transform" });
                    },
                    onUpdate: (self) => {
                        // Fade out the first background as we scroll
                        const progress = self.progress;
                        gsap.to(bgLayer1, { opacity: 1 - progress, duration: 0.1 });
                    }
                }
            });
            
            // Animate the horizontal scroll
            tl.to(sectionsContainer, {
                x: () => -(sectionsContainer.offsetWidth - window.innerWidth),
                ease: 'none',
                duration: 1
            });

            // Add animations for each panel as they come into view
            panels.forEach((panel, i) => {
                const progress = i / (totalPanels - 1);
                
                // Fade in and scale up as panel enters
                gsap.fromTo(panel, 
                    { 
                        opacity: i === 0 ? 1 : 0.5, 
                        scale: i === 0 ? 1 : 0.8 
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: tl,
                            start: `left center-=${100 * progress}%`,
                            toggleActions: 'play none none reverse',
                            id: `panel-${i}`
                        }
                    }
                );
            });

            // Clean up ScrollTrigger instances when component unmounts
            return () => {
                // Remove resize event listener
                window.removeEventListener('resize', handleResize);
                
                // Kill all ScrollTrigger instances
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                
                // Kill all GSAP animations
                gsap.killTweensOf([container, sectionsContainer, bgLayer1]);
                
                // Clear any inline styles that might be causing spacing issues
                if (container) {
                    gsap.set(container, { clearProps: "all" });
                }
                if (sectionsContainer) {
                    gsap.set(sectionsContainer, { clearProps: "all" });
                }
            };
        }
    }, [setupAnimation]);

    // Function to add panels to the ref array
    const addPanelRef = (el: HTMLDivElement | null, index: number) => {
        if (el) {
            panelsRef.current[index] = el;
        }
    };

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
            
            {/* We're using the background directly from the HeroProducts component */}
            
            {/* Content Sections */}
            <div 
                ref={sectionsContainerRef}
                className="flex h-full absolute top-0 left-0 z-10 w-full"
                style={{ width: '200vw' }}
            >
                <div 
                    ref={(el) => addPanelRef(el, 0)}
                    className="flex-shrink-0 w-screen h-full flex items-center justify-center"
                    style={{ width: '100vw' }}
                >
                    <div className="w-full">
                        <HeroCover />
                    </div>
                </div>
                <div 
                    ref={(el) => addPanelRef(el, 1)}
                    className="flex-shrink-0 w-screen h-full flex items-center justify-center"
                    style={{ width: '100vw' }}
                >
                    <div className="w-full">
                        <HeroProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContent;
