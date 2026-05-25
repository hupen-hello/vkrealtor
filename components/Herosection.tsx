"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- 3 Premium Banner Images ---
const bannerImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
];

// --- Framer Motion Variants ---

const sentenceVariant: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.06, 
    },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.2, ease: "easeOut", delay: 1.5 } 
  },
};

export default function Herosection() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const titleLine1 = "Creating Space";
  const titleLine2 = "For Life";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImg}
          initial={{ opacity: 0, scale: 1.05 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={bannerImages[currentImg]}
            alt={`VK Realtor Banner ${currentImg + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-white/70 z-10"></div>

      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        
        <motion.h1
          className="font-freight text-black text-5xl md:text-[4rem] leading-[1.1] mb-6 tracking-tight"
          variants={sentenceVariant}
          initial="hidden"
          animate="visible"
        >
          <span className="block">
            {titleLine1.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <span className="block ">
            {titleLine2.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-optima text-gray-800 max-w-xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          Experience premium living with our world-class residential and
          commercial properties. Designed for the modern lifestyle.
        </motion.p>

      </div>
    </section>
  );
}