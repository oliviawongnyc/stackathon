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
import soundOnWhite from './images/largesoundiconedited.png';
import soundOffWhite from './images/largemuteiconedited.png';
import soundOnBlue from './images/bluelargesoundiconedited.png';
import soundOffBlue from './images/bluelargemutediconedited.png';

export default function IntroMessage() {
  const [night, setNight] = useState(false);
  const [day, setDay] = useState(false);
  const [soundNight, setSoundNight] = useState(true);
  const [soundDay, setSoundDay] = useState(true);

  console.log('soundDay -->', soundDay);

  const [showIntro, setShowIntro] = useState(true);
  const [playBirds, { stop }] = useSound(birds, {
    loop: true,
    interrupt: true,
  });
  const [playCrickets, { pause }] = useSound(crickets, {
    loop: true,
    interrupt: true,
  });
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

  const handleSoundToggleNight = () => {
    setSoundNight(!soundNight);
    if (soundNight) {
      pause();
    }
    if (!soundNight) {
      playCrickets();
    }
  };

  const handleSoundToggleDay = () => {
    setSoundDay(!soundDay);
    if (soundDay) {
      console.log('in here');
      stop();
    }
    if (!soundDay) {
      playBirds();
    }
  };

  return (
    <Fragment>
      {showIntro ? (
        <div className='intro-container'>
          <h1 className='intro-text'>
            welcome to B L D C T Y. do you prefer {''}
            <span
              className='day-text sun-cursor'
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
              className='night-text moon-cursor'
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
          <span
            className={
              night ? 'remove-instructions-night' : 'remove-instructions-day'
            }
          >
            remove with option + click
          </span>
          <h1 className={night ? 'block-count-night' : 'block-count-day'}>
            b l d c t r: {cubes.length}
          </h1>
          <ColorDropdown night={night} />
          <img
            className={
              night ? 'back-arrow moon-cursor' : 'back-arrow sun-cursor'
            }
            src={night ? arrowWhite : arrowBlue}
            alt='back'
            onClick={handleBack}
          />
          <img
            className={
              night ? 'sound-icon moon-cursor' : 'sound-icon sun-cursor'
            }
            src={
              night
                ? soundNight
                  ? soundOffWhite
                  : soundOnWhite
                : soundDay
                ? soundOffBlue
                : soundOnBlue
            }
            alt='sound-toggle'
            onClick={night ? handleSoundToggleNight : handleSoundToggleDay}
          />
          <Environment day={day} night={night} />
        </Fragment>
      )}
      <EntryBackground day={day} night={night} />
    </Fragment>
  );
}
