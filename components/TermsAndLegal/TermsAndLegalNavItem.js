import React from 'react';
import _ from 'lodash';
import { Link } from 'react-scroll';

export default ({ title }) => {
  const slug = _.kebabCase(title);

  return (
    <li>
      <Link
        to={slug}
        smooth={true}
        duration={500}
        offset={-114}
      >
        {title}
      </Link>
    </li>
  );
};
