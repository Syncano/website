import React, { PropTypes } from 'react';
import { Link as ReactRouterLink } from 'react-router';

const Link = (props, { isLandingPage }) => {
  const { tagName, children } = props;

  if (isLandingPage) {
    return (
      <span {...props}>
        {children}
      </span>
    );
  }

  if (tagName) {
    const TagName = tagName;

    return (
      <TagName {...props}>
        {children}
      </TagName>
    )
  }

  return (
    <ReactRouterLink {...props}>
      {children}
    </ReactRouterLink>
  );
};

Link.contextTypes = {
  isLandingPage: PropTypes.bool
};

export default Link;
