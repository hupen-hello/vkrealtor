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
    <div className="bg-[#0a0f1a] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <Herosection/>

      {/* 2. ABOUT/INTRO SECTION */}
      <AboutSection/>

      {/* 3. FEATURED PROJECTS (STAGGERED ANIMATION) */}
      <section className="py-24 bg-[#4e7153]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="font-josefin text-3xl md:text-5xl uppercase tracking-widest mb-4">
              Featured Portfolios
            </h2>
            <p className="text-gray-400 font-dm-sans">
              Discover our latest architectural masterpieces.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Project Card 1 */}
            <ProjectCard
              title="Fresco"
              category="Residential"
              image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
            />
            {/* Project Card 2 */}
            <ProjectCard
              title="Dreamville"
              category="Commercial"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
            {/* Project Card 3 */}
            <ProjectCard
              title="Plots"
              category="Land/Plots"
              image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </section>

     <ResidentialSection />

     <StorySection/>

     <Enquirysection/>

    <FinancialPartners/>

    {/* BLog section  */}

    <BlogSection/>
   

     
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
