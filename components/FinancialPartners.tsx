"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Bank Partners Data
// Yahan apne actual logo images ka path daal dena public folder se
const partners = [
  { id: 1, name: "ICICI Bank", logo: "/logos/icici.png" },
  { id: 2, name: "Punjab National Bank", logo: "/logos/pnb.png" },
  { id: 3, name: "SBI", logo: "/logos/sbi.png" },
  { id: 4, name: "Bank of Baroda", logo: "/logos/bob.png" },
  { id: 5, name: "IDFC Bank", logo: "/logos/idfc.png" },
  { id: 6, name: "Axis Bank", logo: "/logos/axis.png" },
];

export default function FinancialPartners() {
  // Infinite scroll ko seamless banane ke liye hum array ko duplicate karte hain
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-[#EFE7E3] py-24 overflow-hidden flex flex-col items-center">
      
      <div className="max-w-[95%] md:max-w-7xl w-full px-6 mb-16">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-freight text-4xl md:text-6xl text-[#1a1a1a] leading-tight font-light max-w-4xl"
        >
          Empowering dreams with leading <br className="hidden md:block" />
          financial institutions
        </motion.h2>
      </div>

      {/* Infinite Running Carousel Section */}
      <div className="w-full relative flex items-center">
        
        {/* Optional: Left & Right gradient fades for premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F3EAE1] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F3EAE1] to-transparent z-10"></div>

        {/* Marquee Track */}
        <motion.div 
          className="flex gap-4 md:gap-6 pr-4 md:pr-6"
          // x: [0, "-50%"] is the magic for infinite scroll. 
          // Ye poore container ko aadha move karega, aur kyu ki items duplicated hain, toh seamless loop banega.
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, // Duration badha kar slow kar sakte ho
            repeat: Infinity 
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              // Duplicate items ke liye key me index use kiya h taaki unique rahe
              key={`${partner.id}-${index}`} 
              className="w-[180px] md:w-[240px] h-[80px] md:h-[100px] shrink-0 border border-gray-300/60 flex items-center justify-center bg-transparent group hover:bg-white/50 transition-colors duration-300"
            >
              {/* Jab tak tumhare paas real logos nahi hain, text dikhega. 
                  Real images lagane ke baad is span ko comment kar dena aur <Image> ko uncomment kar lena */}
              
              <span className="font-optima text-xs md:text-sm font-semibold text-gray-700 tracking-wider uppercase">
                {partner.name}
              </span>

              {/* 
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120} 
                height={40} 
                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              /> 
              */}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}