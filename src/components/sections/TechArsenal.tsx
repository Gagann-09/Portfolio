"use client";

import { motion } from "framer-motion";
import SkillBar from "../ui/SkillBar";
import { skillCategories } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function TechArsenal() {
  return (
    <section id="tech-stack" className="py-32 relative bg-[#050505]">
      {/* Decorative background blur */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-outfit font-bold text-white"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Competencies</span>.
          </motion.h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 relative group overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-2"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:border-[var(--accent)]/50 transition-colors">
                  {category.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white font-outfit mb-8">{category.title}</h4>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar key={skillIdx} skill={skill} skillIdx={skillIdx} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
