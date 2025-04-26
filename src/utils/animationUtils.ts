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
}

export const setupScrollAnimation = (
  element: HTMLElement,
  options: AnimationOptions = {}
) => {
  const { opacity = 1, y = 0, duration = 1, ease = 'power3.out', type = 'default', direction = 'vertical' } = options;

  if (direction === 'horizontal') {
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
  } else if (type === 'cloudLogo' || type === 'cloudDescription' || type === 'cloudIconsRow') {
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
  } else {
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
};
