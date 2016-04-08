import React from 'react';
import classNames  from 'classnames';

export default ({children}) => {
  return (
    <div className="cta-section">
      <div className="inner">
        {children}
      </div>
    </div>
  );
}
