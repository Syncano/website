import React from 'react';
import classNames from 'classnames';
import StatusImage from './';

export default ({ variant, headline, textline, children }) => {
  const pageHeaderClassName = classNames({
    'page-header': true,
    'page-header--large-headline': (variant == 'large-headline')
  });

  return (
    <header className={pageHeaderClassName}>
      <div className="inner">
        <StatusImage className="page-header__status" />
        <h2>{headline}</h2>
        <p>{textline}</p>
        {children}
      </div>
    </header>
  );
};
