import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import React, { Suspense } from "react";

function Model() {
  const gltf = useGLTF("/assets/r_4_x_bot_copy.gltf");
  return <primitive object={gltf.scene} />;
}

export default function GltfViewer() {
  return (
    <div className="w-full h-full" style={{ height: "100%", minHeight: 400 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Add realistic environment */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Model />
        </Suspense>
        {/* Add multiple lights for depth */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}