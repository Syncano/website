import React from 'react';
import CounterBoxesBox from './CounterBoxesBox';

export default () => {
  return (
    <div className="counter-boxes">
      <div className="inner">
        <div className="counter-boxes__boxes">
          <CounterBoxesBox
            theme="azure"
            headline="50,000"
            textline="Developers use Syncano"
          />
          <CounterBoxesBox
            theme="purple"
            headline="29 Million"
            textline="Monthly API requests"
          />
          <CounterBoxesBox
            theme="silver"
            headline="3 Million"
            textline="Monthly Script seconds"
          />
        </div>
      </div>
    </div>
  );
};
