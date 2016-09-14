import React, { PropTypes } from 'react';

const LoggedInContent = ({ children }, { isUserLoggedIn }) => {
  if (isUserLoggedIn) {
    return children;
  }

  return null;
}

LoggedInContent.contextTypes = {
  isUserLoggedIn: PropTypes.bool
};

export default LoggedInContent;
