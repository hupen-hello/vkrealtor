"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// --- Dummy Blog Data ---
const blogPosts = [
  {
    id: 1,
    category: "Market Trends",
    date: "May 03, 2026",
    title: "The Future of Luxury Real Estate in Delhi/NCR",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    link: "/blog/future-of-luxury-real-estate",
  },
  {
    id: 2,
    category: "Architecture",
    date: "Apr 28, 2026",
    title: "Blending Nature with Modern Living Spaces",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop",
    link: "/blog/blending-nature-with-modern-spaces",
  },
  {
    id: 3,
    category: "Lifestyle",
    date: "Apr 15, 2026",
    title: "Elevating Your Home's Interior Design",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2067&auto=format&fit=crop",
    link: "/blog/elevating-interior-design",
  },
];

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
};

export default function BlogSection() {
  return (
    <section className="w-full bg-[#111827] text-white">
      
      {/* Andar ka content container 7xl width ke sath center mein hai */}
      <div className="py-15 px-6 max-w-[85%] md:max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-t border-gray-700 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-optima text-gray-400 uppercase tracking-[0.2em] text-xs mb-4">
              Insights & Stories
            </p>
            <h2 className="font-freight text-5xl md:text-6xl font-light leading-tight text-[#dcb153]">
              The Journal
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <Link
              href="/journal"
              className="group relative inline-flex items-center gap-4 text-xs font-optima tracking-[0.2em] uppercase pb-2 text-white"
            >
              <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                View All Articles
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-700"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          </motion.div>
        </div>

        {/* --- Blog Cards Grid --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants} className="group cursor-pointer flex flex-col">
              
              <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 font-optima text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>{post.date}</span>
              </div>

              <h3 className="font-freight text-3xl md:text-[2rem] leading-snug text-white mb-6 group-hover:text-[#dcb153] transition-colors duration-300">
                {post.title}
              </h3>

              <div className="mt-auto">
                <span className="relative inline-flex items-center gap-4 text-[10px] md:text-xs font-optima tracking-[0.2em] uppercase pb-1 text-white">
                  <span className="relative z-10">Read Article</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-700"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}