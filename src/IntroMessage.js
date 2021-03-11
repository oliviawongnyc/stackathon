import './App.css';
import React, { Fragment, useState } from 'react';
import EntryBackground from './EntryBackground';
import useSound from 'use-sound';
import birds from './sounds/birds.mp3';
import crickets from './sounds/crickets.mp3';
import arrow from './images/arrow2edited.png';

export default function App() {
  const [night, setNight] = useState(false);
  const [day, setDay] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [playBirds, { stop }] = useSound(birds);
  const [playCrickets, { pause }] = useSound(crickets);

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
        <div>
          <img
            className='back-arrow'
            src={arrow}
            alt='back'
            onClick={handleBack}
          />
        </div>
      )}
      <EntryBackground day={day} night={night} />
    </Fragment>
  );
}
