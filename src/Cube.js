import './App.css';
import React, { useState } from 'react';
import { useStore } from './useStore';
import { useBox } from '@react-three/cannon';
// import { Physics } from '@react-three/cannon';
// import { Canvas } from 'react-three-fiber';
// import { OrbitControls, Sky, Stars } from '@react-three/drei';

export default function Cube({ position, color, ...props }) {
  const [cubes] = useStore((state) => [state.cubes]);
  const [currentColor] = useStore((state) => [state.color]);
  const [hover, setHover] = useState(null);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
    ...props,
  }));

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHover(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={(e) => {
        setHover(null);
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray='material'
          key={index}
          color={hover === index ? 'white' : currentColor}
          opacity={0.7}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach='geometry' />
    </mesh>
  );
}
