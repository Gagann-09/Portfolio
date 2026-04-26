"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Activity } from "lucide-react";
import { useRef } from "react";

const educationData = [
  {
    institution: "JSS Academy Of Technical Education Karnataka",
    degree: "Bachelor of Engineering - BE, Artificial Intelligence",
    period: "Sep 2023 – Aug 2027",
    details: [
      { icon: <Activity size={16} />, text: "Cricket, Volleyball, Football, Music Composition" },
      { icon: <Award size={16} />, text: "Skills: C, Operating Systems" }
    ]
  },
  {
    institution: "M.E.S College of Arts, Science and Commerce",
    degree: "Pre-University Course (PUC), Science",
    period: "Jun 2021 – Mar 2023",
    details: [
      { icon: <Award size={16} />, text: "Grade: 92.66%" },
      { icon: <Activity size={16} />, text: "Cultural Music, Badminton, Volleyball, Cricket" }
    ]
  },
  {
    institution: "National Academy for Learning",
    degree: "SSLC, Science",
    period: "Jun 2019 – Mar 2021",
    details: [
      { icon: <Award size={16} />, text: "Grade: 90.33%" },
      { icon: <Activity size={16} />, text: "Cricket, Volleyball, Table Tennis, Football, Basketball, Swimming" }
    ]
  },
  {
    institution: "Sri Sathya Sai Loka Seva Educational Institutions, Alike",
    degree: "Higher School, Science",
    period: "Jun 2018 – Mar 2019",
    details: [
      { icon: <Activity size={16} />, text: "Kho-Kho, Throw Ball, Volleyball, Swimming, Cricket, Football" }
    ]
  },
  {
    institution: "Baldwin Boys' High School",
    degree: "Science, Mathematics, English, Social Science",
    period: "Jun 2011 – Mar 2018",
    details: [
      { icon: <Activity size={16} />, text: "Swimming, Cricket and Musical Instrument" }
    ]
  }
];

export default function EducationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-32 relative bg-[#050505]" ref={containerRef}>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-[var(--accent)] mb-4"
          >
            Roadmap
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-outfit font-bold text-white"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]">Journey</span>.
          </motion.h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-[var(--accent)] to-[var(--accent-light)] rounded-full shadow-[0_0_15px_var(--accent)]" 
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 py-10">
            {educationData.map((edu, idx) => (
              <TimelineItem key={idx} data={edu} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index }: { data: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative flex flex-col md:flex-row items-center w-full group"
    >
      {/* Center Node on Timeline */}
      <div className="absolute left-8 md:left-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-[#050505] bg-[#111] flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--accent)]/50">
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
      </div>

      {/* Desktop Left Side Content */}
      <div className="hidden md:block w-1/2 pr-12 lg:pr-20">
        {isEven && <TimelineCard data={data} alignment="right" />}
      </div>

      {/* Desktop Right Side Content & Mobile Content */}
      <div className="w-full md:w-1/2 pl-20 md:pl-12 lg:pl-20">
        {!isEven && <div className="hidden md:block"><TimelineCard data={data} alignment="left" /></div>}
        
        {/* Mobile View always displays on the right */}
        <div className="md:hidden">
          <TimelineCard data={data} alignment="left" />
        </div>
      </div>
    </motion.div>
  );
}

function TimelineCard({ data, alignment }: { data: any; alignment: 'left' | 'right' }) {
  const isRight = alignment === 'right';
  
  return (
    <div className={`relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all duration-300 hover:-translate-y-2 shadow-[0_0_30px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
      <div className={`flex items-center gap-2 mb-4 text-white/60 text-sm font-semibold tracking-wider ${isRight ? 'md:justify-end' : 'justify-start'}`}>
        <GraduationCap size={18} className="text-[var(--accent)]" />
        <span>{data.period}</span>
      </div>
      
      <h4 className={`text-xl md:text-2xl font-bold font-outfit text-white mb-2 ${isRight ? 'md:text-right' : 'text-left'}`}>
        {data.institution}
      </h4>
      <p className={`text-[var(--accent-light)] font-medium mb-6 ${isRight ? 'md:text-right' : 'text-left'}`}>
        {data.degree}
      </p>
      
      <div className="space-y-4">
        {data.details.map((detail: any, i: number) => (
          <div key={i} className={`flex items-start gap-3 ${isRight ? 'md:justify-end md:flex-row-reverse' : 'justify-start'}`}>
            <div className="mt-1 text-[var(--accent)]/60 shrink-0">{detail.icon}</div>
            <p className={`text-white/70 text-sm leading-relaxed ${isRight ? 'md:text-right' : 'text-left'}`}>
              {detail.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
