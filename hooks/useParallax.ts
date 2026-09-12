'use client';

import { useEffect, useRef, type RefObject } from 'react';

type ParallaxMode = 'hero' | 'footer';

/**
 * Drives a scroll-linked vertical drift on a background layer, the same
 * effect the original hand-built page used for its hero and footer photos.
 * Skips entirely under prefers-reduced-motion. rAF-throttled and only runs
 * the transform while the element is actually in the viewport.
 */
export function useParallax(mode: ParallaxMode): [RefObject<HTMLDivElement>, RefObject<HTMLDivElement>] {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let ticking = false;
    const update = () => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        const offset = mode === 'hero' ? window.scrollY * 0.28 : rect.top * 0.15;
        bg.style.transform = `translateY(${offset}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode]);

  return [sectionRef, bgRef];
}
