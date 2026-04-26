"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-outfit font-bold text-white mb-10"
        >
          Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Future</span>.
        </motion.h3>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          href="mailto:gagan.srira0@gmail.com" 
          className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_var(--accent)]"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
