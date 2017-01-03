import React from 'react';
import classNames from 'classnames';

const ContentSection = ({ variant, align, theme, headline, children }) => {
  const className = classNames({
    'content-section': true,
    'content-section--narrow': (variant === 'narrow'),
    'content-section--center': (align === 'center'),
    'content-section--gray': (theme === 'gray'),
  });

  return (
    <div className={className}>
      <div className="inner">
        <h2>{headline}</h2>
        <div className="content-section__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
