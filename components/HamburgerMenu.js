import React from 'react';
import { Link } from 'react-router';

export default class HamburgerMenu extends React.Component {
  static contextTypes = {
    hamburgerMenu: React.PropTypes.object
  }

  render() {
    const { hamburgerMenu } = this.context;

    const HamburgerMenuLink = (props) => {
      return (
        <Link
          {...props}
          onClick={hamburgerMenu.toggle}
        />
      );
    };

    return (
      <nav className="hamburger-menu">
        <div className="inner">
          <div className="hamburger-menu__menu">
            <ul>
              <li>
                <HamburgerMenuLink
                  to="/features/"
                  activeClassName="is-active"
                >
                  Features
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  to="/pricing/"
                  activeClassName="is-active"
                >
                  Pricing
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  to="/docs/"
                  activeClassName="is-active"
                >
                  Docs
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  to="/blog/"
                  activeClassName="is-active"
                >
                  Blog
                </HamburgerMenuLink>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu__buttons">
            <ul>
              <li>
                <HamburgerMenuLink
                  to="/blog/"
                  className="button button--large"
                  activeClassName="is-active"
                >
                  Log In
                </HamburgerMenuLink>
              </li>
              <li>
                <HamburgerMenuLink
                  to="/blog/"
                  className="button button--large button--featured"
                  activeClassName="is-active"
                >
                  Sign Up For Free
                </HamburgerMenuLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
