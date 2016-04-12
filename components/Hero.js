import React from 'react';
import classNames  from 'classnames';

export default ({variant, headline, textline, children}) => {
  const heroClass = classNames({
    'hero': true,
    'hero--home': (variant == 'home')
  });

  return (
    <div className={heroClass}>
      <div className="inner">
        <h2>{headline}</h2>
        <p>{textline}</p>
        {children}
      </div>
    </div>
  );
};
