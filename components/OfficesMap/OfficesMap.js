import React from 'react';

export default () => {
  return (
    <div className="offices-map">
      <div className="offices-map__map">
        <picture>
          <source
            srcSet={`${require('./images/map.png')} 1x, ${require('./images/map@2x.png')} 2x`}
          />
          <img
            src={require('./images/map@2x.png')}
            alt="Syncano Offices Map"
          />
        </picture>
      </div>
    </div>
  );
};
