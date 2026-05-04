"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lenis ko initialize karna
    const lenis = new Lenis({
      duration: 1.5, // Scroll kitna lamba chalega (1.5s = very smooth)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple jaisa ease-out effect
      smoothWheel: true, // Mouse wheel ko smooth karna
    });

    // Animation frame loop taaki browser har frame par scroll ko update kare
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function taaki memory leak na ho
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}