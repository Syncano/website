import React from 'react';
import classNames  from 'classnames';

export default ({ variant, overHeadlineContent, headline, textlineHTML, children }) => {
  const pageHeaderClassName = classNames({
    'page-header': true,
    'page-header--large-headline': (variant == 'large-headline')
  });

  return (
    <header className={pageHeaderClassName}>
      <div className="inner">
      {overHeadlineContent}
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
        {children}
      </div>
    </header>
  );
};
