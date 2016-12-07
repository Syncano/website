import React from 'react';

export default ({ headline, textline, children, image, className }) => {
  return (
    <div className={`hero ${className}`}>
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
