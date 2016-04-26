import React from 'react';
import classNames  from 'classnames';

export default ({ variant, headline, textline, children }) => {
  const heroClassName = classNames({
    'hero': true,
    'hero--home': (variant == 'home')
  });

  return (
    <div className={heroClassName}>
      <div className="inner">
        <h2>{headline}</h2>
        <p>{textline}</p>
        {children}
      </div>
    </div>
  );
};
