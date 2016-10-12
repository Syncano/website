import React, { PropTypes } from 'react';
import { HamburgerMenuLink } from '../HamburgerMenu';
import HideOnLandingPage from '../HideOnLandingPage';
import { LoggedInContent, LoggedOutContent } from '../LoggedInContent';

const HamburgerMenu = (props, { modals }) => {
  return (
    <nav className="hamburger-menu">
      <div className="inner">
        <HideOnLandingPage>
          <div className="hamburger-menu__menu">
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
                  activeClassName="is-active"
                  to="/customers/"
                >
                  Customers
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
              <li>
                <HamburgerMenuLink href="https://www.syncano.io/blog/">
                  Blog
                </HamburgerMenuLink>
              </li>
            </ul>
          </div>
        </HideOnLandingPage>
        <div className="hamburger-menu__buttons">
          <ul>
            <LoggedOutContent>
              <HideOnLandingPage>
                <li>
                  <span
                    className="button button--large"
                    onClick={modals.logIn.open}
                  >
                    Log In
                  </span>
                </li>
              </HideOnLandingPage>
            </LoggedOutContent>
            <LoggedOutContent>
              <li>
                <span
                  className="button button--large button--featured"
                  onClick={modals.signUp.open}
                >
                  Sign Up For Free
                </span>
              </li>
            </LoggedOutContent>
            <LoggedInContent>
              <li>
                <a
                  className="button button--large button--featured"
                  href={APP_CONFIG.dashboardUrl}
                >
                  Go to Dashboard
                </a>
              </li>
            </LoggedInContent>
          </ul>
        </div>
      </div>
    </nav>
  );
};

HamburgerMenu.contextTypes = {
  modals: PropTypes.object
};

export default HamburgerMenu;
