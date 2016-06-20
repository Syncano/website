import React from 'react';

export default ({ headline, textline, children, image }) => {
  return (
    <div className="hero">
      <div className="inner">
        <div className="hero__text">
          <h1>{headline}</h1>
          <h2>{textline}</h2>
          {children}
        </div>
        <div className="hero__image">
          {image}
        </div>
      </div>
    </div>
  );
};
