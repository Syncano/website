import React from 'react';

export default ({ className, indicator = 'loading', alt }) => {
  return (
    <img
      className={className}
      src={require(`./images/status-${indicator}.svg`)}
      alt={`status ${alt}`}
    />
  );
};
