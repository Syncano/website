import React from 'react';
import classNames  from 'classnames';

export default ({ variant, status, headline, textlineHTML, children }) => {
  const pageHeaderClass = classNames({
    'page-header': true,
    'page-header--error': (variant == 'error')
  });

  const getStatusImg = () => {
    let statusImg = '';

    if (status == 'ok') {
      statusImg = <img className="page-header__status" src={require('./images/status-ok.svg')} alt="status ok" />;
    }

    if (status == 'error') {
      statusImg = <img className="page-header__status" src={require('./images/status-error.svg')} alt="status error" />;
    }

    return statusImg;
  };

  return (
    <header className={pageHeaderClass}>
      <div className="inner">
        {getStatusImg()}
        <h2>{headline}</h2>
        <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
        {children}
      </div>
    </header>
  );
};
