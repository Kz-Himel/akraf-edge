"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EdgeShape() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#00DF81"
          wireframe
          emissive="#00DF81"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh scale={0.6}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color="#2CC295" roughness={0.2} metalness={0.6} />
      </mesh>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#2FA98C" size={0.02} sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00DF81" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#095544" />
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        <EdgeShape />
      </Float>
      <Particles />
      <Environment preset="night" />
    </Canvas>
  );
}