import React, { PropTypes } from 'react';

const LoggedOutContent = ({ children }, { isUserLoggedIn }) => {
  // has to be false, not null
  if (isUserLoggedIn === false) {
    return children;
  }

  return null;
}

LoggedOutContent.contextTypes = {
  isUserLoggedIn: PropTypes.bool
};

export default LoggedOutContent;
