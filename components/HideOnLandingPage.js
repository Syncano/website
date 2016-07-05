import React from 'react';

const HideOnLandingPage = ({ children }, { isLandingPage }) => {
  if (isLandingPage) {
    return null;
  }

  return children;
};

HideOnLandingPage.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default HideOnLandingPage;
