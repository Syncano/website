import React from 'react';

export default ({ headline, textline, children, image }) => {
  return (
    <div className="hero">
      <div className="inner">
        <div className="hero__text">
          <h2 className="hero__text__headline">
            {headline}
          </h2>
          <p className="hero__text__textline">
            {textline}
          </p>
          {children}
        </div>
        <div className="hero__image">
          {image}
        </div>
      </div>
    </div>
  );
};
