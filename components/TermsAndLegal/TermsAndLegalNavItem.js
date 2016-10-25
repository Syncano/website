import React from 'react';
import { Link } from 'react-scroll';
import _ from 'lodash';

const TermsAndLegalNavItem = ({ title }) => {
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

export default TermsAndLegalNavItem;
