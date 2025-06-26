'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

function SwirlRing({ scale, speed, offset, color }) {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.z += dt * speed * 0.5;
  });

  return (
    <mesh ref={ref} scale={scale} rotation={[0, offset, offset / 2]}>
      <torusKnotGeometry args={[2, 0.6, 400, 64]} />
      <meshPhysicalMaterial
        metalness={1}
        roughness={0.15}
        clearcoat={1}
        reflectivity={1}
        transmission={0.6}
        thickness={1}
        color={color}
      />
    </mesh>
  );
}

export default function SwirlBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const ringScales = isMobile ? [0.7, 1.0, 1.3] : [1, 1.4, 1.8];
  const cameraPos = isMobile ? [0, 0, 10] : [0, 0, 8];

  const swirlColor = resolvedTheme === 'light' ? '#80caff' : '#006aff';
  const lightColor = resolvedTheme === 'light' ? '#a5d8ff' : '#3399ff';
  const dirLightIntensity = resolvedTheme === 'light' ? 1.2 : 2;
  const ambientIntensity = resolvedTheme === 'light' ? 0.4 : 0.3;

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: cameraPos, fov: 50 }}
      style={{ position: 'fixed', inset: 0, zIndex: -30, pointerEvents: 'none' }}
    >
      <Environment preset="sunset" />
      <group>
        <SwirlRing scale={ringScales[0]} speed={0.2} offset={0} color={swirlColor} />
        <SwirlRing scale={ringScales[1]} speed={0.15} offset={Math.PI / 3} color={swirlColor} />
        <SwirlRing scale={ringScales[2]} speed={0.1} offset={Math.PI / 1.5} color={swirlColor} />
      </group>
      <directionalLight intensity={dirLightIntensity} position={[5, 5, 5]} color={lightColor} />
      <ambientLight intensity={ambientIntensity} />
    </Canvas>
  );
}
