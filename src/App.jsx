import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Experience from "./Experience";

export default function App() {
  return (
    <Canvas>
      <Experience />
      <OrbitControls />
    </Canvas>
  );
}
