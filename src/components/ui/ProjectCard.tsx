"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 transition-all hover:border-white/20"
    >
      {/* Dynamic gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
      
      <div className="p-10 relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm font-medium text-[var(--accent)] mb-2 tracking-wide uppercase">{project.category}</p>
            <h4 className="text-2xl md:text-3xl font-bold font-outfit text-white">{project.title}</h4>
          </div>
          <div className="flex gap-3">
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-110 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
            )}
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-110 transition-all">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-white/60 leading-relaxed mb-10 flex-grow text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/80">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
