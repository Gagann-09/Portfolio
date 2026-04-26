"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 w-full">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-[var(--accent)]" />
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase tracking-wider">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Me</span>
            </h2>
            <div className="h-[2px] flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-white/70 font-outfit text-lg leading-relaxed">
              <p>
                Hi, I'm <strong className="text-white font-syne text-xl">Gagan</strong>, a passionate Computer Science student at JSS Academy, Bengaluru. 
                My focus lies in bridging the gap between cutting-edge research and scalable, real-world systems.
              </p>
              <p>
                From designing quantum kernels to building production-ready APIs, I love tackling complex problems that require 
                both deep analytical thinking and robust software engineering. I specialize in Machine Learning, 
                full-stack development, and system architecture.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-syne font-bold text-white mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center border border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-outfit uppercase tracking-wider">Email</p>
                    <a href="mailto:gagan.sriram0@gmail.com" className="text-white hover:text-[var(--accent)] font-syne transition-colors text-lg">
                      gagan.sriram0@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center border border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-outfit uppercase tracking-wider">Location</p>
                    <p className="text-white font-syne text-lg">
                      Bengaluru, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
