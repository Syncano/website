import React from 'react';
import classNames  from 'classnames';

export default ({ variant, headline, textlineHTML, children }) => {
  const pageHeaderClass = classNames({
    'page-header': true,
    'page-header--error': (variant == 'error')
  });

  return (
    <header className={pageHeaderClass}>
      <div className="inner">
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
        {children}
      </div>
    </header>
  );
};
