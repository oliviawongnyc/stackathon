import React from 'react';
import { useStore } from './useStore';
import Cube from './Cube';

export default function Cubes() {
  const [cubes, addCube, removeCube] = useStore((state) => [
    state.cubes,
    state.addCube,
    state.removeCube,
  ]);

  return cubes.map((cube) => {
    return (
      <Cube
        key={cube.key}
        color={cube.color}
        position={cube.pos}
        addCube={addCube}
        removeCube={removeCube}
      />
    );
  });
}
