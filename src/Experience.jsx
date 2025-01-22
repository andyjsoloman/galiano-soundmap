/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { Fog } from "three";
import Water from "./Water";

function Experience() {
  const { scene, camera } = useThree();

  // Add fog to the scene
  scene.fog = new Fog(0x0487e2, 7, 25);

  // Set the camera properties
  camera.fov = 50;
  camera.near = 0.25;
  camera.far = 30;
  camera.position.set(4, 10, 4);
  camera.lookAt(0, 1, 0);

  return (
    <>
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
      <Water />
    </>
  );
}

export default Experience;
