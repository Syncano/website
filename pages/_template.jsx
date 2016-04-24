import React from 'react';
import classNames  from 'classnames';
import { HamburgerMenu, TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';

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

  getTemplateClass() {
    const { hasHamburgerMenuVisible } = this.state;

    return classNames({
      'template': true,
      'template--has-hamburger-menu-visible': (hasHamburgerMenuVisible == true)
    });
  },

  render() {
    const { hasHamburgerMenuVisible } = this.state;
    
    return (
      <div className={this.getTemplateClass()}>
        <TopBar toggleHamburgerMenu={this.toggleHamburgerMenu} />
        <HamburgerMenu toggleHamburgerMenu={this.toggleHamburgerMenu} />
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});
