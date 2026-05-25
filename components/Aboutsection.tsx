"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

// --- Text Animations ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],  
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-25%", "70%"]); 
  const y2 = useTransform(scrollYProgress, [0, 1], ["70%", "-35%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  const advantages = [
    "Trusted Market Expertise",
    "Local & Regional Market Knowledge",
    "Clear Pricing and Documentation",
  ];

  return (
    <section ref={sectionRef} className="py-15 bg-[#F3EBE3] px-6 max-w-[85%] md:max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
      
      <div className="w-full lg:w-1/2 flex gap-4 md:gap-6 h-[300px] md:h-[450px]">
        
        {/* Left Column (2 Small Images) */}
        <div className="w-[45%] flex flex-col gap-4 md:gap-6 h-full">
          
          {/* Top Small Image */}
          <div className="relative h-[48%] w-full rounded-sm overflow-hidden shadow-md group">
            <motion.div className="w-full h-[130%] absolute -top-[15%]" style={{ y: y1 }}>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Bottom Small Image */}
          <div className="relative h-[48%] w-full rounded-sm overflow-hidden shadow-md group bg-white p-2">
            <motion.div className="w-full h-[130%] absolute -top-[15%]" style={{ y: y2 }}>
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                alt="Blueprint and Keys"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column (1 Tall Image) */}
        <div className="w-[55%] h-full relative rounded-sm overflow-hidden shadow-lg group">
          <motion.div className="w-full h-full absolute" style={{ scale: scaleImage }}>
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              alt="Modern Architecture"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

      </div>


      {/* === RIGHT SIDE (Content exactly like video) === */}
      <motion.div 
        className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10 mt-10 lg:mt-0"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Subtitle with line */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
          <span className="w-8 h-[1px] bg-gray-500"></span>
          <span className="font-optima text-[#d09e31] text-sm font-medium tracking-wider">ABOUT US</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          variants={fadeUp}
          className="font-freight text-5xl md:text-[4rem] text-[#4e6957] mb-6 leading-[1.1] tracking-tight"
        >
          <span>Guiding</span> Smart Property<br />Decisions
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p 
          variants={fadeUp}
          className="font-optima text-gray-500 text-base leading-relaxed mb-10 max-w-lg"
        >
          We are a professional real estate business dedicated to helping clients buy, sell, and invest in properties with confidence. Our team combines local market knowledge, verified listings, and transparent
        </motion.p>

        {/* === INDENTED SECTION (Border Left) === */}
        <motion.div variants={fadeUp} className="border-l-2 border-gray-400 pl-6 md:pl-10 py-1 w-full">
          
          <h3 className="font-freight  text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Our Business Advantages
          </h3>

          <ul className="flex flex-col gap-4 mb-10">
            {advantages.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                <span className="font-optima text-[#1a1a1a] text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            
            {/* Pill Button */}
            <button className="group flex items-center gap-4 bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors rounded-full py-2 pl-6 pr-2 shadow-sm border border-gray-100">
              <span className="font-optima text-[#1a1a1a] text-sm font-semibold">
                More About Us
              </span>
              {/* Brown Plane/Arrow Icon */}
              <span className="w-10 h-10 rounded-full bg-[#a97d54] transition-colors flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-45">
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </span>
            </button>

            

          </div>

        </motion.div>
      </motion.div>

    </section>
  );
}