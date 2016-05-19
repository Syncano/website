import React from 'react';

export default ({ iconSrc, headline, text }) => {
  return (
    <div className="circle-icon-columns__columns__column">
      <img
        src={iconSrc}
        alt={headline}
      />
      <h3>{headline}</h3>
      <p>{text}</p>
    </div>
  );
};
