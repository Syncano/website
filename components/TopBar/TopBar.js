import React from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';
import { HamburgerMenu, HamburgerMenuHOC } from '../HamburgerMenu';

const TopBar = (props, { hamburgerMenu, modals }) => {
  return (
    <Headroom
      disableInlineStyles
      pinStart={1}
    >
      <div className="inner">
        <div className="top-bar__logo">
          <h1>
            <Link
              to="/"
              onClick={hamburgerMenu.close}
            >
              <img
                src={require('./images/logo.svg')}
                alt="Syncano Logo"
              />
              <img
                src={require('./images/logo-white.svg')}
                alt="Syncano Logo"
                className="white"
              />
            </Link>
          </h1>
        </div>
        <nav className="top-bar__nav">
          <div
            className="top-bar__nav__hamburger"
            onClick={hamburgerMenu.toggle}
          >
            <img
              src={require('./images/hamburger.svg')}
              alt="hamburger icon"
            />
            <img
              src={require('./images/close.svg')}
              alt="hamburger icon"
              className="close"
            />
          </div>
          <div className="top-bar__nav__menu">
            <ul>
              <li>
                <Link
                  to="/features/"
                  className="button button--noborder"
                  activeClassName="is-active"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing/"
                  className="button button--noborder"
                  activeClassName="is-active"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/"
                  className="button button--noborder"
                  activeClassName="is-active"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span
                  className="button button--noborder"
                  onClick={modals.openLogInModal}
                >
                  Log In
                </span>
              </li>
              <li>
                <span
                  className="button button--filled"
                  onClick={modals.openSignUpModal}
                >
                  Sign Up For Free
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <HamburgerMenu />
    </Headroom>
  );
};

TopBar.contextTypes = {
  hamburgerMenu: React.PropTypes.object,
  modals: React.PropTypes.object
};

export default HamburgerMenuHOC(TopBar);
