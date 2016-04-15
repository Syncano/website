import React from 'react';
import classNames  from 'classnames';
import StatusImage from '../StatusImage';

export default ({ variant, showStatusImage, headline, textlineHTML, children }) => {
  const pageHeaderClass = classNames({
    'page-header': true,
    'page-header--error': (variant == 'error')
  });

  return (
    <header className={pageHeaderClass}>
      <div className="inner">
        {showStatusImage ? <StatusImage className="page-header__status" /> : ''}
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
        {children}
      </div>
    </header>
  );
};
