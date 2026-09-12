'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past `threshold` px, for things like
 * the header's "scrolled" shadow. Passive listener, cleaned up on unmount.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
