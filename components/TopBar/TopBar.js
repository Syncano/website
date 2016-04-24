import React from 'react';
import { Link } from 'react-router';

export default ({ toggleHamburgerMenu }) => {
  return (
    <div className="top-bar">
      <div className="inner">
        <div className="top-bar__logo">
          <h1>
            <Link to="/">
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
            onClick={() => toggleHamburgerMenu()}
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
                <Link
                  to="/login/"
                  className="button button--noborder"
                  activeClassName="is-active"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/help/"
                  className="button button--filled"
                >
                  Sign Up For Free
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
