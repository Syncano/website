import React from 'react';
import classNames from 'classnames';

export default ({ theme, headline, textline, children }) => {
  const textWithBackgroundClassName = classNames({
    'text-with-background': true,
    'text-with-background--image1': (theme === 'image1'),
    'text-with-background--nik': (theme === 'nik')
  });

  return (
    <div className={textWithBackgroundClassName}>
      <div className="inner">
        <div className="text-with-background__text">
          <h2>{headline}</h2>
          <p>{textline}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
