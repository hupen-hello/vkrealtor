"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ResidentialSection from "@/components/ResidentialSection";
import FinancialPartners from "@/components/FinancialPartners";
import AboutSection from "@/components/Aboutsection";
import StorySection from "@/components/Storysection";
import BlogSection from "@/components/Blogsection";
import Enquirysection from "@/components/Enquirysection";
import Herosection from "@/components/Herosection";
import FeaturedSection from "@/components/Featuredproject";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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


export default function Home() {
  return (
    <div className="bg-[#F3EBE3] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <Herosection/>

      {/* 2. ABOUT/INTRO SECTION */}
      <AboutSection/>

       <ResidentialSection />


       <StorySection/>

      <FeaturedSection/>

    

     

     <Enquirysection/>

    {/* <FinancialPartners/> */}

    {/* BLog section  */}

    {/* <BlogSection/> */}
   

     
    </div>
  );
}

// Sub-component for Project Cards with Hover Animation
function ProjectCard({
  title,
  category,
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative h-[450px] overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>

      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out z-0"
      />

      <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] font-josefin tracking-[0.2em] uppercase text-gray-300 mb-2">
          {category}
        </p>
        <h3 className="text-2xl font-josefin uppercase tracking-widest text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
