import React from 'react';
import classNames  from 'classnames';

export default ({ variant, theme, headline, textline, children, image }) => {
  const textWithBottomImageClassName = classNames({
    'text-with-bottom-image': true,
    'text-with-bottom-image--no-bottom-margin': (variant == 'no-bottom-margin'),
    'text-with-bottom-image--gray': (theme == 'gray'),
  });

  return (
    <div className={textWithBottomImageClassName}>
      <div className="inner inner--text-with-bottom-image">
        <h2>{headline}</h2>
        <p>{textline}</p>
        {children}
      </div>
      <div className="inner">
        {image}
      </div>
    </div>
  );
};
