import React from 'react';

export default () => {
  return (
    <div className="travolta">
      <video autoPlay loop>
        <source
          src={require('./videos/travolta.webm')}
          type="video/webm"
        />
        <source
          src={require('./videos/travolta.mp4')}
          type="video/mp4"
        />
        <source
          src={require('./videos/travolta.flv')}
          type="video/flv"
        />
        <source
          src={require('./videos/travolta.ogg')}
          type="video/ogg"
        />
      </video>
    </div>
  );
};
