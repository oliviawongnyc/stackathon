import './App.css';
import React, { useState, memo } from 'react';
import { useBox } from '@react-three/cannon';

function Cube({ position, color, addCube, removeCube }) {
  const [hover, setHover] = useState(null);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
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
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        console.log('x, y, z -->', x, y, z);
        if (clickedFace === 0) {
          e.altKey ? removeCube(x, y, z) : addCube(x + 1, y, z);
          return;
        }
        if (clickedFace === 1) {
          e.altKey ? removeCube(x, y, z) : addCube(x - 1, y, z);
          return;
        }
        if (clickedFace === 2) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y + 1, z);
          return;
        }
        if (clickedFace === 3) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y - 1, z);
          return;
        }
        if (clickedFace === 4) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z + 1);
          return;
        }
        if (clickedFace === 5) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z - 1);
          return;
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray='material'
          key={index}
          color={hover === index ? 'white' : color}
          opacity={0.5}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach='geometry' />
    </mesh>
  );
}

function equalProps(prevProps, nextProps) {
  const equalPosition =
    prevProps.position.x === nextProps.position.x &&
    prevProps.position.y === nextProps.position.y &&
    prevProps.position.z === nextProps.position.z;

  return equalPosition && prevProps.color === nextProps.color;
}

export default memo(Cube, equalProps);
