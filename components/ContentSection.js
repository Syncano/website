import React from 'react';
import classNames from 'classnames';

const ContentSection = ({ align, headline, children }) => {
  const className = classNames({
    'content-section': true,
    'content-section--center': (align === 'center')
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
