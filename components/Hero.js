import React from 'react';
import classNames from 'classnames';

export default ({ variant, headline, textline, children, image }) => {
  const className = classNames({
    'hero': true,
    'hero--homepage': (variant === 'homepage')
  });

  return (
    <div className={className}>
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
