"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function StorySection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex w-[200vw] h-full">
          
          <div className="w-screen h-full relative flex items-center justify-center shrink-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Commercial.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/40"></div>
            
            <h2 className="relative z-10 text-white font-freight text-5xl md:text-7xl text-center leading-tight font-light drop-shadow-lg">
              Together, we create more than spaces.<br />
              We create stories.
            </h2>
          </div>

          <div className="w-screen h-full flex flex-col md:flex-row shrink-0">
            <div className="w-full md:w-[60%] h-[40%] md:h-full relative">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover object-left"
              >
                <source src="/Commercial.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full md:w-[40%] h-[60%] md:h-full bg-[#fcfbf9] p-10 md:p-16 flex flex-col justify-center">
              <h2 className="font-freight text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-12">
                Together, we create more than spaces.<br />
                We create stories.
              </h2>

              <div className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="min-w-[200px] flex flex-col gap-3 group cursor-pointer">
                  <div className="w-full h-[250px] relative overflow-hidden rounded-sm">
                    <Image 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
                      alt="Event 1" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <p className="font-optima text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors">
                    Senior Citizens Day
                  </p>
                </div>

                <div className="min-w-[200px] flex flex-col gap-3 group cursor-pointer">
                  <div className="w-full h-[250px] relative overflow-hidden rounded-sm">
                    <Image 
                      src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop" 
                      alt="Event 2" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <p className="font-optima text-xs tracking-widest uppercase text-gray-500 group-hover:text-black transition-colors">
                    Fresco Resident Event
                  </p>
                </div>
              </div>
              
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}