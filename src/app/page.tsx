import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechArsenal from "@/components/sections/TechArsenal";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[var(--accent)]/30 selection:text-white flex flex-col relative">
      <CustomCursor />
      
      {/* Interactive 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <TechArsenal />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
