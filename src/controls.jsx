/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { extend, useThree } from "@react-three/fiber";
import { MapControls } from "three/examples/jsm/controls/MapControls";

extend({ MapControls });

function Controls(props) {
  const controls = useRef(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    if (controls.current) {
      controls.current.update();
    }
  });

  return (
    <primitive
      ref={controls}
      object={new MapControls(camera, gl.domElement)} // ✅ Now inside primitive correctly
      enableDamping={true}
      dampingFactor={0.05}
      minDistance={100}
      maxDistance={500}
      maxPolarAngle={Math.PI / 2}
      {...props}
    />
  );
}

export default Controls;
