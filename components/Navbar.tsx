"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Custom Animated Link Component
const AnimatedNavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <motion.div 
      className="relative flex items-center justify-center cursor-pointer group px-4 py-6"
      initial="initial"
      whileHover="hover"
    >
      {/* The Expanding White Circle */}
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 1, opacity: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute w-[100px] h-[100px] bg-white rounded-full z-0 pointer-events-none"
      />
      
      <motion.div
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 1.4, opacity: 0.3 }
        }}
        transition={{ duration: 0.5 }}
        className="absolute w-[100px] h-[100px] border border-white rounded-full z-0 pointer-events-none"
      />

      {/* Nav Text */}
      <Link 
        href={href} 
        className="relative z-10 font-josefin text-xs tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors duration-300"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Track Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-black py-0 shadow-2xl" 
          : "bg-gradient-to-b from-black/90 via-black/40 to-transparent  "  
      }`}
    >
      <div className="max-w-[95%] mx-auto h-24 flex items-center justify-between">
        
        {/* Logo Section - UPDATED TO IMAGE */}
        <Link href="/" className="flex items-center z-50">
          <Image 
            src="/logo1.png" 
            alt="Vk realtor Logo" 
            width={80}
            height={50}
            className="object-contain" 
            priority 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <AnimatedNavLink href="/about" title="About Us" />
          <AnimatedNavLink href="/residential" title="Residential" />
          <AnimatedNavLink href="/commercial" title="Commercial" />
          <AnimatedNavLink href="/plots" title="Plots" />
        </div>

        {/* Contact Button */}
        <div className="hidden md:block z-10">
          <Link 
            href="/contact" 
            className="px-8 py-3 border border-white rounded-full text-xs font-josefin tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 ease-out"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
    </nav>
  );
}