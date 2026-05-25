"use client";

import React from 'react';
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
};

export default function Enquirysection() {
  return (
    <section className="relative w-full py-15 px-6 md:px-16 flex justify-center font-optima overflow-hidden">
      
      {/* === BACKGROUND IMAGE & OVERLAY === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="VK Realtor Contact Background"
          fill
          className="object-cover"
        />
        {/* Dark overlay taaki form clear padha ja sake */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* === CONTENT WRAPPER === */}
      <div className="max-w-5xl w-full relative z-10 text-white">
        
        {/* Heading Section */}
        <motion.h2 
          variants={textReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="font-freight text-4xl md:text-6xl text-center tracking-wide mb-16 leading-tight"
        >
          We will answer all <br className="hidden md:block" />
          <span className=" text-[#dcb153]">your questions</span>
        </motion.h2>

        {/* Form Layout: Split Screen on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* === LEFT COLUMN: Inputs === */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Input Fields (Underlined) */}
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm focus:outline-none focus:border-[#dcb153] transition-colors placeholder:text-gray-300 text-white"
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm focus:outline-none focus:border-[#dcb153] transition-colors placeholder:text-gray-300 text-white"
            />
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border-b border-gray-400 pb-3 text-sm focus:outline-none focus:border-[#dcb153] transition-colors placeholder:text-gray-300 text-white"
            />

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-3 mt-4 group cursor-pointer">
              <input 
                type="checkbox" 
                id="privacy"
                className="mt-1 w-4 h-4 bg-transparent border-gray-400 rounded-sm cursor-pointer accent-[#dcb153]"
              />
              <label htmlFor="privacy" className="text-gray-300 text-xs leading-relaxed cursor-pointer group-hover:text-white transition-colors">
                I agree to the transfer of personal data in accordance with the Privacy Policy
              </label>
            </div>

            {/* reCAPTCHA Mockup */}
            <div className="mt-2 border border-gray-300/30 bg-white/10 backdrop-blur-md p-3 flex items-center justify-between w-[300px] rounded-sm">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-6 h-6 border-gray-500 rounded-sm cursor-pointer accent-green-500" />
                <span className="text-sm text-white">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mb-1 text-blue-400" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-[8px] text-gray-300">reCAPTCHA</span>
              </div>
            </div>

          </motion.div>

          {/* === RIGHT COLUMN: Textarea & Button === */}
          <motion.div 
            className="relative w-full h-[250px] md:h-[350px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <textarea 
              placeholder="Message" 
              className="w-full h-full bg-black/20 backdrop-blur-sm border border-gray-400 p-5 text-sm focus:outline-none focus:border-[#dcb153] transition-colors resize-none placeholder:text-gray-300 text-white rounded-sm"
            ></textarea>

            {/* Overlapping Circular Submit Button */}
            <button className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-12 w-28 h-28 md:w-36 md:h-36 rounded-full border border-white flex items-center justify-center bg-transparent text-white transition-all duration-500 z-10 overflow-hidden group">
              <span className="text-xs tracking-[0.2em] uppercase z-10 relative group-hover:text-black transition-colors duration-500 font-semibold">
                Submit
              </span>
              
              {/* Fill effect on hover */}
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </button>

          </motion.div>

        </div>
      </div>
    </section>
  );
}