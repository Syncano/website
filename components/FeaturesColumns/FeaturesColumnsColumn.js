import React from 'react';

export default ({ iconSrc, headline, text }) => {
  return (
    <div className="features-columns__columns__column">
      <div className="features-columns__columns__column__icon">
        <img
          src={iconSrc} 
          alt={headline}
        />
      </div>
      <h3>{headline}</h3>
      <p>{text}</p>
    </div>
  );
};
