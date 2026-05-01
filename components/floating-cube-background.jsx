'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function SpinningBox() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

export default function FloatingCubeBackground() {
  return (
    <div className="fixed top-0 left-0 h-full w-full -z-20 opacity-10">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <OrbitControls enableZoom={false} />
        <SpinningBox />
      </Canvas>
    </div>
  );
}
