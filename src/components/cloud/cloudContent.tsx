import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CloudCover from './cloudCover';
import CloudDetail from './cloudDetail/cloudDetail';

gsap.registerPlugin(ScrollTrigger);

interface CloudContentProps {
  setupAnimation: (element: HTMLElement, options?: { type?: string; direction?: 'vertical' | 'horizontal' }) => void;
}

const CloudContent: React.FC<CloudContentProps> = ({ setupAnimation }) => {
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
      // Set up the container width
      const totalWidth = 200; // Two panels, each 100vw
      gsap.set(sectionsContainer, { width: `${totalWidth}%` });

      // Create the ScrollTrigger animation
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

      // Animate the horizontal scroll
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
      className="relative w-full h-screen overflow-hidden will-change-transform"
      style={{ margin: 0, padding: 0, overflowX: 'hidden' }}
    >
      {/* Content Sections */}
      <div
        ref={sectionsContainerRef}
        className="flex h-full w-full"
        style={{ width: '200vw', overflowX: 'hidden' }}
      >

        <CloudCover setupAnimation={setupAnimation} />



        <CloudDetail setupAnimation={setupAnimation} />

      </div>
    </div>
  );
}

export default CloudContent;