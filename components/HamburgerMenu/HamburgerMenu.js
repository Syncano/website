import React from 'react';
import { HamburgerMenuLink } from '../HamburgerMenu';

const HamburgerMenu = (props, { modals }) => {
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
              <span
                className="button button--large"
                onClick={() => modals.openModal('log-in')}
              >
                Log In
              </span>
            </li>
            <li>
              <span
                className="button button--large button--featured"
                onClick={() => modals.openModal('sign-up')}
              >
                Sign Up For Free
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

HamburgerMenu.contextTypes = {
  modals: React.PropTypes.object
};

export default HamburgerMenu;

