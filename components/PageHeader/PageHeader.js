import React from 'react';
import classNames  from 'classnames';

export default ({ variant, status, headline, textlineHTML, children }) => {
  const pageHeaderClass = classNames({
    'page-header': true,
    'page-header--error': (variant == 'error')
  });

  if (status) {
    if (status == 'ok') {
      const statusImg = {
        <img
          className="page-header__status"
          src={require('./images/status-ok.svg')}
          alt="status ok"
        />
      };
    }

    if (status == 'error') {
      const statusImg = {
        <img
          className="page-header__status"
          src={require('./images/status-error.svg')}
          alt="status error"
        />
      };
    }
  } else {
    const statusImg = '';
  }

  return (
    <header className={pageHeaderClass}>
      <div className="inner">
        {statusImg}
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
        {children}
      </div>
    </header>
  );
};
