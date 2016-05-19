import React from 'react';
import classNames  from 'classnames';
import _ from 'lodash';

export default ({ variant, theme, headline, textline, children, image }) => {
  const textWithBottomImageClassName = classNames({
    'text-with-bottom-image': true,
    'text-with-bottom-image--minus-bottom-margin': _.includes(variant, 'minus-bottom-margin'),
    'text-with-bottom-image--no-bottom-padding': _.includes(variant, 'no-bottom-padding'),
    'text-with-bottom-image--gray': (theme == 'gray'),
    'text-with-bottom-image--purple': (theme == 'purple')
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
