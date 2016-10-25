import React, { PropTypes } from 'react';
import { Link } from 'react-scroll';
import _ from 'lodash';

const TermsAndLegalNavItem = ({ title }, { topBarHeight }) => {
  const slug = _.kebabCase(title);

  return (
    <li>
      <Link
        to={slug}
        smooth={true}
        duration={500}
        offset={-topBarHeight}
      >
        {title}
      </Link>
    </li>
  );
};

TermsAndLegalNavItem.contextTypes = {
  topBarHeight: PropTypes.number
};

export default TermsAndLegalNavItem;
