"use client";
import React, { useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sparkles, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

export interface Core3DRef {
  triggerBurst: () => void;
}

const Crystal = forwardRef((props, ref) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const [isBursting, setIsBursting] = useState(false);

  useImperativeHandle(ref, () => ({
    triggerBurst: () => {
      setIsBursting(true);
      setTimeout(() => setIsBursting(false), 1000);
    }
  }));

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (materialRef.current) {
      if (isBursting) {
        materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.8, 0.1);
        materialRef.current.speed = 10;
      } else {
        materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, 0.4, 0.05);
        materialRef.current.speed = 2;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          ref={materialRef}
          color={isBursting ? "#a78bfa" : "#86efac"}
          emissive={isBursting ? "#a78bfa" : "#0f172a"}
          emissiveIntensity={isBursting ? 0.5 : 0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          roughness={0.2}
          metalness={0.8}
          transmission={0.9}
          thickness={1.5}
          ior={1.5}
        />
      </mesh>
      
      {/* Background Sparkles */}
      <Sparkles 
        count={50} 
        scale={4} 
        size={isBursting ? 10 : 4} 
        speed={isBursting ? 2 : 0.5} 
        color={isBursting ? "#c084fc" : "#6ee7b7"} 
        opacity={isBursting ? 0.8 : 0.3} 
      />
    </Float>
  );
});

Crystal.displayName = 'Crystal';

export function Core3DObject({ 
  className = "w-[300px] h-[300px] absolute top-10 right-10 pointer-events-none z-0" 
}: { 
  className?: string 
}) {
  const crystalRef = useRef<Core3DRef>(null);

  // Expose to window for global triggering from anywhere
  if (typeof window !== 'undefined') {
    (window as any).triggerCore3DBurst = () => {
      if (crystalRef.current) {
        crystalRef.current.triggerBurst();
      }
    };
  }

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <spotLight position={[-10, -10, -5]} intensity={0.5} color="#c084fc" />
        
        <Crystal ref={crystalRef} />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
