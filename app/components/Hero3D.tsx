"use client";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sphere, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShapes() {
  const group = useRef<THREE.Group>(null);
  const sphereRef1 = useRef<THREE.Mesh>(null);
  const sphereRef2 = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[0, 0, 0]}>
        <Sphere ref={sphereRef1} args={[1.2, 64, 64]} scale={hovered ? 1.05 : 1} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          <MeshDistortMaterial
            color="#ffffff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={3} position={[-1.6, -1, 1]}>
        <Sphere ref={sphereRef2} args={[0.5, 32, 32]}>
          <MeshDistortMaterial
            color="#2563eb"
            attach="material"
            distort={0.5}
            speed={3}
            roughness={0.2}
            metalness={0.5}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[1.6, 1.2, -1]}>
        <Sphere args={[0.4, 32, 32]}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.5}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', borderRadius: '20px', overflow: 'hidden', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563eb" />
        
        <PresentationControls
          global
          snap={true}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <AbstractShapes />
        </PresentationControls>
        
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4} color="#000000" />
        
        {/* Environment mapping for nice reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
