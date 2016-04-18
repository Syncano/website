import React from 'react';

export default ({ className }) => {
  const status = 'ok';

  if (status === 'ok' || status === 'warning' || status === 'error') {
    return (
      <img
        className={className}
        src={require(`./images/status-${status}.svg`)}
        alt={`status ${status}`}
      />
    );
  }

  return null;
};
