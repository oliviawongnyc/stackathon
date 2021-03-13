import './App.css';
import React, { Fragment, useState } from 'react';
import EntryBackground from './EntryBackground';
import Environment from './Environment';
import useSound from 'use-sound';
import birds from './sounds/birds.mp3';
import crickets from './sounds/crickets.mp3';
import arrowWhite from './images/arrow2white.png';
import arrowBlue from './images/arrow2blue.png';
import { useStore } from './useStore';
import ColorDropdown from './ColorDropdown';

export default function App() {
  const [night, setNight] = useState(false);
  const [day, setDay] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [remove, setRemove] = useState(false);
  const [playBirds, { stop }] = useSound(birds);
  const [playCrickets, { pause }] = useSound(crickets);
  const [cubes] = useStore((state) => [state.cubes]);

  const showNight = () => {
    setNight(!night);
  };

  const showDay = () => {
    setDay(!day);
  };

  const handleClickDay = () => {
    setDay(true);
    setShowIntro(false);
  };

  const handleClickNight = () => {
    setNight(true);
    setShowIntro(false);
  };

  const handleBack = () => {
    setShowIntro(true);
    if (setNight) {
      setNight(false);
      pause();
    }
    if (setDay) {
      setDay(false);
      stop();
    }
  };

  const handleClickAddRemove = () => {
    setRemove(!remove);
  };

  return (
    <Fragment>
      {showIntro ? (
        <div className='intro-container'>
          <h1 className='intro-text'>
            welcome to B L D C T Y. do you prefer {''}
            <span
              className='day-text'
              onMouseOver={() => {
                showDay();
                playBirds();
              }}
              onMouseLeave={() => {
                showDay();
                stop();
              }}
              onClick={handleClickDay}
            >
              day
            </span>{' '}
            or {''}
            <span
              className='night-text'
              onMouseOver={() => {
                showNight();
                playCrickets();
              }}
              onMouseLeave={() => {
                showNight();
                pause();
              }}
              onClick={handleClickNight}
            >
              night
            </span>
            ?
          </h1>
        </div>
      ) : (
        <Fragment>
          <h1 className={night ? 'block-count-night' : 'block-count-day'}>
            <span onClick={handleClickAddRemove}>
              {remove ? `a d d / / ` : `r e m o v e  / / `}
            </span>
            b l d c t r: {cubes.length}
          </h1>
          <ColorDropdown />
          <img
            className='back-arrow'
            src={night ? arrowWhite : arrowBlue}
            alt='back'
            onClick={handleBack}
          />
          <Environment day={day} night={night} remove={remove} />
        </Fragment>
      )}
      <EntryBackground day={day} night={night} />
    </Fragment>
  );
}
