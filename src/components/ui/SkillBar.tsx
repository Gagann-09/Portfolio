"use client";

import { motion } from "framer-motion";

export default function SkillBar({ skill, skillIdx }: { skill: { name: string; usage: number }; skillIdx: number }) {
  return (
    <div className="group/skill">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white/80 group-hover/skill:text-[var(--accent-light)] transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-[var(--accent)] font-mono opacity-80">
          {skill.usage}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.usage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] rounded-full relative"
        >
          {/* Glow effect at the tip of the progress bar */}
          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px]" />
        </motion.div>
      </div>
    </div>
  );
}
