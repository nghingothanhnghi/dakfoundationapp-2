// src/utils/animationUtils.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const setupScrollAnimation = (
  element: HTMLElement,
  options: { opacity?: number; y?: number; duration?: number; ease?: string } = {}
) => {
  const { opacity = 1, y = 0, duration = 1, ease = 'power3.out' } = options;

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
};
