import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroHeadline: React.FC = () => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set initial state - invisible
    gsap.set([line1Ref.current, line2Ref.current], { 
      opacity: 0,
      y: 20
    });
    
    // Create animation timeline
    const tl = gsap.timeline();
    
    // Animate first line
    tl.to(line1Ref.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "linear",
      delay: 0.2 // Initial delay
    });
    
    // Animate second line with delay
    tl.to(line2Ref.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "linear",
      delay: 0.8 // 800ms delay after first line
    }, ">");
    
    // Clean up animation on component unmount
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div className="w-full max-w-[1200px] inline-flex flex-col justify-start items-center gap-5 px-4">
      <div 
        ref={line1Ref}
        className="text-center text-fuchsia-500 text-7xl font-bold font-['Inter'] [text-shadow:_10px_6px_5px_rgb(217_91_255_/_0.50)]"
      >
        The People's Tech Revolution
      </div>
      <div 
        ref={line2Ref}
        className="w-full max-w-[801px] text-center text-fuchsia-500 text-5xl font-bold font-['Inter'] leading-[63px] [text-shadow:_10px_6px_5px_rgb(198_46_241_/_0.50)]"
      >
        Break Barriers - 2 - Build Futures
      </div>
    </div>
  );
};

export default HeroHeadline;