"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- Framer Motion Variants ---
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

// --- Dummy Property Data (Tum isko change kar sakte ho) ---
const properties = [
  {
    id: 1,
    category: "Residential apartment",
    titlePart1: "EXOTICA",
    titlePart2: "FRESCO", // Italic part
    address: "Sector 137, Noida, UP 201305",
    desc: "Experience premium living with our world-class residential properties. Designed for the modern lifestyle, offering a symphony of architecture, comfort, and craftsmanship.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
    features: { area: "2400 sq ft", rooms: "4 Beds", baths: "3", parking: "Yes" }
  },
  {
    id: 2,
    category: "Commercial Space",
    titlePart1: "EXOTICA",
    titlePart2: "DREAMVILLE",
    address: "Greater Noida West, UP",
    desc: "A landmark commercial destination blending modern workspaces with premium retail. Empowering dreams with leading infrastructure and connectivity.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: { area: "1200 sq ft", rooms: "Office", baths: "2", parking: "Yes" }
  },
  {
    id: 3,
    category: "Premium Plots",
    titlePart1: "EXOTICA",
    titlePart2: "PLOTS",
    address: "Yamuna Expressway, UP",
    desc: "Build your dream home from the very first blueprint to the final brick. Secure, gated communities with world-class amenities and lush green surroundings.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop",
    features: { area: "500 sq yds", rooms: "Custom", baths: "-", parking: "Ample" }
  }
];

export default function FeaturedSection() {
  return (
    <section className="py-15 px-6 max-w-[85%] md:max-w-7xl mx-auto overflow-hidden">
      
      {/* === HEADER SECTION === */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mb-10 text-center flex flex-col items-center"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
          <span className="w-6 h-[1px] bg-gray-500"></span>
          <span className="font-optima text-[#d09e31] text-sm font-medium tracking-widest uppercase">OUR PORTFOLIO</span>
        </motion.div>
        
        <motion.h2 
          variants={fadeUp} 
          className="font-freight text-4xl md:text-5xl lg:text-6xl text-[#4e6957] mb-4"
        >
          <span className="">Featured</span> Properties you'll love
        </motion.h2>
      </motion.div>

      {/* === PROPERTIES LIST === */}
      <div className="flex flex-col gap-15 md:gap-15">
        {properties.map((prop, index) => {
          // Check if index is even or odd for alternating layout (Left Image vs Right Image)
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={prop.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              // Alternating row direction magic
              className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              
              {/* --- IMAGE SIDE --- */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 relative h-[350px] md:h-[400px] group overflow-hidden rounded-sm">
                <Image
                  src={prop.image}
                  alt={prop.titlePart1}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Location Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 rounded-sm flex items-start gap-3 max-w-[80%]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <p className="font-optima text-white text-sm leading-relaxed">
                    {prop.address}
                  </p>
                </div>
              </motion.div>

              {/* --- CONTENT SIDE --- */}
              <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex flex-col items-start px-4 md:px-8">
                
                <p className="font-optima text-[#d09e31] uppercase tracking-widest text-xs mb-3">
                  {prop.category}
                </p>
                
                <h3 className="font-freight text-4xl md:text-5xl text-[#1a1a1a] mb-6 uppercase tracking-tight">
                  {prop.titlePart1} <span className="italic">{prop.titlePart2}</span>
                </h3>

                {/* <p className="font-optima text-gray-600 leading-relaxed mb-10 border-b border-gray-200 pb-10">
                  {prop.desc}
                </p> */}

                {/* Features Grid */}
                <div className="w-full flex flex-col gap-5 mb-12">
                  {/* Total Area */}
                  <div className="flex items-center justify-between font-optima text-gray-700">
                    <div className="flex items-center gap-4 w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
                      <span>Total Area</span>
                    </div>
                    <span className="w-1/12 text-center">:</span>
                    <span className="w-1/2 font-semibold">{prop.features.area}</span>
                  </div>
                  
                  {/* Rooms */}
                  <div className="flex items-center justify-between font-optima text-gray-700">
                    <div className="flex items-center gap-4 w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
                      <span>Rooms</span>
                    </div>
                    <span className="w-1/12 text-center">:</span>
                    <span className="w-1/2 font-semibold">{prop.features.rooms}</span>
                  </div>

                  {/* Baths */}
                  <div className="flex items-center justify-between font-optima text-gray-700">
                    <div className="flex items-center gap-4 w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" /></svg>
                      <span>Baths</span>
                    </div>
                    <span className="w-1/12 text-center">:</span>
                    <span className="w-1/2 font-semibold">{prop.features.baths}</span>
                  </div>

                  {/* Parking */}
                  <div className="flex items-center justify-between font-optima text-gray-700">
                    <div className="flex items-center gap-4 w-1/3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
                      <span>Parking</span>
                    </div>
                    <span className="w-1/12 text-center">:</span>
                    <span className="w-1/2 font-semibold">{prop.features.parking}</span>
                  </div>
                </div>

                {/* Pill Button */}
                <button className="group flex items-center gap-4 bg-[#f4f4f4] hover:bg-[#e8e8e8] transition-colors rounded-full py-2 pl-6 pr-2 shadow-sm border border-gray-100">
                  <span className="font-optima text-[#1a1a1a] text-sm font-semibold">
                    More About Us
                  </span>
                  <span className="w-10 h-10 rounded-full bg-[#a97d54] transition-colors flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                  </span>
                </button>

              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}