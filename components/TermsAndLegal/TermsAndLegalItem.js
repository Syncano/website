import React from 'react';
import _ from 'lodash';
import { Element } from 'react-scroll';

export default ({ title, children }) => {
  const slug = _.kebabCase(title);

  return (
    <Element
      key={slug}
      name={slug}
      className="terms-and-legal__page__entry"
    >
      <h3>{title}</h3>
      {children}
    </Element>
  );
};
