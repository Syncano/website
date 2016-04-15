import React from 'react';

export default ({ className }) => {
  const getStatusImg = () => {
    let statusImg = '';
    const status = 'ok';

    if (status === 'ok' || status === 'error') {
      statusImg = (
        <img
          className={className}
          src={require(`./images/status-${status}.svg`)}
          alt={`status ${status}`}
        />
      );
    }

    return statusImg;
  };

  return getStatusImg();
};
