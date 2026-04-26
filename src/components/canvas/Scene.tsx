"use client";

import { Canvas } from "@react-three/fiber";
import BackgroundParticles from "./BackgroundParticles";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundParticles />
      </Canvas>
    </div>
  );
}
