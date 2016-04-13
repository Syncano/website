import React from 'react';

export default ({headline, textlineHTML, children}) => (
  <header className="page-header">
    <div className="inner">
      <h2>{headline}</h2>
      <p dangerouslySetInnerHTML={{__html: textlineHTML}}></p>
      {children}
    </div>
  </header>
);
