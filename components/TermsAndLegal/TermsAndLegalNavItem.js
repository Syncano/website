import React from 'react';
import _ from 'lodash';

export default ({ title }) => {
  const slug = _.kebabCase(title);

  return (
    <li>
      <a href={`#${slug}`}>
        {title}
      </a>
    </li>
  );
};
