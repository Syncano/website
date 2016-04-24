import React from 'react';
import { Link } from 'react-router';

export default ({ toggleHamburgerMenu }) => {
  return (
    <div
      className="hamburger-menu"
      onClick={() => toggleHamburgerMenu()}
    >
      <div className="inner">
        <div className="hamburger-menu__menu">
          <ul>
            <li>
              <Link
                to="/features/"
                activeClassName="is-active"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing/"
                activeClassName="is-active"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/docs/"
                activeClassName="is-active"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                activeClassName="is-active"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu__buttons">
          <ul>
            <li>
              <Link
                to="/blog/"
                className="button"
                activeClassName="is-active"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/blog/"
                className="button button--featured"
                activeClassName="is-active"
              >
                Sign Up For Free
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
