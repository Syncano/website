import React from 'react';
import _ from 'lodash';
import classNames  from 'classnames';

class CodePreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  };

  static childContextTypes = {
    codePreview: React.PropTypes.object
  };

  getChildContext = () => {
    return {
      codePreview: {
        activeTab: this.state.activeTab
      }
    };
  };

  showTab = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { variant, children } = this.props;
    const { activeTab } = this.state;

    const codePreviewClassName = classNames({
      'code-preview': true,
      'code-preview--no-bottom-radius': (variant == 'no-bottom-radius')
    });

    return (
      <div className="code-preview-container">
        <div className={codePreviewClassName}>
          <nav className="code-preview__nav">
            <ul>
              {children.map((child, index) => {
                const { title } = child.props;

                return (
                  <li
                    key={_.kebabCase(title)}
                    onClick={() => this.showTab(index)}
                    className={activeTab == index ? 'is-active' : ''}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="code-preview__content">
            {children.map((child, index) => {
              const { title } = child.props;

              return (
                <div key={index}>
                  {React.cloneElement(child, { isActive: (activeTab == index) })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
};

export default CodePreview;
