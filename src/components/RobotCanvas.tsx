import  { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function ProceduralRobot() {
  const group = useRef<THREE.Group>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    
    // Mouse follow logic - subtle rotation
    const x = (state.mouse.x * Math.PI) / 10;
    const y = (state.mouse.y * Math.PI) / 10;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.1);

    // Eyes "pulse" logic
    const intensity = Math.abs(Math.sin(t * 2)) * 0.5 + 1;
    if (leftEye.current && leftEye.current.material instanceof THREE.MeshStandardMaterial) {
      leftEye.current.material.emissiveIntensity = intensity;
    }
    if (rightEye.current && rightEye.current.material instanceof THREE.MeshStandardMaterial) {
      rightEye.current.material.emissiveIntensity = intensity;
    }
  });

  return (
    <group ref={group}>
      {/* Head Section */}
      <RoundedBox args={[1.6, 1.3, 1]} radius={0.15} smoothness={4} position={[0, 0.6, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Face Screen */}
      <mesh position={[0, 0.6, 0.51]}>
        <planeGeometry args={[1.3, 0.9]} />
        <meshStandardMaterial color="#050505" />
      </mesh>

      {/* Glowing Eyes */}
      <mesh ref={leftEye} position={[-0.4, 0.7, 0.53]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={2} />
      </mesh>
      <mesh ref={rightEye} position={[0.4, 0.7, 0.53]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={2} />
      </mesh>

      {/* Neck Joint */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.3]} />
        <meshStandardMaterial color="#333" metalness={1} />
      </mesh>

      {/* Body Section */}
      <RoundedBox args={[1.2, 1.8, 0.9]} radius={0.1} smoothness={4} position={[0, -1.1, 0]}>
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </RoundedBox>

      {/* Decorative Chest Piece */}
      <mesh position={[0, -0.8, 0.46]}>
        <boxGeometry args={[0.6, 0.4, 0.05]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={0.5} />
      </mesh>

      {/* Floating Energy Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <torusGeometry args={[1.4, 0.03, 16, 100]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={1} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.4, 0]}>
        <torusGeometry args={[1.1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#f5cb5c" emissive="#f5cb5c" emissiveIntensity={0.8} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 1.3, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
        <meshStandardMaterial color="#444" metalness={1} />
      </mesh>
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.06]} />
        <meshStandardMaterial color="#4f46e5" emissive="#4f46e5" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

const RobotCanvas = () => {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 8], fov: 28 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} 
          castShadow 
          color="#4f46e5"
        />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#f5cb5c" />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        
        <PresentationControls
          global
          snap
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={1}
            floatingRange={[-0.3, 0.3]}
          >
            <ProceduralRobot />
          </Float>
        </PresentationControls>

        <ContactShadows 
          position={[0, -2.8, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4.5} 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
