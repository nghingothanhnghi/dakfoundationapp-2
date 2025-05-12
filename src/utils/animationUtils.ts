// src/utils/animationUtils.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  opacity?: number;
  y?: number;
  duration?: number;
  ease?: string;
  type?: string;
  direction?: 'vertical' | 'horizontal';
  panels?: HTMLElement[];
  bgLayer?: HTMLElement;
  totalWidth?: number;
  sectionsContainer?: HTMLElement;
  scrubAmount?: number;
}

// This function will be removed as we're integrating its functionality into setupScrollAnimation

/**
 * Sets up various scroll animations with GSAP and ScrollTrigger
 * @param element The main element to animate
 * @param options Animation options for customization
 * @returns A cleanup function for some animation types
 */
export const setupScrollAnimation = (
  element: HTMLElement,
  options: AnimationOptions = {}
) => {
  const { 
    opacity = 1, 
    y = 0, 
    duration = 1, 
    ease = 'power3.out', 
    type = 'default', 
    direction = 'vertical', 
    panels, 
    bgLayer,
    sectionsContainer,
    totalWidth = 200,
    scrubAmount = 1
  } = options;

  // Set up resize handler for animations that need it
  const handleResize = () => {
    ScrollTrigger.refresh();
  };

  // Add resize listener for certain animation types
  if (type === 'hero' || type === 'horizontalScroll' || direction === 'horizontal') {
    window.addEventListener('resize', handleResize);
  }

  // Create a cleanup function that will be returned for certain animation types
  let cleanup = () => {};

  if (type === 'hero') {
    if (!panels || !bgLayer) {
      console.error('Hero animation requires panels and bgLayer options.');
      return;
    }

    // Parallax effect for the first background image
    gsap.to(bgLayer, {
      backgroundPositionY: '+=200px',
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Set initial state of background layer
    gsap.set(bgLayer, { opacity: 1 });

    // Set up horizontal scroll animation
    const totalPanels = panels.length;
    const panelTotalWidth = totalPanels * 100;
    gsap.set(element, { width: `${panelTotalWidth}%` });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: () => `+=${element.offsetHeight}`,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.set(element, { clearProps: "transform" });
        },
        onLeaveBack: () => {
          gsap.set(element, { clearProps: "transform" });
        },
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(bgLayer, { opacity: 1 - progress, duration: 0.1 });
        }
      }
    });

    tl.to(element, {
      x: () => -(element.scrollWidth - window.innerWidth),
      ease: 'none',
      duration: 1
    });

    panels.forEach((panel, i) => {
      const progress = i / (totalPanels - 1);
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

    // Set up cleanup function
    cleanup = () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([element, bgLayer, ...panels]);
      gsap.set(element, { clearProps: "all" });
      gsap.set(bgLayer, { clearProps: "all" });
      panels.forEach(panel => gsap.set(panel, { clearProps: "all" }));
    };
  } 
  // New type for horizontal scroll with sections container
  else if (type === 'horizontalScroll' && sectionsContainer) {
    // Set up the container width
    gsap.set(sectionsContainer, { width: `${totalWidth}%` });

    // Create the ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: () => `+=${element.offsetHeight}`,
        scrub: scrubAmount,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.set(element, { clearProps: "transform" });
        },
        onLeaveBack: () => {
          gsap.set(element, { clearProps: "transform" });
        }
      }
    });

    // Animate the horizontal scroll
    tl.to(sectionsContainer, {
      x: () => -(sectionsContainer.offsetWidth - window.innerWidth),
      ease: ease === 'power3.out' ? 'none' : ease, // Default to 'none' for horizontal scroll
      duration
    });

    // Set up cleanup function
    cleanup = () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([element, sectionsContainer]);
      gsap.set(element, { clearProps: "all" });
      gsap.set(sectionsContainer, { clearProps: "all" });
    };
  }
  else if (direction === 'horizontal') {
    gsap.to(element, {
      x: () => -(element.scrollWidth - element.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: () => `+=${element.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Set up cleanup function
    cleanup = () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(element);
      gsap.set(element, { clearProps: "all" });
    };
  } 
  else if (type === 'cloudLogo' || type === 'cloudDescription' || type === 'cloudIconsRow') {
    gsap.fromTo(
      element,
      { y: '100%' },
      {
        y: '0%',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      }
    );
  } 
  else {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity,
        y,
        duration,
        ease,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Return the cleanup function for animation types that need it
  return cleanup;
};
