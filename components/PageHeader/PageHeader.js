import React from 'react';
import classNames  from 'classnames';

export default ({ variant, status, headline, textlineHTML, children }) => {
  const pageHeaderClass = classNames({
    'page-header': true,
    'page-header--error': (variant == 'error')
  });

  let statusImg = '';
  if (status) {
    statusImg = (status == 'ok') ? <img className="page-header__status" src={require('./images/status-ok.svg')} alt="status ok" /> : <img className="page-header__status" src={require('./images/status-error.svg')} alt="status error" />;
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
