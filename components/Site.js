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
    const { hasHamburgerMenuVisible } = this.state;

    return classNames({
      'site': true,
      'site--has-hamburger-menu-visible': (hasHamburgerMenuVisible == true)
    });
  },

  render() {
    const { hasHamburgerMenuVisible } = this.state;
    
    return (
      <div className={this.getSiteClass()}>
        <TopBar hasHamburgerMenuVisible={hasHamburgerMenuVisible} toggleHamburgerMenu={this.toggleHamburgerMenu} />
        <HamburgerMenu toggleHamburgerMenu={this.toggleHamburgerMenu} />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});
