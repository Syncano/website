import React from 'react';

const HideOnLandingPage = (props, { isLandingPage }) => {
  const { tagName = 'div', children } = props;
  const TagName = tagName;

  if (isLandingPage) {
    return null;
  }

  return (
    <TagName {...props}>
      {children}
    </TagName>
  );
};

HideOnLandingPage.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default HideOnLandingPage;
