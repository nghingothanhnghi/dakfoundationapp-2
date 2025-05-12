import React, { useEffect, useRef } from 'react';
import BlockCover from './blockCover';
import { setupScrollAnimation } from '../../utils/animationUtils';

interface BlockContentProps {
  setupAnimation: (element: HTMLElement, options?: { type?: string; direction?: 'vertical' | 'horizontal' }) => void;
}

const BlockContent: React.FC<BlockContentProps> = ({ setupAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sectionsContainer = sectionsContainerRef.current;

    if (container && sectionsContainer) {
      // Use the enhanced setupScrollAnimation function with horizontalScroll type
      const cleanup = setupScrollAnimation(container, {
        type: 'horizontalScroll',
        sectionsContainer: sectionsContainer,
        totalWidth: 200, // Two panels, each 100vw
        scrubAmount: 1,
        ease: 'none',
        duration: 1
      });

      // Return the cleanup function
      return cleanup;
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
        <BlockCover setupAnimation={setupAnimation} />
      </div>
    </div>
  );
}
export default BlockContent;