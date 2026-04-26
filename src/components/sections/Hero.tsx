"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ROLES = ["ML Engineer", "Researcher", "Software Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[var(--accent)]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[var(--accent-light)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent)]"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">Open to Opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-syne font-extrabold text-white mb-6 leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Gagan</span><br/>
            Building AI <br/>
            systems that <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] italic">actually work.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 font-outfit mb-10 max-w-xl leading-relaxed"
          >
            <div className="text-[var(--accent)] font-syne font-semibold text-xl mb-3 h-8">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </div>
            <p>
              I design and ship end-to-end AI pipelines — from quantum kernels to production APIs. CS student at JSS Academy, Bengaluru, obsessed with the gap between research and real systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-6"
          >
            <a href="#projects" className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[#050505] font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--accent)]">
              View My Work
            </a>
            <a href="https://github.com/Gagann-09" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300">
              GitHub 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Photo Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-[280px] md:max-w-md lg:max-w-none relative mt-16 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-full aspect-square md:w-96 md:h-96 rounded-[2rem] overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm group hover:border-white/20 transition-all duration-500 z-10">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)] rounded-tr-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--accent)] rounded-bl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)] rounded-br-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden">
              <Image 
                src="/gagan_photo.jpg" 
                alt="Gagan Photo" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
