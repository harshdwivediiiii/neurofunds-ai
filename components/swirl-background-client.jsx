"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

/* ------------------ Swirl Ring ------------------ */
function SwirlRing({ scale, speed, offset, color }) {
  const ref = useRef();

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.z += dt * speed * 0.5;
  });

  return (
    <mesh ref={ref} scale={scale} rotation={[0, offset, offset / 2]}>
      <torusKnotGeometry args={[2, 0.6, 200, 32]} />
      <meshPhysicalMaterial
        metalness={1}
        roughness={0.2}
        clearcoat={1}
        transmission={0.5}
        thickness={0.8}
        color={color}
      />
    </mesh>
  );
}

/* ------------------ Main Component ------------------ */
export default function SwirlBackgroundClient() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();

  /* ✅ Fix hydration issue */
  useEffect(() => {
    setMounted(true);

    const check = () => setIsMobile(window.innerWidth < 640);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ❌ Prevent render before mount (CRITICAL) */
  if (!mounted) return null;

  /* Theme-safe values */
  const isLight = resolvedTheme === "light";

  const ringScales = isMobile ? [0.7, 1.0, 1.3] : [1, 1.4, 1.8];
  const cameraPos = isMobile ? [0, 0, 10] : [0, 0, 8];

  const swirlColor = isLight ? "#80caff" : "#006aff";
  const lightColor = isLight ? "#a5d8ff" : "#3399ff";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -30,
        pointerEvents: "none",
      }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: cameraPos, fov: 50 }}
        dpr={[1, 2]}                // ✅ performance safe
        frameloop="always"
      >
        <Environment preset="sunset" />

        <group>
          <SwirlRing scale={ringScales[0]} speed={0.2} offset={0} color={swirlColor} />
          <SwirlRing scale={ringScales[1]} speed={0.15} offset={Math.PI / 3} color={swirlColor} />
          <SwirlRing scale={ringScales[2]} speed={0.1} offset={Math.PI / 1.5} color={swirlColor} />
        </group>

        <directionalLight intensity={isLight ? 1.2 : 2} position={[5, 5, 5]} color={lightColor} />
        <ambientLight intensity={isLight ? 0.4 : 0.3} />
      </Canvas>
    </div>
  );
}