import './App.css';
import IntroMessage from './IntroMessage';
import React, { Fragment, useState } from 'react';

export default function App() {
  const [clickHere, setClickHere] = useState(true);

  return (
    <Fragment>
      {clickHere ? (
        <div>
          <h1 className='click-here' onClick={() => setClickHere(false)}>
            click here to begin...
          </h1>
          <p className='click-here-subhead'>(and turn on your sound)</p>
        </div>
      ) : (
        <IntroMessage />
      )}
    </Fragment>
  );
}
