"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react"; // 1. Ye hooks import kiye

// Sample Data
const residentialProjects = [
  {
    id: 1,
    title: "EXOTICA EASTERN COURT",
    status: "COMPLETED",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "EXOTICA EAST SQUARE",
    status: "COMPLETED",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "EXOTICA FRESCO",
    status: "COMPLETED",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "EXOTICA PARADISE",
    status: "ONGOING",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
];

export default function ResidentialSection() {
  // 2. Desktop Mouse Dragging Logic ke liye setup
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
    e.preventDefault(); // Image ko text ki tarah select hone se rokta hai
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier (1.5x)
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="w-full bg-[#F3EBE3] flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT SIDE: Lifestyle Image */}
      <div className="w-full md:w-[40%] relative min-h-[400px] md:min-h-[600px] pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" 
          alt="Comfortable Living" 
          fill 
          className="object-cover"
        />
      </div>

      {/* RIGHT SIDE: Content & Carousel */}
      <div className="w-full md:w-[60%] py-16 px-6 md:py-20 md:pl-16 md:pr-0 flex flex-col justify-center">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-freight text-4xl md:text-6xl font-light tracking-wide text-gray-800 mb-10"
        >
          Residential
        </motion.h2>

        {/* 3. Horizontal Scrollable Carousel - EVENTS AND REF ADDED HERE */}
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto pb-8 pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none ${
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x snap-mandatory"
          }`}
        >
          
          {residentialProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Images ko drag karte time click na ho isliye pointer-events set kiye hain
              className="snap-center shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[450px] relative rounded-2xl overflow-hidden group"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className={`object-cover transition-transform duration-700 pointer-events-none ${!isDragging && 'group-hover:scale-105'}`}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 pr-12 pointer-events-none">
                <h3 className="text-white font-josefin text-lg uppercase tracking-wider mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-[10px] tracking-widest uppercase">
                  {project.status}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Discover More Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link 
            href="/residential" 
            className="inline-flex items-center gap-4 text-xs font-josefin tracking-[0.2em] text-gray-800 uppercase border-b border-gray-400 pb-1 hover:border-black transition-colors"
          >
            Discover More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}