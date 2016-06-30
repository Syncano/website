import React, { Component } from 'react';

class NotLandingElement extends Component {
  render() {
    const { tagName, children } = this.props;
    const { isLandingPage } = this.context;
    const TagName = tagName || 'div';

    if (isLandingPage) {
      return null;
    }

    return (
      <TagName {...this.props}>
        {children}
      </TagName>
    );
  }
};

NotLandingElement.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default NotLandingElement;
