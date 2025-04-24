import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineItem } from "./timelineItem";
import { TimelineProgressBar } from "./timelineProgressBar";

interface TimelineContentProps {
  setupAnimation?: (element: HTMLElement, options?: { opacity?: number; y?: number; duration?: number; ease?: string }) => void;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({ setupAnimation }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (
      sectionRef.current && 
      headerRef.current && 
      timelineRef.current && 
      progressBarRef.current && 
      timelineItemsRef.current
    ) {
      // Apply setupAnimation to the section if provided
      if (setupAnimation && sectionRef.current) {
        setupAnimation(sectionRef.current, {
          duration: 1.2,
          ease: "power2.out"
        });
      }

      const h1 = headerRef.current.querySelector("h1");
      const p = headerRef.current.querySelector("p");

      // ScrollTrigger animations for h1 and p
      if (h1 && p) {
        if (setupAnimation && h1 instanceof HTMLElement) {
          setupAnimation(h1, {
            duration: 1,
            ease: "power2.out"
          });
        }

        if (setupAnimation && p instanceof HTMLElement) {
          setupAnimation(p, {
            duration: 1,
            ease: "power2.out",
            y: 0
          });
        } else {
          // Fallback to original animation if setupAnimation is not provided
          gsap.fromTo(
            p,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: p,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      // Create a main timeline for the entire section
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
          onEnter: () => {
            gsap.set(sectionRef.current, { clearProps: "transform" });
          },
          onLeaveBack: () => {
            gsap.set(sectionRef.current, { clearProps: "transform" });
          }
        },
      });

      // Header animation
      mainTl.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Timeline items animation with stagger effect
      mainTl.fromTo(
        timelineItemsRef.current.children,
        { 
          opacity: 0, 
          x: -50,
          scale: 0.8
        },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.2, 
          ease: "back.out(1.7)" 
        },
        "-=0.5"
      );

      // Progress bar animation
      mainTl.fromTo(
        progressBarRef.current,
        { 
          opacity: 0,
          scale: 0.8
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.4"
      );

      // Get timeline items for hover effects
      const timelineItems = timelineItemsRef.current.children;
      
      // Add hover animations to timeline items
      Array.from(timelineItems).forEach((item) => {
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl.to(item, {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out"
        });

        item.addEventListener("mouseenter", () => {
          hoverTl.play();
        });
        
        item.addEventListener("mouseleave", () => {
          hoverTl.reverse();
        });
      });

      // Create scroll-triggered progress bar animation
      const progressFilled = progressBarRef.current.querySelector('.progress-filled') as HTMLElement;
      const progressText = progressBarRef.current.querySelector('.progress-text') as HTMLElement;
      
      if (progressFilled && progressText) {
        // Set initial state
        gsap.set(progressFilled, { scaleX: 0, transformOrigin: "left center" });
        
        // Create ScrollTrigger for the progress bar
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          markers: false,
          onUpdate: (self) => {
            // Calculate progress based on scroll position
            const progress = self.progress;
            
            // Update progress bar width with smooth animation
            gsap.to(progressFilled, {
              scaleX: progress,
              duration: 0.3,
              ease: "power1.out"
            });
            
            // Update progress text
            const percentage = Math.round(progress * 100);
            progressText.textContent = `${percentage}%`;

            // Update timeline items based on progress
            const items = timelineItemsRef.current?.children;
            if (items) {
              Array.from(items).forEach((item, index) => {
                const itemProgress = index / (items.length - 1);
                if (progress >= itemProgress) {
                  gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    ease: "power1.out"
                  });
                } else {
                  gsap.to(item, {
                    opacity: 0.5,
                    scale: 0.95,
                    duration: 0.3,
                    ease: "power1.out"
                  });
                }
              });
            }
          }
        });
      }

      // Cleanup function
      return () => {
        if (mainTl.scrollTrigger) {
          mainTl.scrollTrigger.kill();
        }
        
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
        
        Array.from(timelineItems).forEach((item) => {
          item.removeEventListener("mouseenter", () => {});
          item.removeEventListener("mouseleave", () => {});
        });
      };
    }
  }, [setupAnimation]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[radial-gradient(50%_50%_at_50%_50%,#7000A8_0%,#1D1050_100%)] h-screen"
    >
      <header
        ref={headerRef}
        className="px-36 pt-36 max-md:px-16 max-sm:px-5"
      >
        <h1 className="font-400 bg-[linear-gradient(100.73deg,_#0066FF_13.44%,_#AE0BFF_49.78%)] bg-clip-text text-transparent">DAK Foundation</h1>
        <p className="text-2xl lg:text-8xl font-bold text-white">
          Timeline
        </p>
      </header>
      <div
        ref={timelineRef}
        className="absolute bottom-0 px-36 w-full max-md:px-16 max-sm:px-5"
      >
        <div className="relative flex flex-col gap-5">
          <div 
            ref={timelineItemsRef}
            className="flex justify-between items-center max-sm:flex-col max-sm:gap-10"
          >
            <TimelineItem title="Mainnet launch" month="JAN" year="2025" />
            <TimelineItem
              title="SuperApp Production"
              month="JUNE"
              year="2025"
            />
            <TimelineItem title="AWS/Google Cloud" month="DEC" year="2025" />
          </div>
          
          {/* Progress Bar positioned in the center */}
          <div 
            ref={progressBarRef} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-1 w-full"
          >
            <TimelineProgressBar />
          </div>
        </div>
      </div>
    </section>
  );
};
