import React, { Component } from 'react';

class HideOnLandingPage extends Component {
  render() {
    const { tagName = 'div', children } = this.props;
    const { isLandingPage } = this.context;
    const TagName = tagName;

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

HideOnLandingPage.contextTypes = {
  isLandingPage: React.PropTypes.bool
};

export default HideOnLandingPage;
