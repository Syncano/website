import React from 'react';
import classNames from 'classnames';

export default ({ variant, theme, children }) => {
  const className = classNames({
    'side-icon-paragraphs': true,
    'side-icon-paragraphs--top-spacing': (variant === 'top-spacing'),
    'side-icon-paragraphs--blue': (theme === 'blue')
  });

  return (
    <div className={className}>
      <div className="inner">
        <div className="side-icon-paragraphs__paragraphs">
          {children}
        </div>
      </div>
    </div>
  );
};
