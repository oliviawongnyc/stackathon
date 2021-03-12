import './App.css';
import React, { useState } from 'react';
import EntryBackground from './EntryBackground';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  const [active, setActive] = useState(false);
  return (
    <mesh
      onClick={(e) => {
        setActive(!active);
      }}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial
        attach='material'
        color={active ? 'lightblue' : 'blue'}
      />
    </mesh>
  );
}

// function Plane() {
//   return (
//     <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach='geometry' args={[100, 100]} />
//       <meshLambertMaterial attach='material' color='pink' />
//     </mesh>
//   );
// }

export default function Cube(props) {
  const { night, day } = props;
  return (
    <>
      <Canvas>
        {/* <EntryBackground day={day} night={night} /> */}
        <OrbitControls />
        <ambientLight intensity={0.25} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Box />
      </Canvas>
    </>
  );
}
