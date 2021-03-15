import './App.css';
import IntroMessage from './IntroMessage';
import React, { Fragment, useState } from 'react';

export default function App() {
  const [clickHere, setClickHere] = useState(true);

  return (
    <Fragment>
      {clickHere ? (
        <div>
          <h1
            className='click-here stars-cursor'
            onClick={() => setClickHere(false)}
          >
            click here to begin...
          </h1>
          <p
            className='click-here-subhead stars-cursor'
            onClick={() => setClickHere(false)}
          >
            (and turn your sound on)
          </p>
        </div>
      ) : (
        <IntroMessage />
      )}
    </Fragment>
  );
}
