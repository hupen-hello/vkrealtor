"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // Motion values to track actual mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for the "tail" smooth delay effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Set position
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      
      if (!isVisible) setIsVisible(true);

      // Check if mouse is over a link, button, or any clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, [role="button"]');
      
      if (isClickable) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  // Agar user mobile/touch screen par hai, toh cursor hide rakho
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 border-[2px] border-white bg-white/20 rounded-full pointer-events-none z-[99999]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        opacity: isVisible && !isHoveringLink ? 1 : 0,
        scale: isHoveringLink ? 0.5 : 1,
      }}
      transition={{
        duration: 0.2, 
        ease: "easeOut"
      }}
    />
  );
}