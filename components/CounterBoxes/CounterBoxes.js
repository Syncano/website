import React from 'react';
import CounterBoxesBox from './CounterBoxesBox';

export default () => {
  return (
    <div className="counter-boxes">
      <div className="inner">
        <div className="counter-boxes__boxes">
          <CounterBoxesBox
            theme="azure"
            headline="20 000+"
            textline="Developers use Syncano"
          />
          <CounterBoxesBox
            theme="purple"
            headline="2 000 000"
            textline="Monthly API requests"
          />
          <CounterBoxesBox
            theme="silver"
            headline="200 000 000"
            textline="Monthly script seconds"
          />
        </div>
      </div>
    </div>
  );
};
