/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";

import Shader from "./Shader";
import Ocean from "./Ocean";

function Experience() {
  const { scene, camera, size } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x0487e2, 0.0002);

    camera.near = 1;
    camera.far = 5000;
    // camera.fov = 25;
    camera.position.set(1000, 500, 0);

    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [scene, camera, size]);

  return (
    <>
      <OrbitControls maxPolarAngle={Math.PI * 0.6} target={[0, 70, 0]} />
      <Environment
        background
        files={"./kloppenheim_06_puresky_4k.hdr"}
        rotation={[0, -Math.PI, 0]}
      />

      {/* Lighting */}
      <directionalLight
        intensity={1}
        color={0xffffff}
        position={[5, 10, 5]}
        castShadow
      />
      <hemisphereLight
        skyColor={0x333366}
        groundColor={0x74ccf4}
        intensity={0.5}
      />
      <Ocean />
      {/* <Shader /> */}
      <mesh scale={200} position={[5, -20, 5]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}

export default Experience;
