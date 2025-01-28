/* eslint-disable react/no-unknown-property */
import * as THREE from "three";

export default function Water() {
  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x74ccf4,
    roughness: 0.5,
    metalness: 0.5,
  });

  return (
    <mesh
      geometry={new THREE.PlaneGeometry(10000, 10000)}
      material={waterMaterial}
      rotation={[-Math.PI / 2, 0, 0]} // Rotate to make it flat
      position={[0, -20, 0]}
    />
  );
}
