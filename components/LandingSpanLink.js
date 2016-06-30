import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingSpanLink extends Component {
  render() {
    const { tagName, children } = this.props;
    const { isLandingPage } = this.context;

    if (isLandingPage) {
      return (
        <span {...this.props}>
          {children}
        </span>
      );
    }

    if (tagName) {
      const TagName = tagName;

      return (
        <TagName {...this.props}>
          {children}
        </TagName>
      )
    }

    return (
      <Link {...this.props}>
        {children}
      </Link>
    );
  }
};

LandingSpanLink.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default LandingSpanLink;
