import React from 'react'
import { motion , Variants} from "framer-motion";

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
};

function Enquirysection() {
  return (
     <section className="w-full bg-[#4e7153] text-white py-24 px-6 md:px-16 flex justify-center font-optima">
      <div className="max-w-5xl w-full">
        
        {/* Heading Section */}
        <motion.h2 
          variants={textReveal} 
          className="font-josefin text-3xl md:text-5xl text-center uppercase tracking-widest mb-15"
        >
         We will answer all  <br />
         your questions
        </motion.h2>

        {/* Form Layout: Split Screen on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* === LEFT COLUMN: Inputs === */}
          <div className="flex flex-col gap-8">
            
            {/* Input Fields (Underlined) */}
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-transparent border-b border-[#d09e31] pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-gray-400"
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-transparent border-b border-[#d09e31] pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-gray-400"
            />
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border-b border-[#d09e31] pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-gray-400"
            />

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start gap-3 mt-4 group cursor-pointer">
              <input 
                type="checkbox" 
                id="privacy"
                className="mt-1 w-4 h-4 bg-transparent border-gray-500 rounded-sm cursor-pointer accent-white"
              />
              <label htmlFor="privacy" className="text-gray-400 text-xs leading-relaxed cursor-pointer group-hover:text-gray-300 transition-colors">
                I agree to the transfer of personal data in accordance with the Privacy Policy
              </label>
            </div>

            {/* reCAPTCHA Mockup (Dark Mode) */}
            <div className="mt-4 border border-[#4e7153] bg-[#4e7153] p-3 flex items-center justify-between w-[300px] rounded-sm">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-6 h-6 border-gray-500 rounded-sm cursor-pointer accent-green-500" />
                <span className="text-sm">Im not a robot</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                {/* Custom generic recaptcha logo mockup */}
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mb-1 text-blue-500" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-[8px] text-gray-500">reCAPTCHA</span>
              </div>
            </div>

          </div>

          {/* === RIGHT COLUMN: Textarea & Button === */}
          <div className="relative w-full h-[250px] md:h-[350px]">
            
            <textarea 
              placeholder="Message" 
              className="w-full h-full bg-transparent border border-[#d09e31] p-5 text-sm focus:outline-none focus:border-white transition-colors resize-none placeholder:text-gray-400"
            ></textarea>

            {/* Overlapping Circular Submit Button */}
            <button className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-12 w-28 h-28 md:w-36 md:h-36 rounded-full border border-[#d09e31] flex items-center justify-center bg-#0a0f1a text-white hover:bg-white hover:text-[#d09e31] transition-all duration-500 z-10 overflow-hidden group">
              <span className="text-xs tracking-[0.2em] uppercase z-10 relative group-hover:scale-105 transition-transform">
                Submit
              </span>
              
              {/* Optional: Fill effect on hover */}
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Enquirysection