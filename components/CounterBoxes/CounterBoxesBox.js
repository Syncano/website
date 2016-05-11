import React from 'react';
import classNames  from 'classnames';

export default ({ theme, headline, textline }) => {
  const className = classNames({
    'counter-boxes__box': true,
    'counter-boxes__box--azure': (theme == 'azure'),
    'counter-boxes__box--purple': (theme == 'purple'),
    'counter-boxes__box--silver': (theme == 'silver')
  });

  return (
    <div className={className}>
      <h4 className="counter-boxes__box__headline">{headline}</h4>
      <p className="counter-boxes__box__textline">{textline}</p>
    </div>
  );
};
