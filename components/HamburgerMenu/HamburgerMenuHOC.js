import React from 'react';
import BodyClassName from 'react-body-classname';
import classNames  from 'classnames';

export default (ComposedComponent) => class extends React.Component {
  static displayName = 'HamburgerMenuHOC';

  constructor(props) {
    super(props);

    this.state = {
      hasHamburgerMenuVisible: false
    };
  };

  static childContextTypes = {
    hamburgerMenu: React.PropTypes.object
  };

  getChildContext = () => {
    return {
      hamburgerMenu: {
        toggle: this.toggleHamburgerMenu,
        close: this.closeHamburgerMenu
      }
    };
  };

  getBodyClassName = (hasHamburgerMenuVisible) => {
    return classNames({
      'has-hamburger-menu-visible': (hasHamburgerMenuVisible)
    });
  };

  toggleHamburgerMenu = () => {
    const { hasHamburgerMenuVisible } = this.state;

    this.setState({ hasHamburgerMenuVisible: !hasHamburgerMenuVisible });
  };

  closeHamburgerMenu = () => {
    this.setState({ hasHamburgerMenuVisible: false });
  };
  
  render() {
    const { hasHamburgerMenuVisible } = this.state;

    return (
      <BodyClassName className={this.getBodyClassName(hasHamburgerMenuVisible)}>
        <ComposedComponent {...this.props} {...this.state} />          
      </BodyClassName>
    );
  };
};
