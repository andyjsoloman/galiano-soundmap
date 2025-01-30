/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/shader2/vertex-s2.glsl";
import fragmentShader from "./shaders/shader2/fragment-s2.glsl";
import { useFrame } from "@react-three/fiber";

export default function Shader() {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_frequency: { value: new THREE.Vector2(10, 5) },
      u_resolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[15000, 3000, 512, 512]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        side={THREE.DoubleSide}
        uniforms={uniforms}
      />
    </mesh>
  );
}
