import React from 'react';
import _ from 'lodash';

export default ({ title, children }) => {
  const slug = _.kebabCase(title);

  return (
    <div
      key={slug}
      className="terms-and-legal__page__entry"
      id={slug}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};
