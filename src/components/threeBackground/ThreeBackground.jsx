"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { GridHelper, Fog } from "three";

const MovingGrid = () => {
  const gridRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    gridRef.current.position.z = time % 10; // Adjust speed as needed
  });

  return (
    <primitive
      object={new GridHelper(40, 40, "green", "green")}
      ref={gridRef}
    />
  );
};

const SceneSetup = () => {
  const { scene } = useThree();
  scene.fog = new Fog("black", 1, 20);

  return null;
};

export const ThreeBackground = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{ position: [0, 5, 5], fov: 75 }}
    >
      <SceneSetup />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <MovingGrid />
    </Canvas>
  );
};

export default ThreeBackground;
