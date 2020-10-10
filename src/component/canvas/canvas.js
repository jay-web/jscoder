import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Box from "./box";
import "./canvas.styles.css";
import { Physics } from 'use-cannon';
import { Plane, Cubes } from "./piller";

const CanvasBox = (props) => {
  return (
    // <Canvas className="canvasStyle" style={{ height: '100vh'}}>
    //   <ambientLight />
    //   <pointLight position={[10, 10, 10]} />
      
    //   <Box position={[-10, 0, -6]} />
    // </Canvas>
    <Canvas 
        style={{height: '100vh'}}
        shadowMap 
        colorManagement 
        gl={{ alpha: false }} 
        camera={{ position: [-1, 1, 2.5], 
        fov: 50 }}>
    <color attach="background" args={['teal-500']} />
    <hemisphereLight intensity={0.35} />
    <spotLight 
      position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    <Physics>
      <Plane rotation={[-Math.PI / 2, 0, 0]} />
      <Cubes number={150} />
    </Physics>
  </Canvas>
  );
};

export default CanvasBox;
