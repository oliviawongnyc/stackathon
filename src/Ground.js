import './App.css';
import React from 'react';
import grass from './images/grass.jpg';
import { TextureLoader, RepeatWrapping } from 'three';
import { useStore } from './useStore';

export default function Ground(props) {
  const { night } = props;
  const texture = new TextureLoader().load(grass);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  const [addCube, activeColor] = useStore((state) => [
    state.addCube,
    state.color,
  ]);

  let intensity;

  if (night) {
    intensity = -1;
  } else {
    intensity = 1.5;
  }

  const handleClick = (e) => {
    const [x, y, z] = Object.values(e.point).map((coord) => Math.ceil(coord));
    console.log(`clicked:${x}, ${y}, ${z}`);
    addCube(x, y, z, activeColor);
  };

  return (
    <mesh
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <ambientLight intensity={intensity} />
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' map={texture} />
    </mesh>
  );
}
