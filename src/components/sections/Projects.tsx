"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "GraphCL-Lite",
    category: "Machine Learning / GNN",
    description: "A lightweight contrastive learning framework for Graph Neural Networks. Implemented for node classification on the Cora dataset with robust PyTorch architectures.",
    tech: ["PyTorch", "PyTorch Geometric", "Python"],
    github: "https://github.com/Gagann-09/GraphCL-Lite",
    link: "#",
  },
  {
    title: "Quantum SVM Anomaly Detection",
    category: "Quantum Machine Learning",
    description: "An asynchronous Quantum Support Vector Machine designed to detect financial anomalies using the creditcard.csv dataset, exploring the frontiers of quantum-assisted ML.",
    tech: ["Qiskit", "Python", "SVM", "Data Science"],
    github: "https://github.com/Gagann-09/Asynchronous_Quantum-SVM_for_Financial_Anomaly_Detection",
    link: "#",
  },
  {
    title: "Brain Tumor Detection",
    category: "Computer Vision",
    description: "Medical imaging classification model utilizing advanced CNN architectures to accurately detect brain tumors from MRI scans, providing critical diagnostic support.",
    tech: ["TensorFlow", "OpenCV", "Python", "CNN"],
    github: "https://github.com/Gagann-09/Brain_Tumor_Detection_using_Medical_Imaging",
    link: "#",
  },
  {
    title: "ShadowFox",
    category: "Software Engineering",
    description: "A modern, robust web application built with TypeScript. Focuses on scalable architecture, clean code practices, and seamless user experiences.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/Gagann-09/ShadowFox",
    link: "#",
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-32 relative" ref={containerRef}>
      {/* Decorative background blur */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-outfit font-bold text-white"
          >
            Proof of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Capabilities</span>.
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
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

