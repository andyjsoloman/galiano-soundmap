/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { Fog } from "three";
import { Environment, OrbitControls } from "@react-three/drei";

import Shader from "./Shader";

function Experience() {
  const { scene, camera } = useThree();

  scene.fog = new Fog(0x0487e2, 7, 25);

  camera.fov = 20;
  camera.near = 0.25;
  camera.far = 300;
  camera.position.set(30, 90, 250);

  return (
    <>
      <OrbitControls maxPolarAngle={Math.PI * 0.6} target={[0, 70, 0]} />
      <Environment background files={"./kloppenheim_06_puresky_4k.hdr"} />
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

      <Shader />
    </>
  );
}

export default Experience;
