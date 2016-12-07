import React from 'react';
import _ from 'lodash';

export default ({ variant, className, imgSrc, title, href }) => {
  const fullStackVariantClassNames = ['angularjs', 'arduino', 'emberjs', 'javascript', 'python', 'ruby'];

  if (variant === 'full-stack' && !_.includes(fullStackVariantClassNames, className)) {
    return null;
  }

  const mobileVariantClassNames = ['android', 'ios'];

  if (variant === 'mobile' && !_.includes(mobileVariantClassNames, className)) {
    return null;
  }

  return (
    <div className={`platforms-bar__item ${className}`}>
      <a
        href={href}
        target="_blank"
        title={`View our ${title} library`}
      >
        <img
          src={imgSrc}
          alt={title}
        />
      </a>
    </div>
  );
};
