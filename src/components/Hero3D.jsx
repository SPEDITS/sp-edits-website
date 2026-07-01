import { Canvas } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

function CameraLens() {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
      <group rotation={[0.25, -0.25, 0]}>
        {/* Outer lens ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.65, 0.08, 32, 120]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.18} />
        </mesh>

        {/* Middle lens ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.25, 0.06, 32, 120]} />
          <meshStandardMaterial color="#777777" metalness={1} roughness={0.22} />
        </mesh>

        {/* Inner gold ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.85, 0.045, 32, 120]} />
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.15} />
        </mesh>

        {/* Glass lens */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.78, 0.78, 0.08, 96]} />
          <meshStandardMaterial
            color="#101820"
            metalness={0.4}
            roughness={0.05}
            transparent
            opacity={0.55}
          />
        </mesh>

        {/* Aperture blades */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 0.32,
              Math.sin((i / 8) * Math.PI * 2) * 0.32,
              0.08,
            ]}
            rotation={[0, 0, (i / 8) * Math.PI * 2]}
          >
            <boxGeometry args={[0.52, 0.08, 0.02]} />
            <meshStandardMaterial color="#050505" metalness={0.8} roughness={0.25} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[3, 3, 3]} intensity={4} color="#d4af37" />
        <pointLight position={[-3, -2, 2]} intensity={1.4} color="#ffffff" />

        <Sparkles
          count={80}
          scale={5}
          size={2}
          speed={0.35}
          color="#d4af37"
        />

        <CameraLens />
      </Canvas>
    </div>
  );
}