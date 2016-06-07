import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

export default class CodePreview extends React.Component {
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

    return (
      <li
        key={_.kebabCase(title)}
        onClick={() => this.showTab(index)}
        className={activeTab === index ? 'is-active' : ''}
      >
        {title}
      </li>
    );
  };

  renderContentItem = (child, index) => {
    const { title } = child.props;
    const { activeTab } = this.state;

    return (
      <div key={index}>
        {React.cloneElement(child, { isActive: (activeTab === index) })}
      </div>
    );
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
            {children.map(this.renderNavItem)}
          </ul>
        </nav>
        <div className="code-preview__content">
          {children.map(this.renderContentItem)}
        </div>
      </div>
    );
  };
};
