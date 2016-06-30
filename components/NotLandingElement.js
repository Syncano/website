import React from 'react';

const NotLandingElement = ({ tagName = 'div' }, { isLandingPage }) => {
  const TagName = tagName;

  if (isLandingPage) {
    return null;
  }

  return (
    <TagName {...this.props}>
      {children}
    </TagName>
  );
};

NotLandingElement.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default NotLandingElement;
