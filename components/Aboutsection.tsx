"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {  Variants } from "framer-motion";

// --- Premium Animation Variants ---

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
};

const lineDraw: Variants = {
  hidden: { width: 0 },
  visible: { 
    width: "60px", 
    transition: { duration: 1, delay: 0.3, ease: "easeOut" } 
  }
};

// FOOLPROOF IMAGE REVEAL (Ye har browser me chalega)
const imageReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 1.05 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

export default function AboutSection() {
  return (
    <section className="py-32 px-15   mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center  text-white overflow-hidden">
      
      {/* === LEFT CONTENT === */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={lineDraw} className="h-[1px] bg-white/50 mb-10"></motion.div>

        <motion.h2 
          variants={textReveal} 
          className="font-josefin text-3xl md:text-5xl uppercase tracking-widest mb-4"
        >
          Welcome to the world of <br />
          <span className="text-gray-500">VK Realtor</span>
        </motion.h2>

        <motion.p 
          variants={textReveal} 
          className="font-optima text-gray-200 text-lg md:text-xl leading-relaxed mb-6"
        >
          With over two decades of excellence, VK Realtor has redefined luxury living across Delhi/NCR.
        </motion.p>

        <motion.p 
          variants={textReveal} 
          className="font-optima text-gray-400 text-base leading-relaxed mb-12 max-w-lg"
        >
          From the very first blueprint to the final brick, our commitment has been unwavering to create homes
          that don’t just shelter, but inspire. Each of our creations is a symphony of architecture, comfort, and
          craftsmanship, designed to delight, and built to endure.
        </motion.p>

        <motion.div variants={textReveal}>
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-4 text-xs font-optima tracking-[0.2em] uppercase pb-2"
          >
            <span className="relative z-10 text-white group-hover:text-gray-300 transition-colors duration-300">
              Read Our Story
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
          </Link>
        </motion.div>
      </motion.div>

      {/* === RIGHT IMAGE === */}
      <motion.div
        className="md:w-1/2 relative h-[450px] md:h-[650px] w-full rounded-sm overflow-hidden"
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Infinite Slow Scale Wrapper */}
        <motion.div
          className="w-full h-full relative"
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            alt="VK Realtor Luxury Interior"
            fill
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
        </motion.div>
      </motion.div>

    </section>
  );
}