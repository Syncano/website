import React from 'react';
import { Link } from 'react-router';
import Headroom from 'react-headroom';
import { HamburgerMenuHOC, HamburgerMenu } from '../HamburgerMenu';
import LandingSpanLink from '../LandingSpanLink';
import NotLandingElement from '../NotLandingElement';

const TopBar = (props, { hamburgerMenu, modals, isLandingPage }) => {
  return (
    <Headroom disableInlineStyles>
      <div className="inner">
        <div className="top-bar__logo">
          <LandingSpanLink
            to="/"
            onClick={hamburgerMenu.close}
          >
            <img
              src={require('./images/logo.svg')}
              alt="Syncano Logo"
            />
            <img
              className="white"
              src={require('./images/logo-white.svg')}
              alt="Syncano Logo"
            />
          </LandingSpanLink>
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
              className="close"
              src={require('./images/close.svg')}
              alt="hamburger icon"
            />
          </div>
          <div className="top-bar__nav__menu">
            <ul>
              <NotLandingElement tagName="li">
                <Link
                  className="button button--noborder"
                  activeClassName="is-active"
                  to="/features/"
                >
                  Features
                </Link>
              </NotLandingElement>
              <NotLandingElement tagName="li">
                <Link
                  className="button button--noborder"
                  activeClassName="is-active"
                  to="/pricing/"
                >
                  Pricing
                </Link>
              </NotLandingElement>
              <NotLandingElement tagName="li">
                <a
                  className="button button--noborder"
                  href="http://docs.syncano.io/"
                  target="_blank"
                >
                  Docs
                </a>
              </NotLandingElement>
              <NotLandingElement tagName="li">
                <Link
                  className="button button--noborder"
                  activeClassName="is-active"
                  to="/help/"
                >
                  Help
                </Link>
              </NotLandingElement>
              <NotLandingElement tagName="li">
                <span
                  className="button button--noborder"
                  onClick={modals.logIn.open}
                >
                  Log In
                </span>
              </NotLandingElement>
              <li>
                <span
                  className="button top-bar__nav__menu__cta"
                  onClick={modals.signUp.open}
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
  modals: React.PropTypes.object,
  isLandingPage: React.PropTypes.bool
};

export default HamburgerMenuHOC(TopBar);
