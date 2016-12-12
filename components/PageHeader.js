import React from 'react';
import classNames from 'classnames';

export default ({ variant, headline, textline, children }) => {
  const className = classNames({
    'page-header': true,
    'page-header--error-404': (variant === 'error-404'),
    'page-header--3d-presentation': (variant === '3d-presentation')
  });

  return (
    <header className={className}>
      <div className="inner">
        <h1>{headline}</h1>
        {textline && <h2>{textline}</h2>}
        {children}
      </div>
    </header>
  );
};
