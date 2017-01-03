import React from 'react';

const Check = ({ is = true }) => {
  let src = require('./images/check.svg');
  let alt = 'check';

  if (is === false) {
    src = require('./images/cross.svg');
    alt = 'cross';
  }

  return (
    <div className="check">
      <img
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Check;
