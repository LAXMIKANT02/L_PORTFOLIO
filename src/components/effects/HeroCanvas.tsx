import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Shard({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.45, 0]} />

        <meshPhysicalMaterial
          color="#c0c1ff"
          transparent
          opacity={0.125}
          metalness={0.5}
          roughness={0.05}
          transmission={0.8}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0}
          emissive="#c0c1ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function HeroCanvas() {
  const shards = Array.from({ length: 40 }).map(() => [
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 20,
  ]) as [number, number, number][];

  return (
    <div className="absolute inset-0 pointer-events-none opacity-100">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.6} />

        <pointLight position={[10, 10, 10]} intensity={80} color="#c0c1ff" />

        <pointLight position={[-10, -10, 5]} intensity={40} color="#ffffff" />

        {shards.map((position, index) => (
          <Shard key={index} position={position} />
        ))}
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
