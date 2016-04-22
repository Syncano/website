import React from 'react';
import classNames  from 'classnames';
import HamburgerMenu from './HamburgerMenu';
import TopBar from './TopBar';

export default React.createClass({
  getInitialState() {
    return {
      hasHamburgerMenuVisible: false
    }
  },

  toggleHamburgerMenu() {
    const { hasHamburgerMenuVisible } = this.state;

    this.setState({
      hasHamburgerMenuVisible: !hasHamburgerMenuVisible
    });
  },

  getSiteClass() {
    const { hasHamburgerMenuVisible } = this.props;

    return classNames({
      'site': true,
      'site--has-hamburger-menu-visible': (hasHamburgerMenuVisible == true)
    });
  },

  render() {
    return (
      <div className={this.getSiteClass()}>
        <TopBar />
        <HamburgerMenu />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});
