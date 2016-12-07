import React from 'react';
import CounterBoxesBox from './CounterBoxesBox';

export default () => {
  return (
    <div className="counter-boxes">
      <div className="inner">
        <div className="counter-boxes__boxes">
          <CounterBoxesBox
            theme="silver"
            headline="25"
            textline="Successful startups"
          />
          <CounterBoxesBox
            theme="purple"
            headline="73"
            textline="Countries"
          />
          <CounterBoxesBox
            theme="azure"
            headline="50,000"
            textline="Developers use Syncano"
          />
        </div>
      </div>
    </div>
  );
};
