import React from 'react';

export default ({ className, alt, indicator = 'loading' }) => {
  return (
    <img
      className={className}
      src={require(`./images/status-${indicator}.svg`)}
      alt={alt}
    />
  );
};
