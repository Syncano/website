import React from 'react';
import classNames from 'classnames';

export default ({ variant, theme, image, headline, headlineVariant, textline, children }) => {
  const className = classNames({
    'text-with-image': true,
    'text-with-image--customer': (variant === 'customer'),
    'text-with-image--image-right': (variant === 'image-right'),
    'text-with-image--gray': (theme === 'gray'),
    'text-with-image--purple': (theme === 'purple'),
    'text-with-image--cyan': (theme === 'cyan'),
    'text-with-image--headline-mobile-center': (headlineVariant === 'mobile-center')
  });

  return (
    <div className={className}>
      <div className="inner">
        <div className="text-with-image__image">
          <div className="text-with-image__image__inner">
            {image}
          </div>
        </div>
        <div className="text-with-image__text">
          <h2>{headline}</h2>
          {textline && <p>{textline}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};
