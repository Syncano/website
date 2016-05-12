import React from 'react';

export default ({ className, alt, indicator }) => {
  return (
    <img
      className={className}
      src={require(`./images/status-${indicator}.svg`)}
      alt={alt}
    />
  );
};
