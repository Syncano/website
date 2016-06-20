import React from 'react';
import classNames from 'classnames';

export default ({ variant, children }) => {
  const className = classNames({
    'contact-form-section': true,
    'contact-form-section--support-form': (variant === 'support-form')
  });

  return (
    <div className={className}>
      <div className="inner">
        <div className="contact-form-section__box">
          {children}
        </div>
      </div>
    </div>
  );
};
