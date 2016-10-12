import React, { PropTypes } from 'react';

const HideOnLandingPage = ({ children }, { isLandingPage }) => {
  if (isLandingPage) {
    return null;
  }

  return children;
};

HideOnLandingPage.contextTypes = {
  isLandingPage: PropTypes.bool
};

export default HideOnLandingPage;
