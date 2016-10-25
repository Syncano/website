import React from 'react';
import _ from 'lodash';
import utils from '../../pages/utils'
import { Link } from 'react-scroll';

const TermsAndLegalNavItem = ({ title }) => {
  const slug = _.kebabCase(title);
  const topBarHeigh = utils.getTopBarHeight();

  return (
    <li>
      <Link
        to={slug}
        smooth={true}
        duration={500}
        offset={-topBarHeigh}
      >
        {title}
      </Link>
    </li>
  );
};

export default TermsAndLegalNavItem;
