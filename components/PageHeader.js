import React from 'react';
import classNames from 'classnames';

export default ({ variant, headline, textline, children }) => {
  const pageHeaderClassName = classNames({
    'page-header': true,
    'page-header--error-404': (variant === 'error-404')
  });

  return (
    <header className={pageHeaderClassName}>
      <div className="inner">
        <h1>{headline}</h1>
        {textline && <h2>{textline}</h2>}
        {children}
      </div>
    </header>
  );
};
