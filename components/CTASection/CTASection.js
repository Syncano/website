import React from 'react';
import classNames  from 'classnames';

export default ({ variant, theme, children }) => {
  const className = classNames({
    'cta-section': true,
    'cta-section--small-button-only': (variant === 'small-button-only'),
    'cta-section--gray': (theme === 'gray')
  });

  return (
    <div className={className}>
      <div className="inner">
        {children}
      </div>
    </div>
  );
};
