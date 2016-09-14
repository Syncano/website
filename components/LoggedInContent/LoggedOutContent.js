import React, { PropTypes } from 'react';

const LoggedOutContent = ({ children }, { isUserLoggedIn }) => {
  if (isUserLoggedIn) {
    return null;
  }

  return children;
}

LoggedOutContent.contextTypes = {
  isUserLoggedIn: PropTypes.bool
};

export default LoggedOutContent;
