import React from 'react';
import { Link } from 'react-router';

const LandingSpanLink = ({ className, children }, { isLandingPage }) => {
  if (isLandingPage) {
    return (
      <span className={className}>
        {children}
      </span>
    );
  }

  return (
    <Link {...this.props}>
      {children}
    </Link>
  );
};

LandingSpanLink.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default LandingSpanLink;
