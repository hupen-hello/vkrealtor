import React from 'react'
import Image from "next/image";
import { motion , Variants } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Herosection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Placeholder for Hero Image - Replace src with your actual property image */}
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Real Estate"
          fill
          className="object-cover z-0"
          priority
        />

        <motion.div
          className="relative z-20 text-center px-6 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="font-josefin text-gray-300 text-5xl md:text-7xl font-bold tracking-widest uppercase mb-4"
          >
            Creating Space <br />
            <span className="text-gray-300">For Life</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-dm-sans text-gray-300 max-w-xl mx-auto mb-10 text-sm md:text-base"
          >
            Experience premium living with our world-class residential and
            commercial properties. Designed for the modern lifestyle.
          </motion.p>

         
        </motion.div>
      </section>
  )
}

export default Herosection