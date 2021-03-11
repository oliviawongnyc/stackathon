import './App.css';
import React, { Fragment } from 'react';
import { Stars, Sky, OrbitControls } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
// import background from './img/tokyo.jpg';

export default function EntryBackground(props) {
  const { night, day } = props;

  return (
    <Fragment>
      {day ? (
        <Canvas>
          <OrbitControls />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
        </Canvas>
      ) : (
        ''
      )}
      {night ? (
        <div className='night'>
          <Canvas>
            <OrbitControls />
            <Stars />
          </Canvas>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
}
