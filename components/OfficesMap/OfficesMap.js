import React from 'react';

export default () => {
  return (
    <div className="offices-map">
      <div className="offices-map__map">
        <img
          src={require('./images/map.svg')}
          alt="Syncano Offices Map"
        />
      </div>
    </div>
  );
};
