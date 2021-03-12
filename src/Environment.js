import './App.css';
import React, { useState } from 'react';
import { Physics } from '@react-three/cannon';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { useStore } from './useStore';
import Cube from './Cube';
import Ground from './Ground';

export default function Environment(props) {
  const { night, day } = props;

  const [cubes] = useStore((state) => [state.cubes]);
  console.log('cubes -->', cubes);

  return (
    <>
      {night ? (
        <div className='night'>
          <Canvas>
            <Stars />
            <OrbitControls />
            <ambientLight intensity={0.25} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Physics gravity={[0, -30, 0]}>
              {cubes.map((cube, idx) => (
                <Cube key={idx} position={cube.pos} />
              ))}
            </Physics>
            <Ground position={[0, 0.5, 0]} />
          </Canvas>
        </div>
      ) : (
        <Canvas>
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <OrbitControls />
          <ambientLight intensity={0.25} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Physics gravity={[0, -30, 0]}>
            {cubes.map((cube, idx) => (
              <Cube key={idx} position={cube.pos} />
            ))}
          </Physics>
          <Ground position={[0, 0.5, 0]} />
        </Canvas>
      )}
    </>
  );
}
