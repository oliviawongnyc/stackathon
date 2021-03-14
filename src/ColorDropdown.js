import React from 'react';
import './App.css';
import redcircle from './images/redcircle.png';
import orangecircle from './images/orangecircle.png';
import yellowcircle from './images/yellowcircle.png';
import greencircle from './images/greencircle.png';
import bluecircle from './images/bluecircle.png';
import purplecircle from './images/purplecircle.png';
import whitecircle from './images/whitecircle.png';
import { useStore } from './useStore';

export default function ColorDropdown() {
  const setColor = useStore((state) => state.setColor);

  return (
    <div className='menu'>
      <img
        id='red'
        src={redcircle}
        alt='red'
        onClick={() => setColor('#F03E3E')}
      />
      <img
        id='orange'
        src={orangecircle}
        alt='orange'
        onClick={() => setColor('#F39B50')}
      />
      <img
        id='yellow'
        src={yellowcircle}
        alt='yellow'
        onClick={() => setColor('#FEEE5E')}
      />
      <img
        id='green'
        src={greencircle}
        alt='green'
        onClick={() => setColor('#A4CF09')}
      />
      <img
        id='blue'
        src={bluecircle}
        alt='blue'
        onClick={() => setColor('#4883D2')}
      />
      <img
        id='purple'
        src={purplecircle}
        alt='purple'
        onClick={() => setColor('#7349A2')}
      />
      <img
        id='white'
        src={whitecircle}
        alt='white'
        onClick={() => setColor('#FFFFFF')}
      />
    </div>
  );
}
