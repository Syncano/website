import React from 'react';
import { HamburgerMenuLink } from '../HamburgerMenu';
import NotLandingElement from '../NotLandingElement';

const HamburgerMenu = (props, { modals }) => {
  return (
    <nav className="hamburger-menu">
      <div className="inner">
        <NotLandingElement className="hamburger-menu__menu">
          <ul>
            <li>
              <HamburgerMenuLink
                activeClassName="is-active"
                to="/features/"
              >
                Features
              </HamburgerMenuLink>
            </li>
            <li>
              <HamburgerMenuLink
                activeClassName="is-active"
                to="/pricing/"
              >
                Pricing
              </HamburgerMenuLink>
            </li>
            <li>
              <HamburgerMenuLink
                href="http://docs.syncano.io/"
                target="_blank"
              >
                Docs
              </HamburgerMenuLink>
            </li>
            <li>
              <HamburgerMenuLink
                activeClassName="is-active"
                to="/help/"
              >
                Help
              </HamburgerMenuLink>
            </li>
          </ul>
        </NotLandingElement>
        <div className="hamburger-menu__buttons">
          <ul>
            <NotLandingElement tagName="li">
              <span
                className="button button--large"
                onClick={modals.logIn.open}
              >
                Log In
              </span>
            </NotLandingElement>
            <li>
              <span
                className="button button--large button--featured"
                onClick={modals.signUp.open}
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
