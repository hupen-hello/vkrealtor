"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// --- Combined Data for all categories ---
const allProjects = [
  // Residential
  { id: 1, category: "Residential", title: "EASTERN COURT", status: "COMPLETED", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, category: "Residential", title: "FRESCO", status: "COMPLETED", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, category: "Residential", title: "PARADISE", status: "ONGOING", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
  // Commercial
  { id: 4, category: "Commercial", title: "EAST SQUARE", status: "COMPLETED", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, category: "Commercial", title: "DREAMVILLE", status: "ONGOING", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" },
  // Plots
  { id: 6, category: "Plots", title: "YAMUNA PLOTS", status: "NEW", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop" },
  { id: 7, category: "Plots", title: "GREEN VALLEY", status: "UPCOMING", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" },
];

const categories = ["Residential", "Commercial", "Plots"];

export default function ProjectsSection() {
  // Tabs State
  const [activeTab, setActiveTab] = useState("Residential");

  // Filter Logic
  const filteredProjects = allProjects.filter((project) => project.category === activeTab);

  // Desktop Mouse Dragging Logic
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();  
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;  
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-15 w-full bg-[#F4EFEA] overflow-hidden flex flex-col items-center">
      
      {/* === HEADER & TABS (Centered) === */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 flex flex-col items-center">
        
        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4 justify-center"
        >
          <span className="w-8 h-[1px] bg-gray-500"></span>
          <span className="font-optima text-[#d09e31] text-sm font-medium tracking-wider">FEATURED LIST</span>
        </motion.div>

        {/* Main Heading (Matching the image) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-freight text-4xl md:text-6xl text-[#4e6957] leading-[1.1] tracking-tight mb-12"
        >
          <span className="">Modern</span> Infrastructure & <br />thoughtful living spaces
        </motion.h2>

        {/* Pill Shaped Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-8 py-3 rounded-full font-optima text-sm tracking-wide transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#1a1a1a] text-white shadow-lg scale-105" // Active state (Dark)
                  : "bg-white text-[#1a1a1a] hover:bg-gray-100" // Inactive state (White)
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* === CAROUSEL SECTION === */}
      {/* AnimatePresence taaki tab change hone par cards smoothly fade ho */}
      <div className="w-full pl-6 md:pl-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab} // Jab tab change hoga, ye key change hogi aur naya animation chalega
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 md:gap-8 overflow-x-auto pb-8 pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none ${
              isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[300px] md:w-[380px] h-[400px] md:h-[300px] relative rounded-sm overflow-hidden group"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className={`object-cover transition-transform duration-700 pointer-events-none ${!isDragging && 'group-hover:scale-105'}`}
                />
                
                {/* Dark Gradient from bottom for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

                {/* Card Text Content */}
                <div className="absolute bottom-8 left-8 pr-12 pointer-events-none">
                  <p className="text-gray-300 font-optima text-xs tracking-[0.2em] uppercase mb-2">
                    {project.status}
                  </p>
                  <h3 className="text-white font-freight text-3xl md:text-4xl uppercase tracking-wide leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all pointer-events-none group-hover:bg-white group-hover:text-black text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link below Carousel */}
        <div className="mt-8 flex justify-center w-full pr-6 md:pr-20">
          <Link 
            href={`/${activeTab.toLowerCase()}`} 
            className="group relative inline-flex items-center gap-4 text-xs font-optima tracking-[0.2em] text-[#1a1a1a] uppercase pb-2"
          >
            <span className="relative z-10 text-[#d09e31] transition-colors duration-300">
              View All {activeTab}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1a1a1a] group-hover:w-full transition-all duration-500 ease-out"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}