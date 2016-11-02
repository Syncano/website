import React, { PropTypes } from 'react';
import { Link } from 'react-scroll';
import _ from 'lodash';

const TermsAndLegalNavItem = ({ title }, { topBarHeight, router, location }) => {
  const slug = _.kebabCase(title);
  const setUrlHash = (to) => {
    router.replace({
      ...location,
      hash: `#${to}`
    });
  };

  return (
    <li>
      <Link
        activeClass="active"
        to={slug}
        smooth={true}
        duration={500}
        offset={-topBarHeight}
        spy={true}
        onSetActive={setUrlHash}
      >
        {title}
      </Link>
    </li>
  );
};

TermsAndLegalNavItem.contextTypes = {
  topBarHeight: PropTypes.number,
  router: PropTypes.object,
  location: PropTypes.object
};

export default TermsAndLegalNavItem;
