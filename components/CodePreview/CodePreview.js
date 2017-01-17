import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

export default class CodePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  };

  showTab = (index) => {
    this.setState({ activeTab: index });
  };

  renderNavItem = (child, index) => {
    const { title } = child.props;
    const { activeTab } = this.state;
    const isActive = index ? (activeTab === index) : true;

    return (
      <li
        key={_.kebabCase(title)}
        onClick={() => this.showTab(index)}
        className={isActive ? 'is-active' : ''}
      >
        {title}
      </li>
    );
  };

  renderNavItems = (children) => {
    if (!_.isArray(children)) {
      return this.renderNavItem(children);
    }

    return children.map(this.renderNavItem);
  }

  renderContentItem = (child, index) => {
    const { activeTab } = this.state;
    const isActive = index ? (activeTab === index) : true;

    return (
      <div key={index}>
        {React.cloneElement(child, { isActive: isActive })}
      </div>
    );
  };

  renderContent(children) {
    if (!_.isArray(children)) {
      return this.renderContentItem(children);
    }

    return children.map(this.renderContentItem);
  };

  render() {
    const { variant, children } = this.props;
    const codePreviewClassName = classNames({
      'code-preview': true,
      'code-preview--no-bottom-radius': (variant === 'no-bottom-radius')
    });

    return (
      <div className={codePreviewClassName}>
        <nav className="code-preview__nav">
          <ul>
            {this.renderNavItems(children)}
          </ul>
        </nav>
        <div className="code-preview__content">
          {this.renderContent(children)}
        </div>
      </div>
    );
  };
};
